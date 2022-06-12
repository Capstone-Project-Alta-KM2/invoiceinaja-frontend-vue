<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout + "-layout";
    },
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

/* nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #7c40ff;
  background-color: #e5d9ff;
}
nav a.router-link-exact-active > svg > path[fill="red"] {
  color: #7c40ff;
  background-color: #e5d9ff;
}
</style>
