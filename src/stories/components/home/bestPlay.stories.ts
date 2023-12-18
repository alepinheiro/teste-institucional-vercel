import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import BestPlay from '../../../components/homePage/bestPlay.component.vue'

const meta = {
  title: 'Components/Home/BestPlay',
  component: BestPlay,
  tags: ['autodocs'],
  render: (args) => ({
    components: { BestPlay },
    setup() {
      return { args }
    },
    template:
      '<BestPlay class="pt-10 md:pt-0 lg:pt-0 md:bg-[#181818] lg:bg-[#181818] xl:bg-[#181818]" />',
  }),
} satisfies Meta<typeof BestPlay>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
