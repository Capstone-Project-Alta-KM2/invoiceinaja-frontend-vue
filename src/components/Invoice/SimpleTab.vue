<template>
  <div class="bg-white my-4">
    <div class="flex justify-between align-center px-3">
      <ul
        class="
          flex flex-wrap
          text-sm
          font-medium
          text-center text-gray-500
          dark:text-gray-400
        "
        id="tabExample"
        role="tablist"
      >
        <li class="mr-2" role="presentation">
          <button
            v-ripple
            :class="currentShow == 'all-invoice' ? ActiveClass : inActiveClass"
            id="all-invoice"
            type="button"
            role="tab"
            aria-controls="all-invoice-example"
            aria-selected="false"
            @click="changeActive('all-invoice')"
          >
            All Invoice
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            v-ripple
            :class="currentShow == 'paid' ? ActiveClass : inActiveClass"
            id="paid"
            type="button"
            role="tab"
            aria-controls="paid-example"
            aria-selected="false"
            @click="changeActive('paid')"
          >
            Paid
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            v-ripple
            :class="currentShow == 'overdue' ? ActiveClass : inActiveClass"
            id="overdue"
            type="button"
            @click="changeActive('overdue')"
          >
            Overdue
          </button>
        </li>
        <li role="presentation">
          <button
            v-ripple
            :class="currentShow == 'pending' ? ActiveClass : inActiveClass"
            id="pending"
            type="button"
            @click="changeActive('pending')"
          >
            Pending
          </button>
        </li>
        <li role="presentation">
          <button
            v-ripple
            :class="currentShow == 'draft' ? ActiveClass : inActiveClass"
            id="draft"
            type="button"
            @click="changeActive('draft')"
          >
            Draft
          </button>
        </li>
      </ul>
      <div class="flex px-5">
        <div class="my-auto">
          <button
            v-ripple
            class="button button-outline-primary px-3 py-2 text-base"
          >
            Import File
          </button>
        </div>
        <div class="my-auto">
          <button
            v-ripple
            @click="$router.push('/addInvoice')"
            class="button button-primary ml-4 px-3 py-2 text-base"
          >
            + Add New
          </button>
        </div>
      </div>
    </div>
    <div id="tabContentExample " class="my-4">
      <div
        class="px-4 rounded-md"
        :hidden="
          currentShow == 'all-invoice' ? (isHidden = false) : (isHidden = true)
        "
      >
        <invoice-table />
      </div>
      <div
        class="p-4 rounded-md"
        :hidden="currentShow == 'paid' ? (isHidden = false) : (isHidden = true)"
      >
        <invoice-table-paid />
      </div>
      <div
        class="p-4 rounded-md"
        :hidden="
          currentShow == 'overdue' ? (isHidden = false) : (isHidden = true)
        "
      >
        <invoice-table-overdue />
      </div>
      <div
        class="p-4 rounded-md"
        :hidden="
          currentShow == 'pending' ? (isHidden = false) : (isHidden = true)
        "
      >
        <invoice-table-pending />
      </div>
      <div
        class="p-4 rounded-md"
        :hidden="
          currentShow == 'draft' ? (isHidden = false) : (isHidden = true)
        "
      >
        <invoice-table-draft />
      </div>
    </div>
  </div>
</template>

<script>
import InvoiceTable from "./InvoiceTable-AllInvoice.vue";
import InvoiceTablePaid from "./InvoiceTable-PaidInvoice.vue";
import InvoiceTableOverdue from "./InvoiceTable-OverdueInvoice.vue";
import InvoiceTablePending from "./InvoiceTable-PendingInvoice.vue";
import InvoiceTableDraft from "./InvoiceTable-DraftInvoice.vue";

export default {
  name: "SimpleTab",
  components: {
    InvoiceTable,
    InvoiceTablePaid,
    InvoiceTableOverdue,
    InvoiceTablePending,
    InvoiceTableDraft,
  },
  data() {
    return {
      isHidden: false,
      currentShow: "all-invoice",
      inActiveClass:
        "inline-block px-4 py-3 rounded-t-lg border-b-4  border-transparent hover:text-gray-600 transition-all duration-300 hover:border-gray-300 dark:hover:text-gray-300",
      ActiveClass:
        "inline-block px-4 py-3 rounded-t-lg border-b-4 text-soft-purple border-transparent transition-all duration-300 hover:text-soft-purple hover:border-soft-purple-hover border-purple-500 dark:hover:text-gray-300",
      ActiveClassPaid:
        "inline-block px-4 py-3 rounded-t-lg border-b-4 text-paid-color border-transparent transition-all duration-300 hover:text-paid-color-hover hover:border-paid-color-hover border-paid-color dark:hover:text-gray-300",
      ActiveClassOverdue:
        "inline-block px-4 py-3 rounded-t-lg border-b-4 text-overdue-color border-transparent transition-all duration-300 hover:text-overdue-color-hover hover:border-overdue-color-hover border-overdue-color dark:hover:text-gray-300",
      ActiveClassPending:
        "inline-block px-4 py-3 rounded-t-lg border-b-4 text-unpaid-color border-transparent transition-all duration-300 hover:text-unpaid-color-hover hover:border-unpaid-color-hover border-unpaid-color dark:hover:text-gray-300",
      ActiveClassDraft:
        "inline-block px-4 py-3 rounded-t-lg border-b-4 text-gray-400 border-transparent transition-all duration-300 hover:text-bg-gray-300 hover:border-gray-300 border-gray-400 dark:hover:text-gray-300",
    };
  },
  methods: {
    changeActive(page) {
      this.currentShow = page;
    },
  },
  updated() {
    this.changeActive;
  },
  mounted() {},
};
</script>