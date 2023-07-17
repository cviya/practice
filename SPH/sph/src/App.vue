<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- 在Home、Search显示，在Login、Register隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
