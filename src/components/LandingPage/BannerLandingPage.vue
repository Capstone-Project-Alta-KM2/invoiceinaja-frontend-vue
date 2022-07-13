<template>
    <div class="relative flex justify-center landing-top px-28 pt-28">
        <div
            class="absolute min-w-[250vh] min-h-[250vh] rounded-full bg-[#9B6DFF] bg-opacity-10 bottom-0 z-10"
        ></div>

        <div class="grid grid-cols-10 bg-transparent pb-5">
            <div class="col-span-6 text-left relative z-30">
                <div class="mt-12 mb-7">
                    <h1 class="font-bold text-black text-5xl leading-tight">
                        Online invoicing made easy with InvoiceinAja
                    </h1>
                </div>
                <div class="mb-14">
                    <p class="pr-52 text-xl text-[#7C7C7C]">
                        Help business owners world-wide make beautiful invoices,
                        look professional and get paid faster
                    </p>
                </div>
                <div>
                    <button
                        v-ripple
                        class="flex items-center button button-primary px-4"
                        @click="() => this.$router.push('/dashboard')"
                    >
                        <span class="mr-3">Get Started</span>
                        <svg
                            width="18"
                            height="17"
                            viewBox="0 0 18 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 1.5L17 8.5L10 15.5M1 8.5H17H1Z"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="col-span-4 relative z-30">
                <img
                    src="../../assets/images/landing-banner-image.svg"
                    class="w-full -mr-2"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BannerLandingPage",
};
</script>

<style></style>
