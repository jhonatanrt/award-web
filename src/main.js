import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faDownload, faThumbsUp, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VeeValidate from "vee-validate";
import Vue from 'vue';
import VueHtml2Canvas from 'vue-html2canvas';
import 'vue-search-select/dist/VueSearchSelect.css';
import './../node_modules/bulma/css/bulma.css';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faTrash, faUserPlus, faCheck, faThumbsUp, faFacebookF, faTwitter, faWhatsapp, faDownload)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(VueHtml2Canvas);

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return
    }
    next('/');
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
