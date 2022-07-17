<template>
  <div class="flex flex-col space-y-5 my-8">
    <h1 class="text-left font-semibold text-2xl">Import Invoices</h1>
    <h3 class="mx-auto font-semibold">
      Please follow the steps below to start uploading your invoice data.
    </h3>
    <div
      v-if="errorMessage"
      :class="`duration-300 transition-all bg-red-600 text-white flex justify-between items-center`"
    >
      <p class="rounded-md w-full">{{ errorMessage }}</p>
      <i @click="errorMessage = ''" class="cursor-pointer bx bx-x bx-lg"></i>
    </div>
    <div class="flex justify-evenly items-start">
      <a href="templatecsv.csv" download="File Template Invoice - InvoiceinAja">
        <div
          class="
            cursor-pointer
            bg-white
            w-72
            py-4
            rounded-md
            flex flex-col
            space-y-4
            shadow-card-import-export
            text-center text-soft-purple
          "
        >
          <import-invoice-icon />
          <strong>Import Template Invoice</strong>
          <p>File template invoice.csv</p>
        </div>
      </a>
      <label
        for="upload"
        :class="`
        ${isLoading ? 'h-60' : ''}
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
        <template v-if="isLoading">
          <simple-loading-animation />
        </template>
        <template v-else>
          <export-icon />
          <strong>Upload Invoice</strong>
          <p>{{ fileName === "" ? "Upload csv file here!" : fileName }}</p>
        </template>
      </label>
      <input
        @input="uploadFile"
        ref="uploadFile"
        type="file"
        id="upload"
        class="hidden"
      />
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
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";
export default {
  components: {
    SimpleLoadingAnimation,
    ImportInvoiceIcon,
    ExportIcon,
    SuccessComp,
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
        .post("api/v1/invoices_by_csv", fileCsv)
        .then((res) => {
          console.log("hasil : ", res.data);
          this.errorMessage = "";
          this.showModal = true;
          this.isLoading = false;
        })
        .catch((err) => {
          this.errorMessage = err.response.data.meta.message;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
</style>