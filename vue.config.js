const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'invoiceinaja-frontend-vue',
    workboxOptions: {
      exclude: ['_redirects'],
    }
  },
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/' + require('./package.json').name + '/'
      : '/'
})
