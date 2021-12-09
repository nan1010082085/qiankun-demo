import { RoutesMicroApp } from '@/@types/app-type';
import { RouteConfig } from 'vue-router';
import MicroApps from '../../public/micro-app.json';

const { routesMicroApps } = MicroApps;

const MicroAppRoutes: RouteConfig = routesMicroApps.map((apps: RoutesMicroApp) => {
  const path: string = apps.name.split('-')[0];
  return {
    path: `/${path}/*`,
    name: apps.name,
    component: () => import('@/components/Container')
  };
});

export default MicroAppRoutes;
