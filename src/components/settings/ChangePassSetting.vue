<template>
  <div class="change-password px-10 mt-20 mb-10">
    <form action="">
      <div class="text-left">
        <div class="relative w-full mt-10">
          <label for="psw" class="font-semibold text-lg">Old Password</label>
          <input
            id="psw"
            v-model="oldPassword"
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
        <div class="relative w-full mt-10">
          <label for="psw" class="font-semibold text-lg">New Password</label>
          <input
            id="psw"
            v-model="newPassword"
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
        <div class="relative w-full h-40 mt-10">
          <label for="confirmPass" class="font-semibold text-lg"
            >Confirm Password</label
          >
          <input
            id="confirmPass"
            placeholder="Confirm Password"
            v-model="confirmPassword"
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
              oldPassword == '' ||
              newPassword == '' ||
              confirmPassword == '' ||
              isLoading == true
            "
          >
            <span class="flex mr-2" v-if="isLoading">
              <simple-loading />
            </span>
            <span>Confirm</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
  data() {
    return {
      isLoading: false,

      oldPassword: "",
      newPassword: "",
      confirmPassword: "",

      isPasswordValid: "",

      pesanPassLength: null,
      pesanPassUppercase: "",
      pesanPassLowercase: "",
      pesanPassNumber: "",

      oldPassColorEye: "text-soft-purple",
      newPassColorEye: "text-soft-purple",
      passConfirmColorEye: "text-soft-purple",

      pesanConfirmPass: "",
      pesanPassword: "",
      pesanValidasiEmail: "",
      isShowPass: false,
    };
  },
  methods: {
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
      } else {
        this.passConfirmColorEye = "text-soft-purple";
      }
    },
  },
};
</script>

<style></style>
