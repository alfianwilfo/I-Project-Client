import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useUserStore = defineStore("user", {
  state: () => ({
    contoh: "",
    baseUrl: "http://localhost:3000",
  }),
  actions: {
    async register(obj) {
      try {
        let { email, password } = obj;
        let { data } = await axios({
          url: `${this.baseUrl}/register`,
          method: "post",
          data: {
            email,
            password,
          },
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account is ready to use",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push({ name: "login" });
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async login(obj) {
      try {
        let { email, password } = obj;
        let { data } = await axios({
          url: `${this.baseUrl}/login`,
          method: "post",
          data: {
            email,
            password,
          },
        });
        console.log(data);
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
  },
});
