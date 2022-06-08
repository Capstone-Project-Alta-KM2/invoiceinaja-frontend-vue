<template>
  <div class="grid grid-cols-3 gap-y-8">
    <div class="">
      <label for="" class="font-semibold mb-2">Invoice To</label>
      <input
        type="text"
        list="clientList"
        name=""
        :value="value.invoiceTo"
        @input="fillForm()"
        ref="invoiceTo"
        id=""
        class="form-add-invoice w-72"
      />
      <datalist id="clientList">
        <option value="Client 1"></option>
        <option value="Client 2"></option>
      </datalist>
    </div>
    <div class="">
      <label for="" class="font-semibold mb-2">Email</label>
      <input
        type="email"
        name=""
        id=""
        ref="email"
        class="form-add-invoice w-72"
        @input="fillForm()"
        :value="value.email"
      />
    </div>
    <div class="">
      <label for="" class="font-semibold mb-2">Street Address</label>
      <input
        type="text"
        name=""
        id=""
        ref="address"
        class="form-add-invoice w-72"
        @input="fillForm()"
        :value="value.address"
      />
    </div>
    <div class="">
      <label for="" class="font-semibold mb-2">City</label>
      <input
        type="text"
        name=""
        id=""
        ref="city"
        class="form-add-invoice w-72"
        @input="fillForm()"
        :value="value.city"
      />
    </div>
    <div class="">
      <label for="" class="font-semibold mb-2">Zip Code</label>
      <input
        type="text"
        name=""
        id=""
        ref="zipCode"
        class="form-add-invoice w-72"
        :value="value.zipCode"
        @input="fillForm()"
      />
    </div>
    <div class="">
      <label for="" class="font-semibold mb-2">Company</label>
      <input
        type="text"
        name=""
        ref="company"
        id=""
        class="form-add-invoice w-72"
        :value="value.company"
        @input="fillForm()"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    fillForm() {
      this.$emit("input", {
        invoiceTo: this.$refs.invoiceTo.value,
        email: this.$refs.email.value,
        address: this.$refs.address.value,
        zipCode: this.$refs.zipCode.value,
        company: this.$refs.company.value,
      });
    },
  },
};
</script>

<style>
</style>