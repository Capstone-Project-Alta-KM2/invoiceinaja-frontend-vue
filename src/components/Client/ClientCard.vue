<template>
  <div class="client-page">
    <div class="rounded-lg border bg-white p-5">
      <h4 class="text-left pb-4 text-2xl font-bold text-black">Clients</h4>
      <client-table
        @showDialogAdd="showAddForm"
        @showDialogEdit="showEditForm"
        :trigger="isAlertShow"
      />
      <div
        class="fixed z-40 inset-0 origin-top bg-black bg-opacity-10 flex justify-center items-center"
        :class="
          showing
            ? 'duration-400 scale-y-100 opacity-100 transition-all'
            : 'duration-400 scale-y-0 opacity-0 transition-all'
        "
      >
        <add-new-client
          v-if="formShow == 'addData'"
          @hideDialogClient="hideDialog"
          @showDialogAlert="setAlert"
        >
        </add-new-client>

        <edit-client-data
          v-else-if="formShow == 'editData'"
          @hideDialogClient="hideDialog"
          @showDialogAlert="setAlert"
          :editedData="clientData"
        >
        </edit-client-data>
        <div
          class="fixed z-50 inset-0 bg-black bg-opacity-20 flex justify-center items-center"
          :class="
            isAlertShow
              ? 'dialog-animation-show opacity-100'
              : 'dialog-animation-hide opacity-0'
          "
        >
          <client-alert @showAlert="setAlert"></client-alert>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddNewClient from "./AddNewClient.vue";
import ClientAlert from "./ClientAlert.vue";
import ClientTable from "./ClientTable.vue";
import EditClientData from "./EditClientData.vue";

export default {
  name: "ClientCard",
  data() {
    return {
      showing: false,
      formShow: "",
      isAlertShow: false,
      clientData: {},
    };
  },
  components: {
    ClientTable,
    AddNewClient,
    EditClientData,
    ClientAlert,
  },
  methods: {
    showAddForm() {
      this.showing = true;
      this.formShow = "addData";
    },
    showEditForm(value) {
      this.showing = true;
      this.formShow = "editData";
      this.clientData = value;
    },
    hideDialog() {
      this.showing = false;
      this.formShow = "";
    },
    setAlert() {
      if (this.isAlertShow == false) {
        this.isAlertShow = true;
      } else {
        this.isAlertShow = false;
      }
    },
  },
};
</script>

<style></style>
