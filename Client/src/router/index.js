import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import register from "../views/register.vue";
import login from "../views/login.vue";
import detail from "../views/DetailNews.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: home,
    },
    {
      path: "/",
      redirect: { name: "home" },
    },
    {
      path: "/register",
      name: "register",
      component: register,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/detail",
      name: "detail",
      component: detail,
    },
  ],
});

export default router;
