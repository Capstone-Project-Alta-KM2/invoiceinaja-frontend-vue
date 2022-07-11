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
        <export-icon />
        <strong>Upload Invoice</strong>
        <p>{{ fileName === "" ? "Import csv file here!" : fileName }}</p>
      </label>
      <input
        @change="uploadFile"
        ref="uploadFile"
        type="file"
        id="upload"
        class="hidden"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ExportIcon from "../IconComp/ExportIcon.vue";
import ImportInvoiceIcon from "../IconComp/ImportInvoiceIcon.vue";
export default {
  components: { ImportInvoiceIcon, ExportIcon },
  data() {
    return {
      fileName: "",
      errorMessage: "",
    };
  },
  methods: {
    async uploadFile() {
      this.fileName = this.$refs.uploadFile.files[0].name;

      let CSVFile = this.$refs.uploadFile.files[0];
      let fileCsv = new FormData();
      fileCsv.append("csv_file", CSVFile);

      await axios
        .post("api/v1/invoices_by_csv", fileCsv)
        .then((res) => {
          console.log("hasil : ", res.data);
          this.errorMessage = "";
        })
        .catch((err) => {
          this.errorMessage = err.response.data.meta.message;
        });
    },
  },
};
</script>

<style>
</style>