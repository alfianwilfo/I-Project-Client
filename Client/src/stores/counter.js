// import { createRouter, createWebHistory } from "vue-router";

import { defineStore } from "pinia";
import axios from "axios";
import { RouterLink } from "vue-router";
// import { snap } from "../assets/snap";
// // snap.

// import snap from "../assets/snap";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    baseUrl: "https://berita-server.herokuapp.com",
    // baseUrl: "http://localhost:3000",
    isLogin: false,
    news: [],
    selectedNews: {},
    status: localStorage.status,
    weather: {},
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
        // console.log("sasas");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account is ready to use",
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.push({ name: "login" });
      } catch (error) {
        console.log(error);
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
        localStorage.access_token = data.access_token;
        localStorage.email = data.email;
        localStorage.status = data.status;
        this.router.push({ name: "home" });
        this.isLogin = true;
        this.status = data.status;
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async logout() {
      localStorage.clear();
      this.isLogin = false;
    },
    async toLogin() {
      try {
        this.router.push({ name: "login" });
      } catch (error) {
        console.log(error);
      }
    },
    async toRegister() {
      try {
        this.router.push({ name: "register" });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchData() {
      try {
        let { data } = await axios({
          url: `${this.baseUrl}/news`,
          method: "get",
        });
        this.news = data.data.posts;
      } catch (error) {
        console.log(error);
      }
    },
    async selectNews(id) {
      try {
        this.news.forEach((el) => {
          if (el.id === id) {
            // console.log(el);
            this.selectedNews = el;
          }
        });
        this.router.push({ name: "detail" });
      } catch (error) {
        console.log(error);
      }
    },
    async getPremium() {
      // console.log(localStorage.email);

      try {
        let { data } = await axios({
          url: `${this.baseUrl}/payment`,
          method: "get",
        });

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Pay !",
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(data.data.redirect_url, "_blank");
            axios({
              url: `${this.baseUrl}/payment`,
              method: "post",
              data: {
                email: localStorage.email,
                token: data.data.token,
                orderId: data.orderId,
              },
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async goHome() {
      this.router.push({ name: "home" });
    },
    async getWeather() {
      let { data } = await axios({
        url: "http://api.weatherapi.com/v1/current.json?key=8b8ebdc80115456c85840905221011&q=Jakarta&aqi=no",
        method: "get",
      });
      this.weather = data;
    },
  },
});
