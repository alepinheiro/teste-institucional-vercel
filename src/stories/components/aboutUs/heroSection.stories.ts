import HeroSection from '@/components/aboutUs/heroSection.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/AboutUs/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
} satisfies Meta<typeof HeroSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
  args: {
    backgroundVideos: {
      desktop: 'https://example.com/hero-video-desktop.mp4',
      mobile: 'https://example.com/hero-video-mobile.mp4',
    },
  },
}
