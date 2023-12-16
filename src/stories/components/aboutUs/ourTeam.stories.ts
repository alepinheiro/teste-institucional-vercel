import OurTeam from '@/components/aboutUs/ourTeam.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/AboutUs/OurTeam',
  component: OurTeam,
  tags: ['autodocs'],
} satisfies Meta<typeof OurTeam>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
