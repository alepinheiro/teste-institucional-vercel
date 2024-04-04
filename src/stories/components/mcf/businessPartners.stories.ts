import BusinessPartners from '@/components/mcf/businessPartners.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/MCF/BusinessPartners',
  component: BusinessPartners,
  tags: ['autodocs'],
} satisfies Meta<typeof BusinessPartners>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}