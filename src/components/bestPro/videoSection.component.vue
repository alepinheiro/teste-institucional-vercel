<template>
  <section class="relative overflow-hidden">
    <div class="flex flex-col xl:max-h-[40rem]">
      <div class="relative h-full xl:ml-auto xl:w-fit ">
        <img
          class="static object-cover w-full xl:hidden"
          src="/images/bestPro/videoPlayerMobile.png"
          alt=""
        />
        <img
          class="static object-cover xl:object-contain w-full sm:hidden md:hidden lg:hidden"
          src="/images/bestPro/videoPlayerDesktop.png"
          alt=""
        />

        <div
          :class="[showVideo ? 'h-full' : 'h-1/2 xl:h-full']"
          class="absolute w-full xl:w-auto top-0 sm:inset-x-1/2 lg:inset-x-1/2 md:inset-x-1/2 xl:right-[30%] flex transition-all "
        >
          <div class="relative h-full w-10 -ml-5 z-0">
            <div class="absolute h-full top-0 -z-10">
              <div class="w-10 h-10 bg-white/30 rounded-full absolute my-auto top-1/2 -mt-5 animate-ping" ></div>
            </div>
            <button class="h-full w-10" @click="showVideo = !showVideo">
              <img
                class="w-10"
                src="/images/bestPro/icons/playButton.svg"
                alt=""
                srcset=""
              />
            </button>
          </div>
        </div>

        <div
          :class="[
            showVideo ? 'opacity-100 backdrop-blur-sm z-10' : 'opacity-0 -z-30',
          ]"
          class="bg-black/20 backdrop-blur w-full h-full absolute top-0 transition-all delay-150"
          @click="showVideo = false"
        >
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/ejFpLa_tzDQ"
            title="Financiamento imobiliário: Vale a pena fazer agora?"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div
        :class="[showVideo ? 'mt-0 py-4 xl:py-0' : 'sm:-mt-24 md:-mt-56 lg:-mt-96 md:pb-10']"
        class="sm:px-5 md:px-5 lg:px-5 z-0 transition-all xl:max-w-7xl mb-14 xl:mx-auto xl:absolute xl:bottom-0 xl:w-1/3 xl:left-[17%]"
      >
        <h2
          class="flex flex-col !font-medium !text-5xl tracking-wider gap-2 mb-5 xl:mb-10"
        >
          <span>Quem não</span>
          <span class="font-bold">fintechiza,</span>
          <span>fica para trás</span>
        </h2>
        <div class="border-t-2 border-white/30 py-5 xl:py-10 leading-loose w-2/3 sm:w-full">
          <p>
            Fintechize a sua marca, e aumente os seus lucros com a ajuda do
            BestPro, a melhor plataforma de produtos de crédito do mercado.
            <br />
            <br />
            Diversifique as suas <span class="font-bold underline underline-offset-4">fontes de receita</span>, trazendo mais soluções para
            o seu cliente.
          </p>

        </div>
        <div class="w-full flex">
            <button
              class="px-4 py-2 bg-[#D0FE42] text-black font-sans rounded w-fit mx-auto xl:ml-0 hover:-translate-y-1 transition-all"
            >
            Quero assinar o BestPro
            </button>
        </div>
      </div>
      <div class="absolute  w-full -bottom-0 ">
        <div class="mx-auto border-b border-white/30 h-1 max-w-7xl">
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VideoSection',
  data() {
    return {
      showVideo: false,
    }
  },
})
</script>
