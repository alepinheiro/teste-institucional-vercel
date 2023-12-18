import OurMission from '@/components/aboutUs/ourMission.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/AboutUs/OurMission',
  component: OurMission,
  tags: ['autodocs'],
} satisfies Meta<typeof OurMission>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
