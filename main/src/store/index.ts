import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    SubmitUserInfo(state, props) {
      state.userInfo = props;
    }
  },
  getters: {
    getVxUserInfo(state) {
      return state.userInfo;
    }
  },
  actions: {},
  modules: {}
});
