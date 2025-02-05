import {  createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import('../views/Home.vue')
const Feedbacks = () => import('../views/Feedbacks.vue')
const Credentials = () => import('../views/Credentials.vue')

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path:'/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks, 
    meta: {
        hasAuth:true,
    }
  },

  {
    path:'/credentials',
    name: 'Credentials',
    component: Credentials, 
    meta: {
        hasAuth:true,
    }
  }, 
  {
    path: '/:pathMatch(.*)*',
    redirect: {name: 'Home'}
  }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

export  default router

