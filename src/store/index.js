import { createStore } from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
//store vueX

const store = createStore({
    modules: {
        user,
        cart
    },
})

export default store