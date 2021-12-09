import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import App from './App';
import { VueRouter, routes } from './router';
import store from './store';
import packageJson from '../package.json';
import { QKRegisterMicroApp } from 'simple-qk';

Vue.config.productionTip = false;

@Component
class RouterViewMain extends Vue {
  render(h: CreateElement): VNode {
    return h('router-view');
  }
}

const app = QKRegisterMicroApp({
  option: {
    history: 'hash',
    routes,
    name: packageJson.name,
    component: RouterViewMain,
    store,
    local: process.env.NODE_DEV === 'development'
  },
  Vue,
  VueRouter,
  render: App
});

app.start();

export const bootstrap = async () => app.bootstrap();
export const mount = async (props: any) => app.render(props);
export const unmount = async () => app.unmount();
export const update = async (props: any) => app.update(props);
