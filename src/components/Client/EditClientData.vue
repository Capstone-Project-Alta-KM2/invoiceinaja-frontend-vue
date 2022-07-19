<template>
  <div class="z-30 new-client">
    <div
      class="bg-white my-5 rounded-lg text-left max-h-[95vh] overflow-hidden"
    >
      <!-- alert start-->
      <div
        :class="` ${
          responseErr
            ? 'bg-red-500 scale-100 opacity-100 py-1'
            : 'h-0 scale-0 opacity-0'
        }     
                text-white
                transition-all duration-300
                top-0 left-0 right-0
                col-span-5
                origin-center
              `"
      >
        <div class="flex space-x-5 justify-center items-center">
          <div>
            <p v-if="responseErr">
              {{ responseErr }}
            </p>
          </div>
          <i
            class="bx bx-x bx-md cursor-pointer justify-self-end"
            @click="responseErr = ''"
          ></i>
        </div>
      </div>
      <!-- alert end-->
      <div class="p-6 overflow-y-auto">
        <div class="mb-10">
          <span class="font-bold text-xl">Edit Client Data</span>
        </div>

        <!-- Form Client Component Start -->
        <client-form
          @closeEditClient="closeEditDialog"
          @hideAlertErr="resetResponse"
          @sendingMessage="actionError"
          @showAlertSuccess="showAlert"
          :statusForm="thisForm"
          :dataField="currentData"
        ></client-form>
        <!-- Form Client Component End -->
      </div>
    </div>
  </div>
</template>

<script>
import ClientForm from "./ClientForm.vue";

export default {
  name: "NewClientPage",
  components: {
    ClientForm,
  },
  props: {
    editedData: Object,
  },
  data() {
    return {
      thisForm: "edit",
      responseErr: "",
      currentData: this.editedData,
    };
  },
  methods: {
    closeEditDialog() {
      this.$emit("hideDialogClient");
    },
    showAlert() {
      this.$emit("showDialogAlert");
    },
    resetResponse() {
      this.responseErr = "";
    },
    actionError(value) {
      this.responseErr = value;
      setTimeout(() => {
        this.responseErr = "";
      }, 5000);
    },
  },
};
</script>

<style scoped>
/* Style Here... */
</style>
