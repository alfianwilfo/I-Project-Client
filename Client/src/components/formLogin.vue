<script>
import { useCounterStore } from "../stores/counter";
import { mapStores, mapActions } from "pinia";
import { RouterLink } from "vue-router";
export default {
  name: "formLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["login"]),
    async loginHandler() {
      try {
        this.login({ email: this.email, password: this.password });
      } catch (error) {
        Swal.fire("Opss!", "Something wrong", "error");
      }
    },
  },
  computed: {
    ...mapStores(useCounterStore, ["isLogin"]),
  },
};
</script>
<template>
  <form class="container mx-auto">
    <div class="grid gap-6 mb-6 md:grid-cols-2"></div>
    <div class="mb-6">
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Email address</label
      >
      <input
        v-model="email"
        type="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="john.doe@company.com"
        required=""
      />
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Password</label
      >
      <input
        v-model="password"
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="•••••••••"
        required=""
      />
    </div>
    <div class="flex flex-row">
      <button
        @click.prevent="loginHandler"
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      <p style="padding-top: 0.5em; padding-left: 1em">
        Don't have account ?
        <RouterLink :to="{ name: 'register' }">Register here</RouterLink>
      </p>
    </div>
  </form>
</template>
