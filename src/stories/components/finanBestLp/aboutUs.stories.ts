import AboutUs from '@/components/finanBestLp/aboutUs.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import type { ComponentProps } from 'vue-component-type-helpers'

type CustomProps = ComponentProps<typeof AboutUs> & {
  bgCard: { bgColor: 'PRIMARY' | 'SECONDARY' | 'BGDARKCOLOR' }
  bgContainer: { bgColor: 'PRIMARY' | 'SECONDARY' | 'BGDARKCOLOR' }
}

const meta = {
  title: 'Components/FinanBestLp/AboutUs',
  component: AboutUs,
  tags: ['autodocs'],
  argTypes: {
    bgContainer: {
      description: 'Define a cor de fundo da seção',
      control: 'select',
      options: ['PRIMARY', 'SECONDARY', 'BGDARKCOLOR'],
    },
    bgCard: {
      description: 'Define a cor de fundo dos cards',
      control: 'select',
      options: ['PRIMARY', 'SECONDARY', 'BGDARKCOLOR'],
    },
  },
  args: {
    bgContainer: { bgColor: 'BGDARKCOLOR' },
    bgCard: { bgColor: 'BGDARKCOLOR' },
  },
  render: (args) => ({
    components: { AboutUs },
    setup() {
      return {
        cards: { bgColor: args.bgCard },
        container: { bgColor: args.bgContainer },
      }
    },
    template: '<AboutUs :cards="cards" :container="container" />',
  }),
} satisfies Meta<CustomProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cards: meta.args.bgCard,
    container: meta.args.bgContainer,
  },
  decorators: [vueRouter()],
}
