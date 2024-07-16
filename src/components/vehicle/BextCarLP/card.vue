<template>
  <div class="flex flex-wrap justify-center pb-24 sm:pb-0 pt-10">
    <article
      class="mb-8 sm:mb-4 w-1/2 md:pl-0 md:pr-3 pr-4 pl-0 sm:w-full sm:px-0">
      <div
        :class="{ hover: hover }"
        class="lg:h-52 shadow-2xl p-6 sm:p-3 bg-[#EFEFEF] rounded-lg flex gap-4 items-center sm:h-[130px] md:h-[170px]"
        @mouseenter="hover = true"
        @mouseleave="hover = false">
        <img
          :src="icons.phoneFill.src"
          :alt="icons.phoneFill.alt"
          loading="lazy"
          class="w-16 md:w-12 sm:w-14" />
        <div class="gap-y-2 sm:gap-y-1 flex flex-col">
          <h1 class="font-bold text-2xl titleCard md:text-xl sm:text-xl">
            100% digital
          </h1>
          <p class="text-lg leading-loose md:text-sm sm:text-xs">
            Você simula, conversa com a nossa equipe e fazemos o resto. A gente
            sempre vai te atualizar sobre o andamento do processo.
          </p>
        </div>
      </div>
    </article>

    <article
      class="mb-8 sm:mb-4 w-1/2 md:pl-0 md:pr-3 pr-0 pl-4 sm:w-full sm:px-0">
      <div
        id="card"
        :class="{ hover: hover2 }"
        class="lg:h-52 shadow-2xl p-6 md:p-4 sm:p-3 bg-[#EFEFEF] rounded-lg flex gap-4 items-center sm:h-[130px] md:h-[170px]"
        @mouseenter="hover2 = true"
        @mouseleave="hover2 = false">
        <img
          :src="icons.notebookFill.src"
          :alt="icons.notebookFill.alt"
          loading="lazy"
          class="w-16 md:w-12 sm:w-12 sm:ml-3" />
        <div class="gap-y-2 sm:gap-y-1 md:gap-y-4 flex flex-col">
          <h1 class="font-bold text-2xl titleCard md:text-xl sm:text-xl">
            Plataforma multibancos
          </h1>
          <p class="text-lg leading-loose md:text-sm sm:text-xs">
            O BextCar leva a sua proposta de empréstimo para os maiores bancos
            do Brasil, que vão analisar e aprovar o pedido.
          </p>
        </div>
      </div>
    </article>

    <article
      class="mb-8 sm:mb-4 w-1/2 md:pl-0 md:pr-3 pr-4 pl-0 sm:w-full sm:px-0">
      <div
        id="card"
        class="lg:h-52 shadow-2xl p-6 sm:p-2 bg-[#EFEFEF] rounded-lg flex gap-4 items-center sm:h-[130px] md:h-[170px] md:p-4"
        :class="{ hover: hover3 }"
        @mouseenter="hover3 = true"
        @mouseleave="hover3 = false">
        <img
          :src="icons.moneyFill.src"
          :alt="icons.moneyFill.alt"
          loading="lazy"
          class="w-16 md:w-12 sm:w-12 sm:ml-3" />
        <div class="gap-y-2 sm:gap-y-1 md:gap-y-0 flex flex-col">
          <h1 class="font-bold text-2xl titleCard md:text-xl sm:text-xl">
            Até 90% do valor do veículo
          </h1>
          <p class="text-lg leading-loose lg:leading-8 md:text-sm sm:text-xs">
            Se o carro custa R$50 mil, você pode conseguir crédito aprovado de
            até R$ 45 para pagar conta, investir,<span class="md:hidden">
              fazer poupança ,</span
            >etc.
          </p>
        </div>
      </div>
    </article>

    <article
      class="mb-8 sm:mb-4 w-1/2 md:pl-0 md:pr-3 pr-0 pl-4 sm:w-full sm:px-0">
      <div
        id="card"
        :class="{ hover: hover4 }"
        class="lg:h-52 shadow-2xl p-6 sm:p-3 bg-[#EFEFEF] rounded-lg flex gap-4 items-center sm:h-[130px] md:h-[170px] md:p-4"
        @mouseenter="hover4 = true"
        @mouseleave="hover4 = false">
        <img
          :src="icons.calendarOutline.src"
          :alt="icons.calendarOutline.alt"
          loading="lazy"
          class="w-16 md:w-12 sm:w-12 sm:ml-3" />
        <div class="gap-y-2 sm:gap-y-1 flex flex-col">
          <h1 class="font-bold text-2xl titleCard md:text-xl sm:text-xl">
            Até 5 anos de prazo
          </h1>
          <p class="text-lg leading-loose md:text-sm sm:text-xs">
            Você tem até 60 meses para quitar as parcelas, que sâo as mesmas
            (Tabela Price) até você terminar de quitar as prestações.
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
  import { icons } from '@/configurations/images';
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'Card',

    data() {
      return {
        icons,
        hover: false,
        hover2: false,
        hover3: false,
        hover4: false,
      };
    },
  });
</script>

<style>
  @keyframes fadeHover {
    from {
      background-color: #efefef;
    }

    to {
      background-color: #fff;
    }
  }

  .hover {
    animation: fadeHover 1s;
    color: #525252;
  }

  .hover:hover .titleCard {
    color: #0524dd;
    font-weight: 700;
  }
</style>
