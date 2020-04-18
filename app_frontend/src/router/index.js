import Vue from 'vue'
import Router from 'vue-router'
import Secure from "../views/Home";
import addProduct from "../views/AddProduct";


Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            redirect: 'secure'
        },
        // {
        //     path: "*",
        //     redirect:'secure'
        // },
        {
            path: "/AddProduct",
            component: addProduct,
        },

        {
            path: "/secure",
            name: "secure",
            component: Secure,
            /*redirect: {
                name: 'dashboard' 
            },
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: '/landing',
                    name: 'landing',
                    component: Landing
                }
            ],*/
        },

    ],
    linkActiveClass: 'active'
})

export default router;