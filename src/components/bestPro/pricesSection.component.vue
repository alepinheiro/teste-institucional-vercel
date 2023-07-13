<template>
  <section class="border-b greenYellowBorder py-10 relative">
    <div class="sm:px-5 max-w-5xl lg:w-5/6 md:w-5/6 mx-auto">
      <div class="sm:w-full flex flex-col gap-10 max-w-xl ml-auto">
        <h2 class="text-center">
          Escolha a
          <span class="greenYellowText"> melhor opção </span>
          para o seu bolso
        </h2>

        <div class="flex flex-col gap-8">
          <div v-for="item of options" :key="item.id" class="relative group">
            <span
              v-if="item.label"
              class="z-10 absolute bg-[#D0FE42] shadow group-hover:shadow-[#D0FE42] text-black font-bold text-sm px-2 py-1 rounded-full -right-3 -top-3 transition-all"
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
                    class="border border-white/30 text-white/30 w-full block py-1 rounded-xl text-center hover:bg-[#D0FE42] hover:text-black transition-all hover:border-[#D0FE42]"
                  >
                    Selecionar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      required: true
    }
  },
  data() {
    return {}
  }
})
</script>
