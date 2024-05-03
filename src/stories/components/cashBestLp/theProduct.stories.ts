import Product from '@/components/cashBext/theProduct.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/cashBextLp/Product',
  component: Product,
  tags: ['autodocs'],
} satisfies Meta<typeof Product>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
