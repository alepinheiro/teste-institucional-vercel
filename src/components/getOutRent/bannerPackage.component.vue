<template>
  <div class="w-full flex flex-wrap-reverse items-center ">
    <div class="w-7/12 sm:w-full  text-center  flex flex-col p-4">
        <div class="-rotate-2" >
          <span class="bg-primary px-4 text-white text-3xl lg:text-2xl md:text-xl sm:text-xl shadow-md font-semibold py-2">Incluso no megapacote:</span>
        </div>
        <div class="rotate-0 pt-8 sm:pt-6" >
          <span class="bg-[#ffffff05] rounded-lg px-4 text-white md:text-sm sm:text-sm text-2xl py-2"><i class="fa-solid fa-file-excel pr-2"></i> Planilha de Simulação e Amortização</span>
        </div>
        <div class="rotate-0 pt-8 md:pt-4 sm:pt-4" >
          <span class="bg-[#ffffff05] rounded-lg px-4 text-white text-2xl sm:text-sm md:text-sm py-2"><i class="fa-solid fa-square-check pr-2"></i> Checklist de Documentos</span>
        </div>
        <div class="rotate-0 pt-8 md:pt-4 sm:pt-4" >
          <span class="bg-[#ffffff05] rounded-lg px-4 text-white text-2xl sm:text-sm md:text-sm py-2"><i class="fa-solid fa-paper-plane pr-2"></i> Acesso vitalício a conteúdos exclusivos</span>
        </div>
        <div class="rotate-0 pt-8 md:pt-4 sm:pt-4" >
          <span class="bg-[#ffffff05] rounded-lg px-4 text-white text-2xl sm:text-sm md:text-sm py-2"><i class="fa-solid fa-book-bookmark pr-2"></i> O Guia Completo Para Sair do Aluguel</span>
        </div>
        <div class="rotate-0 pt-8 md:pt-4 sm:pt-4" >
          <span class="bg-[#ffffff05] rounded-lg px-4 text-white text-2xl sm:text-sm md:text-sm py-2"><i class="fa-solid fa-video pr-2"></i> Aula completa - PASSO A PASSO PARA SAIR DO ALUGUEL</span>
        </div>
        <div class="-rotate-2 flex mr-auto ml-auto my-4 xl:my-6 " >
          <div  class="bg-primary px-4 text-white text-3xl md:text-xl sm:text-xl shadow-md font-semibold py-2">
          <h2 class=" ">
            Palavra do CEO
            <br>
            <span class="text-xl md:text-sm sm:hidden">Clique ao lado e assista</span>
            <span class="text-sm  xl:hidden lg:hidden md:hidden">Clique acima e assista</span>
          </h2>
        </div>
        </div>
    </div>
    <div @click="openVideo()" class="w-5/12 sm:w-full relative cursor-pointer">
      <div class="absolute left-28 top-64 md:left-16 md:top-48 sm:left-12 sm:top-44 lg:left-16 lg:top-36 animate-pulse">
        <div class="text-4xl text-black w-28 h-28  rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="60" fill="white" fill-opacity="0.4" />
            <circle cx="59.9999" cy="60" r="37.6398" fill="white" />
            <path
              d="M52.9814 46.2467C52.0622 45.7258 50.9069 45.7086 49.969 46.1952C49.0311 46.6818 48.4473 47.5977 48.4473 48.5938V68.7439C48.4473 69.7399 49.0311 70.6558 49.969 71.1424C50.9069 71.629 52.0622 71.6061 52.9814 71.0909L70.8696 61.0158C71.7578 60.5178 72.2982 59.6305 72.2982 58.6688C72.2982 57.7071 71.7578 56.8255 70.8696 56.3218L52.9814 46.2467Z"
              fill="#0D0D0D" />
          </svg>
        </div>
      </div>
      <img src="/images/getOutRent/mockup.png" class="w-9/12 md:w-full sm:w-full h-auto sm:pl-4" />
    </div>
  </div>
  
</template>
      
<script lang="ts">
import { defineComponent } from 'vue'
import PopUpVideo from "@/components/base/popUpVideo.component.vue"


export default defineComponent({
  name: 'BannerPackage',
  component: {
    PopUpVideo
  },
  data() {
    return {
      showVideo: false,
    }
  },
  methods:{
    openVideo(){
      console.log('open')
      this.$emit("OpenPopUp", true);
    }
  }

})
</script>
    