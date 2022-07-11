<template>
  <div class="mx-auto w-full px-5">
    <div class="mb-5">
      <h2 class="text-3xl font-semibold text-left">Verify Your Email</h2>
      <p class="text-slate-400 text-left text-lg w-96">
        Please enter the verification code we sent to your email address
      </p>
    </div>
    <VueChillCodeInput
      id="code_verif"
      :length="4"
      v-model="codeVerify"
      @done="finishEvent"
    />
    <button class="mt-3 button button-primary w-full" v-ripple>Verify</button>
    <a href="" class="my-16 inline-block text-xl text-soft-purple font-semibold"
      >Resend Code</a
    >
  </div>
</template>

<script>
import VueChillCodeInput from "vue-chill-code-input";

export default {
  data() {
    return {
      codeVerify: "",
    };
  },
  components: {
    VueChillCodeInput,
  },
  methods: {
    finishEvent(e) {
      this.codeVerify = e;
      console.log(this.codeVerify);
      // console.log("onComplete ", e);
    },
  },
  mounted() {
    let token = localStorage.getItem("token");
    if (token) {
      this.$router.push("/dashboard");
    }
  },
};
</script>

<style lang="scss">
#code_verif {
  background-color: white;
  input[type="text"] {
    border-radius: 0px;
    margin-left: 20px;
    border-width: 1px;
    border-color: black;
    &:focus {
      --tw-ring-color: #9b6dff;
      border-color: #9b6dff;
    }
  }
}
</style>