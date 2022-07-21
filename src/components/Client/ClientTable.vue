<template>
  <div class="rounded-xl p-3 border-2 m-3 overflow-x-hidden">
    <div class="flex justify-between">
      <div class="relative">
        <input
          type="text"
          @input="searchClientByName"
          v-model="searchClient"
          name="searchInvoice"
          placeholder="Search by client name"
          class="form-add-invoice w-80 peer pl-4 focus:pl-10"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 absolute top-2 hidden peer-focus:animate-showIcon peer-focus:block transition-all duration-500 left-2 peer-focus:text-soft-purple"
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
      <div class="flex">
        <!-- <div>
          <vue-excel-xlsx
            v-ripple
            :columns="columns"
            :data="items"
            :file-name="'client-data'"
            :file-type="'xlsx'"
            :sheet-name="'sheetname'"
            class="button button-outline-primary px-3 py-2 text-base"
          >
            Download Data
          </vue-excel-xlsx>
        </div> -->
        <button
          v-ripple
          class="button button-outline-primary px-3 py-2 text-base"
          @click="redirectTo('/import-clients')"
        >
          <span>Import File</span>
        </button>
        <div>
          <button
            v-ripple
            @click="toAddClient"
            class="button button-primary ml-4 px-3 py-3 text-base"
          >
            + Add New
          </button>
        </div>
      </div>
    </div>

    <div v-if="isLoading">
      <simple-loading-animation />
    </div>

    <div v-else class="overflow-x-auto sm:-mx-6 lg:-mx-8 mt-5">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-x-auto">
          <table class="min-w-full" id="table-clients">
            <thead class="bg-[rgba(155,109,255,0.1)]">
              <tr class="">
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  No Client
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
                  Email
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  City
                </th>
                <th
                  scope="col"
                  class="text-sm text-center font-medium text-gray-900 px-6 py-4"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody v-if="items.length !== 0">
              <tr
                class="text-left hover:bg-[#e3daf7] transition-all duration-300 my-10 shadow-invoicein"
                v-for="item in items"
                :key="item.id"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {{ item.id }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  {{ item.fullname }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  {{ item.email }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                >
                  {{ item.city }}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 flex items-center space-x-4 py-4 text-center whitespace-nowrap"
                >
                  <button
                    v-ripple
                    class="flex rounded-lg bg-[#ebe2ff] text-soft-purple px-3 py-2 items-center"
                    @click="toEditClient(item)"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.377 2.42418C19.6211 2.66825 19.6211 3.06398 19.377 3.30806L18.0734 4.61166L15.5734 2.11166L16.877 0.808058C17.1211 0.56398 17.5168 0.563981 17.7609 0.808058L19.377 2.42418Z"
                        fill="#9B6DFF"
                      />
                      <path
                        d="M17.1895 5.49554L14.6895 2.99554L6.17326 11.5118C6.10465 11.5804 6.05296 11.664 6.02228 11.7561L5.01658 14.7732C4.93514 15.0175 5.16756 15.2499 5.41186 15.1685L8.42896 14.1628C8.52101 14.1321 8.60465 14.0804 8.67326 14.0118L17.1895 5.49554Z"
                        fill="#9B6DFF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.25 16.875C1.25 17.9105 2.08947 18.75 3.125 18.75H16.875C17.9105 18.75 18.75 17.9105 18.75 16.875V9.375C18.75 9.02982 18.4702 8.75 18.125 8.75C17.7798 8.75 17.5 9.02982 17.5 9.375V16.875C17.5 17.2202 17.2202 17.5 16.875 17.5H3.125C2.77982 17.5 2.5 17.2202 2.5 16.875V3.125C2.5 2.77982 2.77982 2.5 3.125 2.5H11.25C11.5952 2.5 11.875 2.22018 11.875 1.875C11.875 1.52982 11.5952 1.25 11.25 1.25H3.125C2.08947 1.25 1.25 2.08947 1.25 3.125V16.875Z"
                        fill="#9B6DFF"
                      />
                    </svg>
                    <span> Edit </span>
                  </button>
                  <button
                    @click="switchModalDelete(item.id)"
                    v-ripple
                    class="flex rounded-lg bg-[rgba(255,48,76,0.4)] transition-all duration-300 hover:bg-[rgba(255,48,76,0.3)] text-overdue-color px-3 py-2 items-center"
                  >
                    <i class="bx bx-trash text-overdue-color bx-sm"></i>
                    <span> Delete </span>
                  </button>
                </td>
              </tr>
            </tbody>

            <tbody v-else>
              <tr
                @click="toAddClient"
                class="text-center py-3 my-10 shadow-invoicein hover:bg-[rgba(155,109,255,0.2)] duration-300 transition-all cursor-pointer"
              >
                <td colspan="5" class="py-5 lg:px-0 px-10">
                  <empty-clients />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        v-if="totPage > 5"
        class="flex items-center flex-col justify-end space-x-5 px-4 py-3"
      >
        <!-- <div>
          <div
            v-for="sumNoPage in lastPage"
            :key="sumNoPage"
            :class="`${
              showChangePage ? 'h-10' : 'h-0'
            } overflow-hidden duration-300 transition-all`"
          >
            <p class="cursor-pointer" @click="changePage(sumNoPage)">
              {{ sumNoPage }}
            </p>
          </div>
        </div> -->
      </div>
    </div>
    <div
      v-if="totPage > 5"
      class="flex items-center flex-col justify-end space-x-5 px-4 py-3"
    >
      <div class="flex items-center">
        <div>
          <i
            @click="GoingToEarlyPage"
            :class="`${
              isShowPrevious ? 'scale-100' : 'scale-0'
            } transition-all duration-300 bx bx-chevrons-left bx-md cursor-pointer`"
          ></i>
          <i
            @click="PreviousPage"
            :class="`${
              isShowPrevious ? 'scale-100' : 'scale-0'
            } transition-all duration-300 bx bx-chevron-left bx-md cursor-pointer`"
          ></i>
        </div>
        <div
          @click="isEditedPagination = true"
          class="px-4 py-2 flex space-x-2 items-center border-2 border-soft-purple"
        >
          <input
            v-if="isEditedPagination"
            type="text"
            name=""
            @keydown.enter="jumpPage(currPage)"
            @blur="jumpPage(currPage)"
            @input="changePagePagination"
            v-model="currPage"
            id=""
            class="w-6 text-center border-none outline-none p-1 focus:border-none focus:outline-none"
          />
          <p v-else>
            {{ currPage }}
          </p>
          <p>of {{ lastPage }}</p>
        </div>
        <div>
          <i
            @click="NextPage"
            :class="`${
              isShowNext ? 'scale-100' : 'scale-0'
            } duration-300 transition-all cursor-pointer text-black bx bx-chevron-right bx-md`"
          ></i>
          <i
            @click="GoingToLastPage"
            :class="`${
              isShowNext ? 'scale-100' : 'scale-0'
            } duration-300 transition-all bx bx-chevrons-right cursor-pointer text-black  bx-md`"
          ></i>
        </div>
      </div>
    </div>
    <!-- modal delete start -->
    <div
      class="fixed inset-0 z-50 bg-black bg-opacity-10 min-w-full min-h-screen flex justify-center items-center"
      :class="
        isModalDeleteShow ? 'dialog-animation-show' : 'dialog-animation-hide'
      "
    >
      <delete-confirm-modal
        :message="deleteMessage"
        :loading="isLoading"
        @executeAction="deleteClient"
        @closeModalDelete="switchModalDelete"
      >
      </delete-confirm-modal>
    </div>
    <div
      :class="`${
        isShowModalJWT ? 'scale-100' : 'scale-0'
      } inset-0 bg-[rgba(0,0,0,0.5)] fixed flex justify-center items-center z-50`"
    >
      <JWTModal />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";
import DeleteConfirmModal from "../Modal-Comp/DeleteConfirmModal.vue";
import EmptyClients from "../NotFound/EmptyClients.vue";
import JWTModal from "../JWTModal.vue";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "@firebase/firestore";
import db from "@/firebase/firebase";

export default {
  name: "ClientTable",
  components: {
    SimpleLoadingAnimation,
    EmptyClients,
    JWTModal,
    DeleteConfirmModal,
  },
  props: ["trigger"],
  data() {
    return {
      isEditedPagination: false,

      isShowModalJWT: false,
      idDeleted: "",
      isModalDeleteShow: false,
      isLoading: false,
      searchClient: "",
      lastPage: "",
      isDisablePrevious: true,
      isDisableNext: false,
      currPage: "",
      totPage: 0,
      idDataFirestore: "",

      columns: [
        {
          label: "No. Client",
          field: "no_client",
        },
        {
          label: "Client Name",
          field: "fullname",
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "City",
          field: "city",
        },
      ],
      items: [],
      deleteMessage: "Are you sure to delete this client ?",
    };
  },
  computed: {
    isShowNext() {
      if (this.currPage < this.lastPage) {
        return true;
      } else if (this.currPage == this.lastPage) {
        return false;
      } else {
        return true;
      }
    },
    isShowPrevious() {
      if (this.currPage > 1) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async searchClientByName() {
      if (this.searchClient !== "") {
        await axios
          .get(`api/v1/clients?name=${this.searchClient}`)
          .then((res) => {
            console.log("hasil search : ", res.data);
            this.items = res.data.data;
            this.totPage = res.data.info_data.total;
            this.currPage = res.data.info_data.page;
            this.lastPage = res.data.info_data.last_page;
          });
        return;
      }
      this.fetchDataClients();
    },
    async fetchIdFirebaseFromFirestore() {
      const q = query(
        collection(db, "new_invoice"),
        where("client_id", "==", this.idDeleted)
      );
      console.log("id deleted : ", this.idDeleted);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.idDataFirestore = doc.id;
      });
    },
    async deleteDataInFirebase() {
      let date = new Date().toISOString().slice(0, 10);

      //Add data to firebase
      await addDoc(collection(db, "recent_activities"), {
        message: "Client has been deleted",
        user_id: this.$store.state.usersInfo.id,
        created_at: date,
        id_invoice: this.idDeleted,
        date_sort: Date.now(),
      });

      //delete data from firebase
      let hasilDelete = await deleteDoc(
        doc(db, "new_invoice", this.idDataFirestore)
      );
      console.log("hasil delete : ", hasilDelete);
    },
    async deleteClient() {
      this.isLoading = true;
      await axios
        .delete(`api/v1/clients/${this.idDeleted}`)
        .then(async (res) => {
          console.log("deleted : ", res.data);
          this.fetchDataClients();
          this.$emit("deleteMessageSuccess", res.data.meta.message);
          this.isLoading = false;
          this.deleteDataInFirebase();
        })
        .catch((err) => {
          console.log(err);
          this.$emit("deleteMessageErr", err.response.data.meta.message);
          this.isLoading = false;
        });
    },

    changePagePagination() {
      console.log("sans, cek dulu");
      if (this.currPage > this.lastPage) {
        this.currPage = this.lastPage;
      }
    },
    async jumpPage(page) {
      await axios.get(`api/v1/clients?page=${page}`).then((res) => {
        this.items = res.data.data;
        this.currPage = res.data.info_data.page;
      });
    },
    async PreviousPage() {
      this.currPage--;

      await axios.get(`api/v1/clients?page=${this.currPage}`).then((res) => {
        this.items = res.data.data;
        this.currPage = res.data.info_data.page;
      });
    },

    async GoingToEarlyPage() {
      await axios.get(`api/v1/clients?page=1`).then((res) => {
        this.items = res.data.data;
        this.currPage = res.data.info_data.page;
      });
    },
    async GoingToLastPage() {
      await axios.get(`api/v1/clients?page=${this.lastPage}`).then((res) => {
        this.items = res.data.data;
        this.currPage = res.data.info_data.page;
      });
    },
    async NextPage() {
      this.currPage++;

      await axios.get(`api/v1/clients?page=${this.currPage}`).then((res) => {
        this.items = res.data.data;
        this.currPage = res.data.info_data.page;
      });
    },
    toAddClient() {
      this.$emit("showDialogAdd");
    },
    async fetchDataClients() {
      await axios
        .get("api/v1/clients")
        .then((res) => {
          this.items = res.data.data;
          this.totPage = res.data.info_data.total;
          this.currPage = res.data.info_data.page;
          this.lastPage = res.data.info_data.last_page;
          this.isLoading = false;
          this.isModalDeleteShow = false;
        })
        .catch((err) => {
          if (err.response.status === 401) {
            this.isShowModalJWT = true;
          }
          this.isLoading = false;
          this.isModalDeleteShow = false;
        });
    },
    toEditClient(params) {
      this.$emit("showDialogEdit", params);
    },
    redirectTo(path) {
      this.$router.push(path);
    },
    switchModalDelete(id) {
      this.idDeleted = id;
      this.$emit("resetDeleteMessage");
      this.fetchIdFirebaseFromFirestore();

      if (this.isModalDeleteShow) {
        this.isModalDeleteShow = false;
      } else {
        this.isModalDeleteShow = true;
      }
    },
  },

  async mounted() {
    this.fetchDataClients();
  },
  watch: {
    items(val) {
      console.log("nilai val : ", val);
    },
    trigger(newVal, oldVal) {
      console.log("Nilai New Value : " + newVal);
      console.log("Nilai Old Value : " + oldVal);
      this.fetchDataClients();
    },
  },
};
</script>

<style>
ul.paginate-links > li.active > a {
  color: white;
}
ul#table-clients {
  padding: 0;
}
</style>
