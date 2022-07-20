<template>
  <div class="grid grid-cols-2 min-w-screen min-h-screen box-border bg-white">
    <div
      class="
        relative
        sm:bg-white
        lg:bg-soft-purple lg:bg-opacity-30
        flex
        justify-center
        p-5
      "
    >
      <div
        class="absolute top-4 left-8 flex cursor-pointer"
        @click="$router.push('/')"
      >
        <img
          width="25px"
          height="15px"
          src="../../assets/logo/invoice-mini-logo.png"
        />
        <span class="font-bold text-lg ml-2.5">InvoiceinAja</span>
      </div>
      <div class="self-center">
        <img
          src="../../assets/images/forget-pass-image.png"
          class="sm:w-3/5 lg:w-9/12 mx-auto"
        />
      </div>
    </div>
    <div
      class="
        flex
        justify-items-center
        w-full
        h-full
        bg-white
        sm:items-start
        lg:items-center
        p-20
      "
    >
      <div class="flex flex-col w-full justify-start">
        <div v-if="pesanBerhasil" class="mb-10 alert alert-success">
          <p class="">
            {{ pesanBerhasil }}
          </p>
        </div>
        <div v-if="pesanGagal" class="mb-10 alert alert-failed">
          <p class="">
            {{ pesanGagal }}
          </p>
        </div>
        <div class="text-left mb-7">
          <div class="font-bold text-3xl mb-2">Forget Password?</div>
          <p class="text-2xl font-light text-gray-500">
            Enter your registered email below to recieve password reset
            instruction.
          </p>
        </div>
        <div>
          <form @submit.prevent="sendEmail">
            <div class="flex flex-col justify-items-start">
              <div class="pb-5">
                <div class="flex flex-col text-left">
                  <label
                    :class="`${
                      inputMessage ? 'text-red-500' : ''
                    } mt-3.5 mb-2 font-semibold text-lg`"
                    >Email</label
                  >
                  <input
                    type="email"
                    v-model="email"
                    pattern="\s*\S+.*"
                    placeholder="Enter your email"
                    class="form w-full lowercase"
                    :class="`${
                      inputMessage
                        ? 'border-red-500 focus:border-red-500 focus:ring-0'
                        : ''
                    } form w-full lowerca`"
                    @input="emailValidation(email)"
                  />
                </div>
                <div class="text-left mt-2">
                  <p class="text-red-500">
                    {{ inputMessage }}
                  </p>
                </div>
              </div>
              <div v-if="isCountActive" class="mt-5">
                <div class="text-red-500 text-lg">
                  <span>
                    {{ twoDigits(minute) }}
                  </span>
                  :
                  <span> {{ twoDigits(second) }} </span>
                </div>
                <div class="mt-2">Resend again?</div>
              </div>
              <div class="mt-10">
                <button
                  :disabled="
                    email == '' ||
                    isEmailValid == false ||
                    isCountActive == true
                  "
                  type="submit"
                  v-ripple="'rgba(255, 255, 255, 0.35)'"
                  class="
                    button button-primary
                    flex
                    items-center
                    justify-center
                    w-full
                  "
                >
                  <span v-if="isLoading" class="flex mr-2">
                    <simple-loading-animation />
                  </span>
                  <span>{{ buttonStatus }}</span>
                </button>
              </div>
              <div class="mt-14">
                <div class="font-bold mr-2 mb-1">
                  Have you got a new password?
                </div>
                <router-link
                  to="/login"
                  class="
                    text-soft-purple
                    font-semibold
                    hover:text-[#9b6dff]
                    transition-all
                    duration-300
                    underline
                  "
                  >Back to login</router-link
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";

export default {
  name: "ForgetPassForm",
  components: {
    SimpleLoadingAnimation,
  },
  data() {
    return {
      email: "",
      isEmailValid: true,
      pesanBerhasil: "",
      pesanGagal: "",
      isLoading: false,
      inputMessage: "",
      second: 30,
      minute: 1,
      isCountActive: false,
      buttonStatus: "Send",
    };
  },
  methods: {
    async sendEmail() {
      this.pesanBerhasil = "";
      this.pesanGagal = "";
      this.isLoading = true;
      await axios
        .post("api/v1/email_checkers", {
          email: this.email,
        })
        .then((res) => {
          console.log("success");
          console.log(res);
          if (res.data.data.is_available == false) {
            this.sendNewPassword();
          } else {
            this.pesanGagal = "Email not registered!";
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.log("Error");
          this.pesanGagal = err.message;
          this.isLoading = false;
        });
    },
    sendNewPassword() {
      axios
        .post("api/v1/reset_passwords", {
          email: this.email,
        })
        .then((res) => {
          console.log(res);
          this.pesanBerhasil = res.data.meta.message;
          this.isLoading = false;
          this.isCountActive = true;
          this.countDownTimer();
        })
        .catch((err) => {
          this.pesanGagal = err;
          console.log(err);
          this.isLoading = false;
        });
    },
    emailValidation(email) {
      var reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (email == "") {
        this.isEmailValid = false;
        this.inputMessage = "Email cannot be empty";
      } else if (!reg.test(email)) {
        this.isEmailValid = false;
        this.inputMessage = "Enter email correctly";
      } else {
        this.isEmailValid = true;
        this.inputMessage = "";
      }
    },
    countDownTimer() {
      if (this.second == 0 && this.minute == 0) {
        this.isCountActive = false;
        this.second = 30;
        this.minute = 1;
      } else {
        if (this.second > 0) {
          setTimeout(() => {
            this.second -= 1;
            this.countDownTimer();
          }, 1000);
        }
        if (this.second == 0) {
          this.minute -= 1;
          this.second = 60;
          this.countDownTimer();
          this.buttonStatus = "Resend";
        }
      }
    },
    twoDigits(params) {
      if (params < 10) {
        return "0" + params;
      } else {
        return params;
      }
    },
  },
};
</script>

<style></style>
