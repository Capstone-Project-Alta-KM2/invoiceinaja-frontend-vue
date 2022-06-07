<template>
    <div class="client-page">
        <div class="container rounded-md border-2 my-3">
            <div class="mt-3 mb-5">
                <h4 class="text-left text-xl fw-bolder text-black">Invoices</h4>
            </div>
            <div class="flex justify-content-between mx-2">
                <div>
                    <ul class="flex">
                        <li class="mr-4">All Invoice</li>
                        <li class="mr-4">Paid</li>
                        <li class="mr-4">Overdue</li>
                        <li class="mr-4">Pending</li>
                        <li class="mr-4">Draft</li>
                    </ul>
                </div>
                <div class="px-4">
                    <button class="mx-2 bg-white text-black px-3 py-1 rounded-lg border-1 border-black">+ Add New</button>
                    <button class="mx-2 bg-white text-black px-3 py-1 rounded-lg border-1 border-black">Import File</button>
                </div>
            </div>
            <div class="rounded-xl p-3 border-2 mx-3">
                <div class="flex justify-between">
                    <div>
                        <i></i>
                        <input type="text" name="searchInvoice" placeholder="Search name, Invoice, Item" class="border-1 outline-none px-3 py-1 rounded-lg border-1 border-black">
                    </div>
                    <div class="flex">
                        <div>
                            <button class="mx-2 bg-white text-black px-3 py-1 rounded-lg border-1 border-black">Share Invoice</button>
                        </div>
                        <div>
                            <button @click="toAddClient()" class="mx-2 px-3 bg-white text-black py-1 rounded-lg border-1 border-black">Delet</button>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <table class="w-100">
                        <tr class="text-left border-y-2">
                            <td class="w-12 pl-3 pr-10 py-2"></td>
                            <td class="py-3">invoice#</td>
                            <td>Client</td>
                            <td>Date</td>
                            <td>Item</td>
                            <td>Post Due</td>
                            <td>Amount</td>
                            <td class="text-center">Status</td>
                        </tr>
                        <tr v-for="(item, index) in items" :key="index" class="text-left">
                            <td class="w-12 pl-3 pr-10 pt-3">
                                <input type="checkbox" class="w-6 h-6">
                            </td>
                            <td class="pt-2">{{item.first_name}}</td>
                            <td class="pt-2">{{item.last_name}}</td>
                            <td class="pt-2">{{item.age}}</td>
                            <td class="pt-2">{{item.last_name}}</td>
                            <td class="pt-2">{{item.last_name}}</td>
                            <td class="pt-2">{{item.last_name}}</td>
                            <td class="w-16 px-3 pt-2">
                                <span class="bg-gray-200 px-2">Paid</span>
                            </td>
                        </tr>
                    </table>
                </div>
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
export default {
    name: "ClientView",
    data() {
        return {
        items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' }
            ]
        }
    },
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