<template>
  <div class="bg-white my-10 p-10">
    <back-comp />
    <import-invoices />
  </div>
</template>

<script>
import ImportInvoices from "@/components/ImportPage/ImportInvoices.vue";
import BackComp from "@/components/NewInvoice/backComp.vue";
export default {
  components: { ImportInvoices, BackComp },
};
</script>

<style>
</style>