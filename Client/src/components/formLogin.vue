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
    ...mapActions(useCounterStore, ["login", "toRegister"]),
    async loginHandler() {
      try {
        this.login({ email: this.email, password: this.password });
      } catch (error) {
        Swal.fire("Opss!", "Something wrong", "error");
      }
    },
    async toRegis() {
      try {
        this.toRegister();
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
  <div
    class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0"
  >
    <div
      class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
      style="height: 500px"
    >
      <div class="flex flex-col w-full md:w-1/2 p-4">
        <div class="flex flex-col flex-1 justify-center mb-8">
          <h1 class="text-4xl text-center font-thin">Welcome</h1>
          <div class="w-full mt-4">
            <form class="form-horizontal w-3/4 mx-auto">
              <div class="flex flex-col mt-4">
                <input
                  v-model="email"
                  id="email"
                  type="text"
                  class="flex-grow h-8 px-2 border rounded border-grey-400"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div class="flex flex-col mt-4">
                <input
                  v-model="password"
                  id="password"
                  type="password"
                  class="flex-grow h-8 px-2 rounded border border-grey-400"
                  name="password"
                  required
                  placeholder="Password"
                />
              </div>
              <div class="flex flex-col mt-8">
                <button
                  type="submit"
                  @click.prevent="loginHandler"
                  class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                >
                  Register
                </button>
              </div>

              <h2 style="text-decoration-color: aqua">
                Don't have account?<button
                  class="btn btn-link"
                  @click.prevent="toRegis"
                >
                  register
                </button>
              </h2>
            </form>
          </div>
        </div>
      </div>
      <div
        class="hidden md:block md:w-1/2 rounded-r-lg"
        style="
          background: url('https://akcdn.detik.net.id/community/media/visual/2022/07/13/ilustrasi-baca-berita.jpeg?w=700&q=90');
          background-size: cover;
          background-position: center center;
        "
      ></div>
    </div>
  </div>
</template>
