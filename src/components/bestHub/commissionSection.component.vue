<template>
  <section
    class="border-b border-[#D0FE42] flex flex-col items-center relative py-10"
  >
    <picture class="sm:block">
      <source
        srcset="/images/bestHub/commissionSectionImageDesktop.png"
        media="(min-width: 768px)"
      />
      <source
        srcset="/images/bestHub/commissionSectionImageMobile.png"
        media="(max-width: 767px)"
      />
      <img
        src="/images/bestHub/commissionSectionImageMobile.png"
        alt="São 3 passos simples para receber a sua comissão."
      />
    </picture>
    <div
      class="sm:px-5 md:px-5 lg:px-5 w-full max-w-5xl mx-auto flex flex-col sm:items-center items-start sm:flex sm:static absolute bottom-4"
    >
      <h2 class="text-center !font-medium lg:pt-10">
        E quando você
        <strong> ganha? </strong>
      </h2>

      <h3 class="text-center mb-4">
        São
        <span class="text-[#D0FE42] font-bold"> 3 passos simples </span>

        para receber a sua comissão.
      </h3>

      <ul class="flex sm:flex-col flex-row gap-6 w-1/2 sm:w-full">
        <li
          v-for="{ id, text, title } of steps"
          :key="id"
          class="bg-gradient-to-b from-white/30 via-white/10 to-transparent hover:bg-[#D0FE42] transition-all rounded-2xl p-0.5 cursor-default"
        >
          <div
            class="flex bg-black flex-col gap-3 items-center p-4 rounded-2xl h-full"
          >
            <div class="flex flex-row text-3xl gap-2 mx-auto">
              <span class="font-bold text-[#D0FE42]">#{{ id }}</span>
              <span>{{ title }}</span>
            </div>
            <p class="text-center">{{ text }}</p>
          </div>
        </li>
      </ul>

      <a
        :href="$options.information.appBestHubPreRegister" target="_blank"
        class="px-4 py-2 bg-[#D0FE42] text-black font-sans rounded-2xl w-fit mt-10 hover:-translate-y-1 transition-all mb-5"
      >
        Assine e seja Pro
      </a>
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
