<template>
    <div class="client-page">
        <div class="container bg-white rounded-md border-2 my-10">
            <div class="mt-3 mb-5">
                <h4 class="text-left text-xl fw-bolder text-black">Invoices</h4>
            </div>
            <simple-tab/>
            <simple-pagination/>
        </div>
    </div>
</template>

<script>
import SimplePagination from '../Pagination/SimplePagination.vue'
import SimpleTab from './SimpleTab.vue'
export default {
    name: 'InvoiceCard',
    components: {
        SimplePagination,
        SimpleTab,
    }
}
</script>

<style>

</style>