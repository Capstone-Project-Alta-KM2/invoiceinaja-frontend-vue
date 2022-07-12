import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Ripple from 'vue-ripple-directive'
import './axios'
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)
import VueExcelXlsx from "vue-excel-xlsx";
Vue.use(VueExcelXlsx);
Ripple.color = 'rgba(208, 186, 255, 0.5)';
Ripple.zIndex = 55;
Vue.directive('ripple', Ripple);

Vue.config.productionTip = false
import SideNavbar from './layouts/SideNavBarLayouts.vue'
import Blank from './layouts/BlankLayouts.vue'
import Navbar from './layouts/NavbarLayouts.vue'
Vue.component('sidenavbar-layout', SideNavbar)
Vue.component('blank-layout', Blank)
Vue.component('navbar-layout', Navbar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
