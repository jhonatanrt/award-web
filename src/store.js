import Vue from 'vue'
import Vuex from 'vuex'
import ownerServices from './services/ownerServices';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || undefined,
    user: {},
    company: {},
    product: {},
    data: [],
    category: []
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, payload) {
      state.status = 'success';
      state.token = payload.token;
      state.user = payload.user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
    save_user(state, payload) {
      state.user = {
        ...user,
        payload
      }
    },
    saveCategory(state, payload) {
      state.category = [
        ...payload
      ]
    },
    saveInformation(state, payload) {
      state.data = [
        ...payload
      ]
    }
  },
  actions: {
    loadWorkersData({ commit }) {
      ownerServices.getWorker({
        limit: 20,
        offset: 0,
        userId: 1
      }).then(response => {
        commit('saveInformation', response);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    loadCategoryData({ commit }) {
      ownerServices.getCategory().then(response => {
        commit('saveCategory', response);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})
