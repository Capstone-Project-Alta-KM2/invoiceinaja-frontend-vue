<template>
  <div class="flex flex-col space-y-5 my-8">
    <h1 class="text-left font-semibold text-2xl">Import Invoices</h1>
    <p class="text-left">
      We will validate your invoice data from importinvoice.xlsx
    </p>
    <div class="w-full my-10 overflow-x-auto whitespace-nowrap">
      <table class="w-full">
        <thead class="bg-[rgba(155,109,255,0.1)]">
          <tr class="text-center">
            <td class="py-5 lg:px-0">No. Invoice</td>
            <td class="lg:px-0 px-10">Client</td>
            <td class="lg:px-0 px-10">Date</td>
            <td class="lg:px-0 px-10">Post Due</td>
            <td class="text-center lg:px-0 px-10">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in items"
            :key="index"
            class="
              text-center
              py-3
              my-10
              shadow-invoicein
              hover:bg-[rgba(155,109,255,0.2)]
              duration-300
              transition-all
              cursor-pointer
            "
          >
            <td class="py-5 lg:px-0 px-10">{{ item.id }}</td>
            <td class="lg:px-0 px-10">{{ item.client }}</td>
            <td class="lg:px-0 px-10">{{ item.date }}</td>
            <td class="lg:px-0 px-10">{{ item.post_due }}</td>
            <td class="text-center lg:px-0 px-10">{{ item.Amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          client: "Restu",
          date: "2022-07-20",
          post_due: "2023-08-20",
          Amount: 10000,
        },
      ],
    };
  },
};
</script>

<style>
</style>