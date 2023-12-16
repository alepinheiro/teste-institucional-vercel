import AboutNumbers from '@/components/aboutUs/aboutNumbers.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/AboutUs/AboutNumbers',
  component: AboutNumbers,
  tags: ['autodocs'],
} satisfies Meta<typeof AboutNumbers>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
