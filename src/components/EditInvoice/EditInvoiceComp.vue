<template>
  <form
    action=""
    @submit.prevent="editInvoices"
    class="text-left px-3 rounded-lg"
  >
    <h1 class="text-2xl font-semibold mb-5">New Invoice</h1>
    <!-- <invoice-date v-model="dateInvoiceAndNo" /> -->
    <div class="flex space-x-10 mb-5">
      <div>
        <h3 class="font-semibold text-lg">From</h3>
        <div class="mt-3">
          <p class="leading-3">Indah Aisyah</p>
          <p class="leading-3gaa">Jl. Kebangn</p>
          <p class="leading-3">Jakarta</p>
        </div>
      </div>
      <div>
        <label for="" class="font-semibold mb-2">Invoice Date</label>
        <input
          type="date"
          name=""
          id="invoiceDate"
          v-model="invoice_date"
          ref="dateInvoice"
          class="form-add-invoice"
        />
      </div>
      <div>
        <label for="" class="font-semibold mb-2">Due Date</label>
        <input
          type="date"
          name=""
          id=""
          v-model="invoice_due"
          ref="dueDate"
          class="form-add-invoice"
        />
      </div>
    </div>

    <!-- <form-data-client v-model="clients" /> -->
    <div class="grid grid-cols-3 gap-y-8">
      <div class="">
        <label for="" class="font-semibold mb-2">Invoice To</label>
        <input
          type="text"
          list="clientList"
          @mousedown="fetchDataClient"
          name=""
          v-model="clients.fullname"
          ref="invoiceTo"
          id=""
          class="form-add-invoice w-72 transition-all duration-300"
        />
        <div>
          <ul v-for="clientData in dataClients" :key="clientData.id">
            <li @click="generate(clientData.id)">{{ clientData.fullname }}</li>
          </ul>
        </div>
      </div>
      <div class="">
        <label for="" class="font-semibold mb-2">Email</label>
        <p class="form-add-invoice w-72" v-html="clients.email"></p>
      </div>
      <div class="">
        <label for="" class="font-semibold mb-2">Street Address</label>
        <p class="form-add-invoice w-72" v-html="clients.address"></p>
      </div>
      <div class="">
        <label for="" class="font-semibold mb-2">City</label>
        <p class="form-add-invoice w-72 text-black" v-html="clients.city"></p>
      </div>
      <div class="">
        <label for="" class="font-semibold mb-2">Zip Code</label>
        <p
          type="text"
          name=""
          id=""
          ref="zipCode"
          class="form-add-invoice w-72"
          v-html="clients.zip_code"
        ></p>
      </div>
      <div class="">
        <label for="" class="font-semibold mb-2">Company</label>
        <p
          type="text"
          name=""
          ref="company"
          id=""
          class="form-add-invoice w-72"
          v-html="clients.company"
        ></p>
      </div>
    </div>
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
                    quantity
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
                      v-model="invoice.quantity"
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
                        flex
                        items-center
                        justify-center
                        rounded-none
                        text-center
                        border-dashed
                        w-44
                      "
                    >
                      Rp.
                      {{ (invoice.total = invoice.price * invoice.quantity) }}
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
        @click="previewInvoice"
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
import axios from "axios";

// import InvoiceDate from "./InvoiceDate-NewInvoice.vue";
// import FormDataClient from "./DataClientFormComp.vue";
export default {
  components: {
    // InvoiceDate,
    // FormDataClient,
  },
  data() {
    return {
      dataClients: [],
      clients: {
        id: "",
        fullname: "",
        email: "",
        address: "",
        city: "",
        zip_code: "",
        company: "",
      },
      showClients: false,
      totalAllInvoices: 0,
      invoices: [
        {
          item_name: "",
          price: 0,
          quantity: 0,
          total: 0,
        },
      ],
      validateMessage: "",
      invoice_date: "",
      invoice_due: "",
    };
  },
  computed: {
    dataInvoice() {
      return this.$store.state.preview;
    },
  },
  methods: {
    previewInvoice() {
      console.log("dapat ga nilai totalnya : ", this.invoices);
      const data = {
        invoice: {
          client_id: this.clients,
          total_amount: this.totalAllInvoices,
          invoice_date: this.invoice_date,
          invoice_due: this.invoice_due,
        },
        detail_invoice: this.invoices,
      };
      this.$store.dispatch("actionOfPreview", data);
      this.$router.push("/preview-invoice");
    },
    addInvoiceField() {
      this.invoices.push({ price: 0, quantity: 0 });
    },
    deleteField(index) {
      console.log(index);
      this.invoices.splice(index, 1);
    },
    async editInvoicess() {
      const newArrInvoices = this.invoices.map((invo) => {
        return {
          item_name: invo.item_name,
          price: Number(invo.price),
          quantity: Number(invo.quantity),
        };
      });
      const invoicesData = {
        invoice: {
          client_id: this.clients.id,
          total_amount: this.totalAllInvoices,
          invoice_date: this.invoice_date,
          invoice_due: this.invoice_due,
        },
        detail_invoice: newArrInvoices,
      };
      await axios.post("api/v1/invoices", invoicesData).then((res) => {
        console.log("nambah : ", res);
      });
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
    async fetchDataClient() {
      await axios.get("api/v1/clients").then((res) => {
        this.dataClients = res.data.data;
      });
    },
    generate(id) {
      console.log(id);
      let filteredClients = this.dataClients.filter((client) => {
        return client.id === id;
      });
      console.log("hasil filter : ", filteredClients);
      this.clients.id = filteredClients[0].id;
      this.clients.fullname = filteredClients[0].fullname;
      this.clients.email = filteredClients[0].email;
      this.clients.address = filteredClients[0].address;
      this.clients.city = filteredClients[0].city;
      this.clients.zip_code = filteredClients[0].zip_code;
      this.clients.company = filteredClients[0].company;
      this.dataClients = [];
    },
    fetchDataInvoice() {
      this.clients.fullname = this.dataInvoice.invoice.client_id.fullname;
      this.clients.email = this.dataInvoice.invoice.client_id.email;
      this.clients.address = this.dataInvoice.invoice.client_id.address;
      this.clients.city = this.dataInvoice.invoice.client_id.city;
      this.clients.zip_code = this.dataInvoice.invoice.client_id.zip_code;
      this.clients.company = this.dataInvoice.invoice.client_id.company;

      this.invoices = this.dataInvoice.detail_invoice;
      this.invoice_date = this.dataInvoice.invoice.invoice_date;
      this.invoice_due = this.dataInvoice.invoice.invoice_due;
    },
  },
  mounted() {
    this.fetchDataInvoice();
  },
  updated() {
    let total = 0;
    this.invoices.forEach((invoice) => {
      return (total += invoice.total);
    });
    this.totalAllInvoices = total;
  },
};
</script>

<style>
</style>