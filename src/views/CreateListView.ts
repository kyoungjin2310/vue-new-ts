import ListView from "./ListView.vue";
import bus from "../utils/bus.js";
import { h } from "vue";

export default function createListView(name: string) {
  return {
    name,
    mounted() {
      bus.$emit("off:progress");
    },
    render() {
      return h(ListView);
    },
  };
}
