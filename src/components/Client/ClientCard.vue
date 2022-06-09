<template>
    <div class="client-page">
        <div class="container relative rounded-md border-2 my-3 bg-white">
            <div class="mt-3 mb-5">
                <h4 class="text-left text-xl fw-bolder text-black">Clients</h4>
            </div>
            <client-table @showDialog="changeShow()"/>
            <table-pagination/>
            <div
                v-if="showing"
                class="absolute z-10 inset-0 bg-black bg-opacity-50 overflow-y-scroll flex justify-center rounded-md"
            >
                <add-new-client @closeAddClient="hideDialog()"/>
            </div>
        </div>
    </div>
</template>

<script>
import AddNewClient from './AddNewClient.vue'

import ClientTable from './ClientTable.vue'
import TablePagination from './TablePagination.vue'
export default {
    name: 'ClientCard',
    data() {
        return {
            showing: false
        };
    },
    components: {
        ClientTable,
        TablePagination,
        AddNewClient,
    },
    methods: {
        changeShow() {
            this.showing = true;
        },
        hideDialog() {
            this.showing = false;
        }
    }
}
</script>

<style>

</style>