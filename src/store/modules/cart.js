const state = () => ({
    cartItems: [],
    count: 0,
})
const getters = {
    getProductInCart(state) {
        return state.cartItems;
    },
    getCartItemCount(state) {
        return state.cartItems.length;
    },
    getCartTotalPrice(state) {
        let total = 0
        state.cartItems.forEach(item => {
            total += item.product.price * item.quantity;
        })
        return total;
    }

}

const mutations = {
    ADD_PRODUCT(state, { product, quantity }) {
        //ajouter un produit
        let productInCart = state.cartItems.findIndex((item) => item.product._id === product._id)
        console.log(productInCart);
        if (productInCart != -1) {
            console.log(productInCart);

            state.cartItems[productInCart].quantity++;

            return;
        }

        state.cartItems.push({ product, quantity })
    },
    INCREASE_QUANTITY(state, product) {

        let productInCart = state.cartItems.findIndex((item) => item.product._id === product._id)
        console.log(productInCart);
        if (productInCart != -1) {
            console.log(productInCart);

            state.cartItems[productInCart].quantity++;

            return;
        }
    },
    DECREASE_QUANTITY(state, product) {

        let productInCart = state.cartItems.findIndex((item) => item.product._id === product._id)
        console.log(productInCart);
        if (productInCart != -1) {
            console.log(productInCart);

            state.cartItems[productInCart].quantity--;

            return;
        }
    },

    REMOVE_PRODUCT_FROM_CART(state, product) {
        state.cartItems = state.cartItems.filter(item => {
            return item.product._id !== product._id;
        })
    }

}


const actions = {
    addProduct({ commit }, { product, quantity }) {
        commit("ADD_PRODUCT", { product, quantity })
    },
    increaseQuantity({ commit }, product) {
        commit("INCREASE_QUANTITY", product)
    },
    decreaseQuantity({ commit }, product) {
        commit("DECREASE_QUANTITY", product)
    },
    removeProductFromCart({ commit }, product) {
        commit("REMOVE_PRODUCT_FROM_CART", product)
    }
}


export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}