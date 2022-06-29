<template>
  <div class="client-page">
    <div class="rounded-md border-2 bg-white">
      <h4 class="text-left px-3 pt-3 pb-4 text-2xl font-bold text-black">Clients</h4>
      <client-table @showDialog="changeShow()" />
      <div
        class="
          absolute
          z-50
          inset-0
          bg-black bg-opacity-50
          flex
          justify-center
        "
        :class="showing ? 'dialog-animation-show' : 'dialog-animation-hide'"
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