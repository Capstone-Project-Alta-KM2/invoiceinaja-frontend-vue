<template>
  <div class="flex flex-col space-y-10">
    <div class="py-4 bg-white rounded-xl">
      <total-invoice />
    </div>
    <div
      class="
        flex
        justify-center
        lg:flex-row
        flex-col
        space-y-5
        lg:space-y-0 lg:space-x-5
      "
    >
      <div class="flex flex-col space-y-10">
        <div
          class="
            bg-white
            lg:w-[800px]
            w-[600px]
            rounded-xl
            drop-shadow-[4px_5px_8px_rgba(0,0,0,0.1)]
          "
        >
          <graph />
        </div>
        <div class="overflow-hidden bg-white rounded-xl">
          <invoice-activity />
        </div>
      </div>
      <div class="bg-white h-screen rounded-xl overflow-y-scroll">
        <recent-activity />
      </div>
    </div>
  </div>
</template>

<script>
import TotalInvoice from "../components/Dashboard/TotalInvoiceComp-Dashboard.vue";
import Graph from "../components/Dashboard/GraphComp-Dashboard.vue";
import InvoiceActivity from "../components/Dashboard/InvoiceActivitesComp-Dashboard.vue";
import RecentActivity from "../components/Dashboard/RecentActivitiesComp-Dashboard.vue";
export default {
  components: {
    TotalInvoice,
    Graph,
    InvoiceActivity,
    RecentActivity,
  },
  mounted() {},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
</style>