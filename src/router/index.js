import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterPage from '../views/RegisterPage.vue'
import HomeView from '../views/HomeView.vue'
import DashboardPage from '../views/DashboardPage.vue'
import AddInvoicePage from '../views/AddInvoicePage.vue'
import ClientPage from '../views/ClientPage.vue'
import InvoicePage from '../views/InvoicePage.vue'
import VerifyEmailViews from '../views/VerifyEmailViews.vue'

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
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
