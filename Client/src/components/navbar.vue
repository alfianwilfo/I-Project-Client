<script>
import { useCounterStore } from "../stores/counter";
import { mapState, mapActions } from "pinia";
import { RouterLink } from "vue-router";

export default {
  name: "navbar",
  methods: {
    ...mapActions(useCounterStore, [
      "toLogin",
      "toRegister",
      "logout",
      "getPremium",
      "goHome",
    ]),
    forLogout() {
      this.logout();
    },
    pageLogin() {
      this.toLogin();
    },
    pageRegister() {
      this.toRegister();
    },
    toPremium() {
      // console.log("masuk");
      this.getPremium();
    },
    toHome() {
      this.goHome();
    },
    payment() {
      this.getPremium();
    },
  },
  computed: {
    ...mapState(useCounterStore, ["isLogin", "status"]),
  },
};
</script>

<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
  >
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a
        @click.prevent="toHome"
        href="https://flowbite.com/"
        class="flex items-center"
      >
        <img
          src="../assets/kisspng-breaking-news-newspaper-logo-exercise-breaking-news-5b31f3172e9720.0243380315300001511909.png"
          class="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >Baca Berita</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="#"
              class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              @click="payment"
              v-if="status === 'Basic' && isLogin === true"
              href="#"
              class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
              >Premium</a
            >
          </li>
          <li>
            <a
              v-if="isLogin === true"
              @click.prevent="forLogout"
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >logout</a
            >
          </li>
          <li>
            <a
              v-if="isLogin === false"
              @click.prevent="pageLogin"
              href="#"
              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Login</a
            >
          </li>
          <li>
            <a
              v-if="isLogin === false"
              href="#"
              @click.prevent="pageRegister"
              class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Register</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
