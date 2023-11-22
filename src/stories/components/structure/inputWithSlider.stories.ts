import { vueRouter } from 'storybook-vue3-router'
import type { Meta, StoryObj } from '@storybook/vue3'
import inputWithSlider from '@/components/base/forms/inputWithSlider.component.vue'

const meta = {
  title: 'Components/Structure/InputWithSlider',
  component: inputWithSlider,
  tags: ['autodocs'],
  argTypes: {
    minimumValue: {
      control: 'number',
      description: 'Valor mínimo do range slider',
    },
    maximumValue: {
      control: 'number',
      description: 'Valor máximo do range slider',
    },
    defaultValue: {
      control: 'number',
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
  args: {
    minimumValue: 1000,
    maximumValue: 100000,
    defaultValue: 5000,
    backgroundColor: '#0400DD',
    title: 'Quanto custa seu sonho?',
  },
  render: (args) => ({
    components: { inputWithSlider },
    setup() {
      return { args }
    },
    template: '<div><inputWithSlider :props="args" /></div>',
  }),
} satisfies Meta<typeof inputWithSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    props: {
      ...meta.args,
    },
  }, // default value

  /**
   * adding storybook-vue3-router decorator
   * this is the basic setup with no params passed to the decorator
   */
  decorators: [vueRouter()],
}
