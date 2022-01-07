module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/main/',
  outputDir: '../dist/main',
  devServer: {
    port: '7801',
    compress: false
    // headers: {
    //   'Access-Control-Allow-Origin': '*'
    // },
    // proxy: {}
  },
  configureWebpack: {
    // module: {
    //   rules: [
    //     {
    //       test: /\.js|jsx|json$/,
    //       use: 'babel-loader'
    //     }
    //   ]
    // }
  }
};
