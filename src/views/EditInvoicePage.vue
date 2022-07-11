<template>
  <div class="container bg-white my-10 p-4 rounded-lg">
    <back-comp />
    <edit-invoice-comp />
  </div>
</template>

<script>
import backComp from "@/components/NewInvoice/backComp.vue";
import EditInvoiceComp from "@/components/EditInvoice/EditInvoiceComp.vue";
export default {
  components: { backComp, EditInvoiceComp },
};
</script>

<style>
</style>