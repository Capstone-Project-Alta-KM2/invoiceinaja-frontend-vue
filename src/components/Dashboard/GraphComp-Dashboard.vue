<template>
  <div class="container">
    <div class="flex justify-between p-4">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 inline-block"
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
        <p class="inline-block px-2">Monthly Revenue</p>
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
            backgroundColor: ["rgba(0,0,0, 0.1)"],
            hoverBackgroundColor: "rgba(0,0,0, 0.4)",
            // borderColor: ["rgb(255, 99, 132)"],
            borderWidth: 1,
            order: 2,
          },
          {
            label: "Udah Bayar",
            data: this.negative,
            backgroundColor: ["rgba(76, 150, 227, 0.5)"],
            hoverBackgroundColor: "rgba(76, 150, 227, 0.7)",

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
              backgroundColor: "rgba(76, 150, 227)",
            },
          },
          scales: {
            x: {
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