import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

import TopBar from '@/components/structure/newTopBar.component.vue'

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
        subMenu: null,
      },
      {
        id: 'produtosDigitais',
        title: 'Produtos Digitais',
        icon: null,
        link: '#',
        target: '_self',
        subMenu: null,
      },
      {
        id: 'sejaUmParceiro',
        title: 'Seja um Parceiro',
        icon: null,
        link: '#',
        target: '_self',
        subMenu: null,
      },
      {
        id: 'portal',
        title: 'Portal',
        icon: null,
        link: '#',
        target: '_self',
        subMenu: null,
      },
      {
        id: 'sobre',
        title: 'Sobre',
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

export const Primary: Story = {
  args: {
    // primary: true,
    // label: 'Button',
  },
  decorators: [
    vueRouter(),
  ]
}
