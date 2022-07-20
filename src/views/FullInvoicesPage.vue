<template>
  <div class="container bg-white my-10 p-4 rounded-lg">
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
          text-left
          justify-items-start
          place-items-center
        "
      >
        <div class="">
          <h3 class="font-semibold text-lg">From</h3>
          <div class="">
            <p class="">Indah Aisyah</p>
            <p class="">Jl. Kebangn</p>
            <p class="">Jakarta</p>
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
          items-center
          justify-end
          space-x-4
          px-10
          py-4
          border-y-4 border-y-[#B0B0B0]
          mb-5
        "
      >
        <p>Total :</p>
        <p class="">Rp. {{ totalAllInvoices }}</p>
      </div>

      <!-- Button Actions -->
      <div class="mx-auto">
        <button
          v-ripple
          @click="switchModalDelete"
          type="button"
          class="flex items-center mx-auto button button-outline-primary"
        >
          <svg
            class="mr-4"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5625 7.5625C7.9422 7.5625 8.25 7.8703 8.25 8.25V16.5C8.25 16.8797 7.9422 17.1875 7.5625 17.1875C7.1828 17.1875 6.875 16.8797 6.875 16.5V8.25C6.875 7.8703 7.1828 7.5625 7.5625 7.5625Z"
              fill="#7C40FF"
            />
            <path
              d="M11 7.5625C11.3797 7.5625 11.6875 7.8703 11.6875 8.25V16.5C11.6875 16.8797 11.3797 17.1875 11 17.1875C10.6203 17.1875 10.3125 16.8797 10.3125 16.5V8.25C10.3125 7.8703 10.6203 7.5625 11 7.5625Z"
              fill="#7C40FF"
            />
            <path
              d="M15.125 8.25C15.125 7.8703 14.8172 7.5625 14.4375 7.5625C14.0578 7.5625 13.75 7.8703 13.75 8.25V16.5C13.75 16.8797 14.0578 17.1875 14.4375 17.1875C14.8172 17.1875 15.125 16.8797 15.125 16.5V8.25Z"
              fill="#7C40FF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.9375 4.125C19.9375 4.88439 19.3219 5.5 18.5625 5.5H17.875V17.875C17.875 19.3938 16.6438 20.625 15.125 20.625H6.875C5.35622 20.625 4.125 19.3938 4.125 17.875V5.5H3.4375C2.67811 5.5 2.0625 4.88439 2.0625 4.125V2.75C2.0625 1.99061 2.67811 1.375 3.4375 1.375H8.25C8.25 0.615609 8.86561 0 9.625 0H12.375C13.1344 0 13.75 0.615609 13.75 1.375H18.5625C19.3219 1.375 19.9375 1.99061 19.9375 2.75V4.125ZM5.6623 5.5L5.5 5.58115V17.875C5.5 18.6344 6.11561 19.25 6.875 19.25H15.125C15.8844 19.25 16.5 18.6344 16.5 17.875V5.58115L16.3377 5.5H5.6623ZM3.4375 4.125V2.75H18.5625V4.125H3.4375Z"
              fill="#7C40FF"
            />
          </svg>

          <span class="font-semibold text-soft-purple"> Delete Invoice</span>
        </button>
      </div>
      <!-- <div class="relative flex justify-end">
        <button
          @click="isShow = !isShow"
          type="button"
          v-click-outside="onClickOutside"
          v-ripple
          class="button flex items-center button-primary"
        >
          <span class="mr-3"> Actions </span>
          <svg
            :class="isShow == true ? 'rotate-180' : 'rotate-0'"
            class="transition-all duration-300"
            width="21"
            height="12"
            viewBox="0 0 21 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.56488 11.467L10.5089 4.39636L17.453 11.467C18.151 12.1777 19.2785 12.1777 19.9765 11.467C20.6745 10.7563 20.6745 9.6082 19.9765 8.8975L11.7617 0.533035C11.0638 -0.177671 9.93624 -0.177671 9.23825 0.533035L1.02349 8.8975C0.325504 9.60821 0.325504 10.7563 1.02349 11.467C1.72148 12.1595 2.86689 12.1777 3.56488 11.467Z"
              fill="white"
            />
          </svg>
        </button>
        <div
          :class="`${isShow ? 'max-h-72  border-2' : 'max-h-0 border-none'}
          flex
            transition-all
            duration-300
            absolute
            -top-28
            -right-0
            overflow-hidden
            bg-white
            flex-col
            border-soft-purple
            rounded-lg
          `"
        >
          <button
            type="button"
            @click="switchModalDelete"
            v-ripple
            class="
              flex
              items-center
              hover:bg-[#ebe2ff]
              pr-10
              pl-4
              transition-all
              duration-300
              py-3
            "
          >
            <svg
              class="mr-4"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5625 7.5625C7.9422 7.5625 8.25 7.8703 8.25 8.25V16.5C8.25 16.8797 7.9422 17.1875 7.5625 17.1875C7.1828 17.1875 6.875 16.8797 6.875 16.5V8.25C6.875 7.8703 7.1828 7.5625 7.5625 7.5625Z"
                fill="#7C40FF"
              />
              <path
                d="M11 7.5625C11.3797 7.5625 11.6875 7.8703 11.6875 8.25V16.5C11.6875 16.8797 11.3797 17.1875 11 17.1875C10.6203 17.1875 10.3125 16.8797 10.3125 16.5V8.25C10.3125 7.8703 10.6203 7.5625 11 7.5625Z"
                fill="#7C40FF"
              />
              <path
                d="M15.125 8.25C15.125 7.8703 14.8172 7.5625 14.4375 7.5625C14.0578 7.5625 13.75 7.8703 13.75 8.25V16.5C13.75 16.8797 14.0578 17.1875 14.4375 17.1875C14.8172 17.1875 15.125 16.8797 15.125 16.5V8.25Z"
                fill="#7C40FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9375 4.125C19.9375 4.88439 19.3219 5.5 18.5625 5.5H17.875V17.875C17.875 19.3938 16.6438 20.625 15.125 20.625H6.875C5.35622 20.625 4.125 19.3938 4.125 17.875V5.5H3.4375C2.67811 5.5 2.0625 4.88439 2.0625 4.125V2.75C2.0625 1.99061 2.67811 1.375 3.4375 1.375H8.25C8.25 0.615609 8.86561 0 9.625 0H12.375C13.1344 0 13.75 0.615609 13.75 1.375H18.5625C19.3219 1.375 19.9375 1.99061 19.9375 2.75V4.125ZM5.6623 5.5L5.5 5.58115V17.875C5.5 18.6344 6.11561 19.25 6.875 19.25H15.125C15.8844 19.25 16.5 18.6344 16.5 17.875V5.58115L16.3377 5.5H5.6623ZM3.4375 4.125V2.75H18.5625V4.125H3.4375Z"
                fill="#7C40FF"
              />
            </svg>

            <span class="font-semibold text-soft-purple"> Delete </span>
          </button>
        </div>
      </div> -->
    </div>
    <div
      class="
        fixed
        inset-0
        z-50
        bg-black bg-opacity-10
        min-w-full min-h-screen
        flex
        justify-center
        items-center
      "
      :class="
        isModalDeleteShow ? 'dialog-animation-show' : 'dialog-animation-hide'
      "
    >
      <delete-confirm-modal
        :message="`Are you sure to delete this invoice ?`"
        :loading="isLoading"
        @executeAction="deleteInvoice"
        @closeModalDelete="switchModalDelete"
      ></delete-confirm-modal>
    </div>
  </div>
</template>

<script>
import backComp from "@/components/NewInvoice/backComp.vue";
import Vue from "vue";
import axios from "axios";
import DeleteConfirmModal from "@/components/Modal-Comp/DeleteConfirmModal.vue";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "@firebase/firestore";
import db from "../firebase/firebase";

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
  components: {
    backComp,
    DeleteConfirmModal,
  },
  data() {
    return {
      idDataFirestore: "",

      isShow: false,
      isModalDeleteShow: false,

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
    async deleteInvoice() {
      this.isLoading = true;

      let date = new Date().toISOString().slice(0, 10);

      //Add data to firebase
      await addDoc(collection(db, "recent_activities"), {
        message: "Invoice has been deleted",
        user_id: this.$store.state.usersInfo.id,
        created_at: date,
        id_invoice: this.$route.params.no_invoice,
        date_sort: Date.now(),
      });

      //delete data from firebase
      let hasilDelete = await deleteDoc(
        doc(db, "new_invoice", this.idDataFirestore)
      );
      console.log("hasil delete : ", hasilDelete);
      await axios.delete(`/api/v1/invoices/${this.$route.params.no_invoice}`);
      this.isLoading = false;
      this.$router.push("/invoice");
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
      await axios.get("/api/v1/clients").then((res) => {
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
    async fetchIdFirebaseFromFirestore() {
      const q = query(
        collection(db, "new_invoice"),
        where("id_invoice", "==", Number(this.$route.params.no_invoice))
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.idDataFirestore = doc.id;
      });
    },
    async fetchDataInvoices() {
      await axios
        .get(`/api/v1/invoices/${this.$route.params.no_invoice}`)
        .then(async (res) => {
          this.fetchIdFirebaseFromFirestore();

          let data = res.data.data;
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
    switchModalDelete() {
      this.isModalDeleteShow = !this.isModalDeleteShow;
    },
  },
  async mounted() {
    await this.fetchIdFirebaseFromFirestore();

    this.fetchDataInvoices();
    console.log("id Data Firestore : ", this.idDataFirestore);
  },
};
</script>

<style></style>
