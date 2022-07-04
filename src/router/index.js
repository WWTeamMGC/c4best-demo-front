import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: '',
        component: () => import("../views/Login")
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
            },
            {
                path: '/sellpage',
                name: 'sellpage',
                component: () => import('../views/sellerpage/Sellerpage')
            }, {
                path: '/oneIpcountpage',
                name: 'oneIpcountpage',
                component: () => import('../views/oneIpcountpage/oneIpcountpage')

            }, {
                path: '/badmanpage',
                name: 'badmanpage',
                component: () => import('../views/badmanpage/badmanpage')
            },
            {
                path: '/badwordpage',
                name: 'badwordpage',
                component: () => import('../views/badwordpage/badwordpage')
            }, {
                path: '/oneApicountpage',
                name: 'oneApicountpage',
                component: () => import('../views/oneApicountpage/oneApicountpage')
            },
            {
                path: '/oneIp',
                name: 'oneIp',
                component:() =>import('../views/oneIp/oneIppage')
            },
            {
                path:'/oneApi',
                name:'oneApi',
                component:() =>import('../views/oneApipage/oneApipage')
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
