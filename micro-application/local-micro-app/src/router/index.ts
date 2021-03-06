import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/local-home',
    name: 'localHome',
    component: Home
  },
  {
    path: '/local-about',
    name: 'localAbout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    redirect: '/local-home'
  }
];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

export { createRouter, createWebHashHistory, routes };
