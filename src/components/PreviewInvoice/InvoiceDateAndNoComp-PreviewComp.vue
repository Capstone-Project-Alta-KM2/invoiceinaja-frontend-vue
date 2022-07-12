<template>
  <div class="flex items-center space-x-10">
    <div>
      <label for="" class="font-semibold mb-2">Invoice No</label>
      <div class="flex items-center relative">
        <span class="px-2 py-2 text-xl font-semibold">#</span>
        INV-00123
      </div>
    </div>
    <p class="font-semibold bg-gray-200 text-gray-400 px-4 py-2 rounded-lg">
      Draft
    </p>
  </div>
</template>

<script>
export default {
  props: ["value"], //Wajib pakai ini, g tau knp kalau g pake ini tu gabisa

  methods: {},
};
</script>

<style>
</style>