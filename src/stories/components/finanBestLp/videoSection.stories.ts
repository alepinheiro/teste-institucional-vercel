import VideoSection from '@/components/finanBextLp/videoSection.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/finanBextLp/VideoSection',
  component: VideoSection,
  tags: ['autodocs'],
} satisfies Meta<typeof VideoSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
