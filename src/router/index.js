import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import About from '../views/About.vue';
import SignUp from '../views/SignUp.vue';
import PublicLayout from '../views/Layout.vue';
import LogIn from '../views/LogIn.vue';
import ProductDetailsPage from '../views/ProductDetailsPage.vue'
import Account from '../views/Account.vue';
import Products from '../views/Products.vue';
import Cart from '../views/Cart.vue';
import ProductsByCategories from "../views/ProductsByCategories"

const routes = [
    // {path: '/', 
    // component:PublicLayout,

    {
        path: "/",
        name: 'Home',
        component: Home
    },

    {
        path: "/contact",
        name: 'Contact',
        component: Contact
    },

    {
        path: "/about",
        name: 'About',
        component: About,
        meta: {
            requiresAuth: true // Add meta field to indicate protected route
        }

    },

    {
        path: "/sign-up",
        name: 'SignUp',
        component: SignUp
    },
    {
        path: "/login",
        name: 'LogIn',
        component: LogIn

    },
    {
        path: "/product/:slug",
        name: 'ProductDetailsPage',
        component: ProductDetailsPage

    },
    {
        path: "/account",
        name: 'Account',
        component: Account,
        meta: {
            requiresAuth: true // Add meta field to indicate protected route
        }

    },
    {
        path: "/products/",
        name: 'Products',
        component: Products

    },
    {
        path: "/productsbycategories/",
        name: 'ProductsByCategories',
        component: ProductsByCategories

    },

    {
        path: "/cart",
        name: 'Cart',
        component: Cart

    },
]



const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;