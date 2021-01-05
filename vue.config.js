module.exports = {
  productionSourceMap: false,
  // baseUrl: './',
  publicPath: './',
  // outputDir: `./dist/${process.env.BASE_URL}`,
  pluginOptions: {
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
