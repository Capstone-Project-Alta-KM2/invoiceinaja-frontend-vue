<template>
  <div class="relative flex">
    <div class="sticky z-30 min-h-screen top-0 left-0 flex flex-col bg-white">
      <div class="px-3 py-4">
        <img src="../assets/images/invoiceinaja_logo.png" alt="" class="w-48" />
      </div>
      <div class="">
        <nav class="px-3 py-5 flex flex-col space-y-4">
          <button
            v-ripple="'rgba(255,255,255,0.3)'"
            @click="$router.push('/dashboard')"
            class="no-underline flex items-center px-4 py-2 rounded-lg"
            :class="$route.path == '/dashboard' ? activeClass : ''"
          >
            <svg
              class="mr-5"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33333 17.3333H13.3333C14.0667 17.3333 14.6667 16.7333 14.6667 16V5.33333C14.6667 4.6 14.0667 4 13.3333 4H5.33333C4.6 4 4 4.6 4 5.33333V16C4 16.7333 4.6 17.3333 5.33333 17.3333ZM5.33333 28H13.3333C14.0667 28 14.6667 27.4 14.6667 26.6667V21.3333C14.6667 20.6 14.0667 20 13.3333 20H5.33333C4.6 20 4 20.6 4 21.3333V26.6667C4 27.4 4.6 28 5.33333 28ZM18.6667 28H26.6667C27.4 28 28 27.4 28 26.6667V16C28 15.2667 27.4 14.6667 26.6667 14.6667H18.6667C17.9333 14.6667 17.3333 15.2667 17.3333 16V26.6667C17.3333 27.4 17.9333 28 18.6667 28ZM17.3333 5.33333V10.6667C17.3333 11.4 17.9333 12 18.6667 12H26.6667C27.4 12 28 11.4 28 10.6667V5.33333C28 4.6 27.4 4 26.6667 4H18.6667C17.9333 4 17.3333 4.6 17.3333 5.33333Z"
                :fill="$route.path == '/dashboard' ? '#9B6DFF' : '#717171'"
              />
            </svg>
            <span>Dashboard</span>
          </button>

          <button
            v-ripple="'rgba(255,255,255,0.3)'"
            @click="$router.push('/invoice')"
            class="no-underline flex items-center px-4 py-2 rounded-lg w-full"
            :class="
              $route.path == '/invoice' || $route.path == '/addInvoice'
                ? activeClass
                : ''
            "
          >
            <svg
              width="32"
              height="32"
              class="mr-5"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7V8V25C1 26.6 2.33333 27 3 27H29C30.6 27 31 25.6667 31 25V7C31 5.4 29.6667 5 29 5H3C1.4 5 1 6.33333 1 7Z"
                :fill="
                  $route.path == '/invoice' || $route.path == '/addInvoice'
                    ? '#9B6DFF'
                    : '#717171'
                "
              />
              <path
                d="M7 10C6.2 10 6 10.6667 6 11C6 11.8 6.66667 12 7 12H25C25.3333 12 26 11.8 26 11C26 10.2 25.3333 10 25 10H7Z"
                :fill="
                  $route.path == '/invoice' || $route.path == '/addInvoice'
                    ? '#e5d9ff'
                    : 'white'
                "
              />
              <path
                d="M7 16C6.2 16 6 16.6667 6 17C6 17.8 6.66667 18 7 18H18C18.3333 18 19 17.8 19 17C19 16.2 18.3333 16 18 16H7Z"
                :fill="
                  $route.path == '/invoice' || $route.path == '/addInvoice'
                    ? '#e5d9ff'
                    : 'white'
                "
              />
              <path
                d="M7 20C6.2 20 6 20.6667 6 21C6 21.8 6.66667 22 7 22H14C14.3333 22 15 21.8 15 21C15 20.2 14.3333 20 14 20H7Z"
                :fill="
                  $route.path == '/invoice' || $route.path == '/addInvoice'
                    ? '#e5d9ff'
                    : 'white'
                "
              />
              <path
                d="M24 16C23.2 16 23 16.6667 23 17C23 17.8 23.6667 18 24 18H25C25.3333 18 26 17.8 26 17C26 16.2 25.3333 16 25 16H24Z"
                :fill="
                  $route.path == '/invoice' || $route.path == '/addInvoice'
                    ? '#e5d9ff'
                    : 'white'
                "
              />
              <path
                d="M24 20C23.2 20 23 20.6667 23 21C23 21.8 23.6667 22 24 22H25C25.3333 22 26 21.8 26 21C26 20.2 25.3333 20 25 20H24Z"
                :fill="
                  $route.path == '/invoice' || $route.path == '/addInvoice'
                    ? '#e5d9ff'
                    : 'white'
                "
              />
            </svg>

            <span>Invoices</span>
          </button>

          <button
            v-ripple="'rgba(255,255,255,0.3)'"
            @click="$router.push('/client')"
            class="no-underline flex items-center px-4 py-2 rounded-lg w-full"
            :class="$route.path == '/client' ? activeClass : ''"
          >
            <svg
              class="mr-6"
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.8 11.2941C9.17913 11.2941 10.5018 10.6992 11.477 9.64013C12.4521 8.5811 13 7.14475 13 5.64706C13 4.14937 12.4521 2.71301 11.477 1.65399C10.5018 0.594956 9.17913 0 7.8 0C6.42087 0 5.09823 0.594956 4.12304 1.65399C3.14786 2.71301 2.6 4.14937 2.6 5.64706C2.6 7.14475 3.14786 8.5811 4.12304 9.64013C5.09823 10.6992 6.42087 11.2941 7.8 11.2941ZM19.5 11.2941C20.5343 11.2941 21.5263 10.8479 22.2577 10.0536C22.9891 9.25936 23.4 8.18209 23.4 7.05882C23.4 5.93555 22.9891 4.85829 22.2577 4.06402C21.5263 3.26975 20.5343 2.82353 19.5 2.82353C18.4657 2.82353 17.4737 3.26975 16.7423 4.06402C16.0109 4.85829 15.6 5.93555 15.6 7.05882C15.6 8.18209 16.0109 9.25936 16.7423 10.0536C17.4737 10.8479 18.4657 11.2941 19.5 11.2941ZM2.925 14.1176C2.14924 14.1176 1.40526 14.4523 0.856713 15.048C0.308169 15.6437 0 16.4517 0 17.2941V17.6471C0 17.6471 0 24 7.8 24C15.6 24 15.6 17.6471 15.6 17.6471V17.2941C15.6 16.4517 15.2918 15.6437 14.7433 15.048C14.1947 14.4523 13.4508 14.1176 12.675 14.1176H2.925ZM19.5 21.8824C17.9777 21.8824 16.8116 21.6268 15.9185 21.2358C16.4383 20.2831 16.7645 19.2208 16.8753 18.12C16.888 17.9862 16.8962 17.852 16.9 17.7176V17.2941C16.9017 16.1114 16.4814 14.9739 15.7274 14.1205C15.7716 14.1185 15.8158 14.1175 15.86 14.1176H23.14C23.8985 14.1176 24.626 14.4449 25.1623 15.0273C25.6987 15.6098 26 16.3998 26 17.2235C26 17.2235 26 21.8824 19.5 21.8824Z"
                :fill="$route.path == '/client' ? '#9B6DFF' : '#131313'"
                fill-opacity="0.6"
              />
            </svg>

            <span>Clients</span>
          </button>
          <button
            v-ripple="'rgba(255,255,255,0.3)'"
            @click="$router.push('/settings')"
            class="no-underline flex items-center px-4 py-2 rounded-lg w-full"
            :class="$route.path == '/settings' ? activeClass : ''"
          >
            <svg
              class="mr-5 -ml-1"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width="32"
                height="32"
                fill="url(#pattern0)"
                fill-opacity="0.6"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_332_341"
                    transform="scale(0.0111111)"
                  />
                </pattern>
                <image
                  id="image0_332_341"
                  width="90"
                  height="90"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>

            <span>Settings</span>
          </button>
        </nav>
      </div>
      <div class="px-4">
        <button
          @click="logOut"
          v-ripple
          class="flex w-full items-center button button-primary py-2"
        >
          <img src="../assets/images/Logout.png" alt="" class="mr-5" />

          <span class="font-normal text-base">Logout</span>
        </button>
      </div>
    </div>

    <div class="w-full">
      <div
        id="navbar"
        class="
          bg-white
          sticky
          top-0
          right-0
          px-4
          z-10
          py-3
          flex-1 flex
          space-x-4
          justify-end
          items-center
        "
      >
        <svg
          width="23"
          height="28"
          viewBox="0 0 23 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.58325 1.66669H13.0833V3.60969V4.40289L13.8556 4.58344C15.3858 4.9411 16.5367 5.75673 17.3226 6.97575C18.1212 8.21453 18.5833 9.9356 18.5833 12.1417V19.5667V20.1898L19.1426 20.4644L21.3333 21.5398V22.6167H1.33325V21.5398L3.52393 20.4644L4.08325 20.1898V19.5667V12.1417V12.1227L4.08253 12.1037C4.01707 10.3826 4.41149 8.67382 5.22769 7.14699C5.60106 6.50285 6.10927 5.94167 6.7203 5.5009C7.33542 5.05718 8.04047 4.74579 8.78915 4.58826L9.58325 4.42117V3.60969V1.66669ZM11.7667 26.6127H11.7174L11.6182 26.633C11.522 26.6527 11.424 26.6639 11.3256 26.6666C10.8575 26.6612 10.4133 26.4767 10.0866 26.1575C10.0252 26.0975 9.96889 26.0337 9.91784 25.9667H12.7398C12.654 26.0788 12.5542 26.1813 12.4421 26.2715C12.2448 26.4302 12.0146 26.5467 11.7667 26.6127Z"
            stroke="black"
            stroke-width="2"
          />
        </svg>
        <div v-if="Object.keys(usersInfo).length === 0">
          <p>Belum login</p>
        </div>
        <div v-else class="flex space-x-3 items-center">
          <p>
            {{ usersInfo.nama_lengkap }}
          </p>
          <div class="bg-gray-400 p-2 rounded-full">
            <img :src="usersInfo.avatar" />
          </div>
        </div>
      </div>
      <div class="px-10">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: "bg-[#e5d9ff] text-[#7c40ff]",
    };
  },
  methods: {
    logOut() {
      let a = confirm("Logout ?");
      if (a) {
        this.$store.dispatch("actionOfToken", "");
        localStorage.removeItem("users");
        this.$router.push("/");
        // this.$store.dispatch("actionUsersInfo", null);
      }
    },
  },
  computed: {
    usersInfo() {
      return this.$store.state.usersInfo;
    },
  },
  mounted() {},
};
</script>

<style>
</style>