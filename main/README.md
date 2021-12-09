
# qk

## 安装依赖

```js
yarn install
```

### 启动项目

```js
yarn serve
```

#### public 静态文件目录

* public/micro-app.json 配置微应用文件

```js
{
  // 路由级别子应用 通过 registerMicroApp 注册
  "routesMicroApps" : [ 
    {
      name: 'test-micro-app', // 微应用名称 xx-app （app结尾）必须 用于生成路由
      pathname: '/home'
    }
  ] 
  // 需要手动加载的子应用 通过loadMicroApp 注册
  "customMicroApps": [ 
    {
      name: 'test-micro-app', // 微应用名称 xx-app （app结尾）必须
      container: '#test-micro-app', // dom 绑定名称
      activeRule: '/app' // 激活路由名称
    }
  ] 
}
```

* 微应用 package 命名规则

> package.json文件名称命名： 必须以小写字母+短横线命名

```js
  {
    name: 'test-micro-app',
    ...
  }
```

#### 开发环境地址 | 生产环境地址

* proxy.dev.json | proxy.prod.json

```js
{ 多有地址反斜杠结尾
  // 主应用url
  "container": "http://localhost:7801/",
  // 子引用路径集合  {key: 子应用名称, value: 子应用路径} 
  "microApps": {
    "test-micro-app": "http://localhost:7802/"
  }
}

```
