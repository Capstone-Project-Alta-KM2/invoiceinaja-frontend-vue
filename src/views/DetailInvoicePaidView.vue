<template>
  <div class="container mx-auto bg-white my-10 p-4 rounded-lg">
    <div class="my-5">
      <h1 class="mb-8 text-3xl font-semibold">Detail Invoice</h1>
      <!-- Invoice no dan status -->
      <div class="flex items-center space-x-10">
        <div>
          <label for="" class="font-semibold mb-2">Invoice No</label>
          <div class="flex items-center relative">
            <span class="px-2 py-2 text-xl font-semibold">#</span>
            INV- {{ id }}
          </div>
        </div>
        <p
          :class="`${
            status == 'PAID'
              ? 'bg-[rgba(135,228,96,0.2)] text-paid-color'
              : status == 'UNPAID'
              ? 'bg-[rgba(255,204,0,0.2)] text-unpaid-color'
              : status == 'OVERDUE'
              ? 'bg-[rgba(255,48,76,0.2)] text-overdue-color'
              : status == 'DRAFT'
              ? 'bg-gray-200 text-gray-400'
              : ''
          }  
          font-semibold
            px-4
            py-2
            rounded-lg`"
        >
          {{ status }}
        </p>
      </div>

      <div class="flex flex-col space-y-5">
        <!-- from - invoice date - due date - data Clients-->
        <div
          class="
            grid grid-cols-3
            gap-y-8
            my-5
            justify-items-start
            place-items-start
          "
        >
          <div class="text-left">
            <label class="font-semibold text-lg">From</label>
            <p class="">Indah Aisyah</p>
            <p class="">Jl. Kebangn</p>
            <p class="">Jakarta</p>
          </div>
          <div>
            <label for="" class="font-semibold mb-2">Invoice Date</label>
            <p>{{ dateInvoiceAndNo.dateInvoice }}</p>
          </div>
          <div>
            <label for="" class="font-semibold mb-2">Due Date</label>
            <p>{{ dateInvoiceAndNo.dueDate }}</p>
          </div>
          <div class="text-left">
            <label for="" class="font-semibold mb-2">Invoice To</label>
            <p>{{ client.fullname }}</p>
          </div>
          <div class="text-left">
            <label for="" class="font-semibold mb-2">Email</label>
            <p>{{ client.email }}</p>
          </div>
          <div class="text-left">
            <label for="" class="font-semibold mb-2">Street Address</label>
            <p>{{ client.address }}</p>
          </div>
          <div class="text-left">
            <label for="" class="font-semibold mb-2">City</label>
            <p>{{ client.city }}</p>
          </div>
          <div class="text-left">
            <label for="" class="font-semibold mb-2">Zip Code</label>
            <p>{{ client.zipCode }}</p>
          </div>
          <div class="text-left">
            <label for="" class="font-semibold mb-2">Company</label>
            <p>{{ client.company }}</p>
          </div>
        </div>
      </div>

      <!-- Data Invoices -->
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
                    class="
                      border-b
                      odd:bg-white
                      even:bg-[rgba(155,109,255,0.1)]
                    "
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
                      <p
                        class="
                          form-add-invoice
                          h-0
                          py-6
                          flex
                          items-center
                          justify-center
                          mx-auto
                          rounded-none
                          my-2
                          text-center
                          border-dashed
                          w-52
                        "
                      >
                        {{ invoice.ItemName }}
                      </p>
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
                      <p
                        class="
                          form-add-invoice
                          h-0
                          py-6
                          flex
                          items-center
                          justify-center
                          mx-auto
                          rounded-none
                          my-2
                          text-center
                          border-dashed
                          w-52
                          total
                        "
                      >
                        {{ invoice.Price }}
                      </p>
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
                      <p
                        class="
                          form-add-invoice
                          h-0
                          py-6
                          flex
                          items-center
                          justify-center
                          mx-auto
                          rounded-none
                          leading-6
                          my-2
                          text-center
                          border-dashed
                          w-12
                          total
                        "
                      >
                        {{ invoice.Quantity }}
                      </p>
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
                          h-0
                          py-6
                          flex
                          items-center
                          justify-center
                          mx-auto
                          rounded-none
                          leading-6
                          my-2
                          text-center
                          border-dashed
                          w-52
                          total
                        "
                      >
                        {{ (invoice.total = invoice.Price * invoice.Quantity) }}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
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
          py-5
          border-y-2 border-y-[#B0B0B0]
          mb-5
        "
      >
        <p>Total :</p>
        <p class="pl-16">Rp. {{ totalAllInvoices }}</p>
      </div>

      <!-- Button Actions -->
      <button
        @click="handlerPayments"
        type="button"
        v-ripple
        class="
          button
          mt-10
          w-full
          flex
          space-x-2
          justify-center
          items-center
          button-primary
        "
      >
        <div v-if="isLoading">
          <simple-loading-animation />
        </div>
        <p class="flex mx-auto items-center justify-center space-x-2">
          Choose Payments
        </p>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SimpleLoadingAnimation from "@/components/SimpleLoadingAnimation.vue";

export default {
  components: { SimpleLoadingAnimation },
  data() {
    return {
      isLoading: false,

      totalAllInvoices: 0,
      id: "",
      status: "",
      invoices: "",
      validateMessage: "",
      dateInvoiceAndNo: {
        noInvoice: "",
        dateInvoice: "",
        dueDate: "",
      },
      client: {
        fullname: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
        company: "",
      },
    };
  },

  methods: {
    async handlerPayments() {
      this.isLoading = true;
      console.log("payments process");
      const data = {
        invoice_id: this.id,
        total_amount: this.totalAllInvoices,
      };
      await axios
        .post("api/v1/invoice_payments", data)
        .then((res) => {
          console.log("res : ", res);
          window.open(res.data.data.payment_url, "_blank");
          this.isLoading = false;
        })
        .catch((err) => {
          console.log("err : ", err.response);
          this.isLoading = true;
        });
    },
    async deleteInvoice() {
      let a = confirm("Yakin untuk hapus ?");
      if (a) {
        await axios.delete(`/api/v1/invoices/${this.$route.params.no_invoice}`);
        this.$router.push("/invoice");
      }
    },

    addInvoiceField() {
      this.invoices.push({ price: 0, qty: 0 });
    },
    deleteField(index) {
      console.log(index);
      this.invoices.splice(index, 1);
    },

    async fetchDataInvoices() {
      await axios
        .get(`/api/v1/clients/invoices/${this.$route.params.no_invoice}`)
        .then((res) => {
          let data = res.data.data;
          console.log("data : ", data);
          this.client.fullname = data.Client.Fullname;
          this.client.email = data.Client.Email;
          this.client.address = data.Client.Address;
          this.client.city = data.Client.City;
          this.client.zipCode = data.Client.ZipCode;
          this.client.company = data.Client.Company;
          this.invoices = data.Items;
          this.id = data.ID;
          this.status = data.Status;

          this.dateInvoiceAndNo.dateInvoice = data.InvoiceDate;
          this.dateInvoiceAndNo.dueDate = data.InvoiceDue;

          this.totalAllInvoices = data.TotalAmount;
        })
        .catch((err) => {
          console.log("err : ", err);
        });
    },
  },
  mounted() {
    this.fetchDataInvoices();
  },
};
</script>

<style>
</style>