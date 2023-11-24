import type { Meta, StoryObj } from '@storybook/vue3'
import type { ComponentProps } from 'vue-component-type-helpers'
import BusinessPartners from '@/components/base/businessPartners.component.vue'

type CustomProps = ComponentProps<typeof BusinessPartners> & {
  backgroundColor: string
  title: string
  description: string
}

const meta = {
  title: 'Components/Base/BusinessPartners',
  component: BusinessPartners,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Cor do fundo do componente',
    },
    title: {
      control: 'text',
      description: 'Título do componente',
    },
    description: {
      control: 'text',
      description: 'Descrição do componente',
    },
  },
  args: {
    backgroundColor: '#FFF',
    title: 'Quanto custa seu sonho?',
    description:
      'Bacon ipsum dolor amet venison meatball cupim, doner andouille corned beef chislic. Meatloaf rump beef ribs bresaola andouille biltong brisket strip steak sirloin frankfurter. Shankle rump spare ribs tongue ribeye meatloaf bresaola flank pork pig. Alcatra turducken boudin, ham tongue rump ham hock bresaola chislic frankfurter cupim salami venison.',
  },
  render: (args) => ({
    components: { BusinessPartners },
    setup() {
      return { args }
    },
    template: '<BusinessPartners :props="args" />',
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
}
