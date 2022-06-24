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
  {
    path: "/faq",
    name: "Faq",
    component: () => import("@/views/Faq.vue"),
  },
  {
    path: "/politica-de-privacidade",
    name: "PrivacyPolicy",
    component: () => import("@/views/PrivacyPolicy.vue"),
  },
  {
    path: "/termos-de-uso",
    name: "TermsOfUse",
    component: () => import("@/views/TermsOfUse.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
