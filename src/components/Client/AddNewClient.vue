<template>
  <div class="z-50 new-client">
    <div class="bg-white m-3 p-3 border-1 rounded-lg text-left">
      <div class="mb-3">
        <span class="font-extrabold">Add New CLient</span>
      </div>
      <div>
        <form action="">
          <div class="grid grid-cols-2 gap-4 text-left">
            <div class="flex flex-col">
              <label for="">Name</label>
              <input type="text" placeholder="Name" class="form" />
            </div>

            <div class="flex flex-col">
              <label for="">Email</label>
              <input type="email" placeholder="email" class="form" />
            </div>

            <div class="flex flex-col">
              <label for="">Address</label>
              <input type="text" placeholder="Address" class="form" />
            </div>

            <div class="flex flex-col">
              <label for="">City</label>
              <input type="text" placeholder="Name" class="form" />
            </div>

            <div class="flex flex-col">
              <label for="">Zip Code</label>
              <input type="number" placeholder="Code" class="form" />
            </div>

            <div class="flex flex-col">
              <label for="">Company</label>
              <input type="text" placeholder="Company" class="form" />
            </div>

            <div class="flex justify-content-between col-start-2">
              <div>
                <button
                  v-ripple
                  type="submit"
                  class="button button-primary px-10"
                >
                  Save
                </button>
              </div>
              <div>
                <button
                  v-ripple
                  type="button"
                  @click="closeFormClient()"
                  class="button button-outline-primary px-4"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewClientPage",
  methods: {
    closeFormClient() {
      this.$emit("closeAddClient");
    },
  },
};
</script>

<style scoped>
/* Style Here... */
</style>