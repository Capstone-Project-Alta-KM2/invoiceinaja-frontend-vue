<template>
  <div class="container text-left flex justify-evenly items-center">
    <div class="text-left flex items-start space-x-3">
      <div>
        <h4 class="text-2xl">Total Invoice</h4>
        <h3 class="font-semibold text-2xl">Rp. 32.000.000</h3>
      </div>

      <span class="text-paid-color bg-[#f3fcef] rounded-xl py-[2px] px-2">
        +21,55%
      </span>
    </div>
    <div class="flex">
      <div class="border-r h-12 border-black"></div>
    </div>
    <div class="text-left flex items-start space-x-3">
      <div>
        <h4 class="text-2xl">Total Invoice</h4>
        <h3 class="font-semibold text-2xl">Rp. 2.000.000</h3>
      </div>

      <span class="text-overdue-color bg-[#ffd6db] rounded-xl py-[2px] px-2">
        -5,55%
      </span>
    </div>
    <div class="flex">
      <div class="border-r h-12 border-black"></div>
    </div>
    <div class="text-left flex items-start space-x-3">
      <div>
        <h4 class="text-2xl">Total Nasabah</h4>
        <h3 class="font-semibold text-2xl">1.110</h3>
      </div>
      <span class="text-notif-created bg-[#e9f6ff] rounded-xl py-[2px] px-2">
        +5,55%
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>