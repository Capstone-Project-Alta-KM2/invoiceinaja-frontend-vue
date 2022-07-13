<template>
  <div class="profile-settiing px-10 mt-20 mb-10">
    <div class="flex">
      <div class="rounded-full overflow-hidden bg-black mr-5">
        <img src="../../assets/images/landing/avatar.png" alt="" />
      </div>
      <div class="flex flex-col items-start">
        <span class="font-semibold">Username</span>
        <span class="text-sm">email@gmail.com</span>
      </div>
    </div>
    <div class="mt-10">
      <form action="">
        <div class="grid grid-cols-2 gap-x-6 text-left">
          <!-- name start -->
          <div class="w-full h-36">
            <label for="nama" class="font-semibold text-lg">Full Name</label>
            <input
              id="nama"
              type="text"
              placeholder="Your Name"
              class="form w-full mt-2"
              v-model="fullName"
              :class="isNameEmpty ? 'border-failed' : ''"
              @input="
                () => {
                  if (fullName == '') {
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
          <!-- streets start -->
          <div class="w-full h-36">
            <label for="email" class="font-semibold text-lg">Street</label>
            <input
              id="text"
              v-model="address"
              type="text"
              placeholder="Your Street Address"
              class="form w-full mt-2"
              :class="isAddressEmpty ? 'border-failed' : ''"
              @input="
                () => {
                  if (address == '') {
                    this.isAddressEmpty = true;
                  } else {
                    this.isAddressEmpty = false;
                  }
                }
              "
            />
            <div v-if="isAddressEmpty" class="mt-2">
              <span class="text-red-500">Address cannot be empty</span>
            </div>
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
              fullName == '' ||
              email == '' ||
              phoneNumber == '' ||
              address == '' ||
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
import SimpleLoading from "./../SimpleLoadingAnimation.vue";

export default {
  name: "ProfileSetting",
  components: {
    SimpleLoading,
  },
  data() {
    return {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      company: "",

      isNameEmpty: "",
      isEmaiEmpty: "",
      isNoPhoneEmpty: "",
      isAddressEmpty: "",
      isCompanyEmpty: "",

      isEmailValid: true,

      pesanValidasiEmail: "",
    };
  },
  methods: {
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
  },
};
</script>

<style></style>
