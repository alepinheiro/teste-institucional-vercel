<template>
  <section class="py-20 bg-[#EFEFEF]">
    <div
      class="xl:max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto flex flex-col gap-14 px-5 sm:px-0"
    >
      <div class="text-center flex flex-col gap-5 sm:px-5">
        <h2 class="text-3xl sm:text-2xl leading-snug font-bold text-primary">
          <span
            class="relative after:content-[''] after:absolute after:-inset-1 after:bg-bgDarkColor after:-z-10 text-white mr-2 z-0"
          >
            Feito para você:
          </span>
          {{
            'com o CashBext, você decide como vai usar seu dinheiro.'.replace(
              /\s([^\s<]+)\s*$/,
              '\u00A0$1',
            )
          }}
        </h2>
        <p class="text-textPrimary text-base xl:text-xl">
          <b>Com o capital liberado pela Bext, você tem uma ferramenta multiuso.</b>
          Quite dívidas, impulsione o capital de giro, realize sonhos de viagem, renove sua casa e mais. A escolha é sua, e a Bext coloca o poder em suas mãos para concretizar seus projetos financeiros.
        </p>
      </div>
      <div class="flex flex-row flex-wrap gap-5 md:gap-0 sm:gap-0 w-full">
        <div
          v-for="{ id, title, image } in solutionsCards"
          :key="id"
          class="relative w-1/4 md:w-1/3 sm:w-1/2 flex-grow overflow-hidden h-52 rounded-lg z-0 md:rounded-none sm:rounded-none group"
        >
          <img
            :src="image"
            :alt="title"
            class="absolute w-full -z-10 object-cover h-full group-hover:scale-110 transition-all ease-out duration-700"
          />
          <div
            class="w-full flex h-full bg-gradient-to-t from-black via-transparent to-transparent p-6 md:p-3 sm:p-3"
          >
            <h3
              class="text-white text-xl sm:text-lg font-bold w-1/2 md:w-full mt-auto sm:leading-5"
            >
              {{ title }}
            </h3>
          </div>
        </div>
      </div>
      <div class="hidden min-md:block h-px bg-bgDarkColor w-full mt-20"></div>
    </div>
  </section>
</template>
<script setup lang="ts">
const solutionsCards = [
  {
    id: 1,
    title: 'Capital de Giro',
    image: '/images/cashBext/solutions/capitalDeGiro.png',
  },
  {
    id: 2,
    title: 'Viagem dos sonhos',
    image: '/images/cashBext/solutions/viagemDosSonhos.png',
  },
  {
    id: 3,
    title: 'Estudar ou se Especializar',
    image: '/images/cashBext/solutions/estudarOuSeEspecializar.png',
  },
  {
    id: 4,
    title: 'Adquirir bens',
    image: '/images/cashBext/solutions/adquirirBens.png',
  },
  {
    id: 5,
    title: 'Reformar ou Construir',
    image: '/images/cashBext/solutions/reformarOuConstruir.png',
  },
  {
    id: 6,
    title: 'Quitar todas as dívidas',
    image: '/images/cashBext/solutions/quitarDividas.png',
  },
]
</script>
