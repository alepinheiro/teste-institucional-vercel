import type { Meta, StoryObj } from '@storybook/vue3'
import type { ComponentProps } from 'vue-component-type-helpers'
import inputWithSlider from '@/components/base/forms/inputWithSlider.component.vue'
import { within, userEvent } from '@storybook/testing-library'

type CustomProps = ComponentProps<typeof inputWithSlider> & {
  minimumValue: number
  maximumValue: number
  defaultValue: number
  backgroundColor: string
  title: string
}

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
    onSubmit: { action: 'onSubmit' }
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
    template: '<inputWithSlider :props="args" />',
  }),
} satisfies Meta<CustomProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    props: {
      ...meta.args,
    },
  },
  play: async ({ canvasElement }) => {
    const { getByTestId, getByRole } = within(canvasElement)
    await userEvent.type(getByTestId('creditAmountWithSlider'), '250000.50')
    await userEvent.click(getByRole('button'))
    //verificar como testar o emit do evento
  },
}
