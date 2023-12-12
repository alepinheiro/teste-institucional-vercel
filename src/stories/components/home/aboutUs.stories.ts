import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import AboutUs from '../../../components/homePage/aboutUs.component.vue'

const meta = {
  title: 'Components/Home/AboutUs',
  component: AboutUs,
  tags: ['autodocs'],
  render: (args) => ({
    components: { AboutUs },
    setup() {
      return { args }
    },
    template:
      '<AboutUs class="md:px-5 lg:px-5 bg-[#DEDEDE] md:bg-[#EFEFEF] lg:bg-[#EFEFEF] xl:bg-[#EFEFEF] md:mt-10 lg:mt-12 xl:mt-12 border-t-2 border-primary md:border-none lg:border-none xl:border-none overflow-hidden" />',
  }),
} satisfies Meta<typeof AboutUs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
