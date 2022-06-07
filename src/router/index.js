import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientView from '../views/ClientView.vue';
import InvoicesView from '../views/InvoicesView.vue';
import NewClientPage from '../views/NewClientPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/client',
    name: 'client',
    component: ClientView
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: InvoicesView
  },
  {
    path: '/addclient',
    name: 'addclient',
    component: NewClientPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
