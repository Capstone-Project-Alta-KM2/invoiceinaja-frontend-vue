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
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody v-if="items.length !== 0">
              <tr
                class="
                  text-left
                  hover:bg-[#e3daf7]
                  transition-all
                  duration-300
                  my-10
                  shadow-invoicein
                "
                v-for="item in items"
                :key="item.id"
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
                  {{ item.id }}
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
                  {{ item.fullname }}
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
                  {{ item.email }}
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
                  {{ item.city }}
                </td>
                <td
                  class="
                    text-sm text-gray-900
                    font-light
                    px-6
                    flex
                    items-center
                    space-x-4
                    py-4
                    text-center
                    whitespace-nowrap
                  "
                >
                  <button
                    v-ripple
                    class="
                      flex
                      rounded-lg
                      bg-[#ebe2ff]
                      text-soft-purple
                      px-3
                      py-2
                      items-center
                    "
                    @click="toEditClient(item)"
                  >
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
                    Edit
                  </button>
                  <button
                    @click="switchModalDelete(item.id)"
                    v-ripple
                    class="
                      flex
                      rounded-lg
                      bg-[rgba(255,48,76,0.4)]
                      transition-all
                      duration-300
                      hover:bg-[rgba(255,48,76,0.3)]
                      text-overdue-color
                      px-3
                      py-2
                      items-center
                    "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>

            <tbody v-else>
              <tr
                @click="toAddClient"
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
                <td colspan="5" class="py-5 lg:px-0 px-10">
                  <empty-clients />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="flex items-center flex-col justify-end space-x-5 px-4 py-3">
      <div class="flex items-center">
        <i
          @click="PreviousPage"
          :class="`${
            isShowPrevious ? 'scale-100' : 'scale-0'
          } transition-all duration-300 bx bx-chevron-left bx-md cursor-pointer`"
        ></i>
        <button
          @click="isShowModal = true"
          class="px-4 py-2 border-2 border-soft-purple"
        >
          {{ currPage }} of {{ lastPage }}
        </button>
        <i
          @click="NextPage"
          :class="`${
            isShowNext ? 'scale-100' : 'scale-0'
          } duration-300 transition-all cursor-pointer text-black bx bx-chevron-right bx-md`"
        ></i>
      </div>

      <div
        :class="`${isShowModal ? 'scale-100' : 'scale-0'} 
          transition-all duration-300
          inset-0
          bg-[rgba(0,0,0,0.5)]
          fixed
          flex 
          z-[999]
          items-center
          justify-center
        `"
      >
        <div class="bg-white p-5 rounded-md flex flex-col space-y-5">
          <h2 class="font-semibold text-xl">Jump to page :</h2>
          <input
            type="number"
            @input="limitInputJumpPage"
            maxlength="3"
            name=""
            :class="`${
              errMsgJump ? 'border-red-500 border' : ''
            } form-add-invoice text-center`"
            id=""
            v-model="currPage"
            @keydown.enter="jumpPage(currPage)"
          />
          <p
            :class="`${
              errMsgJump ? 'scale-100' : 'scale-0'
            } transition-all duration-300 text-red-500`"
          >
            {{ errMsgJump }}
          </p>
          <div class="flex justify-between items-center">
            <button @click="jumpPage(currPage)" class="button button-primary">
              <div v-if="isLoading">
                <simple-loading-animation />
              </div>
              Jump
            </button>
            <button
              @click="closeModalJumpPage"
              class="button button-outline-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal delete start -->
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
        :loading="isLoading"
        @executeAction="deleteClient"
        @closeModalDelete="switchModalDelete"
      >
      </delete-confirm-modal>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";
import DeleteConfirmModal from "../Modal-Comp/DeleteConfirmModal.vue";
import EmptyClients from "../NotFound/EmptyClients.vue";
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
  components: { SimpleLoadingAnimation, EmptyClients, DeleteConfirmModal },
  props: ["trigger"],
  data() {
    return {
      isShowModal: false,

      idDeleted: "",
      isModalDeleteShow: false,
      isLoading: false,
      searchClient: "",
      lastPage: "",
      isDisablePrevious: true,
      idDataFirestore: "",
      currPage: 0,
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
      errMsgJump: "",
    };
  },
  computed: {
    isShowNext() {
      if (this.currPage < this.lastPage) {
        return true;
      } else if (this.currPage === this.lastPage) {
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
    closeModalJumpPage() {
      this.isShowModal = false;
    },
    limitInputJumpPage() {
      if (this.currPage > this.lastPage) {
        this.currPage = this.lastPage;
      } else if (this.currPage < 0) {
        this.currPage = 1;
      }
    },
    async jumpPage(page) {
      this.isLoading = true;
      console.log("hal : ", page);
      if (this.currPage == 0) {
        this.errMsgJump = "Can't 0 or empty";
        this.isLoading = false;
      } else if (this.currPage != "") {
        await axios.get(`api/v1/clients?page=${this.currPage}`).then((res) => {
          this.items = res.data.data;
          this.currPage = res.data.info_data.page;
          this.isLoading = false;
          this.isShowModal = false;
          this.errMsgJump = "";
        });
      }
    },
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
          this.isLoading = false;
          this.deleteDataInFirebase();
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
      this.fetchDataClients();
    },
    async PreviousPage() {
      this.currPage--;

      await axios.get(`api/v1/clients?page=${this.currPage}`).then((res) => {
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
          console.log("err : ", err);
          if (err.response.status === 401) {
            localStorage.removeItem("token");
            this.$router.push("/login");
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
