import { createRouter, createWebHistory } from "vue-router";
import Navbar from "../views/Navbar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "navbar",
      component: Navbar,
    },
  ],
});

export default router;
