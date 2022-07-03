<template>
    <div class="z-30 new-client">
        <div class="bg-white my-5 p-6 border-1 rounded-lg text-left">
            <div class="mb-5">
                <span class="font-bold text-lg">Add New CLient</span>
            </div>

            <div
                v-if="addClientMessage != ''"
                class="alert text-center font-semibold mb-4"
                :class="addClientResponse ? 'alert-success' : 'alert-failed'"
            >
                <span>{{ addClientMessage }}</span>
            </div>

            <!-- Form Client Component Start -->
            <client-form
                @closeAddClient="closeAddDialog"
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
    data() {
        return {
            thisForm: "add",
            addClientResponse: false,
            addClientMessage: "",
            // To send empty data to child
            currentData: {
                id: "",
                fullname: "",
                email: "",
                address: "",
                city: "",
                zip_code: "",
                company: "",
            },
        };
    },
    methods: {
        closeAddDialog() {
            this.$emit("hideDialogClient");
        },
        receiveMessage(value) {
            this.addClientResponse = value.status;
            this.addClientMessage = value.message;
        },
    },
};
</script>

<style scoped>
/* Style Here... */
</style>
