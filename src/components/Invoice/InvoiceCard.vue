<template>
  <div class="container bg-white rounded-md border-2 my-10">
    <div
      :class="`${
        responseSuccess ? 'scale-100' : 'scale-0'
      } transition-all duration-300 flex space-x-5 items-center  bg-green-500 text-white py-2`"
    >
      <p>
        {{ responseSuccess }}
      </p>
      <i
        class="bx bx-x bx-md cursor-pointer"
        @click="deleteResponseSuccess"
      ></i>
    </div>
    <div class="px-5 py-0">
      <h4 class="text-left text-2xl font-bold text-black">Invoices</h4>
      <ul
        class="
          mt-8
          mb-6
          flex flex-wrap
          text-sm
          space-x-2
          font-medium
          text-center text-gray-500
          dark:text-gray-400
        "
        id="tabExample"
        role="tablist"
      >
        <li v-for="tab in tabs" :key="tab.id">
          <button
            v-ripple
            :class="`${
              currentShow === tab.pathTab ? 'active-tab' : 'inactive-tab'
            }`"
            :id="tab.pathTab"
            type="button"
            role="tab"
            aria-controls="all-invoice-example"
            aria-selected="false"
            @click="changeActive(`${tab.pathTab}`)"
          >
            {{ tab.nameTab }}
          </button>
        </li>
      </ul>
      <div class="px-4">
        <div
          class="rounded-md"
          :hidden="
            currentShow == 'all-invoice'
              ? (isHidden = false)
              : (isHidden = true)
          "
        >
          <invoice-table />
        </div>
        <div
          class="rounded-md"
          :hidden="
            currentShow == 'paid' ? (isHidden = false) : (isHidden = true)
          "
        >
          <invoice-table-paid />
        </div>
        <div
          class="rounded-md"
          :hidden="
            currentShow == 'overdue' ? (isHidden = false) : (isHidden = true)
          "
        >
          <invoice-table-overdue />
        </div>
        <div
          class="rounded-md"
          :hidden="
            currentShow == 'unpaid' ? (isHidden = false) : (isHidden = true)
          "
        >
          <invoice-table-unpaid />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InvoiceTable from "./InvoiceTable-AllInvoice.vue";
import InvoiceTablePaid from "./InvoiceTable-PaidInvoice.vue";
import InvoiceTableOverdue from "./InvoiceTable-OverdueInvoice.vue";
import InvoiceTableUnpaid from "./InvoiceTable-UnpaidInvoice.vue";
export default {
  name: "InvoiceCard",
  data() {
    return {
      currentShow: "all-invoice",
      isHidden: false,
      tabs: null,
    };
  },
  components: {
    InvoiceTable,
    InvoiceTablePaid,
    InvoiceTableOverdue,
    InvoiceTableUnpaid,
  },
  computed: {
    responseSuccess() {
      return this.$store.state.msgSuccessAddInvoice;
    },
  },
  methods: {
    deleteResponseSuccess() {
      this.$store.dispatch("actionOfSuccessAddInvoice", "");
    },
    changeActive(path) {
      this.currentShow = path;
    },
    async fetchTabs() {
      let response = await fetch("tabsInvoice.json");
      let data = await response.json();
      this.tabs = data;
    },
  },
  mounted() {
    this.fetchTabs();
  },
};
</script>

<style>
</style>