<template>
  <div id="app">
    <spinner />
    <tool-bar></tool-bar>
    <transition name="routing-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus";

export default defineComponent({
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    onProgress() {
      this.loading = true;
    },
    offProgress() {
      this.loading = false;
    },
  },
  created() {
    bus.$on("on:progress", this.onProgress);
    bus.$on("off:progress", this.offProgress);
  },
});
</script>

<style>
body {
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-active {
  text-decoration: underline;
}

/* Router Transition */
.routing-fade-enter-active,
.routing-fade-leave-active {
  transition: opacity 0.3s ease;
}

.routing-fade-enter,
.routing-fade-leave-to {
  opacity: 0;
}
</style>
