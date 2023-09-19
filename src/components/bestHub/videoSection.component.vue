<template>
  <section class="relative w-full">
    <div class="flex flex-col max-w-7xl mx-auto">
      <!-- <div class="relative h-full xl:ml-auto xl:w-fit">
        <img
          class="static object-cover w-full xl:hidden"
          src="/images/bestHub/videoPlayerMobile.png"
          alt=""
        />
        <img
          class="static object-cover xl:object-contain w-full sm:hidden md:hidden lg:hidden"
          src="/images/bestHub/videoPlayerDesktop.png"
          alt=""
        />

        <div
          :class="[showVideo ? 'h-full' : 'h-1/2 xl:h-full']"
          class="absolute w-full xl:w-auto top-0 sm:inset-x-1/2 lg:inset-x-1/2 md:inset-x-1/2 xl:right-[30%] flex transition-all"
        >

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
      </div> -->

      <div class="w-full flex">
        <div class="relative w-10 mx-auto py-10">
          <div class="absolute h-full top-0 -z-10">
            <div
              class="w-10 h-10 bg-white/30 rounded-full absolute my-auto top-1/2 -mt-5 animate-ping"
            ></div>
          </div>
          <button class="h-full w-10" @click="showVideo = !showVideo">
            <img
              class="w-10"
              src="/images/bestHub/icons/playButton.svg"
              alt=""
              srcset=""
            />
          </button>
        </div>
      </div>

      <div
        :class="[showVideo ? ' ' : ' ']"
        class="sm:py-0 py-20 w-4/6 sm:w-full px-5 flex flex-col gap-10"
      >
        <h1 class="!font-medium !text-4xl sm:text-center">
          Quem não <b>fintechiza</b>, fica para trás
        </h1>
        <div class="border-t-2 border-white/30 sm:w-full"></div>
        <p class="text-xl sm:text-center">
          Fintechize a sua marca, e aumente os seus lucros com a ajuda do
          BestHub, a melhor plataforma de produtos de crédito do mercado.
          <br />
          <br />
          Diversifique as suas
          <span class="font-bold underline underline-offset-4"
            >fontes de receita</span
          >, trazendo mais soluções para o seu cliente.
        </p>

        <a
          :href="$options.information.appBestHubPreRegister"
          target="_blank"
          class="text-black sm:text-center text-2xl font-bold px-10 py-6 rounded-xl font-hover transition-all bg-[#D0FE42] mt-5 font-sans hover:-translate-y-1 w-fit sm:mx-auto md:mx-auto"
        >
          Quero fintechizar meu negócio
        </a>
      </div>

      <!-- <div class="absolute w-full -bottom-0">
        <div class="mx-auto border-b border-white/30 h-1 max-w-7xl"></div>
      </div> -->
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
