<template>
  <div class="container text-left flex justify-evenly items-center">
    <div class="text-left flex items-start space-x-3">
      <div>
        <h4 class="text-2xl">Total Paid</h4>
        <h3 class="font-semibold text-2xl">Rp. {{ formatPrice(totalPaid) }}</h3>
      </div>

      <span class="text-paid-color bg-[#f3fcef] rounded-xl py-[2px] px-2">
        +21,55%
      </span>
    </div>
    <div class="flex">
      <div class="border-r h-12 border-black"></div>
    </div>
    <div class="text-left flex items-start space-x-3">
      <div>
        <h4 class="text-2xl">Total Unpaid</h4>
        <h3 class="font-semibold text-2xl">
          Rp. {{ formatPrice(totalUnpaid) }}
        </h3>
      </div>

      <span class="text-overdue-color bg-[#ffd6db] rounded-xl py-[2px] px-2">
        -5,55%
      </span>
    </div>
    <div class="flex">
      <div class="border-r h-12 border-black"></div>
    </div>
    <div class="text-left flex items-start space-x-3">
      <div>
        <h4 class="text-2xl">Total Costumer</h4>
        <h3 class="font-semibold text-2xl">
          {{ formatNumber(totalCustomer) }}
        </h3>
      </div>
      <span class="text-notif-created bg-[#e9f6ff] rounded-xl py-[2px] px-2">
        +5,55%
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TotalInvoiceComp",
  data() {
    return {
      totalPaid: 1000000,
      totalUnpaid: 100000,
      totalCustomer: 10000,
    };
  },
  methods: {
    overall() {
      axios
        .get("/api/v1/overall")
        .then((res) => {
          this.totalPaid = res.data.data.paid;
          this.totalUnpaid = res.data.data.unpaid;
          this.totalCustomer = res.data.data.customer;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    formatNumber(value) {
      let val = (value / 1).toFixed(0).replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  mounted() {
    this.overall();
  },
};
</script>

<style></style>
