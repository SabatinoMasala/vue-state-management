import {defineStore} from "pinia";
import {mande, defaults} from "mande";

const auth = mande('http://vue-state-management-backend.test/api/auth');
const user = mande('http://vue-state-management-backend.test/api/user');

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            user: null,
            didInit: false,
            authToken: null,
        }
    },
    actions: {
        logout() {
            this.user = null;
            this.setToken(null);
        },
        async init() {
            const token = JSON.parse(localStorage.getItem('token'));
            if (token) {
                await this.setToken(token);
            }
            this.didInit = true;
        },
        async setToken(token) {
            this.authToken = token;
            localStorage.setItem('token', JSON.stringify(token));
            if (token) {
                defaults.headers.Authorization = `Bearer ${token}`;
                try {
                    await this.fetchUser();
                } catch (e) {
                    this.setToken(null);
                }
            } else {
                delete defaults.headers.Authorization;
            }
        },
        async fetchUser() {
            // Fetch details
            const response = await user.get();
            this.user = response;
        },
        async register(name, email, password) {
            try {
                const registrationResponse = await auth.post('/register', {
                    name,
                    email,
                    password
                })
                this.setToken(registrationResponse.token);
                return {
                    success: true,
                }
            } catch (e) {
                return {
                    success: false,
                    body: e.body,
                }
            }
        },
        async login(email, password) {
            try {
                const loginResponse = await auth.post('/token', {
                    email,
                    password
                })
                this.setToken(loginResponse.token);
                return {
                    success: true,
                }
            } catch (e) {
                return {
                    success: false,
                    body: e.body,
                }
            }
        }
    }
})