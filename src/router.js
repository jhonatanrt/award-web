import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detalle',
      name: 'shopping',
      component: () => import('./views/Shopping.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/editar',
      name: 'edit',
      component: () => import('./views/Edit.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/reconocimiento',
      name: 'Award',
      component: () => import('./views/Award.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/informacion',
      name: 'sobre-nosotros',
      component: () => import('./views/About.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})
