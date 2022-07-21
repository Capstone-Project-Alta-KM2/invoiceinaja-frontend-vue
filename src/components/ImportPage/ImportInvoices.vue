<template>
  <div class="flex flex-col space-y-5 my-8">
    <h1 class="text-left font-semibold text-2xl pb-5">Import Invoices</h1>
    <h3 class="mx-auto font-semibold pb-5">
      Please follow the steps below to start uploading your invoice data.
    </h3>
    <div
      v-if="errorMessage"
      :class="`duration-300 transition-all bg-red-600 text-white flex justify-between items-center`"
    >
      <p class="rounded-md w-full">{{ errorMessage }}</p>
      <i @click="errorMessage = ''" class="cursor-pointer bx bx-x bx-lg"></i>
    </div>
    <div class="flex justify-center items-center">
      <div>
        <a
          href="templatecsv.csv"
          download="File Template Invoice - InvoiceinAja"
        >
          <div
            class="cursor-pointer bg-white w-72 py-4 rounded-md flex flex-col space-y-4 shadow-card-import-export text-center text-soft-purple"
          >
            <import-invoice-icon />
            <strong>Import Template Invoice</strong>
            <p>File template invoice.csv</p>
          </div>
        </a>
      </div>
      <!-- Arrow -->
      <div class="mx-11">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26 34L36 24L26 14"
            stroke="#7C40FF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 24H36"
            stroke="#7C40FF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <!-- Arrow -->
      <div>
        <label
          for="upload"
          :class="`
        ${isLoading ? 'h-60 pointer-events-none' : ''}
          cursor-pointer
          bg-white
          w-72
          py-4
          rounded-md
          flex flex-col
          items-center
          justify-center
          space-y-4
          shadow-card-import-export
          text-center text-soft-purple
        `"
        >
          <!-- animation start -->
          <div
            v-if="isLoading"
            class="relative flex justify-center items-center w-24 h-24 overflow-hidden m-1"
          >
            <div
              class="absolute inset-0 flex justify-center items-center w-full h-full rounded-full overflow-hidden border-4 border-soft-purple"
            >
              <span v-if="isLoading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-9 w-9 animate-pulse z-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </span>
            </div>
            <div
              v-if="isLoading"
              class="absolute spinner-border inset-0 z-10 rounded-full animate-spin flex justify-start items-center"
              role="status"
            >
              <span
                class="bg-white text-white h-8 w-3 -ml-0.5 border-2 border-white overflow-hidden"
              ></span>
            </div>
          </div>
          <!-- end -->
          <div v-else>
            <export-icon />
          </div>
          <div>
            <strong v-if="isLoading" class="animate-pulse">Uploading...</strong>
            <strong v-else>Upload Invoice</strong>
            <p class="mt-3.5">
              {{ fileName === "" ? "Upload csv file here!" : fileName }}
            </p>
          </div>
        </label>
        <input
          @input="uploadFile"
          ref="uploadFile"
          type="file"
          id="upload"
          class="hidden"
        />
      </div>
    </div>
    <div>
      <invoices-instriction></invoices-instriction>
    </div>
    <div
      :class="`${
        showModal ? 'scale-100' : 'scale-0'
      } inset-0 fixed z-50 bg-[rgba(0,0,0,0.5)] flex justify-center items-center duration-300 transition-all`"
    >
      <success-comp />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ExportIcon from "../IconComp/ExportIcon.vue";
import ImportInvoiceIcon from "../IconComp/ImportInvoiceIcon.vue";
import SuccessComp from "../ImportPage/SuccessComp.vue";
import InvoicesInstriction from "./InvoicesInstriction.vue";
export default {
  components: {
    ImportInvoiceIcon,
    ExportIcon,
    SuccessComp,
    InvoicesInstriction,
  },
  data() {
    return {
      fileName: "",
      errorMessage: "",
      showModal: false,
      isLoading: false,
    };
  },
  methods: {
    async uploadFile() {
      this.isLoading = true;
      this.fileName = this.$refs.uploadFile.files[0].name;

      let CSVFile = this.$refs.uploadFile.files[0];
      let fileCsv = new FormData();
      fileCsv.append("csv_file", CSVFile);

      await axios
        .post("/api/v1/invoices_by_csv", fileCsv)
        .then((res) => {
          console.log("hasil : ", res.data);
          this.errorMessage = "";
          this.showModal = true;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
          this.errorMessage = err.message;
        });
    },
  },
};
</script>

<style></style>
