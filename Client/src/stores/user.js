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
        router.push({ name: "home" });
      } catch (error) {
        // console.log(error.response.data.message);
        if (error.response.data.message === "Enter your email") {
          Swal.fire("Enter your email");
        } else if (error.response.data.message === "Enter your password") {
          Swal.fire("Enter your password");
        } else if (
          error.response.data.message === "Enter your email in email format"
        ) {
          Swal.fire("Enter your email in email format");
        }
      }
    },
  },
});
