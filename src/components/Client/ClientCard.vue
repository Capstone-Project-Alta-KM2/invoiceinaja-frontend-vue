<template>
    <div class="client-page">
        <div class="rounded-lg border-2 bg-white p-5">
            <h4 class="text-left pb-4 text-2xl font-bold text-black">
                Clients
            </h4>
            <client-table
                @showDialogAdd="showAddForm"
                @showDialogEdit="showEditForm"
            />
            <div
                class="absolute z-50 inset-0 bg-black bg-opacity-50 flex justify-center"
                :class="
                    showing ? 'dialog-animation-show' : 'dialog-animation-hide'
                "
            >
                <add-new-client
                    v-if="formShow == 'addData'"
                    @hideDialogClient="hideDialog"
                >
                </add-new-client>

                <edit-client-data
                    v-else-if="formShow == 'editData'"
                    @hideDialogClient="hideDialog"
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
            formShow: "",
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
        },
        hideDialog() {
            this.showing = false;
            this.formShow = "";
        },
    },
};
</script>

<style></style>
