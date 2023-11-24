import type { Meta, StoryObj } from '@storybook/vue3'
import type { ComponentProps } from 'vue-component-type-helpers'
import ComparisonTable from '@/components/base/comparisonTable.component.vue'

type CustomProps = ComponentProps<typeof ComparisonTable> & {
  componentBackgroundColor: string
  showBackGroundImage: boolean
  tableBackgroundColor: string
  titleColor: 'PRIMARY' | 'TEXTPRIMARY'
}

const meta = {
  title: 'Components/Base/ComparisonTable',
  component: ComparisonTable,
  tags: ['autodocs'],
  argTypes: {
    componentBackgroundColor: {
      control: 'color',
      description: 'Cor do fundo do componente',
    },
    tableBackgroundColor: {
      control: 'color',
      description: 'Cor do fundo do título',
    },
    titleColor: {
      control: 'select',
      description: 'Título do componente',
      options: ['PRIMARY', 'TEXTPRIMARY'],
    },
    showBackGroundImage: {
      control: 'boolean',
      description: 'Descrição do componente',
    },
  },
  args: {
    componentBackgroundColor: '#FFF',
    tableBackgroundColor: '#FFF',
    titleColor: 'PRIMARY',
    showBackGroundImage: false,
  },
  render: (args) => ({
    components: { ComparisonTable },
    setup() {
      return { args }
    },
    template: '<ComparisonTable :props="args.props" />',
  }),
} satisfies Meta<CustomProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    props: {
      component: {
        backgroundColor: meta.args.componentBackgroundColor,
        showBackGroundImage: meta.args.showBackGroundImage,
      },
      table: {
        backgroundColor: meta.args.tableBackgroundColor,
        titleColor: meta.args.titleColor,
      },
    },
  },
}
