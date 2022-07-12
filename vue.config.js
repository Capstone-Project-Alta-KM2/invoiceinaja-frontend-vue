const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://103.176.78.214:8080"
  },
  publicPath: '/',
  pwa: {
    name: 'invoiceinaja-frontend-vue',
    workboxOptions: {
      exclude: ['_redirects'],
    }
  }
})
