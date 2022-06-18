<template>
  <div class="client-page">
    <div 
      class="rounded-md border-2 bg-white"
    >
      <h4 class="
          text-left
          p-3 
          text-2xl 
          font-bold 
          text-black
        ">
          Clients
        </h4>
      <client-table @showDialog="changeShow()" />
      <div
        class="
          w-screen
          absolute
          inset-0
          z-50
          bg-black 
          bg-opacity-50
          overflow-y-auto
          flex
          justify-center
          dialog-animation-hide
        "
        :class="{'dialog-animation-show':showing}"
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