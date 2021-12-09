import config from '@/utils/config';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MicroAppRoutes from './routeConfig';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Home')
  },
  ...(MicroAppRoutes as any)
];

const router = new VueRouter({
  mode: config.ROUTE_MODE,
  routes
});

export default router;
