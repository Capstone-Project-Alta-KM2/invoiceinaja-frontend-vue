<template>
  <div class="container">
    <h1 class="text-3xl">Home Page</h1>
    <div class="mt-10 mx-auto p-10 bg-white border rounded-lg shadow-sm shadow-black">
      <h3>Hi, {{userLogin}}</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomeView',
  data() {
    return {
      userLogin: 'User is not logged in'
    };
  },
  computed: {
    userToken() {
      return this.$store.state.token;
    }
  },
  async created() {
    const response = await axios.get('/api/v1/users', {
      headers: {
        Authorization: 'Bearer' + this.userToken
      }
    });

    console.log(response);
  },
  mounted() {
    console.log(this.userToken);
  }
};
</script>

<style>
</style>