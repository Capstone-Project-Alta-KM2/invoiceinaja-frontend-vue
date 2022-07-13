const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/invoiceinaja-frontend-vue/'
    : '/',
  pwa: {
    name: 'invoiceinaja-frontend-vue',
    workboxOptions: {
      exclude: ['_redirects'],
    }
  }
})
