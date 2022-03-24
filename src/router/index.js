import { createRouter, createWebHistory } from "vue-router";
import BootView from "../views/BootView.vue";
import DesktopView from "../views/DesktopView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "boot",
      component: BootView,
      meta: {
        transitionOut: "fade",
      },
    },
    {
      path: "/desktop",
      name: "desktop",
      component: DesktopView,
      meta: {
        transition: "fade",
      },
    },
  ],
});

export default router;
