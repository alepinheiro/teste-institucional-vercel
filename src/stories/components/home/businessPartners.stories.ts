import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import BusinessPartners from '@/components/homePage/businessPartners.component.vue'

const meta = {
  title: 'Components/Home/BusinessPartners',
  component: BusinessPartners,
  tags: ['autodocs'],
  args: {
    title: 'Storybook',
    innerText: 'Lorem Ipsum',

  },
  render: (args) => ({
    components: { BusinessPartners },
    setup() {
      return { args };
    },
    template: '<BusinessPartners :="args" class="py-10 md:py-24 lg:py-24 xl:py-24 px-5" />'
  })
} satisfies Meta<typeof BusinessPartners>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Storybook',
    innerText: 'Lorem Ipsum',

  },
  decorators: [vueRouter()],
}
