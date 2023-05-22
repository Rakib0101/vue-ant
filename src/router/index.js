import { createRouter, createWebHistory } from "vue-router";
import Navbar from "../components/Navbar.vue";
import CategoryCard from "../components/CategoryCard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Navbar",
      component: Navbar,
    },
    {
      path: "/",
      name: "CategoryCard",
      component: CategoryCard,
    },
  ],
});

export default router;
