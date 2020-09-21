<template>
  <div id="app">
    <page-body />
  </div>
</template>

<script>
import PageBody from "./components/page-body.vue";

export default {
  name: "App",
  components: {
    PageBody
  }
};
</script>

<style>
* {
  background-color: rgb(194, 194, 194);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
