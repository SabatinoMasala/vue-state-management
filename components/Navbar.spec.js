import Navbar from './Navbar.vue'
import {createTestingPinia} from '@pinia/testing'
import {mount, RouterLinkStub} from '@vue/test-utils'
import {useCartStore} from "@/stores/Cart.js";
import {nextTick} from "vue";
import toastPlugin from "~/pinia/toastPlugin.js";
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
            })],
        },
    })
}

describe('Navbar', () => {
    it('Should render an empty badge', async () => {
        const wrapper = navbar();
        useCartStore().incrementProduct({
            id: 1,
            title: 'Test Product',
            price: 10.0,
        })
        await nextTick();
        expect(wrapper.find('[data-testid=navbar-badge]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=navbar-badge]').text()).toContain('1')
    })
    it('Should render 9+', async () => {
        const wrapper = navbar();
        useCartStore().incrementProduct({
            id: 1,
            title: 'Test Product',
            price: 10.0,
        }, 100)
        await nextTick();
        expect(wrapper.find('[data-testid=navbar-badge]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=navbar-badge]').text()).toContain('9+')
    })
    it('Should render the name of the user', async () => {
        const wrapper = navbar();
        useUserStore().user = {
            id: 1,
            name: 'Sabatino',
            email: 'test@test.test',
        }
        await nextTick();
        expect(wrapper.find('[data-testid=username]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=username]').text()).toBe('Sabatino');
    })
})