<template>
  <form-regis />
</template>

<script>
import FormRegis from "../components/FormRegisterComp.vue";
export default {
  data() {
    return {
      myValue: "",
    };
  },
  components: {
    FormRegis,
  },
};
</script>
<style>
</style>