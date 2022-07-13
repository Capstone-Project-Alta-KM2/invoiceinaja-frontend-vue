<template>
  <div class="p-10 w-full">
    <div class="mb-5">
      <h2 class="text-3xl font-semibold text-left">Verify Your Email</h2>
      <p class="text-slate-400 text-left text-lg w-96">
        Your new password must be different from previously used passwords.
      </p>
    </div>
    <form
      action=""
      @submit.prevent="changePassword"
      class="text-left flex flex-col space-y-8"
    >
      <div class="relative">
        <label for="psw" class="font-semibold mb-2">Password</label>
        <input
          id="psw"
          :type="isShowPass ? 'text' : 'password'"
          placeholder="Buat Password"
          class="form peer w-full"
          @mousedown="validatePassword"
          @input="validatePassword"
          v-model="kata_sandi"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="
            h-5
            w-5
            absolute
            focus:right-6
            top-[52px]
            right-4
            cursor-pointer
            text-soft-purple
          "
          viewBox="0 0 20 20"
          fill="currentColor"
          v-if="!isShowPass"
          @click="isShowPass = !isShowPass"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fill-rule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="
            h-5
            w-5
            absolute
            top-[52px]
            right-4
            cursor-pointer
            text-soft-purple
          "
          viewBox="0 0 20 20"
          fill="currentColor"
          v-if="isShowPass"
          @click="isShowPass = !isShowPass"
        >
          <path
            fill-rule="evenodd"
            d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
            clip-rule="evenodd"
          />
          <path
            d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
          />
        </svg>
        <div v-if="pesanPassword">
          {{ pesanPassword }}
        </div>
        <div v-if="pesanPassword">
          {{ pesanPassword }}
        </div>
        <ul>
          <li v-if="pesanPassLength">
            <p class="alert alert-failed">{{ pesanPassLength }}</p>
          </li>
          <li v-if="pesanPassUppercase">
            <p class="alert alert-failed">{{ pesanPassUppercase }}</p>
          </li>
          <li v-if="pesanPassLowercase">
            <p class="alert alert-failed">{{ pesanPassLowercase }}</p>
          </li>
          <li v-if="pesanPassNumber">
            <p class="alert alert-failed">{{ pesanPassNumber }}</p>
          </li>
        </ul>
      </div>
      <div class="relative">
        <label for="confirmPass" class="font-semibold mb-2"
          >Konfirmasi Password</label
        >
        <input
          id="confirmPass"
          :type="isShowConfirmPass ? 'text' : 'password'"
          @input="confirmPass"
          placeholder="Confirm Password"
          v-model="kata_sandi_konfirmasi"
          class="form w-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="
            h-5
            w-5
            absolute
            top-[52px]
            right-4
            cursor-pointer
            text-soft-purple
          "
          viewBox="0 0 20 20"
          fill="currentColor"
          v-if="!isShowConfirmPass"
          @click="isShowConfirmPass = !isShowConfirmPass"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fill-rule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="
            h-5
            w-5
            absolute
            top-[52px]
            right-4
            cursor-pointer
            text-soft-purple
          "
          viewBox="0 0 20 20"
          fill="currentColor"
          v-if="isShowConfirmPass"
          @click="isShowConfirmPass = !isShowConfirmPass"
        >
          <path
            fill-rule="evenodd"
            d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
            clip-rule="evenodd"
          />
          <path
            d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
          />
        </svg>
        <div v-if="pesanConfirmPass">
          <p class="alert alert-failed">{{ pesanConfirmPass }}</p>
        </div>
      </div>

      <div class="w-full my-5">
        <button
          type="submit"
          v-ripple
          class="button flex items-center justify-center button-primary w-full"
          name=""
          id=""
          :disabled="
            kata_sandi == '' || kata_sandi_konfirmasi == '' || isLoading == true
          "
        >
          <span class="mr-2" v-if="isLoading">
            <simple-loading />
          </span>
          Change Password
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import SimpleLoading from "../SimpleLoadingAnimation.vue";
export default {
  components: {
    SimpleLoading,
  },
  data() {
    return {
      isShowPass: false,
      isShowConfirmPass: false,

      isLoading: false,
      isDisabled: true,

      kata_sandi: "",
      kata_sandi_konfirmasi: "",

      classPassInvalid: "border-2 border-pink-500",

      pesanPassword: "",
      pesanPassLength: null,
      pesanPassUppercase: "",
      pesanPassLowercase: "",
      pesanPassNumber: "",
      pesanConfirmPass: "",
    };
  },
  methods: {
    confirmPass() {
      if (this.kata_sandi !== this.kata_sandi_konfirmasi) {
        this.pesanConfirmPass = "Password tidak sama";
      } else {
        this.pesanConfirmPass = "";
      }
    },
    changePassword() {
      this.isLoading = true;
      if (
        this.pesanPassLength != "" ||
        this.pesanPassUppercase != "" ||
        this.pesanPassLowercase != "" ||
        this.pesanPassNumber != ""
      ) {
        this.pesanPassword = "Mohon disesuaikan dengan formatnya";
        this.isLoading = false;
      } else if (this.pesanConfirmPass != "") {
        this.pesanConfirmPass = "Password tidak sama";

        this.isLoading = false;
      } else {
        this.pesanPassword = "";
        const data = {
          kata_sandi: this.kata_sandi,
          kata_sandi_konfirmasi: this.kata_sandi_konfirmasi,
        };
        console.log(data);
      }
    },
    validatePassword() {
      let uppercase = /[A-Z]/g;
      let lowercase = /[a-z]/g;
      let number = /[0-9]/g;
      if (this.kata_sandi.length < 8) {
        this.pesanPassLength = "Harus lebih besar dari 8";
      } else {
        this.pesanPassLength = "";
      }
      if (!this.kata_sandi.match(uppercase)) {
        this.pesanPassUppercase = "Harus ada Huruf besar";
      } else {
        this.pesanPassUppercase = "";
      }

      if (!this.kata_sandi.match(lowercase)) {
        this.pesanPassLowercase = "Harus ada Huruf kecil";
      } else {
        this.pesanPassLowercase = "";
      }

      if (!this.kata_sandi.match(number)) {
        this.pesanPassNumber = "Harus ada angka";
      } else {
        this.pesanPassNumber = "";
      }

      if (
        this.pesanPassLength != "" ||
        this.pesanPassUppercase != "" ||
        this.pesanPassLowercase != "" ||
        this.pesanPassNumber != ""
      ) {
        this.pesanPassword = "";
      }
    },
  },
};
</script>

<style>
</style>