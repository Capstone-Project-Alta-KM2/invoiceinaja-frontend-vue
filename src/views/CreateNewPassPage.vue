<template>
  <div class="flex bg-white relative">
    <div
      class="bg-[#D7C5FF] min-h-screen w-1/2 flex justify-center items-center"
    >
      <img
        src="../assets/images/invoiceinaja_logo.png"
        alt=""
        class="absolute top-5 left-5 cursor-pointer"
        @click="$router.push('/')"
      />
      <img
        src="../assets/images/Secure login-pana 1.png"
        alt=""
        class="w-5/6"
      />
    </div>
    <div class="flex justify-center items-center w-1/2">
      <create-new-pass />
    </div>
  </div>
</template>

<script>
import CreateNewPass from "../components/CreateNewPass/CreateNewPassComp.vue";
export default {
  components: {
    CreateNewPass,
  },
};
</script>

<style>
</style>