import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/institucional/indexView.vue'),
    name: 'Home',
    meta: {
      title:
        'Bext - Crédito imobiliário - Sem filas, sem gerentes, sem complexidade.',
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
        'Sobre a Bext: Transformando o acesso ao crédito para sua melhor versão',
      description:
        'Descubra como a Bext está transformando o acesso ao crédito há mais de 10 anos.',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/home-equity',
    alias: ['/credito-com-garantia-de-imovel', '/como-funciona'],
    name: 'HomeEquity',
    component: () => import('@/views/institucional/cashBext.vue'),
    meta: {
      title: 'cashBext: O Melhor Crédito com Garantia de Imóvel | Bext',
      description:
        'Descubra como o cashBext da Bext oferece o melhor crédito com garantia de imóvel do mercado',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/emprestimo-com-garantia-de-imovel',
    alias: ['/emprestimo-com-garantia-de-imovel/cashBext'],
    name: 'HomeEquityCopy',
    component: () => import('@/views/institucional/cashBextEmprestimo.vue'),
    meta: {
      title: 'cashBext: O Melhor empréstimo com Garantia de Imóvel | Bext',
      description:
        'Descubra como o cashBext da Bext oferece o melhor empréstimo com garantia de imóvel do mercado',
    },
    props: {
      showMenu: false,
    },
  },
  {
    path: '/financiamento-imobiliario',
    alias: ['/financiamento-imobiliario/finanBext'],
    name: 'Financing',
    component: () => import('@/views/institucional/finanBext.vue'),
    meta: {
      title: 'FinanBext: Financie Seu Imóvel | Taxas a partir de 1.09% a.m.',
      description:
        'Descubra como financiar seu imóvel com o FinanBext da Bext, oferecendo taxas a partir de 1.09% a.m. + IPCA ou 1.49% a.m. fixa.',
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
        'Perguntas Frequentes sobre Crédito Imobiliário e Home Equity - Bext',
      description:
        'Descubra respostas claras e detalhadas sobre financiamento imobiliário, crédito com garantia de imóvel e o funcionamento da Bext. ',
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
      title: 'Política de Privacidade - Proteção de Dados Pessoais - Bext',
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
      title: 'Termos de Uso - Bext Fintech de Crédito Imobiliário',
      description:
        'Saiba mais sobre licenças, isenção de responsabilidade, limitações, precisão dos materiais, links externos, modificações e a lei aplicável.        ',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/emprestimo-com-garantia-de-veiculo/BextCar',
    alias: ['/credito-com-garantia-de-veiculo'],
    name: 'BextCarLP',
    component: () => import('@/views/landingPages/BextCar.vue'),
    meta: {
      title:
        'Empréstimo com Garantia de Veículo - BextCar | Bext | Crédito Imobiliário',
      description:
        'Obtenha crédito usando seu veículo como garantia com o BextCar da Bext Fintech de Crédito.',
    },
    props: {
      showMenu: false,
    },
  },
  {
    path: '/emprestimo-com-garantia-de-veiculo',
    name: 'BextCar',
    component: () => import('@/views/institucional/bextCar.vue'),
    meta: {
      title:
        'BextCar: Empréstimo com Garantia de Veículo | Bext | Crédito Imobiliário',
      description:
        'Obtenha crédito usando seu veículo como garantia com o BextCar da Bext Fintech de Crédito.',
    },
    props: {
      showMenu: true,
    },
  },
  {
    path: '/financiamento-veicular',
    alias: ['/financiamento-veicular/BextCarFinan'],
    name: 'BextCarFinan',
    component: () => import('@/views/institucional/bextCarFinan.vue'),
    meta: {
      title:
        'FinanBext: Financiamento Veicular | Bext | Crédito Imobiliário',
      description:
        'Conheça os benefícios, o processo passo a passo e por que escolher o FinanBext.',
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
        'Portal BestNews - Acompanhe as Últimas Notícias Financeiras | Bext',
      description:
        'Fique por dentro de tudo sobre financiamento, modalidades de empréstimo e atualizações do mercado financeiro diariamente com o portal BestNews da Bext.',
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
        'Warren + Bext: Os Melhores Produtos de Crédito ao seu Alcance',
      description:
        'Não perca mais tempo buscando crédito! Agora, os melhores produtos de crédito da Bext estão disponíveis na Warren',
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
        'Minha Casa Financiada + Bext: Os Melhores Produtos de Crédito ao seu Alcance',
      description:
        'Não perca mais tempo buscando crédito! Agora, os melhores produtos de crédito da Bext estão disponíveis na Minha Casa Financiada',
    },
    component: () => import('@/views/partners/mcf/indexView.vue'),
    props: {
      showMenu: false,
    },
  },
]
