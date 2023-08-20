import { createRouter,createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import About from '../views/About.vue';
import SignUp from '../views/SignUp.vue';
import PublicLayout from '../views/Layout.vue';


const routes =[
    // {path: '/', 
    // component:PublicLayout,

        { 
            path: "/", 
            name:'Home' ,
            component: Home 
        },

        {
            path: "/contact",
            name:'Contact',
            component: Contact 
        },

        {
            path: "/about",
            name:'About',
            component: About 
        },

        {
            path: "/sign-up",
            name:'SignUp', 
            component: SignUp 
        },

    
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;