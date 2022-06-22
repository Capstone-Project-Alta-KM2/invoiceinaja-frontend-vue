  <template>
  <section class="flex flex-row bg-white">
    <div
      class="
        bg-[url('../assets/images/Register-Background.png')]
        bg-no-repeat
        bg-center
        w-96
        min-h-screen
      "
    >
      <!-- <img src="../assets/images/Background.png" class="w-[470px]" alt="" /> -->
    </div>
    <div class="w-full p-10">
      <div class="my-3" v-if="pesanSuccess !== ''">
        <p class="alert alert-success">{{ pesanSuccess }}</p>
      </div>
      <div class="my-3" v-else-if="pesanFailed !== ''">
        <p class="alert alert-failed">{{ pesanFailed }}</p>
      </div>
      <h1 class="text-2xl mb-2 text-center font-semibold">Sign Up</h1>

      <form
        action=""
        @submit.prevent="register"
        class="grid grid-cols-2 text-left place-items-start gap-4 p-10"
      >
        <div class="">
          <label for="nama" class="font-semibold mb-2 text-xl">Nama Anda</label>
          <input
            id="nama"
            type="text"
            placeholder="Nama Depan Anda"
            class="form"
            v-model="nama_lengkap"
          />
        </div>
        <div class="">
          <label for="bisnis" class="font-semibold mb-2">Nama Perusahaan</label>
          <input
            id="bisnis"
            type="text"
            placeholder="Nama Perusahaan Anda"
            v-model="nama_bisnis"
            class="form"
          />
        </div>
        <div class="">
          <label for="nohp" class="font-semibold mb-2">Nomor Handphone</label>
          <input
            id="nohp"
            type="text"
            placeholder="Nomor HP Anda"
            class="form"
            v-model="no_hp"
          />
        </div>
        <div class="">
          <label for="email" class="font-semibold mb-2">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email Anda"
            class="form"
            v-model="email"
          />
          <div v-if="pesanCheckerEmail200">
            <p class="alert alert-success">{{ pesanCheckerEmail200 }}</p>
          </div>
          <div v-else-if="pesanCheckerEmail422">
            <p class="alert alert-failed">{{ pesanCheckerEmail422 }}</p>
          </div>
        </div>

        <div class="relative">
          <label for="psw" class="font-semibold mb-2">Password</label>
          <input
            id="psw"
            :type="isShowPass ? 'text' : 'password'"
            placeholder="Buat Password"
            class="form peer"
            @mousedown="validatePassword"
            @input="validatePassword"
            v-model="kata_sandi"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-5
              w-5
              absolute
              focus:right-6
              top-[52px]
              right-4
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
              top-[52px]
              right-4
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
          <div v-if="pesanPassword">
            {{ pesanPassword }}
          </div>

          <div v-if="pesanPassLength">
            <p class="alert alert-failed">{{ pesanPassLength }}</p>
          </div>
          <div v-if="pesanPassUppercase">
            <p class="alert alert-failed">{{ pesanPassUppercase }}</p>
          </div>
          <div v-if="pesanPassLowercase">
            <p class="alert alert-failed">{{ pesanPassLowercase }}</p>
          </div>
          <div v-if="pesanPassNumber">
            <p class="alert alert-failed">{{ pesanPassNumber }}</p>
          </div>
        </div>
        <div class="relative">
          <label for="confirmPass" class="font-semibold mb-2"
            >Konfirmasi Password</label
          >
          <input
            id="confirmPass"
            :type="isShowConfirmPass ? 'text' : 'password'"
            @input="confirmPass"
            placeholder="Confirm Password"
            v-model="kata_sandi_konfirmasi"
            class="form"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-5
              w-5
              absolute
              top-[52px]
              right-4
              cursor-pointer
              text-soft-purple
            "
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
            class="
              h-5
              w-5
              absolute
              top-[52px]
              right-4
              cursor-pointer
              text-soft-purple
            "
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
          <div v-if="pesanConfirmPass">
            <p class="alert alert-failed">{{ pesanConfirmPass }}</p>
          </div>
        </div>

        <div class="col-span-2 w-full">
          <button
            type="submit"
            v-ripple
            class="
              button
              flex
              items-center
              justify-center
              button-primary
              w-full
            "
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
            <span class="mr-2" v-if="isLoading">
              <simple-loading />
            </span>
            Create Account
          </button>
        </div>
      </form>
      <div class="flex justify-center space-x-3">
        <p class="font-semibold">Sudah Punya Akun ?</p>
        <router-link
          to="/login"
          class="
            text-[#7c40ff]
            font-semibold
            hover:text-[#9b6dff]
            transition-all
            duration-300
          "
          >Sign in</router-link
        >
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

      pesanConfirmPass: "",

      pesanCheckerEmail200: "",
      pesanCheckerEmail422: "",

      isShowPass: false,
      isShowConfirmPass: false,

      isLoading: false,
      isDisabled: true,
      pesanPassword: "",
      classPassInvalid: "border-2 border-pink-500",
      pesanPassLength: null,
      pesanPassUppercase: "",
      pesanPassLowercase: "",
      pesanPassNumber: "",
    };
  },
  computed: {},
  methods: {
    validatePassword() {
      let uppercase = /[A-Z]/g;
      let lowercase = /[a-z]/g;
      let number = /[0-9]/g;
      if (this.kata_sandi.length < 8) {
        this.pesanPassLength = "Harus lebih besar dari 8";
      } else {
        this.pesanPassLength = "";
      }
      if (!this.kata_sandi.match(uppercase)) {
        this.pesanPassUppercase = "Harus ada Huruf besar";
      } else {
        this.pesanPassUppercase = "";
      }

      if (!this.kata_sandi.match(lowercase)) {
        this.pesanPassLowercase = "Harus ada Huruf kecil";
      } else {
        this.pesanPassLowercase = "";
      }

      if (!this.kata_sandi.match(number)) {
        this.pesanPassNumber = "Harus ada angka";
      } else {
        this.pesanPassNumber = "";
      }

      if (
        this.pesanPassLength != "" ||
        this.pesanPassUppercase != "" ||
        this.pesanPassLowercase != "" ||
        this.pesanPassNumber != ""
      ) {
        this.pesanPassword = "";
      }
    },

    confirmPass() {
      if (this.kata_sandi !== this.kata_sandi_konfirmasi) {
        this.pesanConfirmPass = "Password tidak sama";
      } else {
        this.pesanConfirmPass = "";
      }
    },
    async register() {
      this.isLoading = true;
      if (
        this.pesanPassLength != "" ||
        this.pesanPassUppercase != "" ||
        this.pesanPassLowercase != "" ||
        this.pesanPassNumber != ""
      ) {
        this.pesanPassword = "Mohon disesuaikan dengan formatnya";
        this.isLoading = false;
      } else if (this.pesanConfirmPass != "") {
        this.pesanConfirmPass = "Password tidak sama";

        this.isLoading = false;
      } else {
        this.pesanPassword = "";
        const userData = {
          nama_lengkap: this.nama_lengkap,
          email: this.email,
          no_tlpn: this.no_hp,
          nama_bisnis: this.nama_bisnis,
          kata_sandi: this.kata_sandi,
        };
        await axios
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