import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: any[] = [
  {
    path: 'home',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: 'about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About')
  }
  // {
  //   path: '*',
  //   redirect: '/home'
  // }
];

export { VueRouter, routes };
