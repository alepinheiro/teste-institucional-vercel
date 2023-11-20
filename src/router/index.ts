import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/sobre',
    name: 'AboutUs',
    component: () => import('@/views/AboutUs.vue'),
  },
  {
    path: '/home-equity',
    name: 'HomeEquity',
    component: () => import('@/views/HomeEquity.vue'),
  },
  {
    path: '/emprestimo-com-garantia-de-imovel/cashbest',
    name: 'HomeEquityLP',
    component: () => import('@/views/HomeEquityLP.vue'),
  },
  {
    path: '/credito-com-garantia-de-imovel',
    name: 'HomeEquityLP-credito',
    component: () => import('@/views/HomeEquityLP.vue'),
  },
  {
    path: '/como-funciona',
    name: 'HomeEquityLP2',
    component: () => import('@/views/HomeEquityLP.vue'),
  },
  {
    path: '/emprestimo-com-garantia-de-imovel',
    name: 'HomeEquityLP1',
    component: () => import('@/views/HomeEquityLP.vue'),
  },
  {
    path: '/financiamento-imobiliario',
    name: 'Financing',
    component: () => import('@/views/Financing.vue'),
  },
  {
    path: '/financiamento-imobiliario/finanBest',
    name: 'FinancingLP',
    component: () => import('@/views/FinancingLP.vue'),
  },
  {
    path: '/parceiro',
    name: 'Partner',
    component: () => import('@/views/Partner.vue'),
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('@/views/Faq.vue'),
  },
  {
    path: '/politica-de-privacidade',
    name: 'PrivacyPolicy',
    component: () => import('@/views/PrivacyPolicy.vue'),
  },
  {
    path: '/termos-de-uso',
    name: 'TermsOfUse',
    component: () => import('@/views/TermsOfUse.vue'),
  },
  {
    path: '/emprestimo-com-garantia-de-veiculo/BestCar',
    name: 'BestCarLP',
    component: () => import('@/views/BestCarLP.vue'),
  },
  {
    path: '/credito-com-garantia-de-veiculo',
    name: 'BestCarLP-credito',
    component: () => import('@/views/BestCarLP.vue'),
  },
  {
    path: '/emprestimo-com-garantia-de-veiculo',
    name: 'BestCar',
    component: () => import('@/views/BestCar.vue'),
  },
  {
    path: '/financiamento-veicular',
    name: 'BestCarFinan',
    component: () => import('@/views/BestCarFinan.vue'),
  },
  {
    path: '/best-news',
    name: 'BestNews',
    component: () => import('@/views/BestNewsLP.vue'),
  },
  {
    path: '/financiamento-veicular/BestCarFinan',
    name: 'BestCarFinanLP',
    component: () => import('@/views/BestCarFinanLP.vue'),
  },
  {
    path: '/xo-aluguel',
    name: 'getOutRent',
    component: () => import('@/views/getOutRent.vue'),
  },
  {
    path: '/xo-aluguel-adquirido',
    name: 'successGuideGetOutOfRent',
    component: () => import('@/views/successGuideGetOutOfRent.vue'),
  },
  {
    path: '/best-broker',
    name: 'bestBroker',
    component: () => import('@/views/BestBrokerLP.vue'),
  },
  {
    path: '/best-broker-adquirido',
    name: 'bestBrokerSuccess',
    component: () => import('@/views/BestBrokerSuccess.vue'),
  },
  {
    path: '/besthub',
    name: 'BestHub, a plataforma que vai fintechizar o seu negócio',
    component: () => import('@/views/BestHubLP.vue'),
  },
  {
    path: '/dev/finanbest',
    name: 'FinanBest',
    component: () => import('@/views/FinanBestLP.vue'),
  },
  {
    path: '/dev/homeEquity',
    name: 'CashBest',
    component: () => import('@/views/CashBestLP.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
