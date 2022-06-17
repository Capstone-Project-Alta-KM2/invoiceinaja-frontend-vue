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
import PreviewInvoicePage from '../views/PreviewInvoicePage.vue'
import ForgetPasswordPage from '../views/ForgetPasswordPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{layout:"navbar"},
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    meta:{layout:"blank"},
    component: RegisterPage,
  },
  {
    path: '/verif-email',
    name: 'verif-email',
    meta:{layout:"blank"},
    component: VerifyEmailViews
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta:{layout:"sidenavbar"},
    component: DashboardPage
  },
  {
    path: '/addInvoice',
    name: 'newInvoice',
    meta:{layout:"sidenavbar"},

    component: AddInvoicePage
  },
  {
    path: '/:no_invoice/previewInvoice',
    name: 'previewInvoice',
    meta:{layout:"sidenavbar"},

    component: PreviewInvoicePage
  },
  {
    path: '/client',
    name: 'client',
    meta:{layout:"sidenavbar"},
    component: ClientPage
  },
  {
    path: '/invoice',
    name: 'invoice',
    meta:{layout:"sidenavbar"},
    component: InvoicePage
  },

  {
    path: '/login',
    name: 'login',
     meta:{layout:"blank"},
    component: LoginPage
  },
  {
    path: '/verif-email',
    name: 'verif-email',
    component: VerifyEmailViews
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    meta:{layout:"blank"},
    component: ForgetPasswordPage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
