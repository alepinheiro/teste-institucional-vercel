<template>
  <section
    class=" w-full lg:w-fit xl:w-fit flex flex-col-reverse lg:flex-row xl:flex-row items-center max-w-5xl mx-auto py-10 px-5 gap-20 border-b border-primary"
  >
    <div class="w-auto text-center flex flex-col gap-8">
      <div
        class="relative after:absolute after:content-[' '] after:bg-primary after:-inset-2 w-fit after:-z-10 z-0 mx-auto after:shadow-md after:-rotate-2"
      >
        <span
          class="text-white text-3xl lg:text-2xl md:text-xl sm:text-xl font-semibold"
        >
          Incluso no megapacote:
        </span>
      </div>
      <ul class="flex flex-col w-full gap-5 text-white">
        <li
          v-for="{ description, icon } of itemsIncluded"
          :key="icon"
          class="flex flex-row gap-2 w-fit items-center bg-white/5 hover:bg-white/20 hover:border-white border border-transparent cursor-default p-2 rounded-md mx-auto"
        >
          <i :class="icon"></i>
          <p class="flex-grow lg:whitespace-nowrap xl:whitespace-nowrap">{{ description }}</p>
        </li>
      </ul>
    </div>

    <img src="/images/getOutRent/xoAluguelBox.png" class="w-full h-auto max-w-xs mx-auto" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PopUpVideo from '@/components/base/popUpVideo.component.vue'

export default defineComponent({
  name: 'BannerPackage',
  component: {
    PopUpVideo,
  },
  data() {
    return {
      showVideo: false,
      itemsIncluded: [
        {
          icon: 'fa-solid fa-file-excel',
          description: 'Planilha de Simulação e Amortização',
        },
        {
          icon: 'fa-solid fa-square-check',
          description: 'Checklist de Documentos',
        },
        {
          icon: 'fa-solid fa-paper-plane',
          description: 'Acesso vitalício a conteúdos exclusivos',
        },
        {
          icon: 'fa-solid fa-book-bookmark',
          description: 'O Guia Completo Para Sair do Aluguel',
        },
        {
          icon: 'fa-solid fa-video',
          description: 'Aula completa - Passo a Passo para Sair do Aluguel',
        },
      ],
    }
  },
  methods: {
    openVideo() {
      console.log('open')
      this.$emit('OpenPopUp', true)
    },
  },
})
</script>
