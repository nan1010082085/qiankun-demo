const { name } = require('./package.json');
const ENV = process.env.NODE_ENV === 'development';
const PATH_NAME = name;
module.exports = {
  publicPath: ENV ? '/' : `/${PATH_NAME}/`,
  outputDir: `../../dist/${PATH_NAME}`,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    compress: true,
    port: '7802'
    // proxy: {}
  },
  configureWebpack: {
    externals: {
      lodash: {
        commonjs2: 'lodash',
        commonjs: 'lodash',
        umd: 'lodash',
        root: '_'
      }
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // ENV ? 'umd' : 'window',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
};
