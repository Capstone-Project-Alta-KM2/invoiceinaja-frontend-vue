<template>
  <div class="bg-white p-7 rounded-lg border overflow-hidden">
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

<style></style>
