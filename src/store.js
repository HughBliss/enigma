import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    input: ""
  },
  getters: {
    input(state) {
      return state.input;
    }
  },
  mutations: {
    setInput(state, str) {
      state.input = str;
    }
  },
  actions: {
    watchInput({ state, dispatch, commit }, str) {
      commit("setInput", str);
    }
  }
});
