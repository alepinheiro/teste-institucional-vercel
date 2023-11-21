import { vueRouter } from 'storybook-vue3-router'
import type { Meta, StoryObj } from '@storybook/vue3'
import inputWithSlider from '@/components/finanBestLp/inputWithSlider.component.vue'

const meta = {
  title: 'Components/FinanBestLp/InputWithSlider',
  component: inputWithSlider,
  tags: ['autodocs'],
  argTypes: {
    minimumValue: {
      control: 'number',
      type: 'number',
      description: 'Valor mínimo do range slider',
    },
    maximumValue: {
      control: 'number',
      type: 'number',
      description: 'Valor máximo do range slider',
    },
    defaultValue: {
      control: 'number',
      type: 'number',
      description: 'Valor inicial do range slider',
    },
    backgroundColor: {
      control: 'color',
      description: 'Cor do fundo do componente',
    },
    title: {
      control: 'text',
      description: 'Texto da label do componente',
    },
  },

  parameters: {
    minimumValue: 1000,
    maximumValue: 100000,
    defaultValue: 5000,
    backgroundColor: '#0400DD',
    title: 'Título',
  },
} satisfies Meta<typeof inputWithSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { inputWithSlider },
    setup() {
      return { args }
    },
    template: '<inputWithSlider v-bind="args" />',
  }),
  args: {
    props: {
      minimumValue: 1000,
      maximumValue: 100000,
      defaultValue: 5000,
      backgroundColor: '#0400DD',
      title: 'Título',
    },
  }, // default value
  /**
   * adding storybook-vue3-router decorator
   * this is the basic setup with no params passed to the decorator
   */
  decorators: [vueRouter()],
}
