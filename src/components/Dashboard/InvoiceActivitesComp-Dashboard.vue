<template>
  <div class="flex flex-col p-4">
    <h2 class="text-left sm:text-xl lg:text-2xl font-semibold">
      Invoice Activity
    </h2>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead class="border-y">
              <tr>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Invoice#
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Client
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Date
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Jumlah
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Status
                </th>
              </tr>
            </thead>
            <template v-if="isLoading">
              <tbody>
                <tr
                  class="
                    cursor-pointer
                    text-left
                    hover:bg-soft-purple-outline-hover
                    transition-all
                    duration-300
                  "
                >
                  <td
                    colspan="5"
                    class="
                      px-6
                      text-center
                      py-4
                      whitespace-nowrap
                      text-sm
                      font-medium
                      text-gray-900
                      mx-auto
                    "
                  >
                    <simple-loading-animation />
                  </td>
                </tr>
              </tbody>
            </template>
            <template v-else>
              <tbody v-if="dataInvoiceActivity.length !== 0">
                <tr
                  @click="
                    $router.push(
                      `/invoice/full-invoices/${invoiceData.invoice_data.id}`
                    )
                  "
                  class="
                    cursor-pointer
                    text-left
                    hover:bg-soft-purple-outline-hover
                    transition-all
                    duration-300
                  "
                  v-for="invoiceData in dataInvoiceActivity"
                  :key="invoiceData.invoice_data.id"
                >
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-sm
                      font-medium
                      text-gray-900
                    "
                  >
                    {{ invoiceData.invoice_data.id }}
                  </td>
                  <td
                    class="
                      text-sm text-gray-900
                      font-light
                      px-6
                      py-4
                      whitespace-nowrap
                    "
                  >
                    {{ invoiceData.invoice_data.client_name }}
                  </td>
                  <td
                    class="
                      text-sm text-gray-900
                      font-light
                      px-6
                      py-4
                      whitespace-nowrap
                    "
                  >
                    {{ invoiceData.invoice_data.date }}
                  </td>
                  <td
                    class="
                      text-sm text-gray-900
                      font-light
                      px-6
                      py-4
                      whitespace-nowrap
                    "
                  >
                    Rp {{ invoiceData.invoice_data.jumlah }}
                  </td>
                  <td
                    class="
                      text-sm text-gray-900
                      font-light
                      px-6
                      py-4
                      text-center
                      whitespace-nowrap
                    "
                  >
                    <span
                      :class="`${
                        invoiceData.invoice_data.status === 'PAID'
                          ? 'bg-[rgba(135,228,96,0.2)] text-paid-color'
                          : invoiceData.invoice_data.status === 'UNPAID'
                          ? 'bg-[rgba(255,204,0,0.2)] text-unpaid-color'
                          : invoiceData.invoice_data.status === 'OVERDUE'
                          ? 'bg-[rgba(255,48,76,0.2)] text-overdue-color'
                          : ''
                      } 
                  inline-block w-20 leading-8 status`"
                    >
                      {{ invoiceData.invoice_data.status }}
                    </span>
                  </td>
                </tr>
              </tbody>

              <tbody v-else>
                <tr
                  class="
                    cursor-pointer
                    text-left
                    hover:bg-soft-purple-outline-hover
                    transition-all
                    duration-300
                  "
                >
                  <td
                    @click="$router.push('/add-invoice')"
                    class="
                      px-6
                      text-center
                      py-4
                      whitespace-nowrap
                      text-sm
                      font-medium
                      text-gray-900
                      mx-auto
                    "
                    colspan="5"
                  >
                    <empty-invoice />
                  </td>
                </tr>
              </tbody>
            </template>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  query,
  getDocs,
  where,
  limit,
  orderBy,
} from "firebase/firestore";
import db from "@/firebase/firebase";

import EmptyInvoice from "../NotFound/EmptyInvoice.vue";
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";
export default {
  components: { EmptyInvoice, SimpleLoadingAnimation },
  data() {
    return {
      invoiceId: "",
      clientName: "",
      DateInvoice: "",
      Jumlah: 0,
      Status: "",
      dataInvoiceActivity: [],
      isLoading: true,
    };
  },
  methods: {
    async fetchDataFromFirebase() {
      const q = query(
        collection(db, "new_invoice"),
        where("user_id", "==", this.$store.state.usersInfo.id),
        limit(5),
        orderBy("date_sort", "desc")
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.dataInvoiceActivity.push(doc.data());
      });
      this.isLoading = false;
    },
  },
  async mounted() {
    this.fetchDataFromFirebase();
  },
};
</script>

<style>
</style>