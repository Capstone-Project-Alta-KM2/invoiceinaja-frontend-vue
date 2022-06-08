<template>
    <div class="client-page">
        <div class="container rounded-md border-2">
            <div class="mt-3 mb-5">
                <h4 class="text-left text-xl fw-bolder text-black">Invoices</h4>
            </div>
            <simple-tabs/>
            <div class="flex justify-content-between mx-2">
            </div>
            <div class="flex justify-end align-center mx-3 my-4">
                <div class="ml-3 px-2 rounded border-1 border-black">1</div>
                <div class="ml-3 px-2 rounded border-1 border-black">2</div>
                <div class="ml-3 px-2 rounded border-1 border-black">3</div>
                <div class="ml-3 px-2 rounded border-1 border-black">...</div>
                <div class="ml-3 px-2 rounded border-1 border-black">5</div>
            </div>
        </div>
    </div>
</template>

<script>
import SimpleTabs from '@/components/SimpleTabs.vue';
export default {
  components: { SimpleTabs },
    name: "ClientView",
    methods: {
        toAddClient() {
            return this.$router.push('/addclient');
        }
    }
    
}
</script>

<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
}
</style>