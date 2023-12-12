import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'
import Mission from '../../../components/homePage/missionSection.component.vue'

const meta = {
  title: 'Components/Home/Mission',
  component: Mission,
  tags: ['autodocs'],
  render: (args) => ({
    components: { Mission },
    setup() {
      return { args }
    },
    template:
      '<Mission class="py-10 px-5" />',
  }),
} satisfies Meta<typeof Mission>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [vueRouter()],
}
