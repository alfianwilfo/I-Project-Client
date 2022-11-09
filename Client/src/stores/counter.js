// import { createRouter, createWebHistory } from "vue-router";

import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
    news: [],
    selectedNews: {},
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
        localStorage.access_token = data.access_token;
        localStorage.email = data.email;
        localStorage.status = data.status;
        this.router.push({ name: "home" });
        this.isLogin = true;
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
        console.log(id);
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
  },
});
