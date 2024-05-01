import Page from '@/views/institucional/finanBext.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router';

const meta = {
  title: 'Views/finanBextLP',
  component: Page,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  /**
   * adding storybook-vue3-router decorator
   * this is the basic setup with no params passed to the decorator
   */
  decorators: [vueRouter()],
  args: {
    showMenu: false,
  }
}
