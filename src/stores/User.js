import {defineStore} from 'pinia';
import {mande} from "mande";

const auth = mande('http://vue-state-management-backend.test/api/auth');
const user = mande('http://vue-state-management-backend.test/api/user');

export const useUserStore = defineStore('user', {
    state: () => ({
        token: null,
        user: null,
    }),
    actions: {
        setToken(token) {
            this.token = token;
            this.fetchUser();
        },
        async fetchUser() {
            const response = await user.get({
                headers: {
                    Authorization: `Bearer ${this.token}`,
                }
            });
            this.setUser(response);
        },
        setUser(user) {
            this.user = user;
            localStorage.setItem('token', JSON.stringify(this.token));
        },
        async login(email, password) {
            try {
                const response = await auth.post('token', {
                    email,
                    password,
                });
                this.setToken(response.token);
                return {
                    success: true,
                };
            } catch (e) {
                return {
                    success: false,
                    body: e.body
                }
            }
        },
        async register(name, email, password) {
            try {
                const response = await auth.post('register', {
                    name,
                    email,
                    password,
                });
                this.setToken(response.token);
                return {
                    success: true,
                };
            } catch (e) {
                return {
                    success: false,
                    body: e.body
                }
            }
        },
        logout() {
            this.user = null;
        },
    }
});