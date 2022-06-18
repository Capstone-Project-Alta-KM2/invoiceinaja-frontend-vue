<template>
    <div class="new-client">
        <div class="bg-white m-3 mt-5 p-4 border-1 rounded-lg text-left">
            <div class="mb-12">
                <span class="font-extrabold text-xl">Buat Client Baru</span>
            </div>
            <div>
                <form 
                    action=""
                    @submit.prevent="addClient"
                >
                    <div class="grid grid-cols-2 gap-x-16 gap-y-2 text-left">
                        <div class="px-1">
                            <label class="font-bold text-lg mb-1">Nama Client</label>
                            <input 
                                type="text" 
                                placeholder="Name"    
                                class="form"
                                :class="checkInput(clientName) ? '' : 'form-input-invalid'"
                                v-model="clientName"
                            />
                            <p 
                                class="text-red-400" 
                                :class="checkInput(clientName) ? 'dialog-animation-hide' : 'dialog-animation-show'"
                            >
                                Input tidak boleh hanya 1 karakter
                            </p>
                        </div>    
                        <div class="px-1">
                            <label class="font-bold text-lg mb-1">Email</label>
                            <input 
                                type="email" 
                                placeholder="example@email.com" 
                                class="form  lowercase"
                                :class="isEmailValid ? '' : 'form-input-invalid'"
                                v-model="email"
                                @input="emailValidation()"
                            />
                            <p 
                                class="text-red-400" 
                                :class="isEmailValid ? 'dialog-animation-hide' : 'dialog-animation-show'"
                            >
                                Format Email Salah
                            </p>
                        </div>
                        <div class="px-1">
                            <label class="font-bold text-lg mb-1">Streets Address</label>
                            <input 
                                type="text" 
                                placeholder="Address" 
                                class="form "
                                :class="checkInput(address) ? '' : 'form-input-invalid'"
                                v-model="address"
                            />
                            <p 
                                class="text-red-400" 
                                :class="checkInput(address) ? 'dialog-animation-hide' : 'dialog-animation-show'"
                            >
                                Input tidak boleh hanya 1 karakter
                            </p>
                        </div>
                        <div class="px-1">
                            <label class="font-bold text-lg mb-1">City</label>
                            <input 
                                type="text" 
                                placeholder="City" 
                                class="form "
                                :class="checkInput(city) ? '' : 'form-input-invalid'"
                                v-model="city"
                            />
                            <p 
                                class="text-red-400" 
                                :class="checkInput(city) ? 'dialog-animation-hide' : 'dialog-animation-show'"
                            >
                                Input tidak boleh hanya 1 karakter
                            </p>
                        </div>
                        <div class="px-1">
                            <label class="font-bold text-lg mb-1">Zip Code</label>
                            <input 
                                type="number" 
                                placeholder="name" 
                                class="form "
                                :class="checkInput(zipCode) ? '' : 'form-input-invalid'"
                                v-model="zipCode"
                            />
                            <p 
                                class="text-red-400" 
                                :class="checkInput(zipCode) ? 'dialog-animation-hide' : 'dialog-animation-show'"
                            >
                                Input tidak boleh hanya 1 karakter
                            </p>
                        </div>
                        <div class="px-1">
                            <label class="font-bold text-lg mb-1">Company</label>
                            <input 
                                type="text" 
                                placeholder="Company" 
                                class="form "
                                :class="checkInput(company) ? '' : 'form-input-invalid'"
                                v-model="company"
                            />
                            <p 
                                class="text-red-400" 
                                :class="checkInput(company) ? 'dialog-animation-hide' : 'dialog-animation-show'"
                            >
                                Input tidak boleh hanya 1 karakter
                            </p>
                        </div>
                        <div class="flex justify-content-between mt-4 col-start-2">
                            <button
                                v-ripple
                                type="submit"
                                class="button button-primary px-5 flex items-center justify-center"
                                :disabled="
                                    this.clientName == '' ||
                                    this.email == '' ||
                                    this.address == '' ||
                                    this.city == '' ||
                                    this.zipCode == '' ||
                                    this.company == '' ||
                                    this.isEmailValid == false
                                "
                            >
                                <span v-if="isLoading" class="mr-2 flex">
                                    <simple-loading-animation/>
                                </span>
                                <span>Save</span>
                            </button>
                            <button
                                v-ripple
                                type="button"
                                @click="closeFormClient()"
                                class="button border-1 border-soft-purple text-soft-purple px-5"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import SimpleLoadingAnimation from '../SimpleLoadingAnimation.vue';
export default {
    name: "NewClientPage",
    components: {
        SimpleLoadingAnimation


    },
    data() {
        return {
            clientName: '',
            email: '',
            address: '',
            city: '',
            zipCode: '',
            company: '',

            isLoading: false,
            isEmailValid: true,
        };
    },
    methods: {
        closeFormClient() {
            this.resetForm();
            this.$emit('closeAddClient')
        },

        resetForm() {
            this.clientName = '',
            this.email = '',
            this.address = '',
            this.city = '',
            this.zipCode = '',
            this.company = '',
            this.isEmailValid = true,
            this.isLoading = false
        },

        async addClient() {
            this.isLoading = true;
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTQyNDgwNDksImZ1bGxuYW1lIjoiZmFobWkgaGFkaSIsImlkIjoxLCJyb2xlIjoidXNlciJ9.NiHxHD4YZ_kYPpBmqZmfsSRUoouj0lexQh040xmHKm0';

            const clientData = {
                fullName: this.clientName,
                email: this.email,
                address: this.address,
                city: this.city,
                zip_code: this.zipCode,
                company: this.company
            };
            console.log(clientData);

            await axios
                .request({
                    url: "/api/v1/clients",
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                    data: clientData
                })
                .then((res) => {
                    console.log(res);
                    this.isLoading = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.isLoading = false;
                })
        },

        emailValidation() {
            let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(this.email == '') {
                this.isEmailValid = true;
            }
            else if(!reg.test(this.email)) {
                this.isEmailValid = false;
            }
            else {
                this.isEmailValid = true;
            }
        },
        checkInput(params) {
            if(params == 0) {
                return true;
            }
            else if(params.length > 1) {
                return true;
            }
            else {
                return false;
            }
        }
    },
};
</script>

<style scoped>
/* Style here.. */
</style>
