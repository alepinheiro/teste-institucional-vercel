<template>
  <section class="w-full">
    <div
      class="flex flex-col lg:flex-row xl:flex-row w-full py-10 md:max-w-2xl mx-auto max-w-7xl z-0 border-b border-[#D0FE42]"
    >
      <div
        class="relative flex-1 flex-grow w-full h-full sm:pt-96 md:pt-96 z-0"
      >
        <img
          src="/images/bestBroker/gasparMottaProfile.png"
          alt=""
          srcset=""
          class="absolute inset-0 mx-auto"
        />
      </div>
      <div class="flex-1 flex flex-col w-full gap-4 text-center px-5 z-10">
        <p class="text-3xl">
          Ministrado por <b>Gaspar Motta</b>, o maior
          <span class="text-[#D0FE42]">
            especialista em crédito imobiliário
          </span>
          da atualidade e <b>CEO da SejaBest</b>
        </p>
        <p class="text-2xl">
          Tendo em sua carreira já estruturado mais de
          <span class="text-[#D0FE42] font-bold">
            R$1 bilhão em créditos.
          </span>
        </p>
        <div class="relative h-fit w-full py-5">
          <img
            src="/images/bestBroker/bgGradientToRight.svg"
            class="absolute inset-0"
            alt=""
          />
          <div class="flex flex-col gap-4 px-5">
            <p>
              Com mais de 10 anos de experiência com produtos financeiros, tem
              conhecimento dos processos de todos os maiores bancos e
              instituições do país, incluindo:
            </p>
            <img src="/images/bestBroker/banks.png" class="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ProfileSection',
  data() {
    return {}
  },
})
</script>
