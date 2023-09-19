<template>
  <section class="border-b border-[#D0FE42] flex flex-col items-center relative py-10 lg:my-12">

    <img 
      class="w-full xl:hidden lg:hidden" src="/images/bestHub/commissionSectionImageMobile.png"
      alt="São 3 passos simples para receber a sua comissão." />
    <img 
      class="w-full sm:hidden md:hidden" src="/images/bestHub/commissionSectionImageDesktop.png"
      alt="São 3 passos simples para receber a sua comissão." />
    <div 
     class="xl:absolute lg:absolute  sm:bottom-4 xl:bottom-48 md:bottom-16 bottom-4  ">
      <div class="w-7/12 lg:10/12 sm:w-full md:w-full xl:pl-36 lg:pl-8 md:pl-4 ">
        <div class="w-full text-left sm:text-center ">
          <h2 class="!font-medium lg:pt-10 text-4xl sm:text-3xl">
            E quando você
            <strong> ganha? </strong>
          </h2>

          <h3 class=" mb-4">
            São
            <span class="text-[#D0FE42] font-bold"> 3 passos simples </span>

            para receber a sua comissão.
          </h3>
        </div>

        <div class="flex sm:flex-col w-full justify-center gap-3 sm:p-2 md:p-2">

          <div v-for="{ id, text, title } of steps" :key="id" class="bg-gradient-to-b from-white/30 via-white/10 to-transparent hover:bg-[#D0FE42]
           rounded-2xl cursor-default p-0.5">
            <div class="flex bg-black flex-col gap-3 items-center p-4 rounded-2xl h-full">
              <div class="flex flex-row text-3xl gap-2 mx-auto">
                <span class="font-bold text-[#D0FE42]">#{{ id }}</span>
                <span>{{ title }}</span>
              </div>
              <p class="text-center">{{ text }}</p>
            </div>
          </div>
        </div>
        <div class="py-12 sm:text-center ">
          <a :href="$options.information.appBestHubPreRegister" target="_blank" 
          class="p-5 bg-[#D0FE42] text-black font-bold  rounded-lg  text-4xl sm:text-2xl lg:text-3xl
           w-fit mt-10 hover:-translate-y-1 transition-all mb-5 ">
            Quero ganhar
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CommissionSection',
  data() {
    return {
      steps: [
        {
          id: 1,
          title: 'Simulação',
          text: 'Primeiro, você faz a captação do cliente e o prepara para contratar um produto.',
        },
        {
          id: 2,
          title: 'Aprovação',
          text: 'Agora é com a SejaBest, nosso time de assessores vai assumir o processo.',
        },
        {
          id: 3,
          title: 'Comissão',
          text: 'Depois que o cliente tiver com o dinheiro em mãos, você recebe sua comissão percentual.',
        },
      ],
    }
  },
})
</script>
