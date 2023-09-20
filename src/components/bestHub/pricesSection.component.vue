<template>
  <section class="py-48 relative">
    <img
      class="absolute top-0 -z-10 object-cover w-full h-auto sm:h-2/3 sm:left-0"
      src="/images/bestHub/pricesBackground.png"
      alt=""
    />

    <div class="sm:px-5 max-w-7xl lg:w-5/6 md:w-5/6 mx-auto">
      <div
        class="sm:w-full flex flex-col gap-10 max-w-xl ml-auto sm:mx-auto md:mx-auto"
      >
        <h2 class="text-center text-4xl">
          Escolha a
          <b class="text-[#D0FE42]"> melhor opção </b>
          para o seu bolso
        </h2>

        <div class="flex flex-col gap-5">
          <div
            v-for="{ id, text } of paymentRecurrence"
            :key="id"
            class="border border-white w-full rounded-2xl py-6 text-center font-Public-Sans text-3xl font-bold px-5"
          >
            {{ text }}
          </div>
        </div>

        <a
          :href="$options.information.bestHubApp.subscribe"
          target="_blank"
          class="text-black sm:text-center md:text-center text-xl font-bold px-10 py-6 rounded-xl font-hover transition-all bg-[#D0FE42] mt-5 font-sans hover:-translate-y-1 w-fit mx-auto"
        >
          SAIBA MAIS
        </a>

      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PricesSection',
  props: {
    options: {
      type: Array<{
        id: number
        title: string
        price: string
        recurrence: string
        features: string[]
        link: string
        label: string
      }>,
      required: true,
    },
  },
  data() {
    const paymentRecurrence = [
      {
        id: 1,
        text: 'Pagamento mensal',
      },
      {
        id: 2,
        text: 'Pagamento semestral',
      },
      {
        id: 3,
        text: 'Pagamento anual',
      },
    ]
    return {
      paymentRecurrence,
    }
  },
})
</script>
