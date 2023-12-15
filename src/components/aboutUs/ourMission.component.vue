<template>
  <section class="text-white flex flex-col gap-8 lg:gap-12">
    <div
      class="px-5 flex flex-col gap-4 text-center md:max-w-[663px] md:mx-auto lg:max-w-5xl xl:max-w-7xl lg:mx-auto xl:mx-auto"
    >
      <h3 class="md:text-2xl lg:text-2xl xl:text-2xl lg:w-10/12 lg:mx-auto">
        O que nos motiva a levantar todos os dias e lutar por nossa missão?
      </h3>
      <h2 class="font-bold text-xl md:text-3xl lg:text-3xl xl:text-4xl lg:w-10/12 xl:w-8/12 lg:mx-auto xl:mx-auto">
        Acreditar que o acesso ao crédito pode levar as pessoas à sua melhor
        versão quando elas:
      </h2>
    </div>

    <div class="lg:max-w-5xl xl:max-w-7xl lg:mx-auto xl:mx-auto">
      <ul
        class="md:flex lg:flex xl:flex md:flex-row lg:flex-row xl:flex-row md:flex-wrap lg:flex-wrap xl:flex-wrap md:gap-10 lg:gap-10 xl:gap-10 md:mx-auto lg:mx-auto xl:mx-auto md:w-10/12 lg:w-10/12 "
      >
        <li
          v-for="(item, index) in cards"
          :key="index"
          class="relative z-0 flex md:w-96 lg:w-96 xl:w-96 hover:drop-shadow-md transition-all"
        >
          <div class="flip w-full h-38 md:h-56 lg:h-56 xl:h-56">
            <div
              class="front w-full h-full flex itens-end overflow-hidden md:rounded-xl lg:rounded-xl xl:rounded-xl"
            >
              <img
                :src="`/images/aboutUs/cards/${index}.png`"
                alt=""
                class="absolute inset-0 h-full w-full object-cover -z-10 transition-all"
              />

              <div
                class="flex flex-row h-fit items-center justify-between mt-auto w-full p-2 md:p-4 lg:p-4 xl:p-4 text-complementaryColor3"
              >
                <p class="font-bold text-white md:w-3/4">{{ item.title }}</p>
                <i class="fa-solid fa-chevron-up"></i>
              </div>
            </div>
            <div
              class="back flex items-center h-full bg-primary p-5 overflow-hidden md:rounded-xl lg:rounded-xl xl:rounded-xl cursor-default"
            >
              <!--  eslint-disable-next-line vue/no-v-html -->
              <span v-html="item.text"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'OurMission',
  data() {
    const cards = {
      capitalCatalyst: {
        title: 'Investem na sua empresa',
        text: 'O <b> Empréstimo com Garantia de Imóvel </b> é o crédito mais barato do mercado para <b> capital de giro </b> ou para <b> investir na sua empresa,</b> por exemplo.',
      },
      assetAdvance: {
        title: 'Adquirem novos bens',
        text: 'Sonha em adquirir seu primeiro imóvel ou um veículo novo? As opções de Financiamento oferecidas pela SejaBest são as mais assertivas do mercado.',
      },
      educateEnrich: {
        title: 'Estudam ou se especializam',
        text: 'Pague seu empréstimo em até 20 anos, tempo suficiente para você concluir seus estudos e estudar tranquilo.',
      },
      familyExplore: {
        title: 'Viajam com a família',
        text: 'Viajar é ter a oportunidade de se desconectar e curtir com calma o destino e a família. O <b>Crédito com Garantia</b> oferece benefícios perfeitos para isto.',
      },
      assetAbode: {
        title: 'Reformam, constroem ou adquirem um imóvel',
        text: 'Pensa em mobiliar sua casa ou o escritório da sua empresa? Ou quem sabe adquirir um imóvel ou sala comercial. A SejaBest faz acontecer.',
      },
      debtFree: {
        title: 'Quitam suas dívidas',
        text: 'As <b>taxas de juros</b> oferecidas pelo </b>Empréstimo com Garantia</b> são competitivas, dentro das menores do mercado, <b>facilitando a troca de dívidas.</b>',
      },
    }
    return {
      cards,
    }
  },
})
</script>

<style lang="scss" scoped>
.flip {
  position: relative;
  > .front,
  > .back {
    display: flex;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 0.5s;
    transition-property: transform, opacity;
  }
  > .front {
    transform: rotateY(0deg);
  }
  > .back {
    position: absolute;
    opacity: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transform: rotateY(-180deg);
  }
  &:hover {
    > .front {
      transform: rotateY(180deg);
    }
    > .back {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
}
</style>
