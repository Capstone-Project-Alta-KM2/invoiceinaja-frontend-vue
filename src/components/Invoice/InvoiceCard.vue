<template>
  <div class="client-page">
    <div class="container bg-white rounded-md border-2 my-10">
      <h4 class="text-left px-5 pt-5 text-2xl font-bold text-black">
        Invoices
      </h4>
      <simple-tab />
    </div>
  </div>
</template>

<script>
import SimpleTab from "./SimpleTab.vue";
export default {
  name: "InvoiceCard",
  components: {
    SimpleTab,
  },
};
</script>

<style>
</style>