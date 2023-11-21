import { vueRouter } from 'storybook-vue3-router';
import type { Meta, StoryObj } from '@storybook/vue3'
import HeroSection from '@/components/finanBestLp/heroSection.component.vue'

const meta = {
    title: 'Components/FinanBestLp/HeroSection',
    component: HeroSection,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    // argTypes: {
    //   activeItem: {
    //     control: 'select',
    //     options: menu.map((item) => item.id)
    //   },
      // backgroundColor: { control: 'color' },
      // onClick: { action: 'clicked' },
    // },
    // args: {
    //   logo: {
    //     source: '/images/logoBest/logoSejaBestWhite.png',
    //     alt: 'Logo Seja Best',
    //     link: '/',
    //   },
    //   menuItems: menu,
    //   activeItem: 'inicio',
    // }, // default value
    // parameters: {
    //   backgrounds: {
    //     default: 'Blue',
    //     values: [{ name: 'Blue', value: '#0400DD' }],
    //   },
    // },
  } satisfies Meta<typeof HeroSection>

  export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  /**
   * adding storybook-vue3-router decorator
   * this is the basic setup with no params passed to the decorator
   */
  decorators: [vueRouter()],
}
