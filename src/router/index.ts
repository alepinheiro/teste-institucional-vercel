import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useHead } from '@vueuse/head'
declare module 'vue-router' {
  interface RouteMeta {
    title: string
    meta?: {
      name: string
      content: string
    }[]
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/homePage/index.vue'),
    name: 'Home',
    meta: {
      title:
        'Página Inicial - SejaBest - Crédito imobiliário - Sem filas, sem gerentes, sem complexidade.',
      meta: [
        {
          name: 'description',
          content:
            'A melhor fintech de Crédito do Brasil. Sem filas, Sem gerentes, Sem complexidade.',
        },
      ],
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/sobre',
    name: 'AboutUs',
    component: () => import('@/views/AboutUs.vue'),
    meta: {
      title:
        'Sobre nós - SejaBest - Crédito imobiliário - Sem filas, sem gerentes, sem complexidade.',
      meta: [
        {
          name: 'description',
          content:
            'A melhor fintech de Crédito do Brasil. Sem filas, Sem gerentes, Sem complexidade.',
        },
      ],
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/home-equity',
    name: 'HomeEquity',
    component: () => import('@/views/CashBestLP.vue'),
    meta: {
      title: 'CashBest: o Crédito com Garantia de Imóvel da SejaBest',
      meta: [
        {
          name: 'description',
          content:
            'Financie seu imóvel com as melhores condições do mercado. Sem filas, sem gerentes, sem complexidade e com um time de especialistas totalmente pronto pra lhe ajudar.',
        },
      ],
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/emprestimo-com-garantia-de-imovel/cashbest',
    name: 'HomeEquityLP',
    component: () => import('@/views/CashBestLP.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/credito-com-garantia-de-imovel',
    name: 'HomeEquityLP-credito',
    component: () => import('@/views/CashBestLP.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/como-funciona',
    name: 'HomeEquityLP2',
    component: () => import('@/views/CashBestLP.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/emprestimo-com-garantia-de-imovel',
    name: 'HomeEquityLP1',
    component: () => import('@/views/CashBestLP.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/financiamento-imobiliario',
    name: 'Financing',
    component: () => import('@/views/FinanBestLP.vue'),
    props: {
      showMenu: true,
    },
  },
  {
    path: '/financiamento-imobiliario/finanBest',
    name: 'FinancingLP',
    component: () => import('@/views/FinanBestLP.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('@/views/Faq.vue'),
    props: {
      showMenu: true,
    },
  },
  {
    path: '/politica-de-privacidade',
    name: 'PrivacyPolicy',
    component: () => import('@/views/PrivacyPolicy.vue'),
    props: {
      showMenu: true,
    },
  },
  {
    path: '/termos-de-uso',
    name: 'TermsOfUse',
    component: () => import('@/views/TermsOfUse.vue'),
    props: {
      showMenu: true,
    },
  },
  {
    path: '/emprestimo-com-garantia-de-veiculo/BestCar',
    name: 'BestCarLP',
    component: () => import('@/views/BestCarLP.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/credito-com-garantia-de-veiculo',
    name: 'BestCarLP-credito',
    component: () => import('@/views/BestCarLP.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/emprestimo-com-garantia-de-veiculo',
    name: 'BestCar',
    component: () => import('@/views/BestCar.vue'),
    props: {
      showMenu: true,
    },
  },
  {
    path: '/financiamento-veicular',
    name: 'BestCarFinan',
    component: () => import('@/views/BestCarFinan.vue'),
    props: {
      showMenu: true,
    },
  },
  {
    path: '/best-news',
    name: 'BestNews',
    component: () => import('@/views/BestNewsLP.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/financiamento-veicular/BestCarFinan',
    name: 'BestCarFinanLP',
    component: () => import('@/views/BestCarFinanLP.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/xo-aluguel',
    name: 'getOutRent',
    component: () => import('@/views/getOutRent.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/xo-aluguel-adquirido',
    name: 'successGuideGetOutOfRent',
    component: () => import('@/views/successGuideGetOutOfRent.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/best-broker',
    name: 'bestBroker',
    component: () => import('@/views/BestBrokerLP.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/best-broker-adquirido',
    name: 'bestBrokerSuccess',
    component: () => import('@/views/BestBrokerSuccess.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/besthub',
    name: 'besthub',
    component: () => import('@/views/BestHubLP.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/warren',
    name: 'warren',
    component: () => import('@/views/WarrenLandingPage.vue'),
    props: {
      showMenu: false,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to, from) => {
  const defaultPageTitle =
    'SejaBest - Crédito imobiliário - Sem filas, sem gerentes, sem complexidade.'
  useHead({
    title: to.meta.title ?? defaultPageTitle,
  })
})

export default router
