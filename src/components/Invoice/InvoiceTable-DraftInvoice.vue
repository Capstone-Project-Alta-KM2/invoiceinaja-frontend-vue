<template>
  <div class="">
    <h1>Draft Invoice</h1>
    <div class="flex justify-between">
      <div class="relative">
        <input
          type="text"
          name="searchInvoice"
          v-model="searchInvoice"
          placeholder="Search name, Invoice, Item"
          class="form-add-invoice w-80 peer pl-4 focus:pl-10"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="
            h-6
            w-6
            absolute
            top-2
            hidden
            peer-focus:animate-showIcon peer-focus:block
            transition-all
            duration-500
            left-2
            peer-focus:text-soft-purple
          "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div class="flex justify-between align-center px-3">
        <div
          v-ripple
          @click="$router.push('/import-invoices')"
          for="inputCsv"
          class="
            button
            cursor-pointer
            button-outline-primary
            px-3
            py-2
            text-base
          "
        >
          Import File
        </div>
        <div class="my-auto">
          <button
            v-ripple
            @click="$router.push('/add-invoice')"
            class="button button-primary ml-4 px-3 py-2 text-base"
          >
            + Add New
          </button>
        </div>
      </div>
    </div>
    <div class="w-full my-10 overflow-x-auto whitespace-nowrap">
      <table class="w-full">
        <thead class="bg-[rgba(155,109,255,0.1)]">
          <tr class="text-left">
            <td>
              <input type="checkbox" name="" id="" />
            </td>
            <td class="py-5 lg:px-0 px-10">No. Invoice</td>
            <td class="lg:px-0 px-10">Client</td>
            <td class="lg:px-0 px-10">Date</td>
            <td class="lg:px-0 px-10">Post Due</td>
            <td class="text-center lg:px-0 px-10">Amount</td>
            <td class="text-center lg:px-0 px-10">Status</td>
            <td class="text-center lg:px-0 px-10">Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in items"
            :key="index"
            class="
              text-left
              py-3
              my-10
              shadow-invoicein
              hover:bg-[rgba(155,109,255,0.2)]
              duration-300
              transition-all
              cursor-pointer
            "
          >
            <td>
              <input type="checkbox" name="" id="" />
            </td>
            <td class="py-5 lg:px-0 px-10">{{ item.id }}</td>
            <td class="lg:px-0 px-10">{{ item.client }}</td>
            <td class="lg:px-0 px-10">{{ item.date }}</td>
            <td class="lg:px-0 px-10">{{ item.post_due }}</td>
            <td class="text-center lg:px-0 px-10">{{ item.Amount }}</td>
            <td class="text-center lg:px-0 px-10">
              <span
                :class="`${
                  item.status == 'PAID'
                    ? 'bg-[rgba(135,228,96,0.2)] text-paid-color'
                    : item.status == 'UNPAID'
                    ? 'bg-[rgba(255,204,0,0.2)] text-unpaid-color'
                    : item.status == 'OVERDUE'
                    ? 'bg-[rgba(255,48,76,0.2)] text-overdue-color'
                    : item.status == 'DRAFT'
                    ? 'bg-gray-200 text-gray-400'
                    : ''
                } inline-block w-20 leading-8`"
                >{{ item.status.toLowerCase() }}</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "InvoiceTable",
  data() {
    return {
      isActive: "page-1",
      searchInvoice: "",

      items: [],
    };
  },
  computed: {},
  mounted() {
    this.fetchUnpaidInvoice();
  },
  methods: {
    async fetchUnpaidInvoice() {
      await axios.get("api/v1/invoices").then((res) => {
        console.log("unpaid invoice : ", res.data);
        this.items = res.data.data;
      });
    },
    searchDataInvoice() {
      this.items = this.items.filter((data) => {
        return data.first_name
          .toLowerCase()
          .match(this.searchInvoice.toLowerCase());
      });
      console.log(this.items);
    },
  },
};
</script>

<style>
ul.paginate-links > li.active > a {
  color: white;
}
ul#table-invoice {
  padding: 0;
}
</style>