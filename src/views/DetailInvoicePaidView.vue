<template>
  <div class="container bg-white my-10 p-4 rounded-lg">
    <back-comp />
    <preview-invoice-comp />
  </div>
</template>

<script>
import PreviewInvoiceComp from "@/components/PreviewInvoice/PreviewInvoiceComp.vue";
import BackComp from "@/components/NewInvoice/backComp.vue";
export default {
  components: { PreviewInvoiceComp, BackComp },
};
</script>

<style>
</style>