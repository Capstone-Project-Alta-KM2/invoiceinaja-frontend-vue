const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  pwa: {
    name: 'invoiceinaja-frontend-vue',
    workboxOptions: {
      exclude: ['_redirects'],
    }
  }
})
