import Vue, { VNode } from 'vue';
import { Store } from 'vuex';
declare global {
  interface Window {
    __POWERED_BY_QIANKUN__?: boolean | undefined;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: boolean | undefined;
    qiankunStarted?: boolean | undefined;
    vuex: Store;
  }
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module 'vue/types/vue' {
  // vue全局实例属性
  interface VueConstructor {}

  // 单例属性
  interface Vue {
    $refs: any;
    $store: Store;
  }
}
