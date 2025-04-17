import Navbar from './Navbar.vue';
import {mount, RouterLinkStub} from '@vue/test-utils';
import {nextTick} from 'vue'
import {createTestingPinia} from "@pinia/testing";
import {useCartStore} from "@/stores/Cart.js";
import toastPlugin from "@/plugins/toastPlugin.js";
import {useUserStore} from "@/stores/User.js";

function navbar() {
    return mount(Navbar, {
        global: {
            stubs: {
                RouterLink: RouterLinkStub
            },
            plugins: [createTestingPinia({
                stubActions: false,
                plugins: [toastPlugin]
            })]
        }
    });
}

describe('Navbar', () => {
    it('Should render a correct badge', async () => {
        const wrapper = navbar();
        useCartStore().incrementProduct({
            id: 1,
            title: 'Test product',
            price: 10
        })
        await nextTick();
        expect(wrapper.find('[data-testid=navbar-badge]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=navbar-badge]').text()).toBe('1');
    })
    it('Should render 9+', async () => {
        const wrapper = navbar();
        useCartStore().incrementProduct({
            id: 1,
            title: 'Test product',
            price: 10
        }, 100)
        await nextTick();
        expect(wrapper.find('[data-testid=navbar-badge]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=navbar-badge]').text()).toBe('9+');
    })
    it('Should render the name of the user', async () => {
        const wrapper = navbar();
        useUserStore().user = {
            id: 1,
            name: 'Sabatino',
            email: 'test@test.test'
        }
        await nextTick();
        expect(wrapper.find('[data-testid=username]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=username]').text()).toBe('Sabatino');
    })
})