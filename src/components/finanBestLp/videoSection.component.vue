<template>
  <section class="py-10 w-full bg-[#EFEFEF]">
    <div class="max-w-7xl lg:max-w-5xl md:max-w-2xl w-full flex flex-row items-center gap-3 mx-auto px-5">
      <div class="w-5/12 lg:w-7/12 md:w-full flex flex-col gap-8 text-textPrimary text-center">
        <h2 class="text-3xl text-primary font-bold">
          O FinanBest é o produto de financiamento imobiliário da SejaBest.
        </h2>
        <div class="text-xl leading-relaxed">
          <p>
            Imagine financiar seu novo imóvel sem sair de casa, contando com um
            time de especialistas prontos para lhe atender a qualquer momento.
          </p>
          <br />
          <p>
            <b>
              Assista o vídeo que preparamos especialmente para você e entenda
              cada detalhe desta operação.
            </b>
          </p>
        </div>
      </div>
      <div v-show="showVideo" class="w-7/12 lg:w-5/12 h-96 rounded-2xl overflow-hidden md:hidden">
        <iframe
          src="https://www.youtube.com/embed/IXZj925aJDY"
          title="Como financiar meu primeiro imóvel?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="h-full w-full"
        ></iframe>
      </div>
      <div v-show="!showVideo" class="w-7/12 lg:w-5/12 relative bg-black rounded-2xl z-0 md:hidden overflow-hidden">
        <img
          src="/images/finanBest/bgVideoPlayer.png"
          alt=""
          class="opacity-50 object-cover h-96 w-full"
        />
        <div
          class="w-8 h-8 rounded-full absolute inset-0 m-auto animate-ping z-0 bg-zinc-300"
        ></div>
        <div class="absolute inset-0 z-10 flex">
          <button
            class="m-auto bg-zinc-300 h-10 w-10 rounded-full flex hover:bg-primary hover:text-white"
            @click="showVideo = !showVideo"
          >
            <i class="fa-solid fa-play m-auto"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const showVideo = ref(false)
</script>
