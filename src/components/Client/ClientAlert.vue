<template>
  <div
    class="bg-white px-10 rounded-lg py-6 flex justify-center items-center flex-col space-y-5 h-80"
  >
    <success-icon />
    <h1 class="text-2xl font-semibold">
      Congratulation! You have successfully saved clients
    </h1>
    <button class="button button-primary px-3" v-ripple @click="toClients()">
      {{ checkForm(statusForm) }}
    </button>
  </div>
</template>

<script>
import SuccessIcon from "../IconComp/SuccessIcon.vue";
export default {
  props: ["statusForm"],
  components: { SuccessIcon },
  methods: {
    toClients() {
      this.$emit("showAlert");
      if (this.$router.currentRoute.path == "/import-clients") {
        this.$router.push("/client");
      } else if (this.$router.currentRoute.path == "/client") {
        console.log(this.$router.currentRoute.path);
      }
    },
    checkForm(form) {
      if (form == "addData") {
        return "Back to form";
      } else {
        return "Go to my clients";
      }
    },
  },
};
</script>

<style></style>
