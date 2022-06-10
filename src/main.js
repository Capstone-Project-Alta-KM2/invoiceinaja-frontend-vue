import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import './axios'
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)

Ripple.color = 'rgba(208, 186, 255, 0.2)';
Ripple.zIndex = 55;
Vue.directive('ripple', Ripple);
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
