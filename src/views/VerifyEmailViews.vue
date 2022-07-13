<template>
  <div class="flex bg-white relative">
    <div class="bg-[#D7C5FF] min-h-screen flex justify-center items-center">
      <img
        src="../assets/images/invoiceinaja_logo.png"
        alt=""
        @click="$router.push('/')"
        class="absolute top-5 left-5 cursor-pointer"
      />
      <img src="../assets/images/verifbackground.png" alt="" class="w-5/6" />
    </div>
    <div class="flex justify-center items-center w-1/2">
      <code-verif />
    </div>
  </div>
</template>

<script>
import CodeVerif from "../components/VerifyEmailComp/CodeVerifComp.vue";
export default {
  components: {
    CodeVerif,
  },
};
</script>

<style>
</style>