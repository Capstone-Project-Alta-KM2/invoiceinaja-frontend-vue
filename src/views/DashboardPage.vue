<template>
  <div class="container grid grid-cols-12 gap-4 my-10">
    <div class="col-span-12 py-4 bg-white rounded-xl">
      <total-invoice />
    </div>
    <div
      class="
        col-span-8
        bg-white
        rounded-xl
        drop-shadow-[4px_5px_8px_rgba(0,0,0,0.1)]
      "
    >
      <graph />
    </div>
    <div class="col-span-4 bg-white rounded-xl">
      <recent-activity />
    </div>
    <div class="col-span-8 overflow-hidden bg-white rounded-xl">
      <invoice-activity />
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
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
</style>