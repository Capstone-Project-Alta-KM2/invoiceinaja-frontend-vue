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
            <tr class="text-left px-3 border-y-2 py-4 row mb-5">
              <td class="col">invoice#</td>
              <td class="col">Client</td>
              <td class="col">Date</td>
              <td class="col">Item</td>
              <td class="col">Post Due</td>
              <td class="col">Amount</td>
              <td class="text-center col">Status</td>
            </tr>

            <paginate
              v-if="dataInvoice.length != 0"
              id="table-invoice"
              name="invoices"
              :list="dataInvoice"
              :per="5"
            >
              <tr
                v-for="(item, index) in paginated('invoices')"
                :key="index"
                class="
                  text-left
                  row
                  py-3
                  px-3
                  my-10
                  shadow-invoicein
                  hover:bg-[#e3daf7]
                  duration-300
                  transition-all
                "
              >
                <td class="col">{{ item.invoice }}</td>
                <td class="col">{{ item.client_name }}</td>
                <td class="col">{{ item.date_invoice }}</td>
                <td class="col">{{ item.item }}</td>
                <td class="col">{{ item.post_due }}</td>
                <td class="col">{{ item.amount }}</td>
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
            </paginate>

            <paginate
              v-else-if="dataInvoice.length == 0"
              id="table-invoice"
              name="invoices"
              :list="dataInvoice"
              :per="5"
            >
              <tr class="text-center row py-3 my-10 shadow-invoicein">
                <td colspan="8">Data tidak ada</td>
              </tr>
            </paginate>
          </table>
        </div>
      </div>
    </div>
    <!-- {{ pages }} -->
    <paginate-links
      :classes="{
        ul: ['flex', 'justify-end', 'align-center', 'mx-3', 'my-4', 'text-md'],
        'ul.paginate-links>li': [
          'border-soft-purple',
          'border',
          'mr-3',
          'transition-all',
          'duration-300',
        ],
        'ul.paginate-links>li.active': [
          'bg-soft-purple',
          'rounded-md',
          'text-white',
          'transition-all',
          'duration-300',
        ],
        'ul.paginate-links>li>a': [
          'cursor-pointer',
          'text-soft-purple',
          'no-underline',
          'px-3',
          'leading-8',
        ],
      }"
      for="invoices"
      :limit="3"
      :hide-single-page="true"
    ></paginate-links>
  </div>
</template>

<script>
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
      paginate: ["invoices"],
      items: [
        {
          invoice: "INV-001",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },

        {
          invoice: "INV-002",
          client_name: "Restu",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Overdue",
        },
        {
          invoice: "INV-003",
          client_name: "Averian",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Draft",
        },
        {
          invoice: "INV-004",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-001",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },

        {
          invoice: "INV-002",
          client_name: "Restu",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Overdue",
        },
        {
          invoice: "INV-003",
          client_name: "Averian",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-004",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-005",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-006",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-004",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-001",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },

        {
          invoice: "INV-002",
          client_name: "Restu",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Overdue",
        },
        {
          invoice: "INV-003",
          client_name: "Averian",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-004",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-005",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-006",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-007",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-008",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Overdue",
        },
        {
          invoice: "INV-009",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-010",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-011",
          client_name: "Dickerson",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Overdue",
        },
        {
          invoice: "INV-012",
          client_name: "Larsen",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-013",
          client_name: "Geneva",
          date_invoice: "Jul 03, 2022",
          item: "Komputer",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-014",
          client_name: "Jami",
          date_invoice: "Jul 03, 2022",
          item: "Rumah",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Overdue",
        },
        {
          invoice: "INV-015",
          client_name: "Client 4",
          date_invoice: "Jul 03, 2022",
          item: "Sepeda",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
        {
          invoice: "INV-016",
          client_name: "Client 4",
          date_invoice: "Jul 03, 2022",
          item: "Item",
          post_due: "Sep 03,2022",
          amount: 250000,
          status: "Paid",
        },
      ],
    };
  },
  computed: {
    dataInvoice() {
      return this.items.filter((invoice) => {
        return (
          invoice.client_name
            .toLowerCase()
            .match(this.searchInvoice.toLowerCase()) ||
          invoice.item.toLowerCase().match(this.searchInvoice.toLowerCase()) ||
          invoice.invoice.toLowerCase().match(this.searchInvoice.toLowerCase())
        );
      });
    },
  },
  methods: {
    searchDataInvoice() {
      this.items = this.items.filter((data) => {
        return data.first_name
          .toLowerCase()
          .match(this.searchInvoice.toLowerCase());
      });
      console.log(this.items);
    },
  },
  mounted() {},
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