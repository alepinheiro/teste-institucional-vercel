import Products from '@/components/mcf/productsSection.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/MCF/Products',
  component: Products,
  tags: ['autodocs'],
} satisfies Meta<typeof Products>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
