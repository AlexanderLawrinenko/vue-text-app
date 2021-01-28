<template>
  <div id="app">
    <history></history>
    <img class="logo" alt="logo" src="./assets/img/logo.png" />
    <router-view />
  </div>
</template>
<script>
export default {
  components: {
    History: () => import("@/components/History")
  }
};
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
</style>
