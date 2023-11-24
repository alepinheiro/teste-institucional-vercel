import Subscribe from '@/components/base/subscribeSection.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import type { ComponentProps } from 'vue-component-type-helpers'

type CustomProps = ComponentProps<typeof Subscribe> & {
  bgContainer: { bgColor: 'PRIMARY' | 'SECONDARY' | 'BGDARKCOLOR' }
  showRealtyValue: boolean
}

const meta = {
  title: 'Components/FinanBestLp/Subscribe',
  component: Subscribe,
  tags: ['autodocs'],
  argTypes: {
    bgContainer: {
      description: 'Define a cor de fundo da seção',
      control: 'select',
      options: ['PRIMARY', 'SECONDARY', 'BGDARKCOLOR'],
      defaultValue: 'BGDARKCOLOR',
    },
    showRealtyValue: {
      description: 'Define a cor de fundo dos cards',
      control: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    bgContainer: { bgColor: 'BGDARKCOLOR' },
    showRealtyValue: false,
  },
  render: (args) => ({
    components: { Subscribe },
    setup() {
      return {
        form: { showRealtyValue: args.showRealtyValue },
        container: { bgColor: args.bgContainer },
      }
    },
    template: '<Subscribe :form="form" :component="container" />',
  }),
} satisfies Meta<CustomProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    component: meta.args.bgContainer,
    form: { showRealtyValue: meta.args.showRealtyValue },
  },
  decorators: [vueRouter()],
}
