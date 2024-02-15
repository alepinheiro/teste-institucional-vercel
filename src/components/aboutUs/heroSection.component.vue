<template>
  <section>
    <div>
      <img
        src="/images/aboutUs/heroBackground.png"
        alt=""
        class="min-h-[50vh] object-cover"
      />

      <div class="flex flex-col gap-2 text-center -mt-14">
        <h2
          class="bg-primary text-white w-fit mx-auto px-3 py-2 rounded-xl text-lg"
        >
          Temos uma missão <b>grandiosa:</b>
        </h2>
        <h1 class="text-4xl font-darkerGrotesque font-bold text-primary">
          “Transformar o acesso ao crédito para quem busca sua melhor versão”
        </h1>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import TopBar from '@/components/structure/topbar.component.vue'

export default defineComponent({
  name: 'HeroSection',
  props: {
    showMenu: {
      type: Boolean,
      required: false,
      default: true,
    },
    backgroundVideos: {
      type: Object as PropType<{
        desktop: string
        mobile: string
      }>,
      required: true,
    },
  },
  components: { TopBar },
  data() {
    return {}
  },
})
</script>
