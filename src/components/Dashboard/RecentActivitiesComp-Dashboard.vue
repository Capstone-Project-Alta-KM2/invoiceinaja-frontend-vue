<template>
  <div class="px-5 py-8">
    <h2 class="text-left sm:text-xl lg:text-2xl font-semibold">
      Recent Activites
    </h2>

    <div class="relative my-5">
      <input
        type="text"
        name="searchInvoice"
        v-model="searchRecent"
        placeholder="Search by id invoice"
        class="form-add-invoice peer w-full pl-4 focus:pl-10"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-6
          w-6
          absolute
          top-2
          hidden
          peer-focus:animate-showIcon peer-focus:block
          transition-all
          duration-500
          left-2
          peer-focus:text-soft-purple
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>

    <div class="my-4">
      <div v-if="isLoading">
        <simple-loading-animation />
      </div>
      <div v-else>
        <div v-if="activities.length !== 0">
          <div
            class="
              flex
              my-5
              cursor-pointer
              justify-between
              text-xs
              items-center
              space-x-5
            "
            v-for="(activity, index) in filteredRecentActivities"
            :key="index"
          >
            <div class="flex text-left justify-start items-center space-x-3">
              <div v-if="activity.message.match('invoice created')">
                <invoice-created-deleted-icon :condition="`#21A9FF`" />
              </div>
              <div
                v-else-if="activity.message.includes('Client has been deleted')"
              >
                <i class="bx bxs-user-rectangle bx-md text-[#FF304C]"></i>
              </div>
              <div v-else-if="activity.message.includes('New client created')">
                <i class="bx bxs-user-rectangle bx-md text-[#21A9FF]"></i>
              </div>
              <div v-else-if="activity.message.match('has been deleted')">
                <invoice-created-deleted-icon :condition="`#FF304C`" />
              </div>

              <div class="flex justify-start flex-col">
                <p class="font-semibold text-sm">{{ activity.message }}</p>
                <p class="text-gray-400">{{ activity.created_at }}</p>
              </div>
            </div>
            <p class="whitespace-nowrap">
              {{ activity.message.match("Client") ? "#USR" : "#INV" }} -
              {{ activity.id_invoice }}
            </p>
          </div>
        </div>
        <div v-else>
          <p>Data Kosong</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-5 mt-10">
      <div class="flex flex-col items-center space-y-1">
        <strong class="font-semibold">This section has not updated ?</strong>
        <p class="text-xs text-gray-500">
          Click the button to updating this section!
        </p>
      </div>
      <button
        v-ripple
        @click="updatingSection"
        class="button button-outline-primary text-sm py-2 w-full"
      >
        Refresh
      </button>
    </div>
  </div>
</template>

<script>
import { collection, query, getDocs, where, orderBy } from "firebase/firestore";

import InvoiceCreatedDeletedIcon from "../IconComp/RecentActivities/InvoiceCreatedDeletedIcon.vue";
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";
import db from "@/firebase/firebase";
export default {
  components: {
    InvoiceCreatedDeletedIcon,
    SimpleLoadingAnimation,
  },
  data() {
    return {
      activities: [],
      isLoading: true,
      searchRecent: "",
    };
  },
  computed: {
    filteredRecentActivities() {
      return this.activities.filter((data) => {
        return data.id_invoice.toString().match(this.searchRecent);
      });
    },
  },
  methods: {
    async searchRecentHandler() {
      this.activities.filter((data) => {
        console.log("hasil : ", this.searchRecent.match(data.id_invoice));
      });
    },
    async updatingSection() {
      this.isLoading = true;
      const q = query(
        collection(db, "recent_activities"),
        where("user_id", "==", this.$store.state.usersInfo.id)
      );

      await getDocs(q);
      this.isLoading = false;
    },
    async fetchRecentActivitesFromFirebase() {
      const q = query(
        collection(db, "recent_activities"),
        where("user_id", "==", this.$store.state.usersInfo.id),
        orderBy("date_sort", "desc")
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.activities.push(doc.data());
      });
      this.isLoading = false;
    },
  },
  mounted() {
    this.fetchRecentActivitesFromFirebase();
    console.log("acti : ", this.activities);
  },
};
</script>

<style>
</style>