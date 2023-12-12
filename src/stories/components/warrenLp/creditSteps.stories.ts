import CreditSteps from '@/components/warren/creditSteps.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/Warren/CreditSteps',
  component: CreditSteps,
  tags: ['autodocs'],
} satisfies Meta<typeof CreditSteps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
