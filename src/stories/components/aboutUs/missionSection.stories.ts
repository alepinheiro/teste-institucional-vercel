import MissionSection from '@/components/aboutUs/missionSection.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/AboutUs/MissionSection',
  component: MissionSection,
  tags: ['autodocs'],
} satisfies Meta<typeof MissionSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
