<template>
  <div class="text-left mb-5">
    <button
      class="button button-primary flex items-center"
      @click="backTo"
      v-ripple
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Invoices
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    backTo() {
      console.log("current Route : ", this.$router.currentRoute);
      if (this.$router.currentRoute.path.match("edit-invoice")) {
        this.$router.push("/preview-invoice");
      } else {
        this.$router.push("/invoice");
      }
    },
  },
};
</script>

<style>
</style>