<template>
  <div class="client-page">
    <div class="container relative rounded-md border-2 my-3 bg-white">
      <h4 class="text-left px-3 pt-5 text-2xl font-bold text-black">Clients</h4>
      <client-table @showDialog="changeShow()" />
      <div
        v-if="showing"
        class="
          absolute
          z-10
          inset-0
          bg-black bg-opacity-50
          overflow-y-scroll
          flex
          justify-center
          rounded-md
        "
      >
        <add-new-client @closeAddClient="hideDialog()" />
      </div>
    </div>
  </div>
</template>

<script>
import AddNewClient from "./AddNewClient.vue";

import ClientTable from "./ClientTable.vue";
export default {
  name: "ClientCard",
  data() {
    return {
      showing: false,
    };
  },
  components: {
    ClientTable,
    AddNewClient,
  },
  methods: {
    changeShow() {
      this.showing = true;
    },
    hideDialog() {
      this.showing = false;
    },
  },
};
</script>

<style>
</style>