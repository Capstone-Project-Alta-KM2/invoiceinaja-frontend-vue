<template>
  <div class="container">
    <h1 class="text-3xl">Home Page</h1>
    <div
      class="
        mt-10
        mx-auto
        p-10
        bg-white
        border
        rounded-lg
        shadow-sm shadow-black
      "
    >
      <h3>
        Hi,
        {{
          Object.keys(userLogin).length == 0 ? "No user login" : userLogin.name
        }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {};
  },
  computed: {
    userLogin() {
      return this.$store.state.usersInfo;
    },
  },
  mounted() {
    this.userLogin;
  },
};
</script>

<style>
</style>