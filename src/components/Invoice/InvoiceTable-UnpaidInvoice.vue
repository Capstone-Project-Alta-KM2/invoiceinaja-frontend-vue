<template>
  <div>
    <div class="rounded-xl p-3 border-2 mx-3">
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
        <div class="flex items-center">
          <button
            v-ripple
            class="
              button
              flex
              px-3
              py-2
              text-base text-soft-purple
              items-center
              shadow-invoicein
            "
          >
            <svg
              width="18"
              class="mr-3"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4676 9.68297C16.0509 9.68297 17.3333 10.9438 17.3333 12.4993C17.3333 14.054 16.0509 15.3148 14.4676 15.3148C12.8852 15.3148 11.6018 14.054 11.6018 12.4993C11.6018 10.9438 12.8852 9.68297 14.4676 9.68297ZM7.4027 11.2983C8.09621 11.2983 8.65917 11.8514 8.65917 12.5327C8.65917 13.2132 8.09621 13.7672 7.4027 13.7672H1.9231C1.22959 13.7672 0.666626 13.2132 0.666626 12.5327C0.666626 11.8514 1.22959 11.2983 1.9231 11.2983H7.4027ZM3.53235 0.5C5.11567 0.5 6.39808 1.76082 6.39808 3.31547C6.39808 4.87102 5.11567 6.13184 3.53235 6.13184C1.94995 6.13184 0.666626 4.87102 0.666626 3.31547C0.666626 1.76082 1.94995 0.5 3.53235 0.5ZM16.0777 2.08194C16.7703 2.08194 17.3333 2.63502 17.3333 3.31547C17.3333 3.99682 16.7703 4.54991 16.0777 4.54991H10.5981C9.90463 4.54991 9.34167 3.99682 9.34167 3.31547C9.34167 2.63502 9.90463 2.08194 10.5981 2.08194H16.0777Z"
                fill="#9B6DFF"
              />
            </svg>

            Filter
          </button>
          <button
            v-ripple
            class="
              button
              ml-4
              flex
              px-3
              py-2
              text-base text-soft-purple
              items-center
              shadow-[4px_5px_10px_rgba(0,0,0,0.1)]
            "
          >
            <svg
              width="20"
              class="mr-3"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7335 13.1868L11.779 13.1992C12.0312 13.2001 12.2354 13.4113 12.2354 13.6703V15.9461C12.2354 16.206 12.0879 16.4411 11.8579 16.5498L8.18567 18.2741C8.09987 18.3139 8.00892 18.3334 7.91797 18.3334C7.79699 18.3334 7.67601 18.298 7.57048 18.2282C7.38601 18.1062 7.27447 17.8959 7.27447 17.6705V13.6579C7.27447 13.3972 7.48039 13.1859 7.7335 13.1868ZM16.5599 1.66669C17.5398 1.66669 18.3334 2.48423 18.3334 3.49357V4.76982C18.3334 5.25946 18.1421 5.72966 17.8023 6.07258L12.3815 11.5559C12.2879 11.6513 12.161 11.7044 12.0297 11.7035L7.49086 11.6893C7.35272 11.6893 7.22145 11.6301 7.12707 11.5267L2.14551 6.04784C1.83749 5.70933 1.66675 5.26211 1.66675 4.7981V3.49445C1.66675 2.48511 2.4604 1.66669 3.44024 1.66669H16.5599Z"
                fill="#9B6DFF"
              />
            </svg>

            Sort
          </button>
        </div>
      </div>
      <div class="mt-12">
        <div class="lg:overflow-x-hidden overflow-x-auto">
          <table class="min-w-full">
            <tr class="text-left border-y-2 py-4 row mb-5">
              <td class="col">invoice#</td>
              <td class="col">Client</td>
              <td class="col">Date</td>
              <td class="col">Item</td>
              <td class="col">Post Due</td>
              <td class="col">Amount</td>
              <td class="text-center col">Status</td>
            </tr>

            <tr
              v-for="(item, index) in items"
              :key="index"
              class="text-left row py-3 my-10 shadow-invoicein"
            >
              <td class="col">{{ item.id }}</td>
              <td class="col">{{ item.client }}</td>
              <td class="col">{{ item.date }}</td>
              <td class="col">{{ item.item }}</td>
              <td class="col">{{ item.post_due }}</td>
              <td class="col">{{ item.Amount }}</td>
              <td class="text-center col">
                <span
                  :class="
                    item.status == 'Paid'
                      ? paidColor
                      : item.status == 'Unpaid'
                      ? unpaidColor
                      : item.status == 'Overdue'
                      ? overdueColor
                      : item.status == 'Draft'
                      ? draftColor
                      : ''
                  "
                  >{{ item.status }}</span
                >
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "InvoiceTable",
  data() {
    return {
      inActiveClass:
        "button button-outline-primary text-base mr-3 px-3 rounded-md py-1",
      activeClass: "button button-primary text-base mr-3 px-3 rounded-md py-1",
      isActive: "page-1",
      searchInvoice: "",
      paidColor:
        "inline-block w-20 leading-8 bg-[rgba(135,228,96,0.2)] text-paid-color",
      unpaidColor:
        "inline-block w-20 leading-8 bg-[rgba(255,204,0,0.2)] text-unpaid-color",
      overdueColor:
        "inline-block w-20 leading-8 bg-[rgba(255,48,76,0.2)] text-overdue-color",
      draftColor: "inline-block w-20 leading-8 bg-gray-200 text-gray-400",
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