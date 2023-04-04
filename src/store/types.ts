// store/types.ts
import { CommitOptions, Store } from "vuex";
import { Mutations } from "./mutations";
import { RootState } from "./state";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>;
};

//& - 타입 합집합 - Omit & MyMutations(하나라도 빠지면 오류)
//Omit - Omit<객체, 제외키> : 타입 정의중에서 특정 키만 제외하겠다는 의미
//commit은 나중에 정의 되고, MyMutations에서 commit을 새로 정의하기 때문에 Omit을 사용
export type MyStore = Omit<Store<RootState>, "commit"> & MyMutations;
