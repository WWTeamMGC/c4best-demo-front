import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const login = () => import("../views/Login")
const routes = [
    {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path:'/main',
        name:'main' ,
        component: ()=>import('../views/Main')
    },
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home')
            }, {
                path: '/user',
                name: 'user',
                component: () => import('../views/User')
            }
        ]
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/register/Register')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
