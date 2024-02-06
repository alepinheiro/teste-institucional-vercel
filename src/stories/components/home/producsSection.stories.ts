import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import Products from '../../../components/homePage/productsSection.component.vue'

const meta = {
  title: 'Components/Home/Products',
  component: Products,
  tags: ['autodocs'],
  render: (args) => ({
    components: { Products },
    setup() {
      return { args };
    },
    template: '<Products class="bg-zinc-100 py-10" />'
  })
} satisfies Meta<typeof Products>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
