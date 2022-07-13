<template>
    <div class="bg-white">
        <div
            class="flex justify-between items-center px-28 py-3 fixed top-0 left-0 right-0 z-50 duration-300 transition-all"
            :class="{
                'bg-transparent': view.atTopOfPage,
                'bg-white shadow-md': !view.atTopOfPage,
            }"
        >
            <div
                class="flex items-center text-left logo cursor-pointer"
                @click="scroll('#banner')"
            >
                <div class="mr-3">
                    <img
                        src="../assets/logo/invoiceinaja.svg"
                        alt="InvoiceinAja"
                    />
                </div>
                <div>
                    <span class="font-bold text-xl text-black"
                        >InvoiceinAja</span
                    >
                </div>
            </div>

            <ul class="flex">
                <li
                    class="w-28 text-black py-3 font-semibold rounded cursor-pointer hover:bg-soft-purple hover:text-white"
                    @click="scroll('#features')"
                >
                    Features
                </li>

                <li
                    class="w-28 text-black py-3 font-semibold rounded cursor-pointer hover:bg-soft-purple hover:text-white"
                    @click="scroll('#costumers')"
                >
                    Costumer
                </li>

                <li
                    class="w-28 py-3 font-semibold rounded cursor-pointer hover:bg-soft-purple hover:text-white active:text-soft-purple"
                    :class="
                        getCurrentRoute() == '/blog'
                            ? 'text-soft-purple'
                            : 'text-black'
                    "
                    @click="redirectTo('/blog')"
                >
                    Blog
                </li>
            </ul>
            <div class="flex">
                <div class="mr-6">
                    <button
                        v-ripple
                        class="flex justify-center items-center w-32 h-12 button button-outline-primary"
                        @click="redirectTo('/login')"
                    >
                        <span class="text-base">Login</span>
                    </button>
                </div>
                <div>
                    <button
                        v-ripple
                        class="flex justify-center items-center w-32 h-12 button button-primary"
                        @click="redirectTo('/register')"
                    >
                        <span class="text-base">Sign Up</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Content -->
        <slot />
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            view: {
                atTopOfPage: true,
                menuActive: this.$router.currentRoute.path,
            },
        };
    },
    methods: {
        scroll(hash) {
            this.$router.push({ name: "home", hash: hash });
        },
        redirectTo(path) {
            this.$router.push(path);
        },
        handleScroll() {
            // when the user scrolls, check the pageYOffset
            if (window.pageYOffset > 0) {
                // user is scrolled
                if (this.view.atTopOfPage) this.view.atTopOfPage = false;
            } else {
                // user is at top of page
                if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
            }
        },
        getCurrentRoute() {
            return this.$router.currentRoute.path;
        },
    },
    beforeMount() {
        window.addEventListener("scroll", this.handleScroll);
    },
    mounted() {
        console.log(this.getCurrentRoute());
    },
};
</script>

<style></style>
