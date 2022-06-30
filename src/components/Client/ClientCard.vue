<template>
  <div class="client-page">
    <div class="rounded-md border-2 bg-white">
      <h4 class="text-left px-3 pt-3 pb-4 text-2xl font-bold text-black">
        Clients
      </h4>
      <client-table
        @showDialogAdd="showAddForm"
        @showDialogEdit="showEditForm"
      />
      <div
        class="absolute z-50 inset-0 bg-black bg-opacity-50 flex justify-center"
        :class="showing ? 'dialog-animation-show' : 'dialog-animation-hide'"
      >
        <add-new-client
          v-if="formShow == 'addData'"
          @closeAddClient="hideDialog()"
        >
        </add-new-client>

        <edit-client-data
          v-else
          @closeAddClient="hideDialog"
          :editedData="clientData"
        >
        </edit-client-data>
      </div>
    </div>
  </div>
</template>

<script>
import AddNewClient from "./AddNewClient.vue";
import ClientTable from "./ClientTable.vue";
import EditClientData from "./EditClientData.vue";

export default {
  name: "ClientCard",
  data() {
    return {
      showing: false,
      formShow: "addData",
      clientData: {},
    };
  },
  components: {
    ClientTable,
    AddNewClient,
    EditClientData,
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
      console.log("From Emit client");
      console.log(value);
    },
    hideDialog() {
      this.showing = false;
      this.formShow == "addData"
        ? (this.formShow = "editData")
        : (this.formShow = "addData");
    },
  },
};
</script>

<style></style>
