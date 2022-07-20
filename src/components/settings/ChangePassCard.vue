<template>
  <div class="bg-white rounded-lg min-h-[85vh] border overflow-hidden">
    <!-- alert start-->
    <div
      :class="` ${
        responseErr
          ? 'bg-red-500 scale-100 opacity-100 py-1'
          : responseSuccess
          ? 'bg-green-500 scale-100 opacity-100 py-1'
          : 'h-0 scale-0 opacity-0'
      }     
                text-white
                transition-all duration-300
                top-0 left-0 right-0
                col-span-5
                origin-center
              `"
    >
      <div class="flex space-x-5 justify-center items-center">
        <div>
          <p v-if="responseErr">
            {{ responseErr }}
          </p>
          <p v-if="responseSuccess">
            {{ responseSuccess }}
          </p>
        </div>
        <i
          class="bx bx-x bx-md cursor-pointer justify-self-end"
          @click="
            responseErr = '';
            responseSuccess = '';
          "
        ></i>
      </div>
    </div>
    <!-- alert end-->
    <div class="grid grid-cols-5 p-5">
      <div class="col-span-1">
        <div class="text-left">
          <h2 class="text-xl font-bold">Settings</h2>
        </div>
        <div class="mt-20">
          <nav class="flex flex-col items-start pr-3">
            <button
              v-ripple="'rgba(155, 109, 255, 0.2)'"
              class="flex justify-start items-center rounded-lg py-2.5 px-3 my-2 w-full border bg-white text-[#131313]"
              @click="toPage('/settings/profile')"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-5 opacity-50"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0001 26.0003C20.6274 26.0003 26.0001 20.6277 26.0001 14.0003C26.0001 7.37299 20.6274 2.00033 14.0001 2.00033C7.37275 2.00033 2.00008 7.37299 2.00008 14.0003C2.00008 20.6277 7.37275 26.0003 14.0001 26.0003ZM14.0001 27.3337C21.3641 27.3337 27.3334 21.3643 27.3334 14.0003C27.3334 6.63633 21.3641 0.666992 14.0001 0.666992C6.63608 0.666992 0.666748 6.63633 0.666748 14.0003C0.666748 21.3643 6.63608 27.3337 14.0001 27.3337Z"
                  fill="#131313"
                />
                <path
                  d="M6 21.7532C6 21.0645 6.51467 20.4825 7.2 20.4065C12.3433 19.8372 15.68 19.8885 20.812 20.4192C21.0683 20.4461 21.3112 20.5471 21.511 20.7097C21.7108 20.8724 21.859 21.0898 21.9373 21.3353C22.0157 21.5807 22.0208 21.8437 21.9521 22.0921C21.8835 22.3405 21.744 22.5635 21.5507 22.7338C15.494 28.0132 12.0327 27.9405 6.42667 22.7392C6.15333 22.4858 6 22.1258 6 21.7538V21.7532Z"
                  fill="#131313"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.7435 21.0819C15.6522 20.5552 12.3635 20.5059 7.27283 21.0692C7.10526 21.0887 6.95078 21.1694 6.83897 21.2957C6.72715 21.422 6.66586 21.5852 6.66683 21.7539C6.66683 21.9445 6.74617 22.1252 6.88017 22.2505C9.65883 24.8279 11.7642 25.9925 13.8222 25.9999C15.8875 26.0072 18.1062 24.8519 21.1128 22.2319C21.2084 22.1468 21.2771 22.0359 21.3108 21.9125C21.3444 21.7892 21.3415 21.6587 21.3024 21.5369C21.2633 21.4152 21.1896 21.3074 21.0904 21.2268C20.9912 21.1461 20.8707 21.096 20.7435 21.0825V21.0819ZM7.12683 19.7439C12.3242 19.1685 15.7095 19.2205 20.8815 19.7559C21.267 19.7961 21.6325 19.9479 21.9331 20.1926C22.2337 20.4373 22.4564 20.7644 22.574 21.1338C22.6916 21.5031 22.6989 21.8988 22.5951 22.2722C22.4913 22.6457 22.2808 22.9808 21.9895 23.2365C18.9395 25.8952 16.3995 27.3432 13.8182 27.3332C11.2295 27.3239 8.8015 25.8512 5.97417 23.2279C5.77173 23.0393 5.61036 22.811 5.50013 22.5573C5.3899 22.3036 5.33317 22.0298 5.3335 21.7532C5.33253 21.2561 5.51497 20.7762 5.84588 20.4053C6.17678 20.0344 6.63289 19.7987 7.12683 19.7432V19.7439Z"
                  fill="#131313"
                />
                <path
                  d="M19.3334 11.3333C19.3334 12.7478 18.7715 14.1044 17.7713 15.1046C16.7711 16.1048 15.4146 16.6667 14.0001 16.6667C12.5856 16.6667 11.229 16.1048 10.2288 15.1046C9.22865 14.1044 8.66675 12.7478 8.66675 11.3333C8.66675 9.91885 9.22865 8.56229 10.2288 7.5621C11.229 6.5619 12.5856 6 14.0001 6C15.4146 6 16.7711 6.5619 17.7713 7.5621C18.7715 8.56229 19.3334 9.91885 19.3334 11.3333Z"
                  fill="#131313"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0001 15.3333C15.0609 15.3333 16.0784 14.9119 16.8285 14.1618C17.5787 13.4116 18.0001 12.3942 18.0001 11.3333C18.0001 10.2725 17.5787 9.25505 16.8285 8.50491C16.0784 7.75476 15.0609 7.33333 14.0001 7.33333C12.9392 7.33333 11.9218 7.75476 11.1717 8.50491C10.4215 9.25505 10.0001 10.2725 10.0001 11.3333C10.0001 12.3942 10.4215 13.4116 11.1717 14.1618C11.9218 14.9119 12.9392 15.3333 14.0001 15.3333ZM14.0001 16.6667C15.4146 16.6667 16.7711 16.1048 17.7713 15.1046C18.7715 14.1044 19.3334 12.7478 19.3334 11.3333C19.3334 9.91885 18.7715 8.56229 17.7713 7.5621C16.7711 6.5619 15.4146 6 14.0001 6C12.5856 6 11.229 6.5619 10.2288 7.5621C9.22865 8.56229 8.66675 9.91885 8.66675 11.3333C8.66675 12.7478 9.22865 14.1044 10.2288 15.1046C11.229 16.1048 12.5856 16.6667 14.0001 16.6667Z"
                  fill="#131313"
                />
              </svg>
              <span>Profile</span>
            </button>
            <button
              v-ripple="'rgba(155, 109, 255, 0.2)'"
              class="flex justify-start items-center rounded-lg py-2.5 px-3 my-2 w-full bg-[#e5d9ff] text-[#7c40ff]"
              @click="toPage('/settings/password')"
            >
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-5"
              >
                <path
                  d="M9.98207 0C13.5924 0 16.4973 2.89774 16.4973 6.47521V8.31521C18.5236 8.96035 20 10.8314 20 13.0661V18.9904C20 21.7569 17.7513 24 14.9791 24H5.02212C2.24866 24 0 21.7569 0 18.9904V13.0661C0 10.8314 1.47759 8.96035 3.50269 8.31521V6.47521C3.51464 2.89774 6.41961 0 9.98207 0ZM9.99402 13.6611C9.4202 13.6611 8.95397 14.1262 8.95397 14.6986V17.3459C8.95397 17.9302 9.4202 18.3953 9.99402 18.3953C10.5798 18.3953 11.046 17.9302 11.046 17.3459V14.6986C11.046 14.1262 10.5798 13.6611 9.99402 13.6611ZM10.006 2.08685C7.5792 2.08685 5.60669 4.04253 5.59474 6.45136V8.05645H14.4053V6.47521C14.4053 4.05446 12.4328 2.08685 10.006 2.08685Z"
                  fill="#7C40FF"
                />
              </svg>
              <span class="truncate">Change Password</span>
            </button>
          </nav>
        </div>
      </div>
      <div class="col-span-4">
        <change-pass-setting
          @hideAlert="resetRespose"
          @sendError="actionError"
          @sendSuccess="actionSuccess"
        ></change-pass-setting>
      </div>
    </div>
  </div>
</template>

<script>
import ChangePassSetting from "./ChangePassSetting.vue";

export default {
  components: { ChangePassSetting },

  name: "SettingCard",
  data() {
    return {
      classActive: "bg-[#e5d9ff] text-[#7c40ff]",
      classInactive: "bg-white text-[#131313]",
      responseErr: "",
      responseSuccess: "",
    };
  },
  methods: {
    toPage(path) {
      this.$router.push(path);
    },
    resetRespose() {
      this.responseSuccess = "";
      this.responseErr = "";
    },
    actionError(value) {
      this.responseErr = value;
      setTimeout(() => {
        this.responseErr = "";
      }, 5000);
    },
    actionSuccess(value) {
      this.responseSuccess = value;
      setTimeout(() => {
        this.responseSuccess = "";
      }, 5000);
    },
  },
};
</script>

<style></style>
