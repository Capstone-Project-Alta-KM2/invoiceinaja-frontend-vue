<template>
  <div class="mt-10 px-7">
    <div class="text-black text-lg font-semibold">
      <span>Please follow the steps below to start uploading your client</span>
    </div>
    <div
      v-if="errorMessage"
      :class="`duration-300 transition-all bg-red-600 text-white flex justify-between items-center mx-16 mt-3`"
    >
      <p class="rounded-md w-full">{{ errorMessage }}</p>
      <i @click="errorMessage = ''" class="cursor-pointer bx bx-x bx-lg"></i>
    </div>
    <div class="flex justify-center items-center mt-14">
      <div>
        <a
          href="templateclients.csv"
          download="File Template Client - InvoiceinAja"
        >
          <div
            class="cursor-pointer bg-white w-72 py-4 rounded-md flex flex-col space-y-4 shadow-card-import-export text-center text-soft-purple"
          >
            <import-invoice-icon></import-invoice-icon>
            <div class="flex flex-col text-soft-purple font-bold">
              <span>Import</span>
              <span class="my-2">File template client</span>
            </div>
          </div>
        </a>
      </div>
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
      <div>
        <label
          for="upload"
          class="cursor-pointer bg-white w-72 py-4 rounded-md flex flex-col space-y-4 shadow-card-import-export text-center text-soft-purple"
        >
          <export-icon></export-icon>
          <div class="flex flex-col text-soft-purple font-bold">
            <span>Upload</span>
            <span v-if="fileName === ''" class="my-2">
              File template client
            </span>
            <span
              v-else
              class="text-sm font-normal text-black px-5 my-2 truncate"
              :title="fileName"
              >{{ fileName }}</span
            >
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
  </div>
</template>

<script>
import axios from "axios";
import ImportInvoiceIcon from "@/components/IconComp/ImportInvoiceIcon.vue";
import ExportIcon from "@/components/IconComp/ExportIcon.vue";
export default {
  name: "TemplateClient",
  components: {
    ImportInvoiceIcon,
    ExportIcon,
  },
  data() {
    return {
      fileName: "",
      errorMessage: "",
    };
  },
  methods: {
    uploadFile() {
      this.errorMessage = "";
      this.fileName = this.$refs.uploadFile.files[0].name;

      let CSVFile = this.$refs.uploadFile.files[0];
      let fileCsv = new FormData();
      fileCsv.append("csv_file", CSVFile);

      axios
        .post("/api/v1/clients_by_csv", fileCsv)
        .then((res) => {
          console.log("hasil : ", res.data);
          this.errorMessage = "";
          this.$emit("showAlert");
        })
        .catch((err) => {
          console.log(err);
          this.errorMessage = err.response.data.meta.message;
        });
    },
  },
};
</script>

<style></style>
