<template>
  <section class="flex flex-row bg-white">
    <div
      class="absolute top-4 left-8 flex cursor-pointer"
      @click="$router.push('/')"
    >
      <img
        width="25px"
        height="15px"
        src="../assets/logo/invoice-mini-logo.png"
      />
      <span class="font-bold text-lg ml-2.5">InvoiceinAja</span>
    </div>
    <div
      class="bg-no-repeat bg-center w-4/12 min-h-screen bg-soft-purple bg-opacity-40"
    >
      <img
        src="../assets/images/Register-Background.png"
        class="min-h-full"
        alt=""
      />
    </div>
    <div class="w-full p-8">
      <div class="my-5 px-10" v-if="pesanSuccess !== ''">
        <p class="alert alert-success">{{ pesanSuccess }}</p>
      </div>
      <div class="my-5 px-10" v-else-if="pesanFailed !== ''">
        <p class="alert alert-failed">{{ pesanFailed }}</p>
      </div>
      <h1 class="text-2xl mb-2 text-center font-semibold mt-3">Sign Up</h1>

      <form
        action=""
        @submit.prevent="register"
        class="grid grid-cols-2 text-left place-items-start p-10 gap-x-10"
      >
        <div class="w-full h-36">
          <label for="nama" class="font-semibold text-lg">Name</label>
          <input
            id="nama"
            type="text"
            placeholder="Your Name"
            class="form w-full mt-2"
            v-model="nama_lengkap"
            :class="isNameEmpty ? 'border-failed' : ''"
            @input="
              () => {
                if (nama_lengkap.length == 0) {
                  this.isNameEmpty = true;
                } else {
                  this.isNameEmpty = false;
                }
              }
            "
          />
          <p v-if="isNameEmpty" class="mt-2 text-red-500">
            Name cannot be empty
          </p>
        </div>
        <div class="w-full h-36">
          <label for="bisnis" class="font-semibold text-lg">Your Company</label>
          <input
            id="bisnis"
            type="text"
            placeholder="Your Company"
            v-model="nama_bisnis"
            class="form w-full mt-2"
            :class="isCompanyEmpty ? 'border-failed' : ''"
            @input="
              () => {
                if (nama_bisnis.length == 0) {
                  this.isCompanyEmpty = true;
                } else {
                  this.isCompanyEmpty = false;
                }
              }
            "
          />
          <p v-if="isCompanyEmpty" class="mt-2 text-red-500">
            Company cannot be empty
          </p>
        </div>
        <div class="w-full h-36">
          <label for="nohp" class="font-semibold text-lg">Phone Number</label>
          <input
            id="nohp"
            type="number"
            placeholder="Your Phone Number"
            class="form w-full mt-2"
            v-model="no_hp"
            :class="isNoPhoneEmpty ? 'border-failed' : ''"
            @input="
              () => {
                if (no_hp.length == 0) {
                  this.isNoPhoneEmpty = true;
                } else {
                  this.isNoPhoneEmpty = false;
                }
              }
            "
          />
          <p v-if="isNoPhoneEmpty" class="mt-2 text-red-500">
            Phone number cannot be empty
          </p>
        </div>
        <div class="w-full h-36">
          <label for="email" class="font-semibold text-lg">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Your Email"
            class="form w-full mt-2"
            :class="isEmailValid ? '' : 'border-failed'"
            @input="emailValidation"
          />
          <div class="mt-2">
            <span class="text-red-500">{{ pesanValidasiEmail }}</span>
          </div>
        </div>

        <div class="relative w-full">
          <label for="psw" class="font-semibold text-lg">Password</label>
          <input
            id="psw"
            v-model="kata_sandi"
            placeholder="8+ Characters"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            :type="isShowPass ? 'text' : 'password'"
            class="form mt-2 peer w-full"
            :class="isPasswordEmpty ? 'border-failed' : ''"
            @change="changeEyePassColor"
            @input="validatePassword"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 absolute focus:right-6 top-[56px] right-4 cursor-pointer peer-focus:text-soft-purple"
            :class="passColorEye"
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
            class="h-5 w-5 absolute top-[56px] right-4 cursor-pointer peer-focus:text-soft-purple"
            :class="passColorEye"
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
          <div v-if="pesanPassword != ''" class="mt-2">
            <span class="text-red-500">{{ pesanPassword }}</span>
          </div>

          <div v-else class="mb-3">
            <div v-if="pesanPassLength" class="mt-2">
              <span class="text-red-500">{{ pesanPassLength }}</span>
            </div>
            <div v-if="pesanPassUppercase" class="mt-2">
              <span class="text-red-500">
                {{ pesanPassUppercase }}
              </span>
            </div>
            <div v-if="pesanPassLowercase" class="mt-2">
              <span class="text-red-500">
                {{ pesanPassLowercase }}
              </span>
            </div>
            <div v-if="pesanPassNumber" class="mt-2">
              <span class="text-red-500">{{ pesanPassNumber }}</span>
            </div>
          </div>
        </div>
        <div class="relative w-full h-40">
          <label for="confirmPass" class="font-semibold text-lg"
            >Confirm Password</label
          >
          <input
            id="confirmPass"
            placeholder="Confirm Password"
            v-model="kata_sandi_konfirmasi"
            class="form mt-2 peer w-full disabled:pointer-events-none disabled:border-[#d1d1d1] disabled:hover:ring-white"
            :class="isPassConfirm ? 'border-failed' : ''"
            :disabled="kata_sandi == '' || isPasswordEmpty"
            :type="isShowConfirmPass ? 'text' : 'password'"
            @input="confirmPass"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 absolute top-[56px] right-4 cursor-pointer peer-focus:text-soft-purple peer-disabled:hidden"
            :class="passConfirmColorEye"
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
            class="h-5 w-5 absolute top-[56px] right-4 cursor-pointer peer-focus:text-soft-purple peer-disabled:hidden"
            :class="passConfirmColorEye"
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
          <div v-if="pesanConfirmPass && !isPasswordEmpty" class="mt-2">
            <span class="text-red-500">{{ pesanConfirmPass }}</span>
          </div>
        </div>

        <div class="relative col-span-2 w-full mt-5">
          <button
            type="submit"
            v-ripple
            class="button flex items-center justify-center button-primary w-full"
            name=""
            id=""
            :disabled="
              nama_lengkap == '' ||
              nama_bisnis == '' ||
              email == '' ||
              kata_sandi == '' ||
              kata_sandi_konfirmasi == '' ||
              no_hp == '' ||
              isLoading == true
            "
          >
            <span class="flex mr-2" v-if="isLoading">
              <simple-loading />
            </span>
            <span>Create Account</span>
          </button>
        </div>
      </form>
      <div class="flex justify-center space-x-2 pb-10">
        <p class="font-semibold">Already have an account?</p>
        <router-link
          to="/login"
          class="text-[#7c40ff] font-semibold hover:text-[#9b6dff] transition-all duration-300 underline"
        >
          Sign in
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import SimpleLoading from "./SimpleLoadingAnimation.vue";
import axios from "axios";
export default {
  components: {
    SimpleLoading,
  },
  data() {
    return {
      nama_lengkap: "",
      email: "",
      nama_bisnis: "",
      kata_sandi: "",
      kata_sandi_konfirmasi: "",
      no_hp: "",
      pesanSuccess: "",
      pesanFailed: "",

      isNameEmpty: false,
      isCompanyEmpty: false,
      isNoPhoneEmpty: false,
      isEmailValid: true,
      isPasswordEmpty: false,
      isPassConfirm: false,

      pesanConfirmPass: "",
      pesanCheckerEmail200: "",
      pesanCheckerEmail422: "",
      pesanPassword: "",
      pesanValidasiEmail: "",

      isLoading: false,
      isDisabled: true,

      isShowPass: false,
      isShowConfirmPass: false,

      classPassInvalid: "border-2 border-pink-500",
      passColorEye: "text-soft-purple",
      passConfirmColorEye: "text-soft-purple",

      pesanPassLength: null,
      pesanPassUppercase: "",
      pesanPassLowercase: "",
      pesanPassNumber: "",
    };
  },
  methods: {
    register() {
      this.pesanSuccess = "";
      this.pesanFailed = "";
      this.isLoading = true;
      const userData = {
        fullname: this.nama_lengkap,
        email: this.email.toLowerCase(),
        phone_number: this.no_hp,
        company: this.nama_bisnis,
        password: this.kata_sandi,
      };
      axios
        .post("api/v1/users", userData)
        .then((res) => {
          this.pesanSuccess = res.data.data.status;
          this.pesanFailed = "";
          this.isLoading = false;
        })
        .catch((err) => {
          this.pesanFailed = err.response.data.meta.message;
          this.pesanSuccess = "";
          this.isLoading = false;
          console.log(err.response.data);
        });
    },

    validatePassword() {
      let uppercase = /[A-Z]/g;
      let lowercase = /[a-z]/g;
      let number = /[0-9]/g;

      if (this.kata_sandi == "") {
        this.pesanPassword = "Password cannot be empty";
        this.kata_sandi_konfirmasi = "";
        this.isPassConfirm = false;
        this.pesanConfirmPass = "";
        this.isShowConfirmPass = false;
        this.isPasswordEmpty = true;
        this.changeEyeConfirmColor();
      } else {
        if (this.kata_sandi.length < 8) {
          this.isPasswordEmpty = true;
          this.pesanPassLength = "Must be at least 8 characters long ";
          this.pesanPassword = "";
        } else {
          this.pesanPassLength = "";
        }

        if (!this.kata_sandi.match(uppercase)) {
          this.pesanPassUppercase = "Include at least 1 uppercase letter";
          this.isPasswordEmpty = true;
          this.pesanPassword = "";
        } else {
          this.pesanPassUppercase = "";
        }

        if (!this.kata_sandi.match(lowercase)) {
          this.pesanPassLowercase = "Include at least 1 lowercase letter";
          this.isPasswordEmpty = true;
          this.pesanPassword = "";
        } else {
          this.pesanPassLowercase = "";
        }

        if (!this.kata_sandi.match(number)) {
          this.pesanPassNumber = "Include at least 1 numeric character";
          this.isPasswordEmpty = true;
          this.pesanPassword = "";
        } else {
          this.pesanPassNumber = "";
        }

        if (
          this.kata_sandi.length < 8 ||
          !this.kata_sandi.match(uppercase) ||
          !this.kata_sandi.match(lowercase) ||
          !this.kata_sandi.match(number)
        ) {
          this.isPasswordEmpty = true;
        } else {
          this.isPasswordEmpty = false;
          this.pesanPassword = "";
          this.changeEyeConfirmColor();
        }
      }
    },

    confirmPass() {
      if (this.kata_sandi_konfirmasi == "") {
        this.passConfirmColorEye = "text-red-500";
        this.pesanConfirmPass = "Confirm password cannot be empty";
        this.isPassConfirm = true;
      } else if (this.kata_sandi !== this.kata_sandi_konfirmasi) {
        this.passConfirmColorEye = "text-red-500";
        this.pesanConfirmPass = "The password you entered does not match";
        this.isPassConfirm = true;
      } else {
        this.passConfirmColorEye = "text-soft-purple";
        this.pesanConfirmPass = "";
        this.isPassConfirm = false;
      }
    },

    emailValidation() {
      const reg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (this.email == "") {
        this.pesanValidasiEmail = "Email cannot be empty";
        this.isEmailValid = false;
        return false;
      } else if (!reg.test(this.email)) {
        this.pesanValidasiEmail = "Enter email correctly";
        this.isEmailValid = false;
        return false;
      } else {
        this.pesanValidasiEmail = "";
        this.isEmailValid = true;
        return true;
      }
    },

    changeEyePassColor() {
      if (this.isPasswordEmpty) {
        this.passColorEye = "text-red-500";
      } else {
        this.passColorEye = "text-soft-purple";
      }
    },

    changeEyeConfirmColor() {
      if (this.isPassConfirm) {
        this.passConfirmColorEye = "text-red-500";
      }
      // else if (this.kata_sandi_konfirmasi == "") {
      //     this.passConfirmColorEye = "text-red-500";
      // }
      else {
        this.passConfirmColorEye = "text-soft-purple";
      }
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

<style>
/* Add a green text color and a checkmark when the requirements are right */
.valid {
  color: green;
}

.valid:after {
  position: absolute;
  right: 10px;
  content: "✔";
}

/* Add a red text color and an "x" when the requirements are wrong */
.invalid {
  color: red;
}

.invalid:after {
  position: absolute;
  right: 10px;
  content: "✖";
}
</style>
