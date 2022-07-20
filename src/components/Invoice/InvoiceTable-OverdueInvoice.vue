<template>
  <div class="">
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
        <button
          v-ripple
          @click="$router.push('/import-invoices')"
          for="inputCsv"
          class="button button-outline-primary text-base"
        >
          Import File
        </button>
        <div class="my-auto">
          <button
            v-ripple
            @click="$router.push('/add-invoice')"
            class="button button-primary ml-4 text-base"
          >
            + Add New
          </button>
        </div>
      </div>
    </div>

    <div v-if="isLoading">
      <simple-loading-animation />
    </div>

    <div v-else class="w-full my-10 overflow-x-auto whitespace-nowrap">
      <table class="w-full">
        <thead class="bg-[rgba(155,109,255,0.1)]">
          <tr class="text-center">
            <td class="py-5 lg:px-0 px-10">No. Invoice</td>
            <td class="lg:px-0 px-10">Client</td>
            <td class="lg:px-0 px-10">Date</td>
            <td class="lg:px-0 px-10">Post Due</td>
            <td class="text-center lg:px-0 px-10">Amount</td>
            <td class="text-center lg:px-0 px-10">Status</td>
          </tr>
        </thead>
        <tbody v-if="items.length !== 0">
          <tr
            @click="$router.push(`/full-invoices/${item.id}`)"
            v-for="(item, index) in filteredDataInvoice"
            :key="index"
            class="
              text-center
              py-3
              my-10
              shadow-invoicein
              hover:bg-[rgba(155,109,255,0.2)]
              duration-300
              transition-all
              cursor-pointer
            "
          >
            <td class="py-5 lg:px-0 px-10">INV - {{ item.id }}</td>
            <td class="lg:px-0 px-10">{{ item.client }}</td>
            <td class="lg:px-0 px-10">{{ item.date }}</td>
            <td class="lg:px-0 px-10">{{ item.post_due }}</td>
            <td class="text-center lg:px-0 px-10">Rp {{ item.Amount }}</td>
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
        <tbody v-else>
          <tr
            @click="$router.push('/add-invoice')"
            class="
              text-center
              py-3
              my-10
              shadow-invoicein
              hover:bg-[rgba(155,109,255,0.2)]
              duration-300
              transition-all
              cursor-pointer
            "
          >
            <td colspan="6" class="py-5 lg:px-0 px-10">
              <empty-invoice />
            </td>
          </tr>
        </tbody>
      </table>
      <div
        :class="`${
          isShowModalJWT ? 'scale-100' : 'scale-0'
        } inset-0 bg-[rgba(0,0,0,0.5)] fixed flex justify-center items-center z-50`"
      >
        <JWTModal />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";
import EmptyInvoice from "../NotFound/EmptyInvoice.vue";
import JWTModal from "../JWTModal.vue";
export default {
  components: { SimpleLoadingAnimation, JWTModal, EmptyInvoice },
  name: "InvoiceTable",
  data() {
    return {
      isActive: "page-1",
      searchInvoice: "",
      isLoading: false,
      items: [],

      isShowModalJWT: false,
    };
  },
  computed: {
    filteredDataInvoice() {
      return this.items.filter((invoice) => {
        return (
          invoice.client
            .toLowerCase()
            .match(this.searchInvoice.toLowerCase()) ||
          invoice.id.toString().match(this.searchInvoice.toLowerCase())
        );
      });
    },
  },
  mounted() {
    this.fetchOverdueInvoice();
  },
  methods: {
    async fetchOverdueInvoice() {
      this.isLoading = true;
      await axios
        .get("api/v1/invoices")
        .then((res) => {
          let dataInvoice = res.data.data;
          console.log("overdue invoice : ", dataInvoice);
          this.items = dataInvoice.filter((data) => {
            return data.status === "OVERDUE";
          });
          this.isLoading = false;
        })
        .catch((err) => {
          console.log("err : ", err);
          if (err.response.status === 401) {
            this.isShowModalJWT = true;
          }
          this.isLoading = false;
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