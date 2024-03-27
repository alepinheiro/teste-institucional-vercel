import ComparisonTable from '@/components/mcf/comparisonTable.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/MCF/ComparisonTable',
  component: ComparisonTable,
  tags: ['autodocs'],
} satisfies Meta<typeof ComparisonTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
