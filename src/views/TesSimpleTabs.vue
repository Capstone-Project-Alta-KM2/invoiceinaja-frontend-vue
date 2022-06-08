<template>
  <div class="bg-white">
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul
        class="
          flex flex-wrap
          -mb-px
          text-sm
          font-medium
          text-center text-gray-500
          dark:text-gray-400
        "
        id="tabExample"
        role="tablist"
      >
        <li class="mr-2" role="presentation">
          <button
            :class="currentShow == 'Profile' ? ActiveClass : inActiveClass"
            id="Profile"
            type="button"
            role="tab"
            aria-controls="profile-example"
            aria-selected="false"
            @click="changeActive('Profile')"
          >
            Profile
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            :class="currentShow == 'Dashboard' ? ActiveClass : inActiveClass"
            id="Dashboard"
            type="button"
            role="tab"
            aria-controls="dashboard-example"
            aria-selected="false"
            @click="changeActive('Dashboard')"
          >
            Dashboard
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            :class="currentShow == 'Settings' ? ActiveClass : inActiveClass"
            id="Settings"
            type="button"
            @click="changeActive('Settings')"
          >
            Settings
          </button>
        </li>
        <li role="presentation">
          <button
            :class="currentShow == 'Contacts' ? ActiveClass : inActiveClass"
            id="Contacts"
            type="button"
            @click="changeActive('Contacts')"
          >
            Contacts
          </button>
        </li>
      </ul>
    </div>
    <div id="tabContentExample">
      <div
        class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
        :hidden="
          currentShow == 'Profile' ? (isHidden = false) : (isHidden = true)
        "
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Profile tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
        :hidden="
          currentShow == 'Dashboard' ? (isHidden = false) : (isHidden = true)
        "
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Dashboard tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
        :hidden="
          currentShow == 'Settings' ? (isHidden = false) : (isHidden = true)
        "
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Settings tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
        :hidden="
          currentShow == 'Contacts' ? (isHidden = false) : (isHidden = true)
        "
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Contacts tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: false,
      currentShow: "Profile",
      inActiveClass:
        "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
      ActiveClass:
        "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 border-red-500 dark:hover:text-gray-300",
    };
  },
  methods: {
    changeActive(page) {
      this.currentShow = page;
      let classActive = document.querySelectorAll(
        `#tabExample>li>button#${page}`
      );
      if (classActive[0].id == "Dashboard") {
        classActive[0].classList.add("border-red-400");
      }
    },
  },
  updated() {
    this.changeActive;
  },
  mounted() {},
};
</script>

<style>
</style>