const { name } = require('./package.json');

const env = process.env.NODE_ENV === 'development';

module.exports = {
  publicPath: env ? '/' : `/${name}/`,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    compress: true,
    port: 7804
    // proxy: {}
  },
  configureWebpack: {
    // externals: {
    //   lodash: {
    //     commonjs2: 'lodash',
    //     commonjs: 'lodash',
    //     umd: 'lodash',
    //     root: '_'
    //   }
    // },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
};
