/**
 * 注册路由
 * @param {string} name
 * @param {string} activeRule
 * @param {string} pathname
 * @param [T]
 */
export interface RoutesMicroApp {
  // 应用名称
  name: string;
  // 激活应用标识
  activeRule?: string | any;
  // 传递给子应用参数
  props?: any;
  // 默认跳转
  pathname?: string;
  // 其他
  [T: string]: any;
}

export interface CustomMicroApp {
  name: string;
  container: string;
  activeRule?: string;
  props?: any;
  [T: string]: any;
}
