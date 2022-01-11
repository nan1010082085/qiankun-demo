import { createApp } from 'vue';
import App from './App';
import { createRouter, createWebHashHistory, routes } from './router';
import store from './store';
import './app.scss';

import { QKRegisterMicroApp } from 'simple-qk';

import packageJson from '../package.json';
// createApp(App, {widgetData: [], widgetSize: {}}).mount('#app');

const app: any = QKRegisterMicroApp(
  {
    version: '3',
    option: {
      history: createWebHashHistory,
      routes,
      name: packageJson.name,
      component: () => import('./components/container'),
      store,
      local: true
    },
    Vue: createApp,
    VueRouter: createRouter,
    render: App
  },
  true
);

app.start();

export const bootstrap = async () => {
  return app.bootstrap()
};
export const mount = async (props: any) => {
  console.log('micro', props);
  return app.mount(props);
};
export const unmount = async () => app.unmount();
export const update = async (props: any) => app.update(props);
