<template>
  <section
    class="flex flex-col gap-8 xl:gap-20 lg:max-w-5xl xl:max-w-7xl mx-auto"
  >
    <div
      class="text-center flex flex-col gap-4 lg:gap-5 xl:gap-5 md:max-w-2xl md:mx-auto"
    >
      <div class="flex flex-col gap-2 md:gap-4 lg:gap-5 xl:gap-5">
        <h2
          class="text-primary text-xl md:text-3xl lg:text-4xl xl:text-4xl font-bold"
        >
          Por que existimos?
        </h2>
        <p class="md:text-xl lg:text-2xl xl:text-2xl text-textPrimary">
          Acreditamos que o acesso ao crédito pode levar as pessoas a sua melhor
          versão.
        </p>
      </div>

      <p class="md:text-xl lg:text-2xl xl:text-2xl">
        <b>E como fazemos isso?</b> <br class="md:hidden lg:hidden xl:hidden" />
        <i>Através dos nossos três pilares:</i>
      </p>
    </div>

    <div
      class="flex flex-col md:flex-row lg:flex-row xl:flex-row rounded-xl overflow-hidden border border-textSecondary md:max-w-2xl md:mx-auto"
    >
      <div class="flex flex-col font-bold md:flex-1 lg:flex-1 xl:flex-1">
        <button
          v-for="({ id, title }, index) in options"
          :key="id"
          :class="[
            activeCard.id === id
              ? 'bg-primary text-white border-primary'
              : 'border-textSecondary text-textSecondary hover:bg-white hover:text-primary',
          ]"
          class="border-b md:last-of-type:border-0 lg:last-of-type:border-0 xl:last-of-type:border-0 p-4 xl:px-10 md:h-full lg:h-full xl:h-full md:text-xl lg:text-2xl xl:text-2xl w-full text-start transition-all"
          @click="changeActiveImage(index)"
        >
          {{ title }}
        </button>
      </div>
      <div
        class="h-64 md:flex-1 lg:flex-1 xl:flex-1 md:h-96 lg:h-96 xl:h-96 relative z-0 overflow-hidden"
      >
        <div ref="activeImage" class="h-full p-5 flex flex-col gap-2">
          <p class="text-white mt-auto text-sm">
            {{ options[activeCard.id].description }}
          </p>

          <div class="flex flex-row justify-between">
            <a
              :href="$options.information.socialMedia.youtube"
              aria-label="Acesse nosso Youtube"
              style="text-decoration: none"
              target="_blank"
            >
              <svg
                class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                />
              </svg>
            </a>
            <a
              :href="$options.information.socialMedia.linkedin"
              style="text-decoration: none"
              aria-label="Acesse nosso LinkedIn"
              target="_blank"
            >
              <svg
                class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </a>
            <a
              :href="$options.information.socialMedia.instagram"
              aria-label="Acesse nosso Instagram"
              style="text-decoration: none"
              target="_blank"
            >
              <svg
                class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
            <a
              :href="$options.information.socialMedia.facebook"
              aria-label="Acesse nosso Facebook"
              style="text-decoration: none"
              target="_blank"
            >
              <svg
                class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                />
              </svg>
            </a>
            <a
              :href="$options.information.socialMedia.telegram"
              aria-label="Acesse nosso Telegram"
              style="text-decoration: none"
              target="_blank"
            >
              <svg
                class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1080 1080"
              >
                <path
                  class="cls-1"
                  d="M540,3.31C241.77,3.31,0,245.08,0,543.31s241.77,540,540,540,540-241.77,540-540S838.23,3.31,540,3.31Zm235.82,354.71c-7.78,83.91-41.46,287.53-58.6,381.52-7.25,39.76-21.52,53.09-35.34,54.41-30.04,2.84-52.84-20.37-81.94-39.94-45.52-30.6-71.24-49.69-115.43-79.55-51.07-34.53-17.96-53.5,11.14-84.52,7.61-8.1,139.96-131.59,142.52-142.82,.32-1.39,.62-6.6-2.41-9.37-3.03-2.75-7.49-1.81-10.71-1.05-4.56,1.05-77.29,50.37-218.16,147.94-20.64,14.54-39.34,21.63-56.09,21.25-18.46-.42-53.99-10.73-80.4-19.52-32.39-10.8-58.14-16.53-55.9-34.87,1.17-9.55,14-19.33,38.48-29.3,150.78-67.41,251.32-111.83,301.63-133.3,143.64-61.3,173.48-71.95,192.94-72.29,4.28-.09,13.85,1.01,20.05,6.15,5.23,4.36,6.67,10.26,7.36,14.4,.69,4.12,1.55,13.53,.87,20.87Z"
                />
              </svg>
            </a>
          </div>

          <div
            class="absolute inset-0 w-full h-1/2 mt-auto bg-gradient-to-t from-black/70 -z-10"
          ></div>

          <img
            :src="activeCard.image"
            alt=""
            class="object-cover h-full w-full absolute inset-0 -z-20"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { gsap } from 'gsap'
import useWindowSize from '@/composables/useWindowSize'

export default defineComponent({
  name: 'MissionSection',
  setup() {
    const activeImage = ref<HTMLDivElement | null>(null)

    return {
      gsap,
      activeImage,
    }
  },
  data() {
    return {
      activeCard: {
        image: '/images/aboutUs/3Pilares/PilaresEducacaoCorMobile.webp',
        id: 'education' as 'education' | 'technology' | 'humanizedExperience',
      },
      options: {
        education: {
          id: 'education' as 'education',
          title: '1. Educação',
          description:
            'Através de conteúdos gratuitos que produzimos para empoderar o cliente na tomada da melhor decisão. Confira clicando abaixo:',
          image: '/images/aboutUs/3Pilares/PilaresEducacaoCorMobile.webp',
        },
        technology: {
          id: 'technology' as 'technology',
          title: '2. Tecnologia',
          description:
            'Onde através da nossa plataforma multibancos , de forma simples e segura, conectamos você com todo o mercado.',
          image: '/images/aboutUs/3Pilares/PilaresTecnologiaCorMobile.webp',
        },
        humanizedExperience: {
          id: 'humanizedExperience' as 'humanizedExperience',
          title: '3. Experiência Humanizada',
          description:
            'Com assessores especializados que vão te acompanhar do inicio ao fim.',
          image: 'images/aboutUs/3Pilares/PilaresExperienciaCorMobile.webp',
        },
      },
    }
  },
  mounted() {
    this.changeActiveImage('education')
  },
  methods: {
    changeActiveImage(id: keyof typeof this.options) {
      const timeline = gsap.timeline()

      const { size } = useWindowSize()

      const direction = size.value === ('xs' || 'sm') ? [0, -100] : [-100, 0]

      if (this.activeImage) {
        timeline.to(this.activeImage, {
          xPercent: direction[0],
          yPercent: direction[1],
          duration: 0.5,
          ease: 'sine',
          onComplete: () => {
            this.activeCard = {
              id: id,
              image: this.options[id].image,
            }
          },
        })
        timeline.to(this.activeImage, {
          xPercent: 0,
          yPercent: 0,
          duration: 0.5,
          ease: 'sine',
        })
      }

      timeline.play()
    },
  },
})
</script>
