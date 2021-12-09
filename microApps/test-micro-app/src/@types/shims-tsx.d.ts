import Vue, { VNode } from 'vue';
import { Store } from 'vuex';
declare global {
  // window
  interface Window {
    __POWERED_BY_QIANKUN__?: boolean | undefined;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: boolean | undefined;
    qiankunStarted?: boolean | undefined;
  }

  // jsx
  namespace JSX {
    interface Element extends VNode {}

    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
declare module 'vue/types/vue' {
  // vue全局实例属性
  interface VueConstructor {
    $PATH: string;
  }

  // 单例属性
  interface Vue {
    $PATH: string;
    $refs: any;
    $store: Store;
    [T: string]: any;
  }
}
