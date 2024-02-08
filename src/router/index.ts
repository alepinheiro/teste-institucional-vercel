import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {
  useHead,
  useSeoMeta,
  type UseHeadInput,
  type UseSeoMetaInput,
} from '@unhead/vue'
declare module 'vue-router' {
  interface RouteMeta {
    meta?: UseHeadInput<{}>
    seoMeta?: UseSeoMetaInput
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/homePage/index.vue'),
    name: 'Home',
    meta: {
      title:
        'SejaBest - Crédito imobiliário - Sem filas, sem gerentes, sem complexidade.',
      meta: [
        {
          name: 'description',
          content:
            'A melhor fintech de Crédito do Brasil. Sem filas, Sem gerentes, Sem complexidade.',
        },
        {
          rel: 'canonical',
          href: 'https://seja.best',
        },
      ] as UseHeadInput,
      seoMeta: {
        title:
          'SejaBest - Crédito imobiliário - Sem filas, sem gerentes, sem complexidade.',
        description:
          ' Facilitamos o seu acesso ao crédito através de uma  plataforma multibancos. Sem filas, Sem gerentes, Sem complexidade.',
        ogDescription:
          'A melhor fintech de Crédito do Brasil. Sem filas, Sem gerentes, Sem complexidade.',
        ogTitle:
          'SejaBest - Crédito imobiliário - Sem filas, sem gerentes, sem complexidade.',
        ogImage: window.location.origin + '/images/Home/gasparHeroSection.png',
        ogUrl: window.location.origin,
        ogType: 'website',
      },
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
      ] as UseHeadInput,
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/home-equity',
    alias: [
      '/emprestimo-com-garantia-de-imovel/cashbest',
      '/credito-com-garantia-de-imovel',
      '/como-funciona',
      '/emprestimo-com-garantia-de-imovel',
    ],
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
      ] as UseHeadInput,
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/financiamento-imobiliario',
    alias: ['/financiamento-imobiliario/finanBest'],
    name: 'Financing',
    component: () => import('@/views/FinanBestLP.vue'),
    meta: {
      title: 'FinanBest: Financie seu imóvel com a assessoria SejaBest',
      meta: [
        {
          name: 'description',
          content:
            'Financie seu imóvel com as melhores condições do mercado. Sem filas, sem gerentes, sem complexidade e com um time de especialistas totalmente pronto pra lhe ajudar.',
        },
      ] as UseHeadInput,
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('@/views/Faq.vue'),
    meta: {
      title:
        'Perguntas Frequentes - SejaBest - Crédito imobiliário - Sem filas, sem gerentes, sem	complexidade.',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/politica-de-privacidade',
    name: 'PrivacyPolicy',
    component: () => import('@/views/PrivacyPolicy.vue'),
    meta: {
      title:
        'Política de privacidade - SejaBest - Crédito imobiliário - Sem filas, sem gerentes, sem	complexidade.',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/termos-de-uso',
    name: 'TermsOfUse',
    component: () => import('@/views/TermsOfUse.vue'),
    meta: {
      title:
        'Termos de uso - SejaBest - Crédito imobiliário - Sem filas, sem gerentes, sem	complexidade.',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/emprestimo-com-garantia-de-veiculo/BestCar',
    alias: ['/credito-com-garantia-de-veiculo'],
    name: 'BestCarLP',
    component: () => import('@/views/BestCarLP.vue'),
    meta: {
      title: 'BestCar: Empréstimo com Garantia de Veículo',
      meta: [
        {
          name: 'description',
          content:
            'Use o seu carro como garantia em troca das melhores taxas.Você consegue crédito para seus objetivos financeiros sem precisar vender o veículo com taxas a partir de 1,59% ao mês e prazos de até 60 meses. ',
        },
      ] as UseHeadInput,
    },
    props: {
      showMenu: false,
    },
  },
  {
    path: '/emprestimo-com-garantia-de-veiculo',
    name: 'BestCar',
    component: () => import('@/views/BestCar.vue'),
    meta: {
      title: 'BestCar: Empréstimo com Garantia de Veículo',
      meta: [
        {
          name: 'description',
          content:
            'Use o seu carro como garantia em troca das melhores taxas.Você consegue crédito para seus objetivos financeiros sem precisar vender o veículo com taxas a partir de 1,59% ao mês e prazos de até 60 meses. ',
        },
      ] as UseHeadInput,
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/financiamento-veicular',
    alias: ['/financiamento-veicular/BestCarFinan'],
    name: 'BestCarFinan',
    component: () => import('@/views/BestCarFinan.vue'),
    meta: {
      title: 'FinanBest: Financiamento veicular da SejaBest',
      meta: [
        {
          name: 'description',
          content:
            'Escolha o carro, novo ou usado, e financie até 100% do valor. Faça uma simulação agora e veja como ficam as parcelas. ',
        },
      ] as UseHeadInput,
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/best-news',
    name: 'BestNews',
    component: () => import('@/views/BestNewsLP.vue'),
    meta: {
      title: 'BestNews: Notícias da sobre financiamento imobiliário',
      meta: [
        {
          name: 'description',
          content:
            'Aprenda tudo sobre financiamento, modalidades de empréstimo e acompanhe o mercado financeiro todos os dias. ',
        },
      ] as UseHeadInput,
    },
    props: {
      showMenu: false,
    },
  },
  {
    path: '/xo-aluguel',
    name: 'getOutRent',
    component: () => import('@/views/getOutRent.vue'),
    meta: {
      title: 'Xô, Aluguel! Chegou a sua hora de deixar o aluguel para trás! ',
      meta: [
        {
          name: 'description',
          content:
            'O método best para conquistar seu primeiro imóvel com financiamento imobiliário',
        },
      ] as UseHeadInput,
    },
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
  if (!to.meta || !to.meta.meta) return
  useHead(to.meta.meta)
  if (!to.meta || !to.meta.seoMeta) return
  useSeoMeta(to.meta.seoMeta)
})

export default router
