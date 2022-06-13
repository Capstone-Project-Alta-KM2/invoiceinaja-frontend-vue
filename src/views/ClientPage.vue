<template>
  <div class="container my-10 px-4">
    <client-card />
  </div>
</template>

<script>
import ClientCard from "@/components/Client/ClientCard.vue";
export default {
  name: "ClientPage",
  components: {
    ClientCard,
  },
};
</script>

<style>
</style>