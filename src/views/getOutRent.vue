<template>
  <div class="flex flex-col w-full bg-bgDarkColor2 h-fit overflow-hidden">
    <div
      class="fixed bottom-0 inset-x-0 bg-red-300 text-red-500 font-bold w-full z-50"
    >
      <div class="hidden sm:block">SM</div>
      <div class="hidden md:block">MD</div>
      <div class="hidden lg:block">LG</div>
      <div class="hidden xl:block">XL</div>
    </div>
    <!-- <BannerXoAluguel @open-pop-up="showVideo = $event" />

    <BannerSteps />
    <BannerCommentsCarousel />
    <BannerPrice />
    <FooterSection />
    <PopUpVideo
      v-if="showVideo"
      :video-url="videoUrl"
      :video-style="videoStyle"
      @close-pop-up="showVideo = false" /> -->

    <section class="w-full text-white">
      <div
        class="flex flex-row sm:flex-col-reverse md:flex-col-reverse max-w-5xl md:max-w-2xl mx-auto h-screen md:h-auto sm:h-auto lg:relative xl:relative"
      >
        <div
          class="flex-1 flex flex-col gap-10 my-auto px-5 sm:text-center md:text-center"
        >
          <div
            class="bg-black/50 md:bg-transparent xl:hidden lg:hidden rounded sm:flex flex-row items-center gap-4 py-4 px-6 w-fit sm:mx-auto md:mx-auto mr-auto"
          >
            <button
              class="relative w-8 h-8 bg-zinc-200 rounded-full mx-auto flex justify-center items-center z-0"
              @click="false"
            >
              <div
                class="absolute bg-zinc-200 rounded-full inset-0 animate-ping z-0"
              ></div>
              <div class="flex m-auto">
                <i class="fa-solid fa-play z-10 text-black"></i>
              </div>
            </button>
            <span class="font-bold font-Public-Sans text-sm md:hidden">
              Toque aqui e assista agora uma palavra do CEO
            </span>
          </div>
          <div class="flex flex-col gap-10">
            <h1 class="text-5xl">
              Chegou a sua hora de deixar o aluguel para trás com
              <b class="underlineGradient"> Financiamento Imobiliário </b>
            </h1>
            <p class="text-xl leading-relaxed">
              Não deixe que o aluguel continue sendo um obstáculo entre você e a
              realização do sonho de ter sua própria casa. Com o guia
              <b>
                "Xô, Aluguel: O Método Best para conquistar seu primeiro imóvel
                com Financiamento Imobiliário",
              </b>
              você terá o conhecimento necessário para dar o primeiro passo em
              direção à conquista desse objetivo.
            </p>
          </div>

          <div
            class="flex flex-col gap-5 items-start bg-gradient-to-r sm:bg-gradient-to-b md:bg-gradient-to-b from-primary to-transparent rounded-xl p-5 text-xl"
          >
            <span class="font-bold w-5/6 sm:w-full md:w-full">
              Não espere mais! Invista em seu futuro e conquiste a tão sonhada
              independência imobiliária.
            </span>
            <button
              class="bg-complementaryColor1 px-8 py-5 rounded-md sm:mx-auto md:mx-auto transition-all hover:bg-[#0063f2] hover:scale-105 hover:shadow-md"
            >
              Quero sair do aluguel
            </button>
          </div>
        </div>

        <div class="flex-1 h-full flex w-full ">
          <img
            src="/images/getOutRent/heroBg.png"
            alt="Xô, Aluguel! o método best para conquistar seu primeiro imóvel com financiamento imobiliário "
            class=" object-cover h-full w-fit mx-auto sm:-mb-32 md:-mb-40 xl:absolute lg:absolute lg:-right-1/3"
          />
          <div class="absolute right-[10%] bottom-1/4 hidden lg:block xl:block">
            <button
              class="relative w-8 h-8 bg-zinc-200 rounded-full mx-auto flex justify-center items-center z-0"
              @click="false"
            >
              <div
                class="absolute bg-zinc-200 rounded-full inset-0 animate-ping z-0"
              ></div>
              <div class="flex m-auto">
                <i class="fa-solid fa-play z-10 text-black"></i>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>

    <BannerPackage @open-pop-up="showVideo = $event" />
  </div>
</template>

<script lang="ts">
import BannerCommentsCarousel from '@/components/getOutRent/bannerCommentsCarousel.component.vue'
import BannerPackage from '@/components/getOutRent/bannerPackage.component.vue'
import BannerPrice from '@/components/getOutRent/bannerPrice.component.vue'
import BannerSteps from '@/components/getOutRent/bannerSteps.component.vue'
import BannerXoAluguel from '@/components/getOutRent/bannerXoAluguel.component.vue'
import FooterSection from '@/components/getOutRent/footerSection.component.vue'
import PopUpVideo from '@/components/base/popUpVideo.component.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GetOutRent',
  components: {
    BannerCommentsCarousel,
    BannerPackage,
    BannerPrice,
    BannerSteps,
    BannerXoAluguel,
    FooterSection,
    PopUpVideo,
  },
  metaInfo() {
    return {
      title: 'Xô, Aluguel!',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content:
            'O método best para conquistar seu primeiro imóvel com financiamento imobiliário',
        },
      ],
    }
  },
  data() {
    return {
      isVisible: false,
      value: 300000,
      showVideo: false,
      videoStyle: 'w-full h-[36rem] mr-auto ml-auto rounded-2xl ',
      videoUrl: 'https://www.youtube.com/embed/XgvSqZf8PM0',
    }
  },
})
</script>

<style scoped>
/*
.mockup {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: url('/images/getOutRent/mockup.png');
  background-size: cover;
  background-position: right center;
} */
.underlineGradient {
  text-decoration: underline var(--primaryColor);
}
</style>
