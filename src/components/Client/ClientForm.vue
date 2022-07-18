<template>
  <div>
    <form @submit.prevent="functionExecute">
      <div class="grid grid-cols-2 gap-x-16 gap-y-8 text-left">
        <div class="flex flex-col">
          <label class="font-bold text-base mb-2">Name</label>
          <input
            type="text"
            placeholder="Name"
            class="form"
            :class="isNameEmpty ? 'border-2 border-red-500' : ''"
            v-model="name"
            @input="
              () => {
                if (name.length == 0) {
                  this.isNameEmpty = true;
                } else {
                  this.isNameEmpty = false;
                }
              }
            "
          />
          <p
            class="mt-1 text-red-500"
            :class="
              isNameEmpty ? 'alert-animation-show' : 'alert-animation-hide'
            "
          >
            Name cannot be empty
          </p>
        </div>

        <div class="flex flex-col">
          <label class="font-bold text-base mb-2">Email</label>
          <input
            type="email"
            placeholder="email"
            class="form lowercase"
            :class="isEmailValid ? '' : 'border-2 border-red-500'"
            v-model="email"
            @input="emailValidation()"
          />
          <p
            class="mt-1 text-red-500"
            :class="
              isEmailValid ? 'alert-animation-hide' : 'alert-animation-show'
            "
          >
            {{ emailValidationMessage }}
          </p>
        </div>

        <div class="flex flex-col">
          <label class="font-bold text-base mb-2">Address</label>
          <input
            type="text"
            placeholder="Address"
            class="form"
            :class="isAddressEmpty ? 'border-2 border-red-500' : ''"
            v-model="address"
            @input="
              () => {
                if (address.length == 0) {
                  this.isAddressEmpty = true;
                } else {
                  this.isAddressEmpty = false;
                }
              }
            "
          />
          <p
            class="mt-1 text-red-500"
            :class="
              isAddressEmpty ? 'alert-animation-show' : 'alert-animation-hide'
            "
          >
            Address cannot be empty
          </p>
        </div>

        <div class="flex flex-col">
          <label class="font-bold text-base mb-2">City</label>
          <input
            type="text"
            placeholder="Name"
            class="form"
            :class="isCityEmpty ? 'border-2 border-red-500' : ''"
            v-model="city"
            @input="
              () => {
                if (city.length == 0) {
                  this.isCityEmpty = true;
                } else {
                  this.isCityEmpty = false;
                }
              }
            "
          />
          <p
            class="mt-1 text-red-500"
            :class="
              isCityEmpty ? 'alert-animation-show' : 'alert-animation-hide'
            "
          >
            City cannot be empty
          </p>
        </div>

        <div class="flex flex-col">
          <label class="font-bold text-base mb-2">Zip Code</label>
          <input
            type="number"
            placeholder="Code"
            class="form"
            :class="isZipEmpty ? 'border-2 border-red-500' : ''"
            v-model="zipCode"
            @input="
              () => {
                if (zipCode.length == 0) {
                  this.isZipEmpty = true;
                } else {
                  this.isZipEmpty = false;
                }
              }
            "
          />
          <p
            class="mt-1 text-red-500"
            :class="
              isZipEmpty ? 'alert-animation-show' : 'alert-animation-hide'
            "
          >
            Zip Code cannot be empty
          </p>
        </div>

        <div class="flex flex-col">
          <label class="font-bold text-base mb-2">Company</label>
          <input
            type="text"
            placeholder="Company"
            class="form"
            :class="isCompanyEmpty ? 'border-2 border-red-500' : ''"
            v-model="company"
            @input="
              () => {
                if (company.length == 0) {
                  this.isCompanyEmpty = true;
                } else {
                  this.isCompanyEmpty = false;
                }
              }
            "
          />
          <p
            class="mt-1 text-red-500"
            :class="
              isCompanyEmpty ? 'alert-animation-show' : 'alert-animation-hide'
            "
          >
            Company cannot be empty
          </p>
        </div>

        <div class="flex justify-between col-start-2 mt-10">
          <div>
            <button
              v-ripple
              type="submit"
              class="button button-primary px-10 flex items-center"
              :disabled="
                name == '' ||
                email == '' ||
                address == '' ||
                city == '' ||
                zipCode == '' ||
                company == '' ||
                emailValidation() == false
              "
            >
              <span v-if="isLoading" class="flex mr-2">
                <simple-loading-animation />
              </span>
              <span>Save</span>
            </button>
          </div>
          <div>
            <button
              v-ripple
              type="button"
              class="button button-outline-primary px-4"
              @click="closeForm()"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";

export default {
  name: "ClientForm",
  components: {
    SimpleLoadingAnimation,
  },
  props: {
    statusForm: String,
    dataField: Object,
  },
  data() {
    return {
      // In form
      id: this.dataField.id,
      name: this.dataField.fullname,
      email: this.dataField.email,
      address: this.dataField.address,
      city: this.dataField.city,
      zipCode: this.dataField.zip_code,
      company: this.dataField.company,

      // check inpul is empty?
      isNameEmpty: false,
      isAddressEmpty: false,
      isCityEmpty: false,
      isZipEmpty: false,
      isCompanyEmpty: false,

      // Status
      isLoading: false,
      isEmailValid: true,
      emailValidationMessage: "",

      // compnent
    };
  },
  methods: {
    // To determine the function to be executed
    functionExecute() {
      const clientData = {
        fullname: this.name,
        email: this.email.toLowerCase(),
        address: this.address,
        city: this.city,
        zip_code: this.zipCode,
        company: this.company,
      };

      if (this.statusForm == "add") {
        this.addClient(clientData);
      } else if (this.statusForm == "edit") {
        this.editClient(clientData);
      }
    },
    // to hide form
    async closeForm() {
      this.clearForm();
      if (this.statusForm == "add") {
        this.$emit("closeAddClient");
      } else if (this.statusForm == "edit") {
        this.$emit("closeEditClient");
      }
    },
    // To add new data
    async addClient(params) {
      this.isLoading = true;
      this.$emit("hideAlertErr");
      await axios
        .post("/api/v1/clients", params)
        .then(() => {
          this.$emit("showAlertSuccess");
          this.clearForm();
          this.isLoading = false;
        })
        .catch((err) => {
          this.$emit("sendingMessageErr", err.response.data.meta.message);
          this.isLoading = false;
        });
    },
    // to edit client data
    async editClient(params) {
      this.isLoading = true;
      this.$emit("hideAlertErr");
      await axios
        .put(`/api/v1/clients/${this.id}`, params)
        .then(() => {
          this.$emit("showAlertSuccess");
          this.isLoading = false;
        })
        .catch((err) => {
          this.$emit("sendingMessage", err.response.data.meta.message);
          this.isLoading = false;
        });
    },
    // to check email format
    emailValidation() {
      // this.emailChecker();
      let reg =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<script>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (this.email == "") {
        this.emailValidationMessage = "Email cannot be empty";
        this.isEmailValid = false;
        return true;
      } else if (!reg.test(this.email)) {
        this.emailValidationMessage = "Enter email correctly";
        this.isEmailValid = false;
        return false;
      } else {
        this.emailValidationMessage = "";
        this.isEmailValid = true;
        return true;
      }
    },
    // to edit input field is empty or not
    checkInput(params) {
      if (params == 0) {
        return false;
      } else {
        return true;
      }
    },
    // to clear input field
    clearForm() {
      this.name = "";
      this.email = "";
      this.address = "";
      this.city = "";
      this.zipCode = "";
      this.company = "";
      this.isNameEmpty = false;
      this.isEmailValid = true;
      this.isAddressEmpty = false;
      this.isCityEmpty = false;
      this.isZipEmpty = false;
      this.isCompanyEmpty = false;
    },
  },
};
</script>

<style>
/* Style here... */
</style>
