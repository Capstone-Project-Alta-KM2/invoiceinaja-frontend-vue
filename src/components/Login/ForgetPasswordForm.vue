<template>
    <div class="row w-screen h-screen box-border bg-white">
        <div
            class="relative col-lg-6 sm:bg-white lg:bg-soft-purple lg:bg-opacity-30 flex justify-center p-5"
        >
            <div class="absolute top-4 left-8 flex">
                <img
                    width="25px"
                    height="15px"
                    src="../../assets/logo/invoice-mini-logo.png"
                />
                <span class="font-bold text-lg ml-2.5">InvoiceinAja</span>
            </div>
            <div class="self-center">
                <img
                    src="../../assets/images/forget-pass-image.png"
                    class="sm:w-3/5 lg:w-9/12 mx-auto"
                />
            </div>
        </div>
        <div
            class="col-lg-6 w-full h-full bg-white flex justify-items-center sm:items-start lg:items-center p-0"
        >
            <div class="w-full sm:px-7 sm:ml-2 lg:px-28 justify-start">
                <div v-if="pesanBerhasil" class="mb-10">
                    <p class="alert alert-success">
                        {{ pesanBerhasil }}
                    </p>
                </div>
                <div v-else class="">
                    <p
                        class="alert alert-failed"
                        :class="
                            pesanGagal || pesanBerhasil == '' ? 'hidden' : ''
                        "
                    >
                        {{ pesanGagal }}
                    </p>
                </div>
                <div class="text-left">
                    <h2 class="font-bold">Forget Password?</h2>
                    <p class="text-2xl font-light text-gray-500">
                        Enter your registered email below to recieve password
                        reset instruction.
                    </p>
                </div>
                <div>
                    <form @submit.prevent="sendEmail">
                        <div class="flex flex-column">
                            <div class="flex flex-col text-left">
                                <label class="mt-3.5 mb-2 font-semibold"
                                    >Email</label
                                >
                                <input
                                    type="email"
                                    v-model="email"
                                    pattern="\s*\S+.*"
                                    placeholder="Masukkan email anda"
                                    class="w-full lowercase"
                                    :class="
                                        this.isEmailValid
                                            ? 'form'
                                            : 'form border-2 border-red-500'
                                    "
                                    @input="emailValidation(email)"
                                />
                            </div>
                            <div>
                                <p
                                    :class="
                                        this.isEmailValid
                                            ? 'alert-animation-hide'
                                            : 'alert-animation-show text-red-500'
                                    "
                                >
                                    {{ inputMessage }}
                                </p>
                            </div>
                            <div v-if="isCountActive" class="mt-4">
                                <div class="text-red-500 text-lg">
                                    <span>
                                        {{ twoDigits(minute) }}
                                    </span>
                                    :
                                    <span> {{ twoDigits(second) }} </span>
                                </div>
                                <div class="mt-2">Resend again?</div>
                            </div>
                            <div class="my-5">
                                <button
                                    :disabled="
                                        email == '' ||
                                        isEmailValid == false ||
                                        isCountActive == true
                                    "
                                    type="submit"
                                    v-ripple="'rgba(255, 255, 255, 0.35)'"
                                    class="button button-primary flex items-center justify-center w-full"
                                >
                                    <span v-if="isLoading" class="flex mr-2">
                                        <simple-loading-animation />
                                    </span>
                                    Send
                                </button>
                            </div>
                            <div class="-my-5">
                                <button
                                    type="button"
                                    v-ripple="'rgba(255, 255, 255, 0.35)'"
                                    class="button button-outline-primary flex items-center justify-center w-full"
                                    @click="toLogin()"
                                >
                                    Back
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";

export default {
    name: "ForgetPassForm",
    components: {
        SimpleLoadingAnimation,
    },
    data() {
        return {
            email: "",
            isEmailValid: true,
            pesanBerhasil: "",
            pesanGagal: "",
            isLoading: false,
            inputMessage: "",
            second: 30,
            minute: 1,
            isCountActive: false,
        };
    },
    methods: {
        async sendEmail() {
            this.pesanBerhasil = "";
            this.isLoading = true;

            await axios
                .post("api/v1/reset_passwords", {
                    email: this.email,
                })
                .then((res) => {
                    console.log(res);
                    this.pesanBerhasil = res.data.meta.message;
                    this.isLoading = false;
                    this.isCountActive = true;
                    this.countDownTimer();
                })
                .catch((err) => {
                    this.pesanGagal = err;
                    console.log(err);
                    this.isLoading = false;
                });
        },
        emailValidation(email) {
            var reg =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<script>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (email == "") {
                this.isEmailValid = false;
                this.inputMessage = "Email cannot be empty";
            } else if (!reg.test(email)) {
                this.isEmailValid = false;
                this.inputMessage = "Enter email correctly";
            } else {
                this.isEmailValid = true;
            }
        },
        toLogin() {
            this.email = "";
            this.isEmailValid = true;
            this.$router.push("/login");
        },
        countDownTimer() {
            if (this.second == 0 && this.minute == 0) {
                this.isCountActive = false;
                this.second = 30;
                this.minute = 1;
            } else {
                if (this.second > 0) {
                    setTimeout(() => {
                        this.second -= 1;
                        this.countDownTimer();
                    }, 1000);
                }
                if (this.second == 0) {
                    this.minute -= 1;
                    this.second = 60;
                    this.countDownTimer();
                }
            }
        },
        twoDigits(params) {
            if (params < 10) {
                return "0" + params;
            } else {
                return params;
            }
        },
    },
};
</script>

<style></style>
