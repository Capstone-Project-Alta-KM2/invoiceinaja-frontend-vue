<template>
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
</template>

<script>
export default {
    name: 'InvoicesTable',
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
        };
    }

}
</script>

<style>

</style>