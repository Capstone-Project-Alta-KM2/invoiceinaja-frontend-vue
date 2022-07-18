<template>
  <div class="bg-white rounded-md border">
    <div
      :class="`${
        responseSuccess ? 'scale-100' : 'scale-0'
      } transition-all duration-300 flex justify-center space-x-5 items-center  bg-green-500 text-white py-2`"
    >
      <p>
        {{ responseSuccess }}
      </p>
    </div>
    <div class="px-5 py-0">
      <h4 class="text-left text-2xl font-bold text-black">Invoices</h4>
      <ul
        class="mt-8 mb-6 flex flex-wrap text-sm space-x-2 font-medium text-center text-gray-500 dark:text-gray-400"
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
        <transition name="slide-fade">
          <div class="rounded-md" v-if="currentShow == 'all-invoice'">
            <invoice-table />
          </div>
        </transition>
        <transition name="slide-fade">
          <div class="rounded-md" v-if="currentShow == 'paid'">
            <invoice-table-paid />
          </div>
        </transition>
        <transition name="slide-fade">
          <div class="rounded-md" v-if="currentShow == 'overdue'">
            <invoice-table-overdue />
          </div>
        </transition>
        <transition name="slide-fade">
          <div class="rounded-md" v-if="currentShow == 'unpaid'">
            <invoice-table-unpaid />
          </div>
        </transition>
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
  updated() {
    setTimeout(() => {
      this.$store.dispatch("actionOfSuccessAddInvoice", "");
    }, 2000);
  },
};
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
