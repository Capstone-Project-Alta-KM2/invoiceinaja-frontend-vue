<template>
  <div class="flex flex-col min-w-full px-4 py-3">
    <div>
      <div v-if="isLoading" class="my-14">
        <simple-loading-animation></simple-loading-animation>
      </div>
      <div
        v-if="isLoading == false && userActivities.length == 0"
        class="my-14"
      >
        <p>No activities now</p>
      </div>
    </div>
    <div
      v-for="(activity, index) in activities"
      :key="index"
      class="flex justify-between"
    >
      <div class="flex text-left justify-start items-center space-x-3">
        <div v-if="activity.message.match('invoice created')">
          <invoice-created-deleted-icon :condition="`#21A9FF`" />
        </div>
        <div v-else-if="activity.message.includes('Client has been deleted')">
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
      <div>
        <p class="whitespace-nowrap">
          {{ activity.message.match("Client") ? "#USR" : "#INV" }} -
          {{ activity.id_invoice }}
        </p>
      </div>
    </div>
    <div v-if="!isLoading && userActivities.length != 0" class="py-3 mt-2">
      <button
        class="text-soft-purple px-2 py-1 rounded border border-soft-purple"
        @click="showAll"
        v-ripple
      >
        {{ buttonAction }}
      </button>
    </div>
  </div>
</template>

<script>
import InvoiceCreatedDeletedIcon from "../IconComp/RecentActivities/InvoiceCreatedDeletedIcon.vue";
import SimpleLoadingAnimation from "../SimpleLoadingAnimation.vue";
export default {
  name: "FloatingNotification",
  components: {
    SimpleLoadingAnimation,
    InvoiceCreatedDeletedIcon,
  },
  props: {
    userActivities: Array,
    isLoading: Boolean,
  },
  data() {
    return {
      dataShow: 10,
      buttonAction: "Show all",
    };
  },
  computed: {
    activities() {
      return this.userActivities.slice(0, this.dataShow);
    },
  },
  methods: {
    showAll() {
      if (this.dataShow == 10) {
        this.dataShow = this.userActivities.length;
        this.buttonAction = "Hide";
      } else {
        this.dataShow = 10;
        this.buttonAction = "Show all";
      }
    },
  },
  mounted() {
    console.log("nav activities : ", this.userActivities);
    this.$emit("refetchActivities");
  },
};
</script>

<style></style>
