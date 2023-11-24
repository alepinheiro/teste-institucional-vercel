import Product from '@/components/cashBest/theProduct.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/CashBestLp/Product',
  component: Product,
  tags: ['autodocs'],
} satisfies Meta<typeof Product>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
