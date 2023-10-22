import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Contact from "../views/Contact.vue";
import Galery from "../views/Galery.vue";
import Magician from "../views/TheMagician.vue";
import Shows from "../views/Shows.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/galery",
      name: "galery",
      component: Galery,
    },
    {
      path: "/magician",
      name: "magician",
      component: Magician,
    },
    {
      path: "/shows",
      name: "shows",
      component: Shows,
    },
  ],
});

export default router;
