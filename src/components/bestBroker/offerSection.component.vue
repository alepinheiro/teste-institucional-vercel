<template>
  <section class="w-full py-10">
    <div
      class="px-5 flex flex-col lg:flex-row-reverse z-0 md:max-w-2xl max-w-5xl mx-auto"
    >
      <div
        class="flex flex-row sm:flex-col-reverse items-center bg-gradient-to-b from-[#D0FE4260] to-transparent rounded-xl px-5 w-full"
      >
        <div class="w-full sm:hidden md:hidden flex-1">
          <ul class="list-disc list-inside mx-auto w-fit">
            <li>+10h de videoaulas</li>
            <li>Planilhas e Checklists</li>
            <li>Materiais de apoio</li>
            <li>Suporte constante</li>
            <li>Parceria garantida</li>
          </ul>
        </div>

        <div
          class="flex flex-col w-fit lg:w-full lg:h-fit lg:my-auto items-center gap-5 p-5 text-center mx-auto flex-1"
        >
          <p class="text-2xl">
            Tudo isso de
            <span
              class="text-red-500 relative font-bold after:absolute after:content[''] after:h-0.5 after:w-5/6 after:bg-white after:inset-y-[55%] after:left-2 after:rotate-3"
            >
              R$2499,90
            </span>
            por apenas
          </p>

          <div class="flex flex-row items-baseline gap-2 text-6xl">
            <span class="text-4xl">12x</span>
            <span class="font-bold">143,00</span>
          </div>

          <div>
            <p>Ou <b>R$1499,90</b> à vista no PIX</p>
          </div>

          <button
            class="w-fit px-6 py-4 flex flex-row gap-2 border-4 rounded-xl font-bold bg-[#D0FE42] hover:bg-[#0063F2] transition-all border-white text-black uppercase"
          >
            <i class="fa-solid fa-cart-shopping"></i>
            <span class=""> Compre agora </span>
          </button>
        </div>

        <img
          src="/images/bestBroker/productBox2.png"
          alt=""
          class="sm:hidden max-h-[400px] md:max-h-[300px] object-contain mx-auto -mb-8 lg:mb-0 lg:-ml-8 z-0 flex-1"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'simulationTabs',
  data() {
    return {}
  },
})
</script>
