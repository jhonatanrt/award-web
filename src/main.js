import Vue from 'vue';
import VeeValidate from "vee-validate";
import App from './App.vue';
import router from './router';
import store from './store';
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false;
Vue.use(VeeValidate);

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return
    }
    next('/login');
  } else {
    next();
  }
})

new Vue({
  created() {
    // this.$store.dispatch('loadCompanyDetail')
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
