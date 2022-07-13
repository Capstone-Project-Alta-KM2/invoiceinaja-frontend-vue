<template>
  <div class="min-w-full min-h-screen pt-28 pb-10">
    <div class="flex flex-col items-center">
      <div>
        <img
          src="../../assets/images/landing/fall-is-coming-rafiki1.svg"
          alt=""
        />
      </div>
      <div>
        <h1 class="text-3xl font-bold text-soft-purple">Comming Soon</h1>
        <p class="text-black text-lg mt-3">
          We are currently working building this page!
        </p>
      </div>
      <div v-if="currentRouter == '/blog'" class="mt-8">
        <button
          v-ripple
          class="button button-primary"
          @click="() => this.$router.push('/')"
        >
          <span class="text-base px-5">Back to home</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComminSoonBlogPage",
  computed: {
    currentRouter() {
      return this.$router.currentRoute.path;
    },
  },
};
</script>

<style></style>
