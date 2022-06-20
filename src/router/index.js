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
import CreateNewPassPage from '../views/CreateNewPassPage.vue'

import auth from '../middleware/auth';
import log from '../middleware/log';
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
    meta:{
      layout:"sidenavbar",
      middleware:[auth,log]

    },
    component: DashboardPage
  },
  {
    path: '/addInvoice',
    name: 'newInvoice',
    meta:{
      layout:"sidenavbar",
      middleware:[auth,log]
  },
    component: AddInvoicePage
  },
  {
    path: '/:no_invoice/previewInvoice',
    name: 'previewInvoice',
    meta:{
      layout:"sidenavbar",
      middleware:[auth,log]
    },
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
    meta:{
      layout:"blank",
      middleware:log
    },
    
    component: LoginPage
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    meta:{layout:"blank"},
    component: ForgetPasswordPage
  },
  {
    path: '/change-password',
    name: 'change-password',
    meta:{layout:"blank"},
    component: CreateNewPassPage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});
export default router
