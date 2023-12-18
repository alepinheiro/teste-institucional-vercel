import BestEditorial from '@/components/aboutUs/bestEditorial.component.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

const meta = {
  title: 'Components/AboutUs/BestEditorial',
  component: BestEditorial,
  tags: ['autodocs'],
} satisfies Meta<typeof BestEditorial>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
