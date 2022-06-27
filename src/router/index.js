import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component:()=>import('../views/Main'),
    children:[
      {
        path:'/home',
        name:'home',
        component:() => import('../views/home')
      },{
        path:'/user',
        name:'user',
        component:() => import('../views/User')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router