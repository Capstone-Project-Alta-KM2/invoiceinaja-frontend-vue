<template>
  <div class="container pb-4">
    <div class="flex justify-between px-4 py-5">
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-soft-purple"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
          />
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="text-xl px-2 text-soft-purple">Monthly Revenue</p>
      </div>
      <div class="">
        <button
          v-click-outside="onClickOutside"
          @click="isShowFilterChoose = !isShowFilterChoose"
          class="
            w-44
            px-3
            py-2
            rounded-xl
            shadow-invoicein
            flex
            justify-between
            items-center
          "
        >
          {{ filterGraphName }}
          <svg
            class="ml-3"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9999 1.99331C18.0006 2.18542 17.9582 2.37524 17.8759 2.54881C17.7935 2.72239 17.6734 2.87531 17.5242 2.99634L9.81069 9.20746C9.58065 9.3966 9.29211 9.5 8.99433 9.5C8.69656 9.5 8.40802 9.3966 8.17798 9.20746L0.464423 2.77773C0.201884 2.55946 0.0367821 2.2458 0.00543965 1.90577C-0.0259028 1.56573 0.0790812 1.22716 0.297296 0.964551C0.515511 0.70194 0.829081 0.536794 1.16903 0.505443C1.50897 0.474091 1.84744 0.579103 2.10998 0.797378L9.00076 6.54556L15.8915 0.99027C16.0802 0.83302 16.31 0.733132 16.5537 0.702424C16.7974 0.671717 17.0448 0.711474 17.2666 0.816993C17.4884 0.922512 17.6753 1.08938 17.8053 1.29784C17.9352 1.50631 18.0028 1.74765 17.9999 1.99331Z"
              fill="#131313"
              fill-opacity="0.6"
            />
          </svg>
        </button>
        <div class="relative">
          <div
            :class="
              isShowFilterChoose == true
                ? 'border-2 border-soft-purple max-h-60'
                : 'max-h-0 border-none'
            "
            class="
              bg-white
              overflow-hidden
              transition-all
              duration-300
              absolute
              top-3
              w-48
              flex flex-col
              rounded-xl
              shadow-invoicein
            "
          >
            <button
              class="hover:bg-[#ebe2ff] py-2 text-soft-purple"
              @click="changeGraphFilter('This Month')"
            >
              This Month
            </button>

            <button
              class="hover:bg-[#ebe2ff] py-2 text-soft-purple"
              @click="changeGraphFilter('This Year')"
            >
              This Year
            </button>
          </div>
        </div>
      </div>
    </div>
    <canvas id="canvas" class="-z-10"></canvas>
    <div
      :class="`${
        isShowModalJWT ? 'scale-100' : 'scale-0'
      } inset-0 bg-[rgba(0,0,0,0.5)] fixed flex justify-center items-center z-[999px]`"
    >
      <JWTModal />
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import axios from "axios";
import JWTModal from "../JWTModal.vue";

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
  data() {
    return {
      isShowFilterChoose: false,
      filterGraphName: "This Year",
      date: [],
      paid: [],
      unpaid: [],
      isShowModalJWT: false,
    };
  },
  components: {
    JWTModal,
  },
  methods: {
    onClickOutside() {
      this.isShowFilterChoose = false;
      console.log("clicked outside");
    },
    changeGraphFilter(name) {
      this.filterGraphName = name;
      this.isShowFilterChoose = false;
    },
    makeGraph() {
      const data = {
        labels: this.date,
        datasets: [
          {
            label: "Unpaid",
            data: this.unpaid,
            backgroundColor: ["rgba(155, 109, 255, 0.2)"],
            hoverBackgroundColor: "rgba(155, 109, 255, 0.4)",
            // borderColor: ["rgb(255, 99, 132)"],
            borderWidth: 1,
            order: 2,
          },
          {
            label: "Paid",
            data: this.paid,
            backgroundColor: ["rgba(155, 109, 255, 0.8)"],
            hoverBackgroundColor: "rgba(155, 109, 255, 1)",
            // borderColor: ["rgb(255, 99, 132)"],
            borderWidth: 1,
          },
        ],
      };
      const config = {
        type: "bar",
        data: data,
        options: {
          borderRadius: 5,
          borderSkipped: false,
          barPercentage: 1,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              yAlign: "bottom",
              backgroundColor: "rgba(155, 109, 255)",
            },
          },
          scales: {
            x: {
              ticks: {
                font: {
                  weight: 700,
                  family: "Montserrat",
                },
              },
              grid: {
                display: false,
                drawOnChartArea: false,
                drawBorder: false,
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                display: false,
              },
              grid: {
                display: false,
                drawBorder: false,
                drawOnChartArea: false,
              },
            },
          },
        },
      };
      const myChart = new Chart(document.getElementById("canvas"), config);
      myChart;
    },
    async fetchDataInvoice() {
      await axios
        .get("/api/v1/graphics")
        .then((res) => {
          this.date = Object.getOwnPropertyNames(res.data.data);
          let paidData = Object.values(res.data.data);
          paidData.forEach((data) => {
            this.unpaid.push(data.unpaid);
            this.paid.push(data.paid);
          });
        })
        .catch((err) => {
          console.log("err : ", err);
          if (err.response.status === 401) {
            this.isShowModalJWT = true;
          }
        });
    },
  },
  async mounted() {
    await this.fetchDataInvoice();
    this.makeGraph();
  },
};
</script>

<style>
</style>