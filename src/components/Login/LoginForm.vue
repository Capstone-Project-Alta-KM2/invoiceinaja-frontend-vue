<template>
  <div class="flex sm:flex-col lg:flex-row w-screen min-h-screen bg-white">
    <div
      class="
        relative
        col-lg-6
        sm:bg-white
        lg:bg-soft-purple lg:bg-opacity-30
        flex
        justify-center
        p-5
      "
    >
      <div class="absolute top-4 left-8 flex">
        <img
          width="25px"
          height="15px"
          src="../../assets/logo/invoice-mini-logo.png"
        />
        <span class="font-bold text-lg ml-2.5">InvoiceinAja</span>
      </div>
      <div class="self-center">
        <img
          src="../../assets/images/login-image.png"
          class="sm:w-3/5 lg:w-9/12 mx-auto"
        />
      </div>
    </div>
    <div class="justify-center p-0 flex items-center">
      <div class="sm:px-7 sm:ml-2 lg:px-16 py-5">
        <div v-if="loginRespons !== null">
          <div :class="alertStyle">
            {{ loginRespons ? loginRespons : "" }}
            <div
              class="
                inline
                absolute
                right-2
                top-1.5
                text-md
                font-bold
                p-2
                cursor-pointer
              "
              @click="closeAlert()"
            >
              x
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-10">
          <div class="text-left">
            <h2 class="font-bold text-2xl">Login</h2>
            <h3 class="font-bold text-3xl">Selamat Datang Kembali!👋</h3>
          </div>
          <form
            action=""
            @submit.prevent="login"
            class="flex flex-col space-y-10"
          >
            <!-- email&password -->
            <div class="flex flex-col space-y-5">
              <div class="flex flex-col text-left space-y-2">
                <label
                  :class="`${
                    emailValidation() ? 'text-black' : 'text-red-500'
                  }  font-semibold`"
                  >Email</label
                >
                <input
                  type="email"
                  v-model="email"
                  pattern="\s*\S+.*"
                  placeholder="Masukkan email anda"
                  class="form w-full lowercase"
                  @change="emailValidation()"
                  @mouseout="emailValidation()"
                  :class="
                    emailValidation()
                      ? ''
                      : 'outline-0  focus:border-red-500 focus:ring-0'
                  "
                />
                <p
                  :class="`${
                    emailValidation()
                      ? 'alert-animation-hide'
                      : 'alert-animation-show invalid'
                  } text-sm`"
                >
                  Enter email correctly !
                </p>
              </div>

              <div class="flex flex-col relative text-left space-y-2">
                <label class="font-semibold">Password</label>
                <input
                  id="psw"
                  :type="!isShowPass ? 'password' : 'text'"
                  v-model="password"
                  placeholder="Masukkan password anda"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  class="form w-full peer"
                  :class="
                    isPasswordValid
                      ? ''
                      : 'outline-0 border-red-600 ring-red-600 ring-2'
                  "
                  @mouseout="resetPasswordAlert()"
                  @input="validatePassword()"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="
                    h-5
                    w-5
                    absolute
                    right-5
                    bottom-[18px]
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
                    right-5
                    bottom-[18px]
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
              </div>
            </div>

            <div class="flex justify-between mt-10">
              <div class="flex space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  class="form-checkbox-modif checked:accent-soft-purple"
                  v-model="isChecked"
                />
                <label for="remember" class="font-semibold">Remember me</label>
              </div>
              <div>
                <router-link
                  to="/forget-password"
                  class="text-decoration-none text-soft-purple font-semibold"
                  >Forget Password?</router-link
                >
              </div>
            </div>

            <div class="my-5">
              <button
                :disabled="
                  email == '' || password == '' || isEmailValid == false
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
                Login
              </button>
            </div>
          </form>
          <div>
            <p>
              <span>Belum mendaftar? </span>
              <router-link to="/register" class="text-soft-purple font-semibold"
                >Sign Up</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",

      isLoading: false,

      loginRespons: null,

      isEmailValid: true,
      isPasswordValid: true,

      isShowPass: false,
      passFormatStyle: "alert-animation-hide",

      isChecked: false,
    };
  },
  components: {
    SimpleLoadingAnimation,
  },

  methods: {
    closeAlert() {
      this.loginRespons = null;
    },

    async login() {
      this.closeAlert();
      this.isLoading = true;
      const userLogin = {
        email: this.email,
        password: this.password,
      };
      await axios
        .post("api/v1/sessions", userLogin)
        .then((res) => {
          console.log("response login : ", res);
          this.loginRespons = res.data.meta.message;
          this.isLoading = false;
          this.isRememberMe(res);
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          this.loginRespons = err.response.data.meta.message;
          this.isLoading = false;
        });
    },

    emailValidation() {
      var reg = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;

      if (this.email == "") {
        this.isEmailValid = true;
        return true;
      } else if (!reg.test(this.email)) {
        this.isEmailValid = false;
        return false;
      } else {
        this.isEmailValid = true;
        return true;
      }
    },

    resetPasswordAlert() {
      if (this.password == "") {
        (this.pesanPassLength = null),
          (this.pesanPassUppercase = ""),
          (this.pesanPassLowercase = ""),
          (this.pesanPassNumber = "");
        this.isPasswordValid = true;
      }
    },

    isRememberMe(res) {
      let token = res.data.data.token;
      localStorage.setItem("token", token);
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

