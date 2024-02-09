import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import SloganSection from '@/components/homePage/sloganSection.component.vue'

const meta = {
  title: 'Components/Home/SloganSection',
  component: SloganSection,
  tags: ['autodocs'],
  render: (args) => ({
    components: { SloganSection },
    setup() {
      return { args };
    },
    template: '<SloganSection class="py-10 md:py-24 lg:py-24 xl:py-24 px-5" />'
  })
} satisfies Meta<typeof SloganSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
