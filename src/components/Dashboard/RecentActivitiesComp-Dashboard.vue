<template>
  <div class="container py-4 px-3">
    <h2 class="text-left sm:text-xl lg:text-2xl font-semibold">
      Recent Activites
    </h2>
    <h4 class="text-sm text-left my-4">Today</h4>
    <div
      class="flex justify-between text-sm"
      v-for="(activity, index) in todayActivity"
      :key="index"
    >
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <p class="py-1">{{ activity.received }}</p>
      </div>
      <p class="py-1">Rp {{ activity.money }}</p>
    </div>

    <h4 class="text-sm text-left my-4">Yesterday</h4>
    <div
      class="flex justify-between text-sm"
      v-for="activity in yesterday"
      :key="activity.id"
    >
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <p class="py-1">{{ activity.received }}</p>
      </div>
      <p class="py-1">Rp {{ activity.money }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // received:"",
      // money:"",
      todayActivity: [],
      yesterday: [],
    };
  },
  mounted() {
    this.todayActivity.push(
      {
        received: "Received Money from Client 1",
        money: 200000,
      },
      {
        received: "Received Money from Client 2",
        money: 240000,
      },
      {
        received: "Received Money from Client 3",
        money: 250000,
      }
    );
    this.yesterday.push(
      {
        id: 123,
        received: "Received Money from Client 1",
        money: 200000,
      },
      {
        id: 342,
        received: "Received Money from Client 2",
        money: 240000,
      },
      {
        id: 122,
        received: "Received Money from Client 3",
        money: 250000,
      }
    );
  },
};
</script>

<style>
</style>