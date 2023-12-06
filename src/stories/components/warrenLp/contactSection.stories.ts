import Contact from '@/components/warren/contactSection.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/Warren/Contact',
  component: Contact,
  tags: ['autodocs'],
} satisfies Meta<typeof Contact>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
