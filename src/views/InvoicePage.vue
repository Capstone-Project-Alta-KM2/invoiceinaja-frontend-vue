<template>
  <div class="invoice-page">
    <invoice-card />
  </div>
</template>

<script>
import InvoiceCard from "@/components/Invoice/InvoiceCard.vue";
export default {
  name: "InvoicePage",
  components: {
    InvoiceCard,
  },
};
</script>
