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
    path: "/home-equity",
    name: "HomeEquity",
    component: () => import("@/views/HomeEquity.vue"),
  },
  {
    path: "/emprestimo-com-garantia-de-imovel/cashbest",
    name: "HomeEquityLP",
    component: () => import("@/views/HomeEquityLP.vue"),
  },
  {
    path: "/como-funciona",
    name: "HomeEquityLP2",
    component: () => import("@/views/HomeEquityLP.vue"),
  },
  {
    path: "/emprestimo-com-garantia-de-imovel",
    name: "HomeEquityLP1",
    component: () => import("@/views/HomeEquityLP.vue"),
  },
  {
    path: "/financing",
    name: "Financing",
    component: () => import("@/views/Financing.vue"),
  },
  {
    path: "/financiamento-imobiliario/finanBest",
    name: "FinancingLP",
    component: () => import("@/views/FinancingLP.vue"),
  },
  {
    path: "/financiamento-imobiliario",
    name: "FinancingLP1",
    component: () => import("@/views/FinancingLP.vue"),
  },
  {
    path: "/portal",
    name: "portal",
    component: () => import("@/views/PageUnavailable.vue"),
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
