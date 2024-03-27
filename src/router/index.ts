import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/institucional/indexView.vue'),
    name: 'Home',
    meta: {
      title:
        'SejaBest - Crédito imobiliário - Sem filas, sem gerentes, sem complexidade.',
      description:
        'Descubra como maximizar suas chances de aprovação com mais de 20 instituições financeiras parceiras.',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/sobre',
    name: 'AboutUs',
    component: () => import('@/views/institucional/aboutUs.vue'),
    meta: {
      title:
        'Sobre a SejaBest: Transformando o acesso ao crédito para sua melhor versão',
      description:
        'Descubra como a SejaBest está transformando o acesso ao crédito há mais de 10 anos.',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/home-equity',
    alias: [
      '/credito-com-garantia-de-imovel',
      '/como-funciona'
    ],
    name: 'HomeEquity',
    component: () => import('@/views/institucional/cashBest.vue'),
    meta: {
      title: 'CashBest: O Melhor Crédito com Garantia de Imóvel | SejaBest',
      description:
        'Descubra como o CashBest da SejaBest oferece o melhor crédito com garantia de imóvel do mercado',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/emprestimo-com-garantia-de-imovel',
    alias: ['/emprestimo-com-garantia-de-imovel/cashbest'],
    name: 'HomeEquityCopy',
    component: () => import('@/views/institucional/cashBestEmprestimo.vue'),
    meta: {
      title: 'CashBest: O Melhor empréstimo com Garantia de Imóvel | SejaBest',
      description:
      'Descubra como o CashBest da SejaBest oferece o melhor empréstimo com garantia de imóvel do mercado',
    },
    props: {
      showMenu: false,
    },
  },
  {
    path: '/financiamento-imobiliario',
    alias: ['/financiamento-imobiliario/finanBest'],
    name: 'Financing',
    component: () => import('@/views/institucional/finanBest.vue'),
    meta: {
      title: 'FinanBest: Financie Seu Imóvel | Taxas a partir de 1.09% a.m.',
      description:
        'Descubra como financiar seu imóvel com o FinanBest da SejaBest, oferecendo taxas a partir de 1.09% a.m. + IPCA ou 1.49% a.m. fixa.',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('@/views/institucional/faqView.vue'),
    meta: {
      title:
        'Perguntas Frequentes sobre Crédito Imobiliário e Home Equity - SejaBest',
      description:
        'Descubra respostas claras e detalhadas sobre financiamento imobiliário, crédito com garantia de imóvel e o funcionamento da SejaBest. ',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/politica-de-privacidade',
    name: 'PrivacyPolicy',
    component: () => import('@/views/institucional/privacyPolicy.vue'),
    meta: {
      title: 'Política de Privacidade - Proteção de Dados Pessoais - SejaBest',
      description:
        'Conheça nossa política de privacidade, conforme a Lei Geral de Proteção de Dados (LGPD), e saiba como protegemos e utilizamos seus dados pessoais. ',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/termos-de-uso',
    name: 'TermsOfUse',
    component: () => import('@/views/institucional/termsOfUse.vue'),
    meta: {
      title: 'Termos de Uso - SejaBest Fintech de Crédito Imobiliário',
      description:
        'Saiba mais sobre licenças, isenção de responsabilidade, limitações, precisão dos materiais, links externos, modificações e a lei aplicável.        ',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/emprestimo-com-garantia-de-veiculo/BestCar',
    alias: ['/credito-com-garantia-de-veiculo'],
    name: 'BestCarLP',
    component: () => import('@/views/landingPages/BestCar.vue'),
    meta: {
      title:
        'Empréstimo com Garantia de Veículo - BestCar | SejaBest | Crédito Imobiliário',
      description:
        'Obtenha crédito usando seu veículo como garantia com o BestCar da SejaBest Fintech de Crédito.',
    },
    props: {
      showMenu: false,
    },
  },
  {
    path: '/emprestimo-com-garantia-de-veiculo',
    name: 'BestCar',
    component: () => import('@/views/institucional/bestCar.vue'),
    meta: {
      title:
        'BestCar: Empréstimo com Garantia de Veículo | SejaBest | Crédito Imobiliário',
      description:
        'Obtenha crédito usando seu veículo como garantia com o BestCar da SejaBest Fintech de Crédito.',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/financiamento-veicular',
    alias: ['/financiamento-veicular/BestCarFinan'],
    name: 'BestCarFinan',
    component: () => import('@/views/institucional/bestCarFinan.vue'),
    meta: {
      title:
        'FinanBest: Financiamento Veicular | SejaBest | Crédito Imobiliário',
      description:
        'Conheça os benefícios, o processo passo a passo e por que escolher o FinanBest.',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/best-news',
    name: 'BestNews',
    component: () => import('@/views/landingPages/bestNews.vue'),
    meta: {
      title:
        'Portal BestNews - Acompanhe as Últimas Notícias Financeiras | SejaBest',
      description:
        'Fique por dentro de tudo sobre financiamento, modalidades de empréstimo e atualizações do mercado financeiro diariamente com o portal BestNews da SejaBest.',
    },
    props: {
      showMenu: false,
    },
  },
  {
    path: '/xo-aluguel',
    name: 'getOutRent',
    component: () => import('@/views/landingPages/getOutRent/indexView.vue'),
    meta: {
      title: 'Xô, Aluguel! O Método Best para Conquistar seu Primeiro Imóvel',
      description:
        'Não deixe o aluguel ser um obstáculo para alcançar seu sonho da casa própria! ',
    },
    props: {
      showMenu: false,
    },
  },
  {
    path: '/xo-aluguel-adquirido',
    name: 'successGuideGetOutOfRent',
    component: () => import('@/views/landingPages/getOutRent/successView.vue'),
    meta: {
      title: 'Agora você é BEST! Compra realizada com sucesso',
      description:
        'Parabéns pela aquisição do guia "Xô, Aluguel: O Método Best para conquistar seu primeiro imóvel com Financiamento Imobiliário". ',
    },
    props: {
      showMenu: false,
    },
  },
  {
    path: '/best-broker',
    name: 'bestBroker',
    component: () => import('@/views/landingPages/bestBroker/indexView.vue'),
    props: {
      showMenu: false,
    },
    meta: {
      title:
        'BestBroker: O curso definitivo para se tornar um expert em Crédito Imobiliário',
      description:
        'Pare de perder vendas e aumente seus lucros mensais com o curso BestBroker',
    },
  },
  {
    path: '/best-broker-adquirido',
    name: 'bestBrokerSuccess',
    component: () => import('@/views/landingPages/bestBroker/successView.vue'),
    meta: {
      title:
        'BestBroker: O curso definitivo para se tornar um expert em Crédito Imobiliário',
      description:
        'Pare de perder vendas e aumente seus lucros mensais com o curso BestBroker',
    },
    props: {
      showMenu: false,
    },
  },
  {
    path: '/besthub',
    name: 'besthub',
    component: () => import('@/views/landingPages/bestHub.vue'),
    meta: {
      title: 'BestHub: O Melhor Hub de Crédito do Mercado',
      description:
        'Quer potencializar seus negócios e fintechizar sua marca? O BestHub é a solução que você procura! ',
    },
    props: {
      showMenu: false,
    },
  },
  {
    path: '/warren',
    name: 'Warren',
    meta: {
      title:
        'Warren + SejaBest: Os Melhores Produtos de Crédito ao seu Alcance',
      description:
        'Não perca mais tempo buscando crédito! Agora, os melhores produtos de crédito da SejaBest estão disponíveis na Warren',
    },
    component: () => import('@/views/partners/warren/indexView.vue'),
    props: {
      showMenu: false,
    },
  },
  {
    path: '/minha-casa-financiada',
    name: 'MinhaCasaFinanciada',
    meta: {
      title:
        'Minha Casa Financiada + SejaBest: Os Melhores Produtos de Crédito ao seu Alcance',
      description:
        'Não perca mais tempo buscando crédito! Agora, os melhores produtos de crédito da SejaBest estão disponíveis na Minha Casa Financiada',
    },
    component: () => import('@/views/partners/mcf/indexView.vue'),
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

router.beforeEach((to, from) => {
  if (!to.meta) return
  useHead({
    link: [
      {
        rel: 'canonical',
        href: window.location.origin + window.location.pathname,
      },
    ],
    title: to.meta.title,
    meta: [
      {
        name: 'description',
        content: to.meta.description,
      },
    ],
  })
  useSeoMeta({
    title: to.meta.title,
    description: to.meta.description,
    ogDescription: to.meta.description,
    ogTitle: to.meta.title,
    ogImage: window.location.origin + '/images/Home/heroBackground-sm.png ',
    ogUrl: window.location.origin + window.location.pathname,
    ogType: 'website',
  })
})

export default router
