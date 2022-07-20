<template>
  <div class="bg-white rounded-lg border">
    <back-to-clients></back-to-clients>
    <template-clients @showAlert="setClientAlert"></template-clients>
    <clients-instructions></clients-instructions>
    <div
      class="fixed inset-0 z-50 overflow-hidden box-border bg-black bg-opacity-20 flex justify-center items-center"
      :class="isAlertShow ? 'dialog-animation-show' : 'dialog-animation-hide'"
    >
      <client-alert></client-alert>
    </div>
  </div>
</template>

<script>
import ClientAlert from "./ClientAlert.vue";
import BackToClients from "./Import/BackToClients.vue";
import ClientsInstructions from "./Import/ClientsInstructions.vue";
import TemplateClients from "./Import/TemplateClients.vue";
export default {
  name: "ImportPage",
  components: {
    BackToClients,
    ClientsInstructions,
    TemplateClients,
    ClientAlert,
  },
  data() {
    return {
      isAlertShow: false,
    };
  },
  methods: {
    setClientAlert() {
      if (this.isAlertShow == false) {
        this.isAlertShow = true;
      } else {
        this.isAlertShow = false;
      }
    },
  },
};
</script>

<style></style>
