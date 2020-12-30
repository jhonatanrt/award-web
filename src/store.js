import Vue from 'vue'
import Vuex from 'vuex'
import ownerServices from './services/ownerServices';
import createPersistedState from "vuex-persistedstate";

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
      state.user = {};
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
    login({ commit }, body) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        ownerServices
          .login(body)
          .then((response) => {
            const token = response.userId;
            const user = response;
            commit('auth_success', { token, user });
            if (token)
              localStorage.setItem('token', token);

            resolve(response);
          })
          .catch((error) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          })
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        resolve();
      })
    },
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
  },
  plugins: [createPersistedState()]
})
