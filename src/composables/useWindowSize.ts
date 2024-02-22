import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Função composable que retorna o tamanho da tela atual e o
 * tamanho (xs, sm, md, lg, xl) baseado nas media queries do Tailwind CSS.
 * @returns Um objeto contendo as propriedades `width`, `height` e `size`.
 */
const useWindowSize = () => {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)
  const size = ref('')

  const updateWindowSize = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight

    if (window.matchMedia('(min-width: 640px)').matches) {
      size.value = 'sm'
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      size.value = 'md'
    } else if (window.matchMedia('(min-width: 1024px)').matches) {
      size.value = 'lg'
    } else if (window.matchMedia('(min-width: 1280px)').matches) {
      size.value = 'xl'
    } else {
      size.value = 'xs'
    }

  }

  updateWindowSize()

  onMounted(() => {
    window.addEventListener('resize', updateWindowSize)
    updateWindowSize()

  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowSize)
  })

  return {
    width,
    height,
    size,
  }
}

export default useWindowSize
