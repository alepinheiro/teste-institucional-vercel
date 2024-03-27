import Contact from '@/components/mcf/contactSection.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/MCF/Contact',
  component: Contact,
  tags: ['autodocs'],
} satisfies Meta<typeof Contact>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
