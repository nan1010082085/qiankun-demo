import { createApp } from 'vue';
import App from './App';
import { createRouter, createWebHashHistory, routes } from './router';
import store from './store';
import packageJson from '../package.json';
import { QKRegisterMicroApp } from 'simple-qk';

// const router = createRouter({
//   history: createWebHashHistory('/v3/'),
//   routes
// })

// createApp(App).use(router).mount('#app')

const app = QKRegisterMicroApp(
  {
    version: '3',
    option: {
      history: createWebHashHistory,
      routes,
      name: packageJson.name,
      component: () => import('./components/main'),
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

export const bootstrap = async () => app.bootstrap();
export const mount = async (props: any) => app.render(props);
export const unmount = async () => app.unmount();
export const update = async (props: any) => app.update(props);
