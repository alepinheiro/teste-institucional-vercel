import Solutions from '@/components/cashBext/solutionsSection.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/cashBextLp/Solutions',
  component: Solutions,
  tags: ['autodocs'],
} satisfies Meta<typeof Solutions>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
