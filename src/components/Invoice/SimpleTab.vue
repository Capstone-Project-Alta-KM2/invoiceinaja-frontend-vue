<template>
  <div class="bg-white">
        <div class="flex justify-between align-center px-3">
            <ul
                class="
                flex flex-wrap
                -mb-px
                text-sm
                font-medium
                text-center
                text-gray-500
                dark:text-gray-400
                "
                id="tabExample"
                role="tablist"
            >
                <li class="mr-2" role="presentation">
                    <button
                        :class="currentShow == 'all-invoice' ? ActiveClass : inActiveClass"
                        id="all-invoice"
                        type="button"
                        role="tab"
                        aria-controls="all-invoice-example"
                        aria-selected="false"
                        @click="changeActive('all-invoice')"
                    >
                        All Invoice
                    </button>
                </li>
                <li class="mr-2" role="presentation">
                    <button
                        :class="currentShow == 'paid' ? ActiveClass : inActiveClass"
                        id="paid"
                        type="button"
                        role="tab"
                        aria-controls="paid-example"
                        aria-selected="false"
                        @click="changeActive('paid')"
                    >
                        Paid
                    </button>
                </li>
                <li class="mr-2" role="presentation">
                    <button
                        :class="currentShow == 'overdue' ? ActiveClass : inActiveClass"
                        id="overdue"
                        type="button"
                        @click="changeActive('overdue')"
                    >
                        Overdue
                </button>
                </li>
                <li role="presentation">
                    <button
                        :class="currentShow == 'pending' ? ActiveClass : inActiveClass"
                        id="pending"
                        type="button"
                        @click="changeActive('pending')"
                    >
                        Pending
                    </button>
                </li>
                <li role="presentation">
                    <button
                        :class="currentShow == 'draft' ? ActiveClass : inActiveClass"
                        id="draft"
                        type="button"
                        @click="changeActive('draft')"
                    >
                        Draft
                    </button>
                </li>
            </ul>
            <div class="flex mr-5">
                <div class="my-auto">
                    <button class="mx-2 bg-white text-black px-3 py-1 rounded-lg border-1 border-black">+ Add New</button>
                </div>
                <div class="my-auto">
                    <button class="mx-2 bg-white text-black px-3 py-1 rounded-lg border-1 border-black">Import File</button>
                </div>
            </div>
        </div>
        <div id="tabContentExample">
            <div
                class="px-4 rounded-md"
                :hidden="
                currentShow == 'all-invoice' ? (isHidden = false) : (isHidden = true)
                "
            >
                <invoice-table/>
            </div>
            <div
                class="p-4 rounded-md"
                :hidden="
                currentShow == 'paid' ? (isHidden = false) : (isHidden = true)
                "
            >
                Table Paid
            </div>
            <div
                class="p-4 rounded-md"
                :hidden="
                currentShow == 'overdue' ? (isHidden = false) : (isHidden = true)
                "
            >
                Table Overdue
            </div>
            <div
                class="p-4 rounded-md"
                :hidden="
                currentShow == 'pending' ? (isHidden = false) : (isHidden = true)
                "
            >
                Table Pending
            </div>
            <div
                class="p-4 rounded-md"
                :hidden="
                currentShow == 'draft' ? (isHidden = false) : (isHidden = true)
                "
            >
                Table Draft
            </div>
        </div>
    </div>
</template>

<script>
import InvoiceTable from './InvoiceTable.vue';

export default {
    name: 'SimpleTab',
    components: {
        InvoiceTable
        
    },
    data() {
        return {
        isHidden: false,
        currentShow: "all-invoice",
        inActiveClass:
            "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
        ActiveClass:
            "inline-block p-4 rounded-t-lg border-b-2 border-transparent text-black hover:text-gray-600 hover:border-gray-300 border-purple-500 dark:hover:text-gray-300",
        };
    },
    methods: {
        changeActive(page) {
        this.currentShow = page;
        let classActive = document.querySelectorAll(
            `#tabExample>li>button#${page}`
        );
        if (classActive[0].id == "paid") {
                classActive[0].classList.add("border-red-500");
            }
        },
    },
    updated() {
        this.changeActive;
    },
    mounted() {},
};
</script>