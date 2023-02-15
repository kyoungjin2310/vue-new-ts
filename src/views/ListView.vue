<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script>
import { fetchNews } from "@/api/instance/news";
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },

  data() {
    return {
      newsItems: [],
    };
  },

  methods: {
    async fetchNewsItems() {
      const res = await fetchNews();
      console.log(res.data);
      this.newsItems = res.data;
    },
  },

  created() {
    this.fetchNewsItems();
  },
};
</script>

<style></style>
