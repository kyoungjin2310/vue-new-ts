import { NewsItem } from "@/api";
import { RootState } from "./state";

//ts - enum : 열거형
enum MutationTypes {
  SET_NEWS = "SET_NEWS",
}

const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
    state.news = news;
  },
};

//mutations type을 store에서 추론이 가능하게 만들기
//Mutations에 s를 빼먹으면 안됨, vuex에 이미 Mutation가 있음
type Mutations = typeof mutations;

export { mutations, Mutations };

// export default {
//   SET_NEWS(state, news) {
//     state.news = news;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
// };
