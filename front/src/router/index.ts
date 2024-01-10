import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/a-propos-garagiste-nom-ville",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/contact/:id_vehicles?/:promotion?",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
