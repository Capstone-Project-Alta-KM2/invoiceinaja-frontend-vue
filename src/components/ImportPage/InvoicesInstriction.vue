<template>
  <div class="text-left px-28 mt-14">
    <div>
      <span class="font-bold -ml-4">How to Upload Multiple Invoices:</span>
    </div>
    <div class="mt-5">
      <ul class="grid grid-flow-col grid-rows-3 gap-x-20 gap-y-3 list-decimal">
        <li
          v-for="(item, index) in instructions"
          :key="index"
          class="text-justify"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientsInstructions",
  data() {
    return {
      instructions: [
        "Download the Import Invoice Format by clicking the box marked with the blue arrow (Download the Invoice Template file).",
        "The downloaded Excel will have 3 sheets: Instruction, Tax ID (the tax setting account contained in your account), and Bulk Format.",
        "Please complete the data on the Bulk Format Sheet, according to the procedures contained in the Instruction sheet.",
        "Make sure the file you want to upload has the extension .xlsx and the size is no more than 1 MB.",
        "Make sure you have column No. Invoice, Invoice Date, Due Date. Tempo, Partner Name, Product Name, Product Quantity, Product Price",
      ],
    };
  },
};
</script>

<style></style>
