<template>
  <div class="flex">
    <div class="mr-5">
      <label for="" class="font-semibold mb-2">Invoice No</label>
      <div class="flex items-center relative">
        <span class="px-2 py-2 bg-soft-purple text-xl font-semibold">#</span>
        <input
          type="text"
          :value="value.noInvoice"
          ref="noInvoice"
          @input="updateData()"
          name=""
          id=""
          class="
            p-1
            placeholder:text-xl
            w-36
            transition-all
            duration-300
            border-soft-purple
            block
            border-[6px]
            focus:border-soft-purple focus:outline-0
          "
        />
      </div>
    </div>
    <div class="mr-5">
      <label for="" class="font-semibold mb-2">Invoice Date</label>
      <input
        type="date"
        name=""
        id=""
        :value="value.dateInvoice"
        ref="dateInvoice"
        @input="updateData()"
        class="form-add-invoice"
      />
    </div>
    <div class="mr-5">
      <label for="" class="font-semibold mb-2">Due Date</label>
      <input
        type="date"
        name=""
        id=""
        :value="value.dueDate"
        ref="dueDate"
        @input="updateData()"
        class="form-add-invoice"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"], //Wajib pakai ini, g tau knp kalau g pake ini tu gabisa

  methods: {
    updateData() {
      this.$emit("input", {
        noInvoice: this.$refs.noInvoice.value,
        dateInvoice: this.$refs.dateInvoice.value,
        dueDate: this.$refs.dueDate.value,
      });
    },
  },
};
</script>

<style>
</style>