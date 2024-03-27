import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

import TopBar from '@/components/structure/topBar/index.component.vue'

const menu = [
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
    link: '/produtos',
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
]

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Components/Structure/TopBar',
  component: TopBar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
  },
  parameters: {
    backgrounds: {
      default: 'Blue',
      values: [{ name: 'Blue', value: '#0400DD' }],
    },
  },
} satisfies Meta<typeof TopBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
