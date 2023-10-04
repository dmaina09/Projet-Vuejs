import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import store from './store'

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem('token');
        if (token) {
            // User is authenticated, proceed to the route
            next();
        } else {
            // User is not authenticated, redirect to login
            next('/login');
        }
    }
    else {
        next();
    }
    // console.log(localStorage.getItem("token"));
})




const axiosInstance = axios.create({
    // withCredentials: true,
    baseURL: "https://apicac.intech.sn/api/v1",
    browserBaseURL: "https://apicac.intech.sn/api/v1"
});
// store vueX
// const store = createStore({
//     state() {
//         return { counter: 0 };
//     }
// })
const app = createApp(App);
app.use(store)
app.config.globalProperties.$axios = { ...axiosInstance }
app.use(router).mount('#app')

