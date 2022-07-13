import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterPage from '../views/RegisterPage.vue'
import HomeView from '../views/HomeView.vue'
import DashboardPage from '../views/DashboardPage.vue'
import AddInvoicePage from '../views/AddInvoicePage.vue'
import EditInvoicePage from '../views/EditInvoicePage.vue'
import ClientPage from '../views/ClientPage.vue'
import InvoicePage from '../views/InvoicePage.vue'
import ImportInvoices from '../views/ImportInvoices.vue'
import DetailInvoicePaidView from '../views/DetailInvoicePaidView.vue'

import LoginPage from '../views/LoginPage.vue'

import VerifyEmailViews from '../views/VerifyEmailViews.vue'
import PreviewInvoicePage from '../views/PreviewInvoicePage.vue'
import PreviewGeneratePage from '../views/PreviewGeneratePage.vue'
import ForgetPasswordPage from '../views/ForgetPasswordPage.vue'
import CreateNewPassPage from '../views/CreateNewPassPage.vue'
import BlogPage from  '../views/BlogPage.vue'
import FullInvoicesPage from '../views/FullInvoicesPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

import auth from '../middleware/auth';
import isLogin from '../middleware/isLogin';
import log from '../middleware/log';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: "navbar" },
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: "blank",middleware:isLogin},
    component: RegisterPage,
  },
  {
    path: '/verif-email',
    name: 'verif-email',
    meta: { layout: "blank",middleware:isLogin },
    component: VerifyEmailViews
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      layout: "sidenavbar",
      middleware: [auth, log]

    },
    component: DashboardPage
  },
  {
    path: '/add-invoice',
    name: 'newInvoice',
    meta: {
      layout: "sidenavbar",
      middleware: [auth, log]
    },
    component: AddInvoicePage
  },
  {
    path: '/edit-invoice',
    name: 'editInvoice',
    meta: {
      layout: "sidenavbar",
      middleware: [auth, log]
    },
    component: EditInvoicePage
  },
  {
    path: '/preview-invoice',
    name: 'previewInvoice',
    meta: {
      layout: "sidenavbar",
      middleware: [auth, log]
    },
    component: PreviewInvoicePage
  },
  {
    path: '/preview-generate',
    name: 'previewInvoice',
    meta: {
      layout: "sidenavbar",
      middleware: [auth, log]
    },
    component: PreviewGeneratePage
  },
  {
    path: '/detail-invoices/:no_invoice',
    name: 'DetailInvoicePaidView',
    meta: {
      layout: "blank",
      middleware: [auth, log]
    },
    component: DetailInvoicePaidView
  },
  {
    path: '/full-invoices/:no_invoice',
    name: 'FullInvoices',
    meta: {
      layout: "sidenavbar",
      middleware: [auth, log]
    },
    component: FullInvoicesPage
  },
  {
    path: '/client',
    name: 'client',
    meta: { layout: "sidenavbar", middleware: [auth, log] },
    component: ClientPage
  },
  {
    path: '/import-invoices',
    name: 'import-invoices',
    meta: { layout: "sidenavbar", middleware: [auth, log] },
    component: ImportInvoices
  },
  {
    path: '/invoice',
    name: 'invoice',
    meta: { layout: "sidenavbar", middleware: [auth, log] },
    component: InvoicePage
  },
  {
    path: '*',
    name: 'not-found',
    meta: { layout: "blank", middleware: [auth, log] },
    component: NotFoundPage
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: "blank",middleware:isLogin},
    component: LoginPage
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    meta: { layout: "blank",middleware:isLogin},
    component: ForgetPasswordPage
  },
  {
    path: '/change-password',
    name: 'change-password',
    meta: { layout: "blank", middleware:isLogin},
    component: CreateNewPassPage
  },
  {
    path: '/blog',
    name: 'blog-page',
    meta:{layout:"navbar"},
    component: BlogPage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to) {
    const position = {};
    if(to.hash) {
      position.selector = to.hash;
      position.behavior = 'smooth';
      if(to.hash == '#features' || to.hash == '#costumers') {
        position.offset = {
          y: 100
        }
      }

      return position;
    }
  }
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
