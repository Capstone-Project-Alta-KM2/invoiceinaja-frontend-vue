<template>
  <div class="container mx-auto bg-white my-10 p-4 rounded-lg">
    <back-comp />
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
          {{ status.toLowerCase() }}
        </p>
      </div>

      <!-- from - invoice date - due date -->
      <div
        class="
          grid grid-cols-3
          gap-y-8
          my-5
          justify-items-start
          place-items-center
        "
      >
        <div class="">
          <h3 class="font-semibold text-lg">From</h3>
          <div class="mt-3">
            <p class="leading-3">Indah Aisyah</p>
            <p class="leading-3">Jl. Kebangn</p>
            <p class="leading-3">Jakarta</p>
          </div>
        </div>
        <div>
          <label for="" class="font-semibold mb-2">Invoice Date</label>
          <p>{{ dateInvoiceAndNo.dateInvoice }}</p>
        </div>
        <div>
          <label for="" class="font-semibold mb-2">Due Date</label>
          <p>{{ dateInvoiceAndNo.dueDate }}</p>
        </div>
      </div>

      <!-- Data Clients -->
      <div class="grid grid-cols-3 gap-y-8">
        <div class="">
          <label for="" class="font-semibold mb-2">Invoice To</label>
          <p>{{ client.fullname }}</p>
        </div>
        <div class="">
          <label for="" class="font-semibold mb-2">Email</label>
          <p>{{ client.email }}</p>
        </div>
        <div class="">
          <label for="" class="font-semibold mb-2">Street Address</label>
          <p>{{ client.address }}</p>
        </div>
        <div class="">
          <label for="" class="font-semibold mb-2">City</label>
          <p>{{ client.city }}</p>
        </div>
        <div class="">
          <label for="" class="font-semibold mb-2">Zip Code</label>
          <p>{{ client.zipCode }}</p>
        </div>
        <div class="">
          <label for="" class="font-semibold mb-2">Company</label>
          <p>{{ client.company }}</p>
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
                        {{ invoice.item_name }}
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
                        {{ invoice.price }}
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
                        {{ invoice.quantity }}
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
                        {{ invoice.total }}
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
          pt-3
          border-y-4 border-y-[#B0B0B0]
          mb-5
        "
      >
        <p>Total :</p>
        <p class="pl-16">Rp. {{ totalAllInvoices }}</p>
      </div>

      <!-- Button Actions -->
      <div class="relative flex justify-end">
        <button
          @click="isShow = !isShow"
          type="button"
          v-click-outside="onClickOutside"
          v-ripple
          class="button flex items-center button-primary"
        >
          <span class="mr-3"> Payments </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import backComp from "@/components/NewInvoice/backComp.vue";
import Vue from "vue";
import axios from "axios";
Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});
export default {
  components: { backComp },
  data() {
    return {
      isShow: false,
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
    async deleteInvoice() {
      let a = confirm("Yakin untuk hapus ?");
      if (a) {
        await axios.delete(`/api/v1/invoices/${this.$route.params.no_invoice}`);
        this.$router.push("/invoice");
      }
    },
    onClickOutside() {
      this.isShow = false;
      console.log("clicked outside");
    },
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
    async fetchDataClients(clientName) {
      await axios.get("api/v1/clients").then((res) => {
        let hasilFilter = res.data.data.filter((data) => {
          return data.fullname === clientName;
        });
        this.client.email = hasilFilter[0].email;
        this.client.address = hasilFilter[0].address;
        this.client.city = hasilFilter[0].city;
        this.client.company = hasilFilter[0].company;
        this.client.zipCode = hasilFilter[0].zip_code;
      });
    },
    async fetchDataInvoices() {
      await axios
        .get(`/api/v1/invoices/${this.$route.params.no_invoice}`)
        .then((res) => {
          let data = res.data.data;
          console.log("data : ", data);
          this.client.fullname = data.client;
          this.fetchDataClients(data.client);
          this.invoices = data.Items;
          this.id = data.id;
          this.status = data.status;

          this.dateInvoiceAndNo.dateInvoice = data.date;
          this.dateInvoiceAndNo.dueDate = data.post_due;

          this.totalAllInvoices = data.Amount;
        })
        .catch((err) => {
          console.log("err : ", err.response);
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