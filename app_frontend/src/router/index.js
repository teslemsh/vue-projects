import Vue from 'vue'
import Router from 'vue-router'
import Secure from "../views/Secure";

/*import Login from "../views/Login";
import Dashboard from "../components/Dashboard";
import MyDugeons from "../components/MyDugeons";
import MyWarriors from "../components/MyWarriors";
import SearchWarrior from "../components/SearchWarrior";
import ModuleSections from "../components/ModuleSections";
import EditSkills from "../components/EditSkills";
import CreateNewDugeons from "../components/CreateNewDugeons";
import Landing from "../components/Landing";
import CloseDugeon from "../components/CloseDugeon";*/


Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [
        /*{
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/",
            redirect: 'dashboard' 
        },
        {
            path: "*",
            redirect:'dashboard' 
        },*/
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
                },
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: Dashboard
                },
                {
                    path: '/my-dugeons',
                    name: 'my-dugeons',
                    component: MyDugeons
                },
                {
                    path: '/edit-skills',
                    name: 'edit-skills',
                    component: EditSkills
                },
                {
                    path: '/my-warriors',
                    name: 'my-warriors',
                    component: MyWarriors
                },
                {
                    path: '/search-warriors',
                    name: 'search-warriors',
                    component: SearchWarrior
                },
                {
                    path: '/finish-mision',
                    name: 'module-sections',
                    component: ModuleSections
                },
                {
                    path: '/create-dugeons',
                    name: 'module-sections',
                    component: ModuleSections
                },
                {
                    path: '/create-new-dugeons',
                    name: 'create-new-dugeons',
                    component: CreateNewDugeons
                },
                {
                    path: '/close-dugeon',
                    name: 'close-dugeon',
                    component: CloseDugeon
                }
            ],*/
        },

    ],
    linkActiveClass: 'active'
})

export default router;