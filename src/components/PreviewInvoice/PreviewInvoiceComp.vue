<template>
  <div>
    <div v-if="errMsg">
      <p class="bg-red-500 my-10 text-center text-white py-2 rounded-md">
        {{ errMsg }}
      </p>
    </div>
    <form
      action=""
      @submit.prevent="addInvoices"
      class="text-left border border-black py-5 px-3 rounded-lg"
    >
      <div class="text-center my-5">
        <h1 class="text-3xl font-semibold">Preview Invoice</h1>
        <div class="border-b-4 border-gray-600 w-72 mx-auto mt-5"></div>
      </div>
      <!-- <invoice-date-and-no-comp /> -->
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
          <div class="">
            <p class="">{{ user.fullname }}</p>
            <p class="">{{ user.company }}</p>
            <p class="">{{ user.email }}</p>
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

      <form-data-client :client="clients" />

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
                        {{ invoice.price * invoice.quantity }}
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
          py-3
          border-y-4 border-y-[#B0B0B0]
          mb-5
        "
      >
        <p>Total :</p>
        <p class="pl-16">Rp. {{ totalAllInvoices }}</p>
      </div>
      <div class="relative flex justify-end">
        <button
          @click="isShow = !isShow"
          type="button"
          v-click-outside="onClickOutside"
          v-ripple
          :disabled="isLoading"
          class="button flex items-center button-primary"
        >
          <div v-if="isLoading">
            <simple-loading-animation />
          </div>
          <template v-else>
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
          </template>
        </button>
        <div
          :class="isShow == true ? 'max-h-72  border-2' : 'max-h-0 border-none'"
          class="
            flex
            transition-all
            duration-300
            absolute
            -top-40
            -right-10
            overflow-hidden
            bg-white
            flex-col
            border-soft-purple
            rounded-lg
          "
        >
          <button
            type="button"
            @click="sendInvoice"
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
              rounded-t-lg
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
                d="M21.9508 0.94285C22.0529 0.687501 21.9931 0.395852 21.7986 0.201384C21.6041 0.00691609 21.3125 -0.0529472 21.0571 0.0491922L1.0549 8.05009L1.0529 8.05089L0.432178 8.29918C0.192688 8.39498 0.0269699 8.61677 0.00298757 8.87359C-0.0209947 9.13041 0.100795 9.37904 0.318407 9.51752L0.881634 9.87594L0.884242 9.87761L7.75201 14.248L12.1224 21.1158L12.1245 21.119L12.4825 21.6816C12.621 21.8992 12.8696 22.021 13.1264 21.997C13.3832 21.973 13.605 21.8073 13.7008 21.5678L21.9508 0.94285ZM19.4302 3.54204L9.12609 13.8462L8.83002 13.3809C8.77599 13.296 8.70399 13.224 8.6191 13.17L8.15382 12.8739L18.4579 2.56981L20.0784 1.92162L19.4302 3.54204Z"
                fill="#7C40FF"
              />
            </svg>
            <span class="font-semibold text-soft-purple"> Send Invoice </span>
          </button>

          <button
            type="button"
            @click="$router.push('/edit-invoice')"
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
                d="M21.3147 2.66659C21.5832 2.93508 21.5832 3.37038 21.3147 3.63886L19.8807 5.07283L17.1307 2.32283L18.5647 0.888864C18.8332 0.620379 19.2685 0.620379 19.537 0.888864L21.3147 2.66659Z"
                fill="#7C40FF"
              />
              <path
                d="M18.9085 6.0451L16.1585 3.2951L6.79059 12.663C6.71512 12.7384 6.65826 12.8304 6.62451 12.9317L5.51823 16.2505C5.42866 16.5192 5.68432 16.7749 5.95305 16.6853L9.27186 15.5791C9.37311 15.5453 9.46512 15.4884 9.54059 15.413L18.9085 6.0451Z"
                fill="#7C40FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.375 18.5625C1.375 19.7016 2.29841 20.625 3.4375 20.625H18.5625C19.7016 20.625 20.625 19.7016 20.625 18.5625V10.3125C20.625 9.9328 20.3172 9.625 19.9375 9.625C19.5578 9.625 19.25 9.9328 19.25 10.3125V18.5625C19.25 18.9422 18.9422 19.25 18.5625 19.25H3.4375C3.0578 19.25 2.75 18.9422 2.75 18.5625V3.4375C2.75 3.0578 3.0578 2.75 3.4375 2.75H12.375C12.7547 2.75 13.0625 2.4422 13.0625 2.0625C13.0625 1.6828 12.7547 1.375 12.375 1.375H3.4375C2.29841 1.375 1.375 2.29841 1.375 3.4375V18.5625Z"
                fill="#7C40FF"
              />
            </svg>
            <span class="font-semibold text-soft-purple"> Edit </span>
          </button>
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
          :message="deleteMessage"
          :loading="isModalDeleteShow"
          @executeAction="deletePreview"
          @closeModalDelete="switchModalDelete"
        ></delete-confirm-modal>
      </div>
    </form>
  </div>
</template>

<script>
// import InvoiceDateAndNoComp from "./InvoiceDateAndNoComp-PreviewComp.vue";
import FormDataClient from "./DataClientFormComp.vue";
import Vue from "vue";
import DeleteConfirmModal from "../Modal-Comp/DeleteConfirmModal.vue";
import { addDoc, collection } from "@firebase/firestore";
import db from "@/firebase/firebase";
import axios from "axios";
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";
// import axios from "axios";
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
    // InvoiceDateAndNoComp,
    FormDataClient,
    DeleteConfirmModal,
    SimpleLoadingAnimation,
  },
  data() {
    return {
      isLoading: false,
      isShow: false,
      isModalDeleteShow: false,
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
      user: {
        fullname: "",
        company: "",
        email: "",
      },
      clients: {
        id: "",
        invoiceTo: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
        company: "",
      },
      deleteMessage: "Are you sure to delete this data ?",
      errMsg: "",
    };
  },

  methods: {
    async addInvoiceToFirebase(invoice_data, userId, clientId) {
      const docRef = await addDoc(collection(db, "new_invoice"), {
        invoice_data: invoice_data,
        user_id: userId,
        date_sort: Date.now(),
        id_invoice: invoice_data.id,
        client_id: clientId,
      });
      console.log("Document written with ID: ", docRef.id);

      let date = new Date().toISOString().slice(0, 10);
      const refDoc = await addDoc(collection(db, "recent_activities"), {
        message: "New invoice created",
        user_id: userId,
        id_invoice: invoice_data.id,
        created_at: date,
        date_sort: Date.now(),
      });
      console.log("Document written with ID: ", refDoc.id);
    },
    async sendInvoice() {
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
          invoice_date: this.dateInvoiceAndNo.dateInvoice,
          invoice_due: this.dateInvoiceAndNo.dueDate,
        },
        detail_invoice: newArrInvoices,
      };
      await axios
        .post("api/v1/invoices", invoicesData)
        .then((res) => {
          let dataInvoiceFirebase = {
            id: res.data.data.id,
            client_name: this.clients.fullname,
            date: this.dateInvoiceAndNo.dateInvoice,
            jumlah: this.totalAllInvoices,
            status: "UNPAID",
          };

          // function for add data to firebase
          this.addInvoiceToFirebase(
            dataInvoiceFirebase,
            this.$store.state.usersInfo.id,
            this.clients.id
          );
          console.log("id : ", res.data);
          console.log("nambah : ", res.data.meta.message);
          this.$store.dispatch(
            "actionOfSuccessAddInvoice",
            res.data.meta.message
          );
          this.isLoading = false;
          this.$router.push("/invoice");
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

          this.$store.dispatch("actionOfPreview", "");
        })
        .catch((err) => {
          this.errMsg = err.response.data.meta.message;

          this.isLoading = false;
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    },
    fetchUserData() {
      let dataUser = this.$store.state.usersInfo;
      this.user.fullname = dataUser.fullname;
      this.user.company = dataUser.company;
      this.user.email = dataUser.email;
    },
    deletePreview() {
      this.$store.dispatch("actionOfPreview", "");
      this.$router.push("add-invoice");
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
    fetchPreview() {
      let previewInvoice = this.$store.state.preview;
      if (previewInvoice) {
        this.dateInvoiceAndNo.dateInvoice = previewInvoice.invoice.invoice_date;
        this.dateInvoiceAndNo.dueDate = previewInvoice.invoice.invoice_due;
        this.clients = previewInvoice.invoice.client_id;
        this.invoices = previewInvoice.detail_invoice;
        this.totalAllInvoices = previewInvoice.invoice.total_amount;
        console.log("totalAllInvoices : ", this.totalAllInvoices);
        console.log("data invoice di preview : ", this.invoices);
      } else {
        console.log("data kosong");
        this.$router.push("add-invoice");
      }
    },
    switchModalDelete() {
      if (this.isModalDeleteShow) {
        this.isModalDeleteShow = false;
      } else {
        this.isModalDeleteShow = true;
      }
    },
  },
  mounted() {
    this.fetchPreview();
    this.fetchUserData();
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

<style></style>
