<template>
  <div
    class="
      bg-white
      px-4
      rounded-lg
      py-6
      flex
      justify-center
      items-center
      flex-col
      space-y-5
    "
  >
    <success-icon />
    <h1 class="text-2xl font-semibold">
      Congratulation! You have successfully saved invoices.
    </h1>
    <button
      class="button button-primary"
      v-ripple
      @click="$router.push('/invoice')"
    >
      Go to my invoice
    </button>
  </div>
</template>

<script>
import SuccessIcon from "../IconComp/SuccessIcon.vue";
export default {
  components: { SuccessIcon },
};
</script>

<style>
</style>