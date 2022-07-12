const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'invoiceinaja-frontend-vue',
    workboxOptions: {
      exclude: ['_redirects'],
    }
  }
})
