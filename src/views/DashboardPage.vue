<template>
  <div class="container flex flex-col space-y-10 my-10">
    <div class="py-4 bg-white rounded-xl">
      <total-invoice />
    </div>
    <div class="flex space-x-10">
      <div class="flex flex-col space-y-10">
        <div
          class="bg-white rounded-xl drop-shadow-[4px_5px_8px_rgba(0,0,0,0.1)]"
        >
          <graph />
        </div>
        <div class="overflow-hidden bg-white rounded-xl">
          <invoice-activity />
        </div>
      </div>
      <div class="bg-white rounded-xl mb-5">
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
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
</style>