import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterPage from '../views/RegisterPage.vue'
import HomeView from '../views/HomeView.vue'
import DashboardPage from '../views/DashboardPage.vue'
// import AddInvoicePage from '../views/AddInvoicePage.vue'
import SimpleTabs from '../views/TesSimpleTabs.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  
  {
    path: '/tes-tabs',
    name: 'tesTabs',
    component: SimpleTabs,
    
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
