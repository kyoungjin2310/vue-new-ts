<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import { fetchNews } from "@/api/instance/news";
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
  methods: {
    async fetchNewsItems() {
      const res = await fetchNews();
      console.log(res.data);
    },
  },
  created() {
    this.fetchNewsItems();
  },
};
</script>

<style></style>
