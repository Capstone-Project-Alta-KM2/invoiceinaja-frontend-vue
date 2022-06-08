<template>
  <div class="container">
    <div class="flex justify-between p-4 items-center">
      <div class="flex items-center">
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
        <select name="" id="" class="">
          <option value="Last 6 Month">Last 6 Month</option>
          <option value="Last 3 Month">Last 3 Month</option>
        </select>
      </div>
    </div>
    <canvas id="canvas" class="p-2"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import axios from "axios";
export default {
  data() {
    return {
      date: [],
      positive: [],
      negative: [],
    };
  },
  methods: {
    makeGraph() {
      // const MONTHS = ["January", "February", "March", "April", "May", "June"];
      const labels = this.date;
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Belum bayar",
            data: this.positive,
            backgroundColor: ["rgba(155, 109, 255, 0.2)"],
            hoverBackgroundColor: "rgba(155, 109, 255, 0.4)",
            // borderColor: ["rgb(255, 99, 132)"],
            borderWidth: 1,
            order: 2,
          },
          {
            label: "Udah Bayar",
            data: this.negative,
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
    async fetchDataPositive() {
      await axios
        .get("https://api.covidtracking.com/v1/us/daily.json")
        .then((res) => {
          let hasil = res.data.slice(0, 6);
          console.log(hasil);

          hasil.forEach((data) => {
            this.date.push(data.date);
            this.positive.push(data.positive);
            this.negative.push(data.negative);
          });
        });
    },
  },
  async mounted() {
    await this.fetchDataPositive();
    this.makeGraph();
  },
};
</script>

<style>
</style>