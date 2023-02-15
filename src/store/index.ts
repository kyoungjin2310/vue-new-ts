import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.ts";
import mutations from "./mutations.ts";
import actions from "./actions.ts";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
    list: [],
  },
  getters,
  mutations,
  actions,
});
