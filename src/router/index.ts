import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/first',
    name: 'First',
    component: () => import(/* webpackChunkName: "first" */ '../views/First.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import(/* webpackChunkName: "todo" */ '../views/Todo.vue')
  },{
    path:"/users/:username",
    name:"users",
    component: ()=> import(/*  webpackChunkName: "user" */ '../views/User.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:"hash"
})

export default router
