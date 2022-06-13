import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterPage from '../views/RegisterPage.vue'
import HomeView from '../views/HomeView.vue'
import DashboardPage from '../views/DashboardPage.vue'
import AddInvoicePage from '../views/AddInvoicePage.vue'
import ClientPage from '../views/ClientPage.vue'
import InvoicePage from '../views/InvoicePage.vue'

import LoginPage from '../views/LoginPage.vue'

import VerifyEmailViews from '../views/VerifyEmailViews.vue'


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
    component: RegisterPage,
    
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage
  },
  {
    path: '/addInvoice',
    name: 'newInvoice',
    component: AddInvoicePage
  },
  {
    path: '/client',
    name: 'client',
    component: ClientPage
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: InvoicePage
  },
  {

    path: '/login',
    name: 'login',
    component: LoginPage
  },

    path: '/verif-email',
    name: 'verif-email',
    component: VerifyEmailViews
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
