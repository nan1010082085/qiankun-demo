const { name } = require('./package.json');
const ENV = process.env.NODE_ENV === 'development';
const PATH_NAME = name;
const port = 7803
module.exports = {
  publicPath: ENV ? '/' : `/${PATH_NAME}/`,
  outputDir: `../../dist/${PATH_NAME}`,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    compress: true,
    port
    // proxy: {}
  },
  chainWebpack: (config) => {
    const publicPath = ENV ? `http://localhost:${port}` : `/${PATH_NAME}/`;
    config.module
      .rule('fonts')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 4096, // 小于4kb将会被打包成 base64
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash:8].[ext]',
            publicPath
          }
        }
      })
      .end();
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 4096, // 小于4kb将会被打包成 base64
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]',
            publicPath
          }
        }
      });
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
