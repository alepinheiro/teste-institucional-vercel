<template>
  <section class=" w-full bg-[#EFEFEF]">
    <div class="flex flex-wrap maxWidth lg:!p-0 items-center pl-12">
      <div class="w-5/12 lg:w-5/12 md:w-full sm:w-full  text-textPrimary text-center ">
        <h2 class="text-3xl  font-bold pb-5 ">
          Conheça o Financiamento Imobiliário da Bext.
        </h2>
        <div class="text-base leading-relaxed sm:hidden">
          <p>
            Financie seu novo imóvel sem sair de casa. Conte com um time de especialistas sempre disponível.
          </p>
        </div>
      </div>
      <div v-show="!showVideo" class="w-7/12 lg:w-6/12 sm:hidden md:hidden  rounded-2xl z-0 ">
        <img src="/images/finanBext/bgVideoPlayer.png" alt=""
          class="object-contain w-2/3 lg:w-10/12 mr-auto ml-auto " />
        <!--<div
          class="w-8 h-8 rounded-full absolute inset-0 m-auto animate-ping z-0 bg-zinc-300"
        ></div>
        <div class="absolute inset-0 z-10 flex">
          <button
            aria-label="Assistir vídeo"
            title="Assistir vídeo"
            class="m-auto bg-zinc-300 h-10 w-10 rounded-full flex hover:bg-primary hover:text-white"
            @click="showVideo = !showVideo"
          >
            <i class="fa-solid fa-play m-auto"></i>
          </button>
        </div>-->
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  youtubeVideoId: string
}>()

const showVideo = ref(false)
</script>
