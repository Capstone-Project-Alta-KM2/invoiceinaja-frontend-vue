<template>
  <div class="container bg-white my-10 p-4 rounded-lg">
    <back-comp />
    <preview-invoice-comp />
  </div>
</template>

<script>
import backComp from "../components/PreviewInvoice/backComp.vue";
import PreviewInvoiceComp from "../components/PreviewInvoice/PreviewInvoiceComp.vue";

export default {
  components: {
    backComp,
    PreviewInvoiceComp,
  },
};
</script>

<style>
</style>