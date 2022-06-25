<template>
  <div>
    <div class="rounded-xl p-3 border-2 m-3 overflow-x-hidden">
      <div class="flex justify-between">
        <div class="relative">
          <input
            type="text"
            v-model="searchClient"
            name="searchInvoice"
            placeholder="Search name, Invoice, Item"
            class="form-add-invoice w-80 peer pl-4 focus:pl-10"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-6
              w-6
              absolute
              top-2
              hidden
              peer-focus:animate-showIcon peer-focus:block
              transition-all
              duration-500
              left-2
              peer-focus:text-soft-purple
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div class="flex">
          <div>
            <vue-excel-xlsx
              v-ripple
              :columns="columns"
              :data="items"
              :file-name="'client-data'"
              :file-type="'xlsx'"
              :sheet-name="'sheetname'"
              class="button button-outline-primary px-3 py-2 text-base"
            >
              Download Data
            </vue-excel-xlsx>
          </div>
          <div>
            <button
              v-ripple
              @click="toAddClient"
              class="button button-primary ml-4 px-3 py-2 text-base"
            >
              + Add New Client
            </button>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 mt-5">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-x-auto">
            <table class="min-w-full" id="table-clients">
              <tr class="border-y">
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  No Client
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
                  Email
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  No. Telp
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Actions
                </th>
              </tr>
              <tr
                class="
                  text-left
                  hover:bg-[#e3daf7]
                  transition-all
                  duration-300
                  my-10
                  shadow-invoicein
                "
                v-for="(items, index) in paginated('clients')"
                :key="index"
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
                  {{ items.no_client }}
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
                  {{ items.client_name }}
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
                  {{ items.email }}
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
                  {{ items.no_hp }}
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
                  <button
                    v-ripple
                    class="
                      flex
                      rounded-lg
                      bg-[#ebe2ff]
                      text-soft-purple
                      px-3
                      py-2
                      items-center
                    "
                  >
                    <svg
                      width="20"
                      class="mr-3"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.377 2.42418C19.6211 2.66825 19.6211 3.06398 19.377 3.30806L18.0734 4.61166L15.5734 2.11166L16.877 0.808058C17.1211 0.56398 17.5168 0.563981 17.7609 0.808058L19.377 2.42418Z"
                        fill="#9B6DFF"
                      />
                      <path
                        d="M17.1895 5.49554L14.6895 2.99554L6.17326 11.5118C6.10465 11.5804 6.05296 11.664 6.02228 11.7561L5.01658 14.7732C4.93514 15.0175 5.16756 15.2499 5.41186 15.1685L8.42896 14.1628C8.52101 14.1321 8.60465 14.0804 8.67326 14.0118L17.1895 5.49554Z"
                        fill="#9B6DFF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.25 16.875C1.25 17.9105 2.08947 18.75 3.125 18.75H16.875C17.9105 18.75 18.75 17.9105 18.75 16.875V9.375C18.75 9.02982 18.4702 8.75 18.125 8.75C17.7798 8.75 17.5 9.02982 17.5 9.375V16.875C17.5 17.2202 17.2202 17.5 16.875 17.5H3.125C2.77982 17.5 2.5 17.2202 2.5 16.875V3.125C2.5 2.77982 2.77982 2.5 3.125 2.5H11.25C11.5952 2.5 11.875 2.22018 11.875 1.875C11.875 1.52982 11.5952 1.25 11.25 1.25H3.125C2.08947 1.25 1.25 2.08947 1.25 3.125V16.875Z"
                        fill="#9B6DFF"
                      />
                    </svg>
                    Edit
                  </button>
                </td>
              </tr>
              <paginate
                id="table-clients"
                name="clients"
                :list="dataClients"
                :per="5"
              >
              </paginate>
            </table>
          </div>
        </div>
      </div>
      <!-- <div class="lg:overflow-x-hidden overflow-x-auto my-5">
        <table class="min-w-full">
          <tr class="text-left border-y-2 py-4 row mb-5">
            <th class="w-12 text-left col">
              <input
                type="checkbox"
                @click="checkAll(this, $event)"
                class="form-checkbox-modif"
              />
            </th>
            <td class="col">No Client</td>
            <td class="col">Client</td>
            <td class="col">Email</td>
            <td class="col">No Telp</td>
            <td class="col">Action</td>
          </tr>

          <paginate
            v-if="dataClients.length != 0"
            id="table-clients"
            name="clients"
            :list="dataClients"
            :per="5"
          >
            <tr
              v-for="(item, index) in paginated('clients')"
              :key="index"
              class="
                text-left
                row
                py-3
                my-10
                shadow-invoicein
                hover:bg-[#e3daf7]
                duration-300
                transition-all
              "
            >
              <td class="col text-left">
                <input type="checkbox" class="form-checkbox-modif" />
              </td>
              <td class="col text-left">{{ item.no_client }}</td>
              <td class="col text-left">{{ item.client_name }}</td>
              <td class="col text-left">{{ item.email }}</td>
              <td class="col text-left">{{ item.no_hp }}</td>
              <td class="col text-left">
                <button
                  v-ripple
                  class="
                    flex
                    rounded-lg
                    bg-[#ebe2ff]
                    text-soft-purple
                    px-3
                    py-2
                    items-center
                  "
                >
                  <svg
                    width="20"
                    class="mr-3"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.377 2.42418C19.6211 2.66825 19.6211 3.06398 19.377 3.30806L18.0734 4.61166L15.5734 2.11166L16.877 0.808058C17.1211 0.56398 17.5168 0.563981 17.7609 0.808058L19.377 2.42418Z"
                      fill="#9B6DFF"
                    />
                    <path
                      d="M17.1895 5.49554L14.6895 2.99554L6.17326 11.5118C6.10465 11.5804 6.05296 11.664 6.02228 11.7561L5.01658 14.7732C4.93514 15.0175 5.16756 15.2499 5.41186 15.1685L8.42896 14.1628C8.52101 14.1321 8.60465 14.0804 8.67326 14.0118L17.1895 5.49554Z"
                      fill="#9B6DFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.25 16.875C1.25 17.9105 2.08947 18.75 3.125 18.75H16.875C17.9105 18.75 18.75 17.9105 18.75 16.875V9.375C18.75 9.02982 18.4702 8.75 18.125 8.75C17.7798 8.75 17.5 9.02982 17.5 9.375V16.875C17.5 17.2202 17.2202 17.5 16.875 17.5H3.125C2.77982 17.5 2.5 17.2202 2.5 16.875V3.125C2.5 2.77982 2.77982 2.5 3.125 2.5H11.25C11.5952 2.5 11.875 2.22018 11.875 1.875C11.875 1.52982 11.5952 1.25 11.25 1.25H3.125C2.08947 1.25 1.25 2.08947 1.25 3.125V16.875Z"
                      fill="#9B6DFF"
                    />
                  </svg>
                  Edit
                </button>
              </td>
            </tr>
          </paginate>

          <paginate
            v-else-if="dataClients.length == 0"
            id="table-clients"
            name="clients"
            :list="dataClients"
            :per="5"
          >
            <tr class="text-center row py-3 my-10 shadow-invoicein">
              <td colspan="8">Data tidak ada</td>
            </tr>
          </paginate>
        </table>
      </div> -->
    </div>
    <paginate-links
      :hide-single-page="true"
      :classes="{
        ul: ['flex', 'justify-end', 'align-center', 'mx-3', 'my-4', 'text-md'],
        'ul.paginate-links>li': [
          'border-soft-purple',
          'border',
          'mr-3',
          'transition-all',
          'duration-300',
        ],
        'ul.paginate-links>li.active': [
          'bg-soft-purple',
          'rounded-md',
          'text-white',
          'transition-all',
          'duration-300',
        ],
        'ul.paginate-links>li>a': [
          'cursor-pointer',
          'text-soft-purple',
          'no-underline',
          'px-3',
          'leading-8',
        ],
      }"
      for="clients"
      :limit="3"
    ></paginate-links>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ClientTable",
  components: {},
  data() {
    return {
      searchClient: "",
      paginate: ["clients"],
      columns: [
        {
          label: "No. Client",
          field: "no_client",
        },
        {
          label: "Client Name",
          field: "client_name",
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "No. Hp",
          field: "no_hp",
        },
      ],
      items: [],
    };
  },
  computed: {
    dataClients() {
      return this.items.filter((client) => {
        return (
          client.client_name
            .toLowerCase()
            .match(this.searchClient.toLowerCase()) ||
          client.email.toLowerCase().match(this.searchClient.toLowerCase())
        );
      });
    },
  },
  methods: {
    toAddClient() {
      this.$emit("showDialog");
    },
  },
  async mounted() {
    await axios
      .get("api/v1/clients")
      .then((res) => {
        console.log("res : ", res);
      })
      .catch((err) => {
        console.log("err : ", err);
        // if (err.response.status === 401) {
        //   localStorage.removeItem("token");
        //   this.$router.push("/login");
        // }
      });
  },
};
</script>

<style>
ul.paginate-links > li.active > a {
  color: white;
}
ul#table-clients {
  padding: 0;
}
</style>