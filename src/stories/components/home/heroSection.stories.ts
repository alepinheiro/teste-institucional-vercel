import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import HeroSection from '@/components/homePage/heroSection.component.vue'

const meta = {
  title: 'Components/Home/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  render: (args) => ({
    components: { HeroSection },
    setup() {
      return { args };
    },
    template: '<HeroSection />'
  })
} satisfies Meta<typeof HeroSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
