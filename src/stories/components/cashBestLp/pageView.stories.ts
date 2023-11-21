import type { Meta, StoryObj } from '@storybook/vue3'

import Page from '@/views/FinanBestLP.vue'

const meta = {
    title: 'View/FinanBestLp',
    component: Page,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
  } satisfies Meta<typeof Page>

  export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
}
