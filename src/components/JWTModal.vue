<template>
  <div class="bg-white p-5 rounded-md flex flex-col space-y-5">
    <div>
      <h1 class="text-2xl font-semibold">Login Expired</h1>
      <p>You need to login again for access the features</p>
    </div>
    <button v-ripple @click="goToLoginPage" class="button button-primary">
      Go to Login Page
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLoginPage() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>