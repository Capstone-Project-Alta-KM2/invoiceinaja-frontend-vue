<template>
  <div
    class="grid grid-cols-6 grid-rows-[55px]"
    :class="isNotifShow ? 'max-h-screen overflow-hidden' : ''"
  >
    <aside
      class="col-span-1 row-span-2 self-start sticky top-0 left-0 z-40 min-h-screen bg-white px-2 box-border flex flex-col justify-between"
    >
      <div class="w-full box-border flex flex-col space-y-14">
        <div class="self-center py-6 px-1 pt-10">
          <img
            src="../assets/images/invoiceinaja_logo.png"
            alt=""
            class="w-40"
          />
        </div>

        <div class="flex flex-col space-y-4 px-3">
          <!-- Dashboard -->
          <button
            v-ripple="'rgba(255,255,255,0.3)'"
            @click="$router.push('/dashboard')"
            class="no-underline flex items-center px-4 py-2.5 rounded-lg"
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
          <!-- Dashboard -->

          <!-- Invoices -->
          <button
            v-ripple="'rgba(255,255,255,0.3)'"
            @click="$router.push('/invoice')"
            class="no-underline flex items-center px-4 py-2.5 rounded-lg w-full"
            :class="
              $route.path == '/invoice' ||
              $route.path == '/add-invoice' ||
              $route.path == '/import-invoices' ||
              $route.path == '/preview-invoice' ||
              $route.path == '/edit-invoice'
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
                  $route.path == '/invoice' ||
                  $route.path == '/add-invoice' ||
                  $route.path == '/import-invoices' ||
                  $route.path == '/preview-invoice' ||
                  $route.path == '/edit-invoice'
                    ? '#9B6DFF'
                    : '#717171'
                "
              />
              <path
                d="M7 10C6.2 10 6 10.6667 6 11C6 11.8 6.66667 12 7 12H25C25.3333 12 26 11.8 26 11C26 10.2 25.3333 10 25 10H7Z"
                :fill="
                  $route.path == '/invoice' ||
                  $route.path == '/add-invoice' ||
                  $route.path == '/import-invoices' ||
                  $route.path == '/preview-invoice' ||
                  $route.path == '/edit-invoice'
                    ? '#e5d9ff'
                    : 'white'
                "
              />
              <path
                d="M7 16C6.2 16 6 16.6667 6 17C6 17.8 6.66667 18 7 18H18C18.3333 18 19 17.8 19 17C19 16.2 18.3333 16 18 16H7Z"
                :fill="
                  $route.path == '/invoice' ||
                  $route.path == '/add-invoice' ||
                  $route.path == '/import-invoices' ||
                  $route.path == '/preview-invoice' ||
                  $route.path == '/edit-invoice'
                    ? '#e5d9ff'
                    : 'white'
                "
              />
              <path
                d="M7 20C6.2 20 6 20.6667 6 21C6 21.8 6.66667 22 7 22H14C14.3333 22 15 21.8 15 21C15 20.2 14.3333 20 14 20H7Z"
                :fill="
                  $route.path == '/invoice' ||
                  $route.path == '/add-invoice' ||
                  $route.path == '/import-invoices' ||
                  $route.path == '/preview-invoice' ||
                  $route.path == '/edit-invoice'
                    ? '#e5d9ff'
                    : 'white'
                "
              />
              <path
                d="M24 16C23.2 16 23 16.6667 23 17C23 17.8 23.6667 18 24 18H25C25.3333 18 26 17.8 26 17C26 16.2 25.3333 16 25 16H24Z"
                :fill="
                  $route.path == '/invoice' ||
                  $route.path == '/add-invoice' ||
                  $route.path == '/import-invoices' ||
                  $route.path == '/preview-invoice' ||
                  $route.path == '/edit-invoice'
                    ? '#e5d9ff'
                    : 'white'
                "
              />
              <path
                d="M24 20C23.2 20 23 20.6667 23 21C23 21.8 23.6667 22 24 22H25C25.3333 22 26 21.8 26 21C26 20.2 25.3333 20 25 20H24Z"
                :fill="
                  $route.path == '/invoice' ||
                  $route.path == '/add-invoice' ||
                  $route.path == '/import-invoices' ||
                  $route.path == '/preview-invoice' ||
                  $route.path == '/edit-invoice'
                    ? '#e5d9ff'
                    : 'white'
                "
              />
            </svg>

            <span>Invoices</span>
          </button>
          <!-- Invoices -->

          <!-- Clients -->
          <button
            v-ripple="'rgba(255,255,255,0.3)'"
            @click="$router.push('/client')"
            class="no-underline flex items-center px-4 py-2.5 rounded-lg w-full"
            :class="
              $route.path == '/client' || $route.path == '/import-clients'
                ? activeClass
                : ''
            "
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
                :fill="
                  $route.path == '/client' || $route.path == '/import-clients'
                    ? '#9B6DFF'
                    : '#131313'
                "
                fill-opacity="0.6"
              />
            </svg>

            <span>Clients</span>
          </button>
          <!-- Clients -->

          <!-- Settings -->
          <button
            v-ripple="'rgba(255,255,255,0.3)'"
            @click="$router.push('/settings')"
            class="no-underline flex items-center px-4 py-2.5 rounded-lg w-full"
            :class="
              $route.path == '/settings' ||
              $route.path == '/settings/profile' ||
              $route.path == '/settings/password'
                ? activeClass
                : ''
            "
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-6"
            >
              <path
                d="M21.1754 13.4035C21.2268 13.0285 21.2525 12.641 21.2525 12.2285C21.2525 11.8285 21.2268 11.4285 21.1626 11.0535L23.7713 9.07852C24.0026 8.90351 24.0668 8.56602 23.9255 8.31602L21.4581 4.16602C21.3039 3.89102 20.9827 3.80352 20.6999 3.89102L17.6286 5.09102C16.9861 4.61602 16.305 4.21602 15.5468 3.91602L15.0842 0.741015C15.0328 0.441015 14.7758 0.228516 14.4673 0.228516H9.53266C9.22425 0.228516 8.98008 0.441015 8.92868 0.741015L8.46605 3.91602C7.70786 4.21602 7.01392 4.62852 6.38424 5.09102L3.31292 3.89102C3.0302 3.79102 2.70893 3.89102 2.55472 4.16602L0.100236 8.31602C-0.0539726 8.57852 -0.00256984 8.90351 0.254445 9.07852L2.86314 11.0535C2.79889 11.4285 2.74748 11.841 2.74748 12.2285C2.74748 12.616 2.77319 13.0285 2.83744 13.4035L0.228743 15.3785C-0.00256982 15.5535 -0.0668233 15.891 0.0745346 16.141L2.54187 20.291C2.69608 20.566 3.01735 20.6535 3.30006 20.566L6.37139 19.366C7.01392 19.841 7.69501 20.241 8.4532 20.541L8.91583 23.716C8.98008 24.016 9.22425 24.2285 9.53266 24.2285H14.4673C14.7758 24.2285 15.0328 24.016 15.0713 23.716L15.5339 20.541C16.2921 20.241 16.9861 19.841 17.6158 19.366L20.6871 20.566C20.9698 20.666 21.2911 20.566 21.4453 20.291L23.9126 16.141C24.0668 15.866 24.0026 15.5535 23.7584 15.3785L21.1754 13.4035ZM12 16.7285C9.45556 16.7285 7.37374 14.7035 7.37374 12.2285C7.37374 9.75352 9.45556 7.72852 12 7.72852C14.5444 7.72852 16.6263 9.75352 16.6263 12.2285C16.6263 14.7035 14.5444 16.7285 12 16.7285Z"
                :fill="
                  $route.path == '/settings' ||
                  $route.path == '/settings/profile' ||
                  $route.path == '/settings/password'
                    ? '#9B6DFF'
                    : '#717171'
                "
              />
            </svg>

            <span>Settings</span>
          </button>
          <!-- Settings -->
        </div>
      </div>

      <div class="w-full mb-16 px-3">
        <button
          @click="switchModalDelete"
          v-ripple
          class="flex w-full items-center button button-primary py-2"
        >
          <img src="../assets/images/Logout.png" alt="" class="mr-6" />

          <span class="font-normal text-base">Logout</span>
        </button>
      </div>
    </aside>

    <nav class="col-start-2 col-span-5 row-span-1 sticky top-0 z-30 bg-white">
      <div
        id="navbar"
        class="px-4 py-3.5 flex space-x-6 justify-end items-center h-full"
      >
        <div class="relative" v-click-outside="onClickOutside">
          <div
            class="cursor-pointer"
            @click="isNotifShow ? (isNotifShow = false) : (isNotifShow = true)"
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
                :stroke="isNotifShow ? '#9B6DFF' : 'black'"
                :fill="isNotifShow ? '#9B6DFF' : 'white'"
                stroke-width="2"
              />
            </svg>
            <span
              v-if="!isNotifShow && activities.length != 0"
              class="absolute top-0 -right-0.5 w-3 h-3 bg-soft-purple rounded-full"
            ></span>
          </div>
          <div
            class="absolute right-0 z-40 w-[420px] min-h-[200px] max-h-[80vh] overflow-y-auto scroll-smooth mt-1 bg-white rounded-lg origin-top transition-all duration-300 shadow-notif"
            :class="isNotifShow ? 'scale-y-100' : 'scale-y-0'"
          >
            <div class="text-left sticky top-0 bg-white p-4">
              <h4 class="text-lg font-semibold">Recent Activities</h4>
            </div>
            <floating-notification
              v-if="isNotifShow"
              :isLoading="isLoadingActivity"
              :userActivities="activities"
              @refetchActivities="fetchRecentActivitesFromFirebase"
            ></floating-notification>
          </div>
        </div>
        <div v-if="Object.keys(usersInfo).length === 0">
          <p>Belum login</p>
        </div>
        <div
          v-else
          class="flex space-x-3 items-center cursor-pointer"
          @click="$router.push('/settings/profile')"
        >
          <p>
            {{ usersInfo.fullname }}
          </p>
          <div
            class="bg-gray-400 w-10 h-10 flex justify-center items-center rounded-full overflow-hidden"
            v-ripple
          >
            <img :src="`http://103.176.78.214:8080/${usersInfo.avatar}`" />
          </div>
        </div>
      </div>
    </nav>

    <main
      class="col-start-2 col-span-5 row-span-1 p-7 flex justify-center container"
    >
      <div
        v-if="isNotifShow"
        class="fixed inset-0 z-20 bg-black bg-opacity-20"
      ></div>
      <div class="container">
        <Transition name="slide-fade">
          <slot />
        </Transition>
      </div>
      <div
        class="fixed inset-0 z-50 bg-black bg-opacity-10 min-w-full min-h-screen flex justify-center items-center"
        :class="
          isModalDeleteShow ? 'dialog-animation-show' : 'dialog-animation-hide'
        "
      >
        <delete-confirm-modal
          :message="`Do you want to log out from this website ?`"
          :loading="isLoading"
          @executeAction="logOut"
          @closeModalDelete="switchModalDelete"
        ></delete-confirm-modal>
      </div>
    </main>
  </div>
</template>

<script>
import db from "@/firebase/firebase";
import { collection, query, getDocs, where, orderBy } from "firebase/firestore";
import DeleteConfirmModal from "@/components/Modal-Comp/DeleteConfirmModal.vue";
import FloatingNotification from "@/components/Modal-Comp/FloatingNotification.vue";

import Vue from "vue";
Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});
export default {
  components: { DeleteConfirmModal, FloatingNotification },
  data() {
    return {
      isModalDeleteShow: false,
      isLoading: false,
      isNotifShow: false,
      activities: [],
      isLoadingActivity: false,
      activeClass: "bg-[#e5d9ff] text-[#7c40ff]",
    };
  },
  methods: {
    switchModalDelete() {
      if (this.isModalDeleteShow) {
        this.isModalDeleteShow = false;
      } else {
        this.isModalDeleteShow = true;
      }
    },
    logOut() {
      this.isLoading = true;
      this.$store.dispatch("actionOfToken", "");
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    async fetchRecentActivitesFromFirebase() {
      this.activities = [];
      this.isLoadingActivity = true;
      const q = query(
        collection(db, "recent_activities"),
        where("user_id", "==", this.$store.state.usersInfo.id),
        orderBy("date_sort", "desc")
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.activities.push(doc.data());
      });
      this.isLoadingActivity = false;
    },
    onClickOutside() {
      this.isNotifShow = false;
    },
  },
  computed: {
    usersInfo() {
      return this.$store.state.usersInfo;
    },
  },
  mounted() {
    this.isLoadingActivity = true;
    this.fetchRecentActivitesFromFirebase();
  },
};
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-30px);
  opacity: 0;
}
.shadow-notif {
  box-shadow: 4px 4px 12px 1px rgba(155, 109, 255, 0.2);
}
</style>
