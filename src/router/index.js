import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const login = () => import("../views/Login")
const routes = [
    {
        path: '/',
        name: '',
        component: login
    },
    {
        path: '/main',
        name: 'main',
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
            },
            {
                path: '/sellpage',
                name: 'sellpage',
                component: () => import('../views/sellerpage/Sellerpage')
            },
            {
                path: '/badmanpage',
                name: 'badmanpage',
                component: () => import('../views/badmanpage/badmanpage')
            }, {
                path: '/badwordpage',
                name: 'badwordpage',
                component: () => import('../views/badwordpage/badwordpage')
            }, {
                path: '/oneIpcountpage',
                name:'oneIPcountpage',
                component:() =>import('../views/oneIpcountpage/oneIpcountpage')
            },
            {
                path: '/oneApicountpage',
                name: 'oneApicountpage',
                component:()=> import('../views/oneApicountpage/oneApicountpage')
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
