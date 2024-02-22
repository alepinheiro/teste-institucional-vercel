import SimulationForm from '@/components/base/forms/startSimulation.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import type { ComponentProps } from 'vue-component-type-helpers'

type CustomProps = ComponentProps<typeof SimulationForm>

const meta = {
  title: 'Components/Base/Forms/SimulationForm',
  component: SimulationForm,
  tags: ['autodocs'],
  argTypes: {
    showHomeEquity: {
        type: 'boolean',
        defaultValue: false,
        description: 'Show Home Equity',
    }
  },
  args: {
    showHomeEquity: false,
  },
  render: (args) => ({
    components: { SimulationForm },
    setup() {
      return {
        args
      }
    },
    template: '<SimulationForm v-bind="args"  />',
  }),
} satisfies Meta<CustomProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: meta.args,
  decorators: [vueRouter()],
}
