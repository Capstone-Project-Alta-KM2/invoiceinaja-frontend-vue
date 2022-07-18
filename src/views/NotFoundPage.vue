<template>
  <div class="h-screen flex justify-center items-center flex-col space-y-5">
    <not-found-comp />
    <button @click="$router.push('/')" class="button button-primary" v-ripple>
      Back Home
    </button>
  </div>
</template>

<script>
import NotFoundComp from "@/components/NotFound/NotFoundComp.vue";
export default {
  components: { NotFoundComp },
};
</script>

<style>
</style>