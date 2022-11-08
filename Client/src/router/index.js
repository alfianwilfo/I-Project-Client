import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import register from "../views/register.vue";

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
    {},
  ],
});

export default router;
