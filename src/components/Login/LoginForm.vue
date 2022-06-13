<template>
    <div class="row w-screen h-screen box-border bg-white">
        <div class="relative col-lg-6 sm:bg-white  lg:bg-soft-purple lg:bg-opacity-30 flex justify-center p-5">
            <div class="absolute top-4 left-8 flex">
                <img 
                    width="25px"
                    height="15px"
                    src="../../assets/logo/invoice-mini-logo.png"
                >
                <span class="font-bold text-lg ml-2.5">InvoiceinAja</span>
            </div>
            <div class="self-center">
                <img
                    src="../../assets/images/login-image.png"
                    class="sm:w-3/5 lg:w-9/12 mx-auto"
                >
            </div>
        </div>
        <div class="col-lg-6 w-full h-full bg-white flex justify-items-center sm:items-start  lg:items-center p-0">
            <div class="w-full sm:px-7 sm:ml-2 lg:px-16 justify-start">
                <div v-if="loginRespons !== null">
                    <div :class="alertStyle">
                        {{loginRespons ? loginRespons : ''}} 
                        <div class=" inline absolute right-2 top-1.5  text-md font-bold p-2 cursor-pointer" @click="closeAlert()">x</div>
                    </div>         
                </div>
                <div class="text-left">
                    <h5 class="font-bold">Login</h5>
                    <h3 class="font-bold">Selamat datang kembali!</h3>
                </div>
                <div>
                    <form 
                        action=""
                        @submit.prevent="login"
                    >
                        <div class="flex flex-column">
                            <div class="flex flex-col">
                                <label class="mb-2 font-semibold mt-3">Email</label>
                                <input 
                                    type="email" 
                                    v-model="email"
                                    pattern="\s*\S+.*"
                                    placeholder="Masukkan email anda"
                                    class="form w-full lowercase"
                                    @input="emailValidation(email)"
                                >
                            </div>
                            <div>
                                <p :class="this.isEmailValid ? 'alert-animation-hide': 'alert-animation-show invalid'">Format email salah!</p>
                            </div>
                            <div class="flex flex-col relative">
                                <label class="mb-2 font-semibold mt-3">Password</label>
                                <input 
                                    id="psw"
                                    :type="!isShowPass ? 'password':'text'"
                                    v-model="password"
                                    placeholder="Masukkan password anda"
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                    class="form w-full peer"
                                    @input="validatePassword()"
                                    @mouseout="hideHint()"
                                >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="
                                    h-5
                                    w-5
                                    absolute
                                    right-5
                                    bottom-[18px]
                                    cursor-pointer
                                    text-blue-500
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
                                    text-blue-500
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
                            <div class="flex justify-between my-3">
                                <div class="flex">
                                    <input 
                                        type="checkbox" 
                                        id="remember" 
                                        class="w-5 h-5 mr-2.5 checked:accent-soft-purple"
                                        v-model="isChecked"
                                    >
                                    <label for="remember" class="font-semibold">Remember me</label>
                                </div>
                                <div>
                                    <a href="" class="text-decoration-none text-soft-purple font-semibold">Forget Password?</a>
                                </div>
                            </div>
                            <!-- password message validation start -->
                            <div
                                id="message"
                                :class="passFormatStyle"
                            >
                                <h3 class="text-xl">Password harus mengandung :</h3>
                                <p id="letter" class="invalid">
                                Huruf <b>kecil</b> dan <b>kapital</b>
                                </p>

                                <p id="number" class="invalid">A <b>number</b></p>
                                <p id="length" class="invalid">Minimum <b>8 characters</b></p>
                            </div>
                            <!-- password message validation end -->
                            <div class="my-5">
                                <button
                                    :disabled="
                                        email == '' ||
                                        password == '' ||
                                        isEmailValid == false || 
                                        isPasswordValid == false
                                    "
                                    type="submit" 
                                    v-ripple="'rgba(255, 255, 255, 0.35)'"
                                    class="button button-primary flex items-center justify-center w-full"
                                >
                                    <span v-if="isLoading" class="flex mr-2">
                                        <simple-loading-animation/>
                                    </span>
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <p>
                        <span>Belum mendaftar? </span>
                        <a href="/register" class="text-soft-purple">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    </div>        
</template>

<script>
import axios from 'axios';
import SimpleLoadingAnimation from '../SimpleLoadingAnimation.vue';
import { validationPassword } from "../../validation";
export default {
    name: 'LoginForm',
    data() {
        return {
            email: '',
            password: '',

            isLoading: false,

            loginRespons: null,
            alertStyle: '',

            isEmailValid: true, 
            isPasswordValid: true,

            isShowPass: false,
            passFormatStyle: "relative text-left origin-top overflow-hidden max-h-0 scale-0",

            isChecked: false,
        };
    },
    components: { 
        SimpleLoadingAnimation 
    },
    computed: {
        tokenValue() {
            return this.$store.state.token;
        }
    },
    methods: {
        closeAlert() {
            this.loginRespons = null
        },
        async login() {
            this.closeAlert();
            this.isLoading = true;
            const userLogin = {
                email: this.email,
                kata_sandi: this.password,
            };
            await axios
                .post("/api/v1/sessions", userLogin)
                .then((res) => {
                    console.log(res);
                    this.alertStyle = 'alert alert-success'
                    this.loginRespons = res.data.meta.message;
                    this.isLoading = false;
                    this.isRememberMe(res);
                    // this.$router.push('/dashboard')
                })
                .catch((err) => {
                    this.alertStyle = 'alert alert-failed alert-animation-show'
                    this.loginRespons = err.response.data.meta.message;
                    this.isLoading = false;
                })
        },
        emailValidation(email) {
            var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(email == '') {
                this.isEmailValid = true;
            }
            else if(!reg.test(email)) {
                this.isEmailValid = false;
            }
            else {
                this.isEmailValid = true;
            }
        },
        validatePassword() {
            validationPassword();
            let val = validationPassword();
            if(val === undefined ) {
                this.isPasswordValid = true;
            }

            else {
                this.isPasswordValid = false;
                return this.isHintShow();
            }
        },
        isHintShow() {
            if(this.password === '') {
                this.passFormatStyle = "alert-animation-hide";
            }
            else {
                this.passFormatStyle = "alert-animation-show";
            }
        },
        hideHint() {
            if(validationPassword() == undefined) {
                this.passFormatStyle = "alert-animation-hide";
            }
        },
        isRememberMe(res) {
            if(this.isChecked == true) {
                this.$store.dispatch('actionOfToken', res.data.data.token)
                console.log('check :' + this.tokenValue);

            }
            else {
                this.$store.dispatch('actionOfToken', res.data.data.token)
                console.log('Not Check :' + this.tokenValue);
            }
            this.$router.push('/');
        }
    },
}
</script>

<style scoped>
/* something here.. */
label {
    text-align: left;
}

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