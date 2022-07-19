<template>
  <div class="change-password px-10 mt-20 mb-10">
    <!-- check Password First -->
    <div v-if="!isChangePassState" class="text-left">
      <!-- Old Password -->
      <div class="relative w-full mt-10">
        <label
          for="psw"
          :class="`${
            errorMsgOld ? 'focus:text-red-500 text-red-500 ' : ''
          } font-semibold text-lg`"
          >Old Password</label
        >
        <input
          v-model="oldPassword"
          placeholder="Your Old Password"
          :type="isShowPass ? 'text' : 'password'"
          :class="`${
            errorMsgOld
              ? 'focus:border-red-500 focus:ring-0 border-red-500 focus:ring-red-500'
              : ''
          } form mt-2 peer w-full`"
          @input="validateOldPassword"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="`${
            errorMsgOld
              ? 'focus:text-red-500 peer-focus:text-red-500 text-red-500 '
              : ''
          } h-5
              w-5
              absolute
              focus:right-6
              top-[56px]
              right-4
              cursor-pointer
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
            errorMsgOld
              ? 'focus:text-red-500 peer-focus:text-red-500 text-red-500 '
              : ''
          }
              h-5
              w-5
              absolute
              top-[56px]
              right-4
              cursor-pointer
              peer-focus:text-soft-purple
            `"
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

        <div v-if="errorMsgOld">
          <p v-html="errorMsgOld" class="text-red-500"></p>
        </div>
      </div>

      <div class="text-center mt-6">
        <button
          v-ripple
          class="my-5 button button-primary"
          @click="checkOldPassword"
        >
          Submit Password
        </button>
      </div>
    </div>

    <!-- after fill oldPassword -->
    <form v-else @submit.prevent="changePassword" class="text-left">
      <div>
        <!-- New Password -->
        <div class="relative w-full mt-10">
          <label
            for="psw"
            :class="`${
              errorMsgNew ? 'focus:text-red-500 text-red-500 ' : ''
            } font-semibold text-lg`"
            >New Password</label
          >
          <input
            v-model="newPassword"
            placeholder="Your New Password"
            :type="isShowPass ? 'text' : 'password'"
            :class="`${
              errorMsgNew
                ? 'focus:border-red-500 focus:ring-0 border-red-500 focus:ring-red-500'
                : ''
            } form mt-2 peer w-full`"
            @input="validateNewPassword"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="`${
              errorMsgNew
                ? 'focus:text-red-500 peer-focus:text-red-500 text-red-500 '
                : ''
            } h-5
              w-5
              absolute
              focus:right-6
              top-[56px]
              right-4
              cursor-pointer
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
              errorMsgNew
                ? 'focus:text-red-500 peer-focus:text-red-500 text-red-500 '
                : ''
            }
              h-5
              w-5
              absolute
              top-[56px]
              right-4
              cursor-pointer
              peer-focus:text-soft-purple
            `"
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

          <div v-if="errorMsgNew">
            <p v-html="errorMsgNew" class="text-red-500"></p>
          </div>
        </div>

        <!-- Confirm Password -->
        <div class="relative w-full mt-10">
          <label
            for="psw"
            :class="`${
              errorMsgNew ? 'focus:text-red-500 text-red-500 ' : ''
            } font-semibold text-lg`"
            >Confirm Password</label
          >
          <input
            v-model="confirmPassword"
            placeholder="Confirm Your New Password"
            :type="isShowPass ? 'text' : 'password'"
            :class="`${
              errorMsgConfirm
                ? 'focus:border-red-500 focus:ring-0 border-red-500 focus:ring-red-500'
                : ''
            } form mt-2 peer w-full`"
            @input="validateConfirmPassword"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="`${
              errorMsgConfirm
                ? 'focus:text-red-500 peer-focus:text-red-500 text-red-500 '
                : ''
            } h-5
              w-5
              absolute
              focus:right-6
              top-[56px]
              right-4
              cursor-pointer
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
              errorMsgConfirm
                ? 'focus:text-red-500 peer-focus:text-red-500 text-red-500 '
                : ''
            }
              h-5
              w-5
              absolute
              top-[56px]
              right-4
              cursor-pointer
              peer-focus:text-soft-purple
            `"
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

          <div v-if="errorMsgConfirm">
            <p v-html="errorMsgConfirm" class="text-red-500"></p>
          </div>
        </div>

        <!-- Button Handler -->
        <div class="text-center">
          <button
            v-ripple
            :disabled="isLoading"
            class="my-6 justify-center flex items-center space-x-3 button button-primary"
          >
            <div v-if="isLoading" class="flex">
              <simple-loading-animation />
            </div>
            <span>Change Password</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import bcrypt from "bcryptjs";
import axios from "axios";
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";
export default {
  components: { SimpleLoadingAnimation },
  name: "ChangePassword",
  data() {
    return {
      isLoading: false,

      oldPassword: "",
      newPassword: "",
      confirmPassword: "",

      errorMsgOld: "",
      errorMsgNew: "",
      errorMsgConfirm: "",
      isShowPass: false,

      isChangePassState: false,
    };
  },
  computed: {
    oldPasswordState() {
      return this.$store.state.usersInfo.password;
    },
  },
  methods: {
    checkOldPassword() {
      let bcryptCompare = bcrypt.compareSync(
        this.oldPassword,
        this.oldPasswordState
      );
      console.log(bcryptCompare); // true
      if (this.oldPassword === "") {
        this.errorMsgOld = "Old password cannot be empty";
      } else if (bcryptCompare === false) {
        this.errorMsgOld = "Old password not same";
      } else {
        this.errorMsgOld = "";
        this.isChangePassState = true;
      }
    },
    validateOldPassword() {
      let bcryptCompare = bcrypt.compareSync(
        this.oldPassword,
        this.oldPasswordState
      );
      console.log(bcryptCompare); // true
      if (this.oldPassword === "") {
        this.errorMsgOld = "Old password cannot be empty";
      } else if (bcryptCompare === false) {
        this.errorMsgOld = "Old password not same";
      } else {
        this.errorMsgOld = "";
      }
    },
    validateNewPassword() {
      let uppercase = /[A-Z]/g;
      let lowercase = /[a-z]/g;
      let number = /[0-9]/g;

      if (this.newPassword === "") {
        this.errorMsgNew = "New password cannot be empty";
      } else if (!this.newPassword.match(lowercase)) {
        this.errorMsgNew = "Must contain lowercase";
      } else if (!this.newPassword.match(uppercase)) {
        this.errorMsgNew = "Must contain uppercase";
      } else if (!this.newPassword.match(number)) {
        this.errorMsgNew = "Must contain number";
      } else if (this.newPassword.length < 8) {
        this.errorMsgNew = "Minimum 8 character";
      } else {
        this.errorMsgNew = "";
      }
    },
    validateConfirmPassword() {
      if (this.confirmPassword === "") {
        this.errorMsgConfirm = "Confirm password cannot be empty";
      } else if (this.confirmPassword !== this.newPassword) {
        this.errorMsgConfirm =
          "Password confirm are not same with your new password";
      } else {
        this.errorMsgConfirm = "";
      }
    },
    async changePassword() {
      this.$emit("hideAlert");
      this.isLoading = true;
      const data = {
        old_password: this.oldPassword,
        new_password: this.newPassword,
      };

      this.validateNewPassword();
      this.validateConfirmPassword();
      let bcryptCompare = bcrypt.compareSync(
        data.new_password,
        this.oldPasswordState
      );
      if (bcryptCompare) {
        this.$emit("sendError", "New password same with old Password");
        this.isLoading = false;
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      } else if (!this.errorMsgNew && !this.errorMsgConfirm) {
        await axios
          .post("api/v1/change_passwords", data)
          .then((res) => {
            this.$emit("sendSuccess", res.data.meta.message);
            let passHash = bcrypt.hashSync(this.newPassword, 10);
            this.$store.dispatch("actionOfChangePass", passHash);
            this.isLoading = false;
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            setTimeout(() => {
              this.$router.push("/settings/profile");
            }, 5000);
          })
          .catch((err) => {
            console.log("err : ", err.response);
            this.$emit("sendError", err.response.data.meta.message);
            this.isLoading = false;
          });
      } else {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style></style>
