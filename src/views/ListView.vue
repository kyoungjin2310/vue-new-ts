<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchNews, NewsItem } from "@/api/index";
import ListItem from "../components/ListItem.vue";

export default defineComponent({
  components: {
    ListItem,
  },

  data() {
    return {
      newsItems: [] as NewsItem,
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
});
</script>

<style></style>
