import type { Meta, StoryObj } from '@storybook/vue3'
import Component from '@/components/base/videoButton.component.vue'
/**
 *
 * ## Documentação do Componente: VideoButton
 *
 * Este componente representa um botão que aciona a exibição de um player de vídeo em overlay.
 *
 *
 * ### Propriedades
 * - **videoId:** (obrigatório) O identificador único do vídeo a ser reproduzido.
 *
 * ### Eventos
 * - **closeOverlay:** Evento emitido quando o player de vídeo em overlay é fechado.
 *
 *  ### Exemplo de Uso
 *
 *  ```html
 * <template>
 *  <VideoButton videoId="SEU_ID_DE_VIDEO_AQUI" />
 * </template>
 * ```
 */

const meta = {
  title: 'Components/Base/Video Button',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    videoId: {
      name: 'YouTube Video ID',
      description: 'ID do vídeo do YouTube que será exibido',
    },
  },
  args: {
    videoId: 'iD_d3jTJxxU',
  },
  render: (args) => ({
    components: { Component },
    setup() {
      return { args }
    },
    template:
      '<div style="background-color: gray;" class="relative flex justify-center items-center h-screen">' +
      '<Component :="args" />' +
      '</div>',
  }),
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...meta.args,
  },
}
