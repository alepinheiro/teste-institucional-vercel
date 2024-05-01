import StepsSection from '@/components/finanBextLp/stepsSection.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/finanBextLp/StepsSection',
  component: StepsSection,
  tags: ['autodocs'],
} satisfies Meta<typeof StepsSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
