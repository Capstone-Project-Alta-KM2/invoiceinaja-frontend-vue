<template>
  <form
    action=""
    @submit.prevent="addInvoices"
    class="text-left border border-black py-5 px-3 rounded-lg"
  >
    <invoice-date-and-no-comp v-model="dateInvoiceAndNo" />

    <div class="my-5">
      <h3 class="font-semibold text-lg">From</h3>
      <div class="mt-3">
        <p class="leading-3">Indah Aisyah</p>
        <p class="leading-3gaa">Jl. Kebangn</p>
        <p class="leading-3">Jakarta</p>
      </div>
    </div>

    <form-data-client v-model="clients" />

    <div class="flex flex-col mt-5 mb-3">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="border-b bg-[rgba(155,109,255,0.1)]">
                <tr>
                  <th
                    scope="col"
                    class="
                      text-sm
                      font-semibold
                      text-gray-900
                      px-6
                      py-4
                      text-center
                    "
                  >
                    Item Name
                  </th>
                  <th
                    scope="col"
                    class="
                      text-sm
                      font-semibold
                      text-gray-900
                      px-6
                      py-4
                      text-center
                    "
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    class="
                      text-sm
                      font-semibold
                      text-gray-900
                      px-6
                      py-4
                      text-center
                    "
                  >
                    Qty
                  </th>
                  <th
                    scope="col"
                    class="
                      text-sm
                      font-semibold
                      text-gray-900
                      px-6
                      py-4
                      text-center
                    "
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b odd:bg-white even:bg-[rgba(155,109,255,0.1)]"
                  v-for="(invoice, index) in invoices"
                  :key="index"
                >
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-sm
                      font-medium
                      text-center text-gray-900
                    "
                  >
                    <input
                      type="text"
                      name=""
                      v-model="invoice.item_name"
                      id=""
                      class="
                        form-add-invoice
                        mx-auto
                        text-center
                        rounded-none
                        border-dashed
                      "
                    />
                  </td>
                  <td
                    class="
                      text-sm text-gray-900
                      font-light
                      px-6
                      text-center
                      py-4
                      whitespace-nowrap
                    "
                  >
                    <input
                      type="number"
                      name=""
                      v-model="invoice.price"
                      id=""
                      @change="validateNumber"
                      class="
                        form-add-invoice
                        mx-auto
                        rounded-none
                        text-center
                        border-dashed
                        validate
                      "
                    />
                    <div v-if="validateMessage">
                      {{ validateMessage }}
                    </div>
                  </td>
                  <td
                    class="
                      text-sm text-gray-900
                      font-light
                      px-6
                      text-center
                      py-4
                      whitespace-nowrap
                    "
                  >
                    <input
                      type="number"
                      name=""
                      v-model="invoice.qty"
                      @input="validateNumber"
                      id=""
                      class="
                        w-12
                        form-add-invoice
                        mx-auto
                        text-center
                        rounded-none
                        border-dashed
                        validate
                      "
                    />
                    <div v-if="validateMessage">
                      {{ validateMessage }}
                    </div>
                  </td>
                  <td
                    class="
                      text-sm text-gray-900
                      font-light
                      px-6
                      text-center
                      py-4
                      whitespace-nowrap
                      flex
                      items-center
                    "
                  >
                    <p
                      class="
                        form-add-invoice
                        mx-auto
                        rounded-none
                        leading-6
                        my-2
                        text-center
                        border-dashed
                        w-44
                        total
                      "
                    >
                      Rp. {{ (invoice.total = invoice.price * invoice.qty) }}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 cursor-pointer text-soft-purple"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      @click="deleteField(index)"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-center my-5">
              <button
                class="button button-primary w-96"
                type="button"
                v-ripple
                @click="addInvoiceField"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        text-2xl
        font-semibold
        flex
        justify-end
        items-center
        px-10
        pt-3
        border-y-4 border-y-[#B0B0B0]
        mb-5
      "
    >
      <p>Total :</p>
      <p class="pl-16">Rp. {{ totalAllInvoices }}</p>
    </div>

    <div class="text-right px-4">
      <button
        v-ripple
        type="submit"
        name=""
        id=""
        class="button button-outline-primary"
      >
        Save as Draft
      </button>
      <button
        type="button"
        v-ripple
        class="button button-primary ml-5 ripple-effect"
      >
        Preview Invoice
      </button>
    </div>
  </form>
</template>

<script>
import InvoiceDateAndNoComp from "./InvoiceDateAndNoComp-NewInvoice.vue";
import FormDataClient from "./DataClientFormComp.vue";
export default {
  components: {
    InvoiceDateAndNoComp,
    FormDataClient,
  },
  data() {
    return {
      totalAllInvoices: 0,
      invoices: [
        {
          item_name: "",
          price: 0,
          qty: 0,
          total: 0,
        },
      ],
      validateMessage: "",
      dateInvoiceAndNo: {
        noInvoice: "",
        dateInvoice: "",
        dueDate: "",
      },
      clients: {
        invoiceTo: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
        company: "",
      },
    };
  },
  methods: {
    addInvoiceField() {
      this.invoices.push({ price: 0, qty: 0 });
    },
    deleteField(index) {
      console.log(index);
      this.invoices.splice(index, 1);
    },
    addInvoices() {
      const invoicesData = {
        no_and_date_invoice: this.dateInvoiceAndNo,
        client_information: this.clients,
        invoices_information: this.invoices,
        total_all_invoices: this.totalAllInvoices,
        status_invoice: "Unpaid",
      };
      console.log(invoicesData);
    },
    validateNumber() {
      const numberFormat = /[0-9]/g;
      const validateClass = document.getElementsByClassName("validate");
      for (let i = 0; i < validateClass.length; i++) {
        if (!validateClass[i].value.match(numberFormat)) {
          this.validateMessage = "Mohon masukkan angka";
        } else {
          this.validateMessage = "";
        }
      }
    },
  },
  updated() {
    let total = 0;
    this.invoices.forEach((invoice) => {
      return (total += invoice.total);
    });
    this.totalAllInvoices = total;
    console.log("perubahan total : ", total);
  },
};
</script>

<style>
</style>