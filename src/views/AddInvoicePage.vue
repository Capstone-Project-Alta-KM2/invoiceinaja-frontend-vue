<template>
  <div class="container bg-white my-10 p-4 rounded-lg">
    <back-comp />
    <form-invoice />
  </div>
</template>

<script>
import FormInvoice from "../components/NewInvoice/FormComp-NewInvoice.vue";
import backComp from "../components/NewInvoice/backComp.vue";
export default {
  components: {
    FormInvoice,
    backComp,
  },
};
</script>

<style>
</style>