import TheFooter from '@/components/warren/theFooter.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/Warren/Footer',
  component: TheFooter,
  tags: ['autodocs'],
} satisfies Meta<typeof TheFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
