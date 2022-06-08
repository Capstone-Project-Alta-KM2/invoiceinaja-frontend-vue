<template>
  <div class="flex flex-col p-4">
    <h2 class="text-left sm:text-xl lg:text-2xl font-semibold">
      Invoice Activity
    </h2>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead class="border-y">
              <tr>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Invoice#
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Client
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Date
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Jumlah
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="
                  text-left
                  hover:bg-soft-purple-outline-hover
                  transition-all
                  duration-300
                "
                v-for="invoiceData in dataInvoiceActivity"
                :key="invoiceData.invoiceId"
              >
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-sm
                    font-medium
                    text-gray-900
                  "
                >
                  {{ invoiceData.invoiceId }}
                </td>
                <td
                  class="
                    text-sm text-gray-900
                    font-light
                    px-6
                    py-4
                    whitespace-nowrap
                  "
                >
                  {{ invoiceData.clientName }}
                </td>
                <td
                  class="
                    text-sm text-gray-900
                    font-light
                    px-6
                    py-4
                    whitespace-nowrap
                  "
                >
                  {{ invoiceData.DateInvoice }}
                </td>
                <td
                  class="
                    text-sm text-gray-900
                    font-light
                    px-6
                    py-4
                    whitespace-nowrap
                  "
                >
                  Rp {{ invoiceData.Jumlah }}
                </td>
                <td
                  class="
                    text-sm text-gray-900
                    font-light
                    px-6
                    py-4
                    text-center
                    whitespace-nowrap
                  "
                >
                  <span class="inline-block w-16 leading-8 status">
                    {{ invoiceData.Status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      invoiceId: "",
      clientName: "",
      DateInvoice: "",
      Jumlah: 0,
      Status: "",
      dataInvoiceActivity: [
        {
          invoiceId: "0001234",
          clientName: "Restu Averian",
          DateInvoice: "Juni 06, 2022",
          Jumlah: 250000,
          Status: "Paid",
        },
        {
          invoiceId: "0001235",
          clientName: "Ilham Ganteng",
          DateInvoice: "Juni 08, 2022",
          Jumlah: 350000,
          Status: "Unpaid",
        },
      ],
    };
  },
  methods: {
    async checkStatus(statusCheck) {
      let activity = this.dataInvoiceActivity;
      let a = await activity.some((status) => {
        return status.Status === statusCheck;
      });
      console.log("Hasil Status : ", a);
    },
  },
  async mounted() {
    // let status = document.querySelectorAll("tbody > tr>td>span");
    // for (let i = 0; i < status.length; i++) {
    //   console.log("aaaaaa : ", status[i]);
    // }
    let status = document.querySelectorAll(".status");
    let a = status[0].textContent;
    console.log("content : ", a);
    if (a.match("Paid")) {
      console.log("Yeah");
    }
    for (let i = 0; i < status.length; i++) {
      if (status[i].textContent.match("Paid")) {
        status[i].classList.add("bg-[rgba(135,228,96,0.2)]");
        status[i].classList.add("text-paid-color");
      }
      if (status[i].textContent.match("Unpaid")) {
        status[i].classList.add("bg-[rgba(255,204,0,0.2)]");
        status[i].classList.add("text-unpaid-color");
        //   console.log("Unpaid");
      }
    }
  },
};
</script>

<style>
</style>