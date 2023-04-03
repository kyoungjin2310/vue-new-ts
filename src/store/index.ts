import Vuex, { StoreOptions } from "vuex";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import { RootState, state } from "./state";

const store: StoreOptions<RootState> = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};

//node_modules/vuex - vue.d.ts: 아래로 수정(끄고 다시 켜야 적용)
// import { RootState } from "@/store/state";
// import { ComponentCustomOptions } from "vue";
// import { Store } from "./index";

// declare module "@vue/runtime-core" {
//   interface ComponentCustomOptions {
//     store?: Store<RootState>;
//   }
// }

export default new Vuex.Store(store);
