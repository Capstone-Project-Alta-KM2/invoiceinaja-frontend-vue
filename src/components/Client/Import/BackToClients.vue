<template>
  <div class="flex flex-col items-start p-7">
    <div>
      <button
        v-ripple
        class="flex items-center button button-primary text-base"
        @click="redirectTo('/client')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span>Clients</span>
      </button>
    </div>
    <div class="mt-8">
      <h2 class="text-2xl font-bold">Import Clients</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackToClients",
  methods: {
    redirectTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style></style>
