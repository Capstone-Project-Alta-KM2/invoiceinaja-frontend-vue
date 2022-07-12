<template>
  <div class="">
    <div class="bg-white my-10 p-10">
      <back-comp />
      <preview-generate-comp />
    </div>
    <div
      class="
        w-full
        left-0
        bg-white
        py-4
        flex
        justify-end
        shadow-card-bottom
        px-10
        absolute
        bottom-0
      "
    >
      <button
        @click="openModal"
        v-ripple
        class="button button-primary flex items-center"
      >
        <p>Continue</p>
        <i class="bx bx-chevron-right bx-md"></i>
      </button>
    </div>
    <div
      :class="`${
        isShow ? 'scale-100' : 'scale-0'
      } inset-0 fixed z-50 bg-[rgba(0,0,0,0.5)] flex justify-center items-center duration-300 transition-all`"
    >
      <success-comp />
    </div>
  </div>
</template>

<script>
import backComp from "@/components/NewInvoice/backComp.vue";
import PreviewGenerateComp from "@/components/ImportPage/PreviewGenerateComp.vue";
import SuccessComp from "@/components/ImportPage/SuccessComp.vue";
export default {
  components: { backComp, PreviewGenerateComp, SuccessComp },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    openModal() {
      this.isShow = true;
    },
  },
};
</script>

<style>
</style>