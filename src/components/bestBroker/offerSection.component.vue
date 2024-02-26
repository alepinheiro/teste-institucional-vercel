<template>
  <section id="comprar" class="w-full py-10">
    <div
      class="px-5 flex flex-col lg:flex-row-reverse z-0 md:max-w-2xl max-w-5xl mx-auto"
    >
      <div class="h-full w-full sm:mx-auto md:mt-40">
        <GradientBackground
          :height="'100%'"
          :width="'100%'"
          :color="'#D0FE42'"
          :angle="180"
          :content-class="'flex flex-col lg:flex-row lg:items-center gap-8 sm:justify-center justify-start w-fit p-5 text-center xl:text-left lg:text-left cursor-default relative'"
        >
          <template #content>
            <div
              class="flex items-center lg:flex-row lg:w-2/3 xl:flex-row xl:w-2/3"
            >
              <div class="w-full sm:hidden md:hidden flex-1 lg:w-1/3">
                <ul class="list-disc list-inside mx-auto w-fit">
                  <li>+10h de videoaulas</li>
                  <li>Planilhas e Checklists</li>
                  <li>Materiais de apoio</li>
                  <li>Suporte constante</li>
                  <li>Parceria garantida</li>
                </ul>
              </div>

              <div
                class="flex flex-col w-fit lg:w-1/3 lg:h-fit lg:my-auto items-center gap-5 p-5 text-center mx-auto flex-1"
              >
                <p class="text-2xl">
                  Tudo isso de
                  <span
                    class="text-red-500 relative font-bold after:absolute after:content[''] after:h-0.5 after:w-5/6 after:bg-white after:inset-y-[55%] after:left-2 after:rotate-3"
                  >
                    R$1499,90
                  </span>
                  por apenas
                </p>

                <div class="flex flex-row items-baseline gap-2 text-6xl">
                  <span class="text-4xl">12x</span>
                  <span class="font-bold">84,83</span>
                </div>

                <div>
                  <p>Ou <b>R$849,99</b> à vista no PIX</p>
                </div>

                <a
                  class="w-fit px-6 py-4 flex flex-row items-center gap-2 border-4 rounded-xl font-bold bg-[#D0FE42] hover:bg-[#0063F2] transition-all border-white text-black uppercase"
                  :href="
                    $options.information.bestBroker.hotmart +
                    useObjectToQueryString($route.query)
                  "
                  target="_blank"
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span> Compre agora </span>
                </a>
              </div>

              <img
                src="/images/bestBroker/productBox2.png"
                alt=""
                class="sm:hidden max-h-[400px] md:max-h-[300px] object-contain mx-auto -mb-8 z-0 flex-1 md:absolute lg:absolute xl:absolute md:-top-[80%] md:inset-x-0 lg:-right-8 lg:-top-24 xl:-right-8 xl:-top-12"
              />
            </div>
          </template>
        </GradientBackground>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import GradientBackground from '@/components/bestBroker/gradientBackground.component.vue'
import { useObjectToQueryString } from '@/composables/useObjectToQueryString'

export default defineComponent({
  name: 'OfferSection',
  components: { GradientBackground },
  data() {
    return {
      useObjectToQueryString,
    }
  },
})
</script>
