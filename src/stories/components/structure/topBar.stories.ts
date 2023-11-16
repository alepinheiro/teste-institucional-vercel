import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

import TopBar from '@/components/structure/topBar/index.component.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Components/Structure/TopBar',
  component: TopBar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // size: { control: 'select', options: ['small', 'medium', 'large'] },
    // backgroundColor: { control: 'color' },
    // onClick: { action: 'clicked' },
  },
  args: {
    logo: {
      source: 'http://unsplash.it/200/56?random&gravity=center',
      alt: 'Logo Seja Best',
      link: '/',
    },
    menuItems: [
      {
        id: 'inicio',
        title: 'Início',
        icon: null,
        link: '/',
        target: '_self',
        subMenu: null,
      },
      {
        id: 'produtos',
        title: 'Produtos',
        icon: null,
        link: '#',
        target: '_self',
        subMenu: [
          {
            id: 'produtoHomeEquity',
            title: 'Home Equity',
            icon: null,
            link: '#',
            target: '_self',
            subMenu: null,
          },
          {
            id: 'produtoFinanciamento',
            title: 'Financiamento',
            icon: null,
            link: '#',
            target: '_self',
            subMenu: null,
          },
          {
            id: 'produtoFinanciamentoDeVeiculo',
            title: 'Financiamento de Veículo',
            icon: null,
            link: '#',
            target: '_self',
            subMenu: null,
          },
          {
            id: 'produtoEmprestimoComGarantiaDeVeiculo',
            title: 'Empréstimo com garantia de veículo',
            icon: null,
            link: '#',
            target: '_self',
            subMenu: null,
          },
        ],
      },
      {
        id: 'solucoesDigitais',
        title: 'Soluções Digitais',
        icon: null,
        link: '#',
        target: '_self',
        subMenu: null,
      },
      {
        id: 'sobre',
        title: 'Sobre Nós',
        icon: null,
        link: '#',
        target: '_self',
        subMenu: null,
      },
      {
        id: 'sejaUmParceiro',
        title: 'Seja um parceiro',
        icon: null,
        link: '#',
        target: '_self',
        subMenu: null,
      },
      {
        id: 'portal',
        title: 'Portal Best',
        icon: null,
        link: '#',
        target: '_self',
        subMenu: null,
      },

    ],
  }, // default value
} satisfies Meta<typeof TopBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // primary: true,
    // label: 'Button',
  },
  decorators: [
    vueRouter(),
  ]
}
