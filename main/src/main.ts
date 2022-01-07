import { loadMicroApp } from 'qiankun';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import microApps from '../public/micro-app.json';
import config from './utils/config';
import QK, { QKRegisterApp } from 'simple-qk';
import 'lodash';
const { initGlobalState } = QK;

const prod = process.env.NODE_ENV === 'production';
// 微应用
const { routesMicroApps = [], customMicroApps = [] } = microApps;
// 开发
import proxyJson from '../proxy.dev.json';
// const proxyJson = () => require('../proxy.dev.json');

const app = QKRegisterApp(
  {
    routes: routesMicroApps,
    config: {
      mode: config.ROUTE_MODE,
      env: prod ? 'prod' : 'dev',
      devParam: proxyJson.microApps
    },
    action: {
      beforeLoad: async (app: any) => {
        console.log('before load [CONTAINER]', app.name);
      },
      beforeMount: async (app: any) => {
        console.log('before mount [CONTAINER]', app.name);
      }
    }
  },
  true
);

app.start();

// 手动加载微应用
if (customMicroApps.length) {
  customMicroApps.forEach((microApps: any) => {
    loadMicroApp(microApps);
  });
}

// 初始化全局状态
const actions = initGlobalState(store.state);
actions.setGlobalState(store.state);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h: any) => h(App)
}).$mount('#app');
