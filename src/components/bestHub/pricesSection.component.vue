<template>
  <section class="py-48 relative">
    <img
      class="absolute top-0 -z-10 object-cover w-full h-auto sm:h-2/3 sm:left-0"
      src="/images/bestHub/pricesBackground.png"
      alt=""
    />

    <div class="sm:px-5 max-w-7xl lg:w-5/6 md:w-5/6 mx-auto">
      <div class="sm:w-full flex flex-col gap-10 max-w-xl ml-auto sm:mx-auto md:mx-auto">
        <h2 class="text-center text-4xl">
          Escolha a
          <b class="text-[#D0FE42]"> melhor opção </b>
          para o seu bolso
        </h2>

        <div class="flex flex-col gap-5">
          <div v-for="{ id, text } of paymentRecurrence" :key="id" class="border border-white w-full rounded-2xl py-6 text-center font-Public-Sans text-3xl font-bold">
            {{ text }}
          </div>
        </div>

        <a
        :href="$options.information.bestHubApp.subscribe"
          target="_blank"
          class="text-black sm:text-center md:text-center text-2xl font-bold px-10 py-6 rounded-xl font-hover transition-all bg-[#D0FE42] mt-5 font-sans hover:-translate-y-1 w-fit mx-auto"
        >
        SAIBA MAIS
        </a>

        <!-- <div class="flex flex-col gap-8">
          <div
            v-for="item of options"
            :key="item.id"
            class="relative group cursor-default"
          >
            <span
              v-if="item.label"
              class="z-10 absolute bg-[#D0FE42] shadow group-hover:shadow-[#D0FE42] text-black font-sans text-sm px-2 py-1 rounded-full -right-3 -top-3 transition-all"
            >
              {{ item.label }}
            </span>
            <div
              class="z-0 border border-white/30 group-hover:border-[#D0FE42] rounded-xl py-8 px-4 transition-all group-hover:backdrop-blur group-hover:bg-white/10"
            >
              <div class="flex flex-row items-center">
                <div class="flex-1">
                  <div class="w-fit mx-auto text-left">
                    <span>{{ item.title }}</span>
                    <div>
                      <span class="sm:text-2xl text-4xl font-bold">
                        {{ item.price }}
                      </span>
                      <span>
                        {{ item.recurrence }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex-1">
                  <ul class="flex flex-col items-start gap-2 mb-4">
                    <li v-for="text in item.features" :key="text">
                      {{ text }}
                    </li>
                  </ul>
                  <a
                    :href="item.link"
                    class="border border-white/30 h-auto text-white/30 w-full flex rounded-2xl text-center hover:bg-[#D0FE42] hover:text-black transition-all hover:border-[#D0FE42]"
                  >
                    <p class="pt-2 pb-1 mx-auto">Selecionar</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> -->
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
        text: 'Pagamento mensal'
      },
      {
        id: 2,
        text: 'Pagamento semestral'
      },
      {
        id: 3,
        text: 'Pagamento anual'
      },
    ]
    return {
      paymentRecurrence,
    }
  },
})
</script>
