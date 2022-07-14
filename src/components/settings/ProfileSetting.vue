<template>
  <div class="profile-settiing px-10 mt-20 mb-10">
    <div class="flex items-center">
      <div class="rounded-full overflow-hidden bg-black mr-5 w-14 h-14">
        <img
          :src="userProfile.avatar"
          alt="Your Photo Profile"
          class="min-w-full"
        />
      </div>
      <div class="flex flex-col items-start">
        <span class="font-semibold">{{ userProfile.fullname }}</span>
        <span class="text-sm">{{ userProfile.email }}</span>
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
      const userData = {
        fullname: this.userName,
        email: this.email,
        phone_number: this.phoneNumber,
        company: this.company,
      };

      axios
        .put("/api/v1/users", userData)
        .then((res) => {
          console.log("sukses");
          console.log(res);
          this.$store.dispatch("actionUsersInfo", res.data.data);
          this.isLoading = false;
        })
        .catch((err) => {
          console.log("Error");
          console.log(err);
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
  },
  mounted() {
    this.setFieldValue();
    console.log(this.userProfile);
  },
};
</script>

<style></style>
