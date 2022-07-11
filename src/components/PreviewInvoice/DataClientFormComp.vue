<template>
  <div class="grid grid-cols-3 gap-y-8">
    <div class="">
      <label for="" class="font-semibold mb-2">Invoice To</label>
      <p>{{ client.fullname }}</p>
    </div>
    <div class="">
      <label for="" class="font-semibold mb-2">Email</label>
      <p>{{ client.email }}</p>
    </div>
    <div class="">
      <label for="" class="font-semibold mb-2">Street Address</label>
      <p>{{ client.address }}</p>
    </div>
    <div class="">
      <label for="" class="font-semibold mb-2">City</label>
      <p>{{ client.city }}</p>
    </div>
    <div class="">
      <label for="" class="font-semibold mb-2">Zip Code</label>
      <p>{{ client.zip_code }}</p>
    </div>
    <div class="">
      <label for="" class="font-semibold mb-2">Company</label>
      <p>{{ client.company }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["client"],
};
</script>

<style>
</style>