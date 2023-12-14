<template>
  <section>
    <div class="flex flex-col gap-8 md:mx-auto md:max-w-[663px] lg:max-w-5xl lg:mx-auto">
      <h2 class="text-xl md:text-4xl lg:text-4xl text-primary font-bold px-5 text-center lg:w-2/3 lg:mx-auto lg:px-0">
        Não queremos apenas clientes, trabalhamos duro para termos fãs
      </h2>

      <div
        class="md:flex lg:flex md:flex-row lg:flex-row md:gap-2 lg:gap-2 md:items-center lg:items-center w-full lg:w-fit md:max-w-[633px] lg:max-w-5xl md:mx-auto lg:mx-auto"
      >
        <div class="bestExperiencePrev pb-10">
          <i class="fa-solid fa-chevron-left"></i>
        </div>

        <component
          :is="'swiper-container'"
          v-bind="sliderOptions"
          class="w-full md:max-w-xl lg:max-w-xl"
        >
          <component
            :is="'swiper-slide'"
            v-for="{
              image,
              location,
              name,
              profissional,
              testimonial,
            } of cards"
            :key="image"
            class="flex flex-col justify-between gap-12 rounded-xl overflow-hidden w-full mb-12 h-auto text-center px-5 md:px-10 lg:px-10"
          >
            <div class="h-24 md:h-40">
              <img
                :src="`/images/aboutUs/testimonials/${image}.png`"
                :alt="name"
                class="object-contain h-full mx-auto"
              />
            </div>
            <div class="relative">
              <img
                src="/images/aboutUs/icons/quotes.svg"
                alt=""
                class="absolute inset-0 -z-10 object-cover m-auto h-32 scale-110"
              />
              <p class="text-textPrimary md:text-3xl lg:text-3xl">"{{ testimonial }}"</p>
            </div>
            <div class="flex flex-col">
              <span class="text-primary font-bold md:text-xl lg:text-xl">
                {{ name }}
              </span>
              <span class="text-textSecondary text-sm lg:text-base">
                {{ profissional }} - {{ location }}
              </span>
            </div>
          </component>
        </component>

        <div class="bestExperiencePrev pb-10">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { SwiperOptions } from 'swiper/types'

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TestimonialsSection',
  data() {
    const sliderOptions: SwiperOptions = {
      spaceBetween: 20,
      slidesPerView: 1.2,
      centeredSlides: true,
      autoHeight: false,
      pagination: true,
      loop: true,
      autoplay: {
        delay: 8000,
      },
      breakpoints: {
        767: {
          slidesPerView: 2.5,
        },
        1021: {
          slidesPerView: 1,
          spaceBetween: 0,
          navigation: {
            nextEl: '.bestExperienceNext',
            prevEl: '.bestExperiencePrev',
          },
        },
        1277: {
          slidesPerView: 1,
          navigation: {
            nextEl: '.bestExperienceNext',
            prevEl: '.bestExperiencePrev',
          },
        },
        1919: {
          slidesPerView: 4,
          centeredSlides: false,
        },
      },
    }

    const cards: {
      name: string
      image: string
      testimonial: string
      profissional: string
      location: string
    }[] = [
      {
        name: 'Adriano Monaco',
        profissional: 'Diretor de Operações',
        location: 'Cotia / SP',
        image: 'adrianoMonaco',
        testimonial:
          'O Felipe foi super atencioso, disponível e acompanhou ativamente todas as fases do processo. Passou segurança e conhecimento do produto dando a tranquilidade para avançar na contratação. Excelente profissional.',
      },
      {
        name: 'Marcello Leandro Adriano',
        profissional: '@marcello.leandro',
        location: 'São Paulo / SP',
        image: 'marcelloLeandro',
        testimonial:
          'Parabéns... super merecedores com conteúdos que ajudam muita gente em momentos de decisões de riscos financeiros 👏',
      },
      {
        name: 'Eduardo Francisco de Jesus Simão',
        profissional: 'Analista de Qualidade Pleno',
        location: 'São Paulo / SP',
        image: 'eduardoFrancisco',
        testimonial:
          'Só tenho a agradecer toda ajuda que a SejaBest e principalmente o Felipe me deram durante todo o processo de financiamento!',
      },
      {
        name: 'Elias Pereira de Sousa Neto',
        profissional: 'Coordenador de Contas Trilha',
        location: 'Cotia / SP',
        image: 'eliasPereira',
        testimonial:
          'Excelente atendimento, Gesiel é ágil nos retornos e deu todo suporte no processo tirando todas dúvidas e orientação, o que mais me chamou a atenção foi a sua energia e motivação na solução de cada etapa do processo, fiquei muito feliz com a consultoria SejaBest!!',
      },
      {
        name: 'Moacir da Silva Bento',
        profissional: 'Empresário',
        location: 'São Paulo / SP',
        image: 'moacirSilva',
        testimonial:
          'Estou até o exato momento muito feliz por finalizar com o auxílio da SejaBest. Podem confiar no seus trabalhos. Super indico.',
      },
    ]

    return {
      cards,
      sliderOptions,
    }
  },
})
</script>

<style lang="scss" scoped>
::part(bullet) {
  background: #d9d9d9;
  opacity: 100;
}
::part(bullet-active) {
  @apply scale-150 transition-all bg-primary;
}
</style>
