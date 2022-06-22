import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/sobre",
    name: "AboutUs",
    component: () => import("@/views/AboutUs.vue"),
  },
  {
    path: "/como-funciona",
    name: "Works",
    component: () => import("@/views/Works.vue"),
  },
  {
    path: "/home-equity",
    name: "HomeEquity",
    component: () => import("@/views/HomeEquity.vue"),
  },
  {
    path: "/financiamento-imobiliario",
    name: "Financing",
    component: () => import("@/views/Financing.vue"),
  },
  {
    path: "/parceiro",
    name: "Partner",
    component: () => import("@/views/Partner.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
