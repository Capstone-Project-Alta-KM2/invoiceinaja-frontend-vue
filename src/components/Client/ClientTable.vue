<template>
  <div class="rounded-xl p-3 border-2 m-3 overflow-x-hidden">
    <div class="flex justify-between">
      <div class="relative">
        <input
          type="text"
          @input="searchClientByName"
          v-model="searchClient"
          name="searchInvoice"
          placeholder="Search name, Invoice, Item"
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
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
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
                    Edit
                  </button>
                  <button
                    @click="switchModalDelete(item.id)"
                    v-ripple
                    class="flex rounded-lg bg-[rgba(255,48,76,0.4)] transition-all duration-300 hover:bg-[rgba(255,48,76,0.3)] text-overdue-color px-3 py-2 items-center"
                  >
                    Delete
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
        <div>
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
        </div>
      </div>
    </div>
    <div
      v-if="totPage > 5"
      class="flex items-center flex-col justify-end space-x-5 px-4 py-3"
    >
      <div class="flex items-center">
        <i
          @click="PreviousPage"
          :class="`${
            isDisablePrevious
              ? 'hidden text-gray-500'
              : 'block cursor-pointer text-black'
          } bx bx-chevron-left bx-md cursor-pointer`"
        ></i>
        <button
          @click="showChangePage = !showChangePage"
          class="px-4 py-2 border-2 border-soft-purple"
        >
          {{ currPage }} of {{ lastPage }}
        </button>
        <i
          @click="NextPage"
          :class="`${
            isDisableNext
              ? ' hidden text-gray-500'
              : 'block cursor-pointer text-black'
          } bx bx-chevron-right bx-md`"
        ></i>
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
  </div>
</template>

<script>
import axios from "axios";
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";
import DeleteConfirmModal from "../Modal-Comp/DeleteConfirmModal.vue";
import EmptyClients from "../NotFound/EmptyClients.vue";

export default {
  name: "ClientTable",
  components: { SimpleLoadingAnimation, EmptyClients, DeleteConfirmModal },
  props: ["trigger"],
  data() {
    return {
      idDeleted: "",
      isModalDeleteShow: false,
      isLoading: false,
      searchClient: "",
      showChangePage: false,
      lastPage: "",
      isDisablePrevious: true,
      isDisableNext: false,
      currPage: "",
      totPage: 0,
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
    async deleteClient() {
      this.isLoading = true;
      await axios
        .delete(`api/v1/clients/${this.idDeleted}`)
        .then((res) => {
          console.log("deleted : ", res.data);
          this.fetchDataClients();
          this.$emit("deleteMessageSuccess", res.data.meta.message);
        })
        .catch((err) => {
          console.log(err);
          this.$emit("deleteMessageErr", err.response.data.meta.message);
          this.isLoading = false;
        });
    },
    async PreviousPage() {
      this.currPage--;
      this.isDisableNext = false;
      if (this.currPage <= 1) {
        this.currPage = 1;
        this.isDisablePrevious = true;
      } else if (this.currPage > 1) {
        this.isDisablePrevious = false;
      }
      await axios.get(`api/v1/clients?page=${this.currPage}`).then((res) => {
        this.items = res.data.data;
        this.currPage = res.data.info_data.page;
        this.showChangePage = false;
      });
    },
    async NextPage() {
      this.currPage++;
      if (this.currPage == this.lastPage) {
        this.isDisablePrevious = false;
        this.currPage = this.lastPage;
        this.isDisableNext = true;
      } else {
        this.isDisableNext = false;
        this.isDisablePrevious = false;
      }
      await axios.get(`api/v1/clients?page=${this.currPage}`).then((res) => {
        this.items = res.data.data;
        this.currPage = res.data.info_data.page;
        this.showChangePage = false;
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
      this.$emit("resetDeleteMessage");
      if (this.isModalDeleteShow) {
        this.isModalDeleteShow = false;
      } else {
        this.isModalDeleteShow = true;
      }
    },
  },
  computed: {},
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
