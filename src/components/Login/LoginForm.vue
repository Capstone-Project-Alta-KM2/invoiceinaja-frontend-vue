<template>
  <div class="">
    <div
      v-if="loginRespons"
      :class="`${
        loginRespons ? 'scale-100' : 'scale-0'
      } transition-all py-5 duration-300 bg-red-500 text-white flex items-center justify-around`"
    >
      <p>{{ loginRespons }}</p>
      <i class="bx bx-x bx-md cursor-pointer" @click="loginRespons = ''"></i>
    </div>
    <div class="grid grid-cols-2 min-w-screen min-h-screen bg-white">
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
            src="../../assets/images/login-image.png"
            class="sm:w-3/5 lg:w-9/12 mx-auto"
          />
        </div>
      </div>
      <div class="flex bg-white p-20 items-center">
        <div class="flex flex-col items-center min-w-full">
          <div class="w-full text-left">
            <div class="font-bold text-2xl">Login</div>
            <div class="font-bold text-3xl mt-2.5">
              Selamat Datang Kembali!👋
            </div>
          </div>
          <div class="w-full mt-5">
            <form action="" @submit.prevent="login">
              <div class="flex flex-col">
                <div class="flex flex-col h-[135px]">
                  <input
                    type="email"
                    v-model="email"
                    pattern="\s*\S+.*"
                    placeholder="Enter your email"
                    :class="`${
                      emailAlertMessage
                        ? 'focus:border-failed border-failed focus:ring-0'
                        : ''
                    } form w-full lowercase order-2`"
                    @input="emailValidation"
                  />
                  <label
                    class="
                      mb-2
                      text-lg
                      font-semibold
                      mt-3
                      peer-focus:text-[#2C3E50]
                      order-1
                    "
                    :class="emailAlertMessage ? 'text-red-500' : ''"
                  >
                    Email
                  </label>
                  <div v-if="emailAlertMessage" class="mt-2 text-left order-3">
                    <p class="text-red-500">
                      {{ emailAlertMessage }}
                    </p>
                  </div>
                </div>
                <div class="flex flex-col relative h-[155px]">
                  <input
                    id="psw"
                    :type="!isShowPass ? 'password' : 'text'"
                    v-model="password"
                    @input="validationPass"
                    placeholder="Enter your password"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    :class="`${
                      passwordAlertMessage
                        ? 'focus:border-failed border-failed focus:ring-0'
                        : ''
                    } form w-full peer order-2`"
                  />
                  <label
                    :class="`${
                      passwordAlertMessage
                        ? 'text-red-500 focus:text-red-500 peer-focus:text-red-500'
                        : ''
                    } mb-2
                    text-lg
                    font-semibold
                    mt-3
                    peer-focus:text-[#2C3E50]
                    order-1`"
                    >Password</label
                  >
                  <div
                    v-if="passwordAlertMessage"
                    class="mt-2 text-left order-3"
                  >
                    <p class="text-red-500">
                      {{ passwordAlertMessage }}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    :class="`${
                      passwordAlertMessage
                        ? 'text-red-500   peer-active:text-red-500 peer-focus:text-red-500'
                        : ''
                    } h-5
                    w-5
                    absolute
                    right-5
                    bottom-[66px]
                    cursor-pointer
                    text-soft-purple
                    peer-focus:text-soft-purple`"
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
                    :class="`${
                      passwordAlertMessage
                        ? 'text-red-500  peer-active:text-red-500 peer-focus:text-red-500'
                        : ''
                    } h-5
                    w-5
                    absolute
                    right-5
                    bottom-[66px]
                    cursor-pointer
                    text-soft-purple
                    peer-focus:text-soft-purple`"
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
                <div class="flex justify-between">
                  <div class="flex">
                    <input
                      type="checkbox"
                      id="remember"
                      class="
                        form-checkbox-modif
                        mr-2
                        checked:accent-soft-purple
                      "
                      v-model="isChecked"
                    />
                    <label for="remember" class="font-semibold"
                      >Remember me</label
                    >
                  </div>
                  <div>
                    <router-link
                      to="/forget-password"
                      class="
                        text-decoration-none text-soft-purple
                        font-semibold
                      "
                      >Forget Password?</router-link
                    >
                  </div>
                </div>

                <div class="mt-12 mb-5">
                  <button
                    :disabled="
                      email == '' ||
                      password == '' ||
                      emailAlertMessage != '' ||
                      passwordAlertMessage !== ''
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
                    <span>Login</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="mt-5 mb-14">
            <p>
              <span class="font-semibold">Belum mendaftar? </span>
              <router-link
                to="/register"
                class="text-soft-purple font-semibold underline"
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
  data() {
    return {
      email: "",
      password: "",
      emailAlertMessage: "",
      passwordAlertMessage: "",
      isLoading: false,
      loginRespons: "",
      statusLogin: true,
      isEmailValid: true,
      isShowPass: false,
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
        email: this.email.toLowerCase(),
        password: this.password,
      };
      await axios
        .post("/api/v1/sessions", userLogin)
        .then((res) => {
          console.log("response login : ", res);
          this.loginRespons = res.data.meta.message;
          this.isLoading = false;
          this.statusLogin = true;
          this.isRememberMe(res);
          this.$router.push("/dashboard");
        })
        .catch(() => {
          this.loginRespons =
            "We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.";
          this.isLoading = false;
          this.statusLogin = false;
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    },
    emailValidation() {
      var reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (this.email == "") {
        this.emailAlertMessage = "Email cannot be empty";
      } else if (!this.email.match(reg)) {
        this.emailAlertMessage = "Enter email correctly";
      } else {
        this.emailAlertMessage = "";
      }
    },
    validationPass() {
      if (this.password === "") {
        this.passwordAlertMessage = "Password cannot be empty";
      } else if (this.password !== "") {
        this.passwordAlertMessage = "";
      }
    },

    isRememberMe(res) {
      localStorage.setItem("token", res.data.data.token);
      this.$store.dispatch("actionUsersInfo", res.data.data);
    },
  },
  mounted() {},
};
</script>

<style scoped>
/* something here.. */
label {
  text-align: left;
}
</style>