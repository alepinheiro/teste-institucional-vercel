<template>
  <section class="py-10">
    <div class="max-w-7xl mx-auto flex flex-col gap-14">
      <div class="text-center flex flex-col gap-5">
        <h2 class="text-3xl font-bold text-primary">
          <span
            class="relative after:content-[''] after:absolute after:-inset-0.5 after:bg-secondary after:-z-10 text-white mr-2"
          >
            Feito para você:
          </span>
          com o CashBest, você decide como vai usar seu dinheiro.
        </h2>
        <p class="text-textPrimary text-xl">
          <b>Aqui, o capital liberado é sua ferramenta multiúso.</b>
          Você pode usá-lo para quitar e reestruturar dívidas, impulsionar seu
          capital de giro, embarcar na viagem dos seus sonhos, renovar sua casa
          e <b>muito mais.</b> A escolha é sua, e a SejaBest coloca o
          <u>poder nas suas mãos</u> para realizar seus projetos financeiros.
        </p>
      </div>
      <div class="flex flex-row flex-wrap gap-5 w-full">
        <div
          v-for="{ id, title, image } in solutionsCards"
          :key="id"
          class="relative w-1/4 flex-grow overflow-hidden xl:h-52 rounded-lg"
        >
          <img
            :src="image"
            alt=""
            class="absolute inset-x-0 -z-10 object-cover h-full"
          />
          <div
            class="w-full flex h-full bg-gradient-to-t from-black via-transparent to-transparent p-5"
          >
            <h3 class="text-white text-xl font-bold w-1/2 mt-auto line-clamp-[2]">
              {{ title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>
<script setup lang="ts">
const solutionsCards = [
  {
    id: 1,
    title: 'Capital de Giro',
    image: 'http://unsplash.it/600/220?random=0&gravity=center',
  },
  {
    id: 2,
    title: 'Viagem dos sonhos',
    image: 'http://unsplash.it/600/220?random=2&gravity=center',
  },
  {
    id: 3,
    title: 'Estudar ou se Especializar',
    image: 'http://unsplash.it/600/220?random=1&gravity=center',
  },
  {
    id: 4,
    title: 'Adquirir bens',
    image: 'http://unsplash.it/600/220?random=3&gravity=center',
  },
  {
    id: 5,
    title: 'Reformar ou Construir',
    image: 'http://unsplash.it/600/220?random=4&gravity=center',
  },
  {
    id: 6,
    title: 'Quitar todas as dívidas',
    image: 'http://unsplash.it/600/220?random=5&gravity=center',
  },
]
</script>
