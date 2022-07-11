<template>
    <div class="z-30 new-client">
        <div class="bg-white my-5 p-6 border-1 rounded-lg text-left">
            <div class="mb-5">
                <span class="font-bold text-lg">Edit Client Data</span>
            </div>

            <div
                v-if="editClientMessage != ''"
                class="alert text-center font-semibold mb-4"
                :class="editClientResponse ? 'alert-success' : 'alert-failed'"
            >
                <span>{{ editClientMessage }}</span>
            </div>
            <!-- Form Client Component Start -->
            <client-form
                @closeEditClient="closeEditDialog"
                @sendingMessage="receiveMessage"
                :statusForm="thisForm"
                :dataField="currentData"
            ></client-form>
            <!-- Form Client Component End -->
        </div>
    </div>
</template>

<script>
import ClientForm from "./ClientForm.vue";

export default {
    name: "NewClientPage",
    components: {
        ClientForm,
    },
    props: {
        editedData: Object,
    },
    data() {
        return {
            thisForm: "edit",
            currentData: this.editedData,

            editClientResponse: false,
            editClientMessage: "",
        };
    },
    methods: {
        closeEditDialog() {
            this.$emit("hideDialogClient");
        },
        receiveMessage(value) {
            this.editClientResponse = value.status;
            this.editClientMessage = value.message;
        },
    },
};
</script>

<style scoped>
/* Style Here... */
</style>
