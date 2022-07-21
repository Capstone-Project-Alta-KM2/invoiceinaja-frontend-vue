<template>
  <div class="profile-settiing px-10 mt-20 mb-10">
    <div class="flex items-center">
      <div class="relative mr-5 w-20 h-20 rounded-full">
        <label for="photo-profile" class="cursor-pointer">
          <div
            class="rounded-full overflow-hidden bg-gray-200 border border-soft-purple w-full h-full flex justify-center items-center"
            v-ripple
          >
            <img
              :src="`http://103.176.78.214:8080/${userProfile.avatar}`"
              class="min-w-full min-h-full"
            />
          </div>
          <div
            class="absolute -right-1 -bottom-1 p-2 bg-black bg-opacity-30 rounded-full"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7037 1.84615H10.5L9.975 0.349451C9.93873 0.247035 9.87226 0.158508 9.78468 0.0959631C9.69709 0.0334177 9.59266 -9.6036e-05 9.48565 2.06708e-07H4.51435C4.2956 2.06708e-07 4.09954 0.14011 4.02662 0.349451L3.5 1.84615H1.2963C0.580093 1.84615 0 2.43626 0 3.16484V10.6813C0 11.4099 0.580093 12 1.2963 12H12.7037C13.4199 12 14 11.4099 14 10.6813V3.16484C14 2.43626 13.4199 1.84615 12.7037 1.84615ZM7 9.36264C5.56759 9.36264 4.40741 8.18242 4.40741 6.72528C4.40741 5.26813 5.56759 4.08791 7 4.08791C8.43241 4.08791 9.59259 5.26813 9.59259 6.72528C9.59259 8.18242 8.43241 9.36264 7 9.36264ZM5.44444 6.72528C5.44444 7.14496 5.60833 7.54745 5.90006 7.84421C6.19178 8.14097 6.58744 8.30769 7 8.30769C7.41256 8.30769 7.80822 8.14097 8.09994 7.84421C8.39167 7.54745 8.55556 7.14496 8.55556 6.72528C8.55556 6.30559 8.39167 5.9031 8.09994 5.60634C7.80822 5.30958 7.41256 5.14286 7 5.14286C6.58744 5.14286 6.19178 5.30958 5.90006 5.60634C5.60833 5.9031 5.44444 6.30559 5.44444 6.72528Z"
                fill="#7C40FF"
              />
            </svg>
          </div>
        </label>
        <input
          type="file"
          id="photo-profile"
          class="hidden"
          ref="changePhotoProfile"
          accept="image/*"
          @input="changePhotoProfile"
        />
      </div>
      <div class="flex flex-col items-start">
        <span class="font-semibold text-lg">{{ userProfile.fullname }}</span>
        <span class="text-base">{{ userProfile.email }}</span>
      </div>
    </div>
    <div class="mt-10">
      <form action="" @submit.prevent="updateProfile">
        <div class="grid grid-cols-2 gap-x-6 text-left">
          <!-- name start -->
          <div class="w-full h-36">
            <label for="nama" class="font-semibold text-lg">Full Name</label>
            <input
              id="nama"
              type="text"
              placeholder="Your Name"
              class="form w-full mt-2"
              v-model="userName"
              :class="isNameEmpty ? 'border-failed' : ''"
              @input="
                () => {
                  if (userName == '') {
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
          <!-- email start -->
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
          <!-- phone start -->
          <div class="w-full h-36">
            <label for="nohp" class="font-semibold text-lg">Phone Number</label>
            <input
              id="nohp"
              type="number"
              placeholder="Your Phone Number"
              class="form w-full mt-2"
              v-model="phoneNumber"
              :class="isNoPhoneEmpty ? 'border-failed' : ''"
              @input="
                () => {
                  if (phoneNumber == '') {
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
          <!-- company start -->
          <div class="w-full h-36">
            <label for="bisnis" class="font-semibold text-lg"
              >Your Company</label
            >
            <input
              id="bisnis"
              type="text"
              placeholder="Your Company Name"
              v-model="company"
              class="form w-full mt-2"
              :class="isCompanyEmpty ? 'border-failed' : ''"
              @input="
                () => {
                  if (company == '') {
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
        </div>
        <!-- button -->
        <div class="relative col-span-2 w-full mt-5">
          <button
            type="submit"
            v-ripple
            class="button flex items-center justify-center button-primary w-full"
            name=""
            id=""
            :disabled="
              userName == '' ||
              email == '' ||
              phoneNumber == '' ||
              company == '' ||
              isEmailValid == false ||
              isLoading == true
            "
          >
            <span class="flex mr-2" v-if="isLoading">
              <simple-loading />
            </span>
            <span>Save</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SimpleLoading from "./../SimpleLoadingAnimation.vue";

export default {
  name: "ProfileSetting",
  components: {
    SimpleLoading,
  },
  computed: {
    userProfile() {
      return this.$store.state.usersInfo;
    },
  },
  data() {
    return {
      id: "",
      userName: "",
      email: "",
      phoneNumber: "",
      company: "",
      photoProfile: "",

      isNameEmpty: "",
      isEmaiEmpty: "",
      isNoPhoneEmpty: "",
      isCompanyEmpty: "",

      isLoading: false,
      isEmailValid: true,

      pesanValidasiEmail: "",
    };
  },
  methods: {
    updateProfile() {
      this.isLoading = true;
      this.$emit("hideAlert");
      const userData = {
        fullname: this.userName,
        email: this.email,
        phone_number: this.phoneNumber,
        company: this.company,
      };

      axios
        .put("/api/v1/users", userData)
        .then((res) => {
          this.$store.dispatch("actionUsersInfo", res.data.data);
          this.$emit("sendSuccess", res.data.meta.message);
          this.isLoading = false;
        })
        .catch((err) => {
          this.$emit("sendError", err.response.data.meta.message);
          this.isLoading = false;
        });
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
    setFieldValue() {
      this.id = this.userProfile.id;
      this.userName = this.userProfile.fullname;
      this.email = this.userProfile.email;
      this.phoneNumber = this.userProfile.phone_number;
      this.company = this.userProfile.company;
      this.photoProfile = this.userProfile.avatar;
    },
    async changePhotoProfile() {
      this.$emit("hideAlert");
      const userPhoto = this.$refs.changePhotoProfile.files[0];
      const formData = new FormData();
      formData.append("avatar", userPhoto);

      await axios
        .post("/api/v1/avatars", formData)
        .then((res) => {
          console.log("Photo Suk : ");
          console.log(res);
          this.$emit("sendSuccess", res.data.meta.message);
        })
        .catch((err) => {
          console.log("Photo Er : ");
          console.log(err);
          this.$emit("sendError", err.response.data.meta.message);
        });
    },
  },
  mounted() {
    this.setFieldValue();
    console.log(this.userProfile);
    console.log("Avatar : ");
    console.log(this.updateProfile.avatar);
  },
};
</script>

<style scoped></style>
