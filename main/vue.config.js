module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/container/',
  outputDir: '../dist/container',
  devServer: {
    port: '7801',
    compress: false
    // headers: {
    //   'Access-Control-Allow-Origin': '*'
    // },
    // proxy: {}
  },
  configureWebpack: {}
};
