<template>
  <div class="w-full h-full">
    <!-- 🖥️ Desktop -->
    <div class="bgFinanCar sm:hidden md:hidden">
      <div class="maxWidth xl:h-screen lg:h-screen">
        <TopBar v-if="showMenu" class="relative text-white" />
        <section class="maxWidth xl:h-screen lg:h-screen sm:hidden md:hidden px-5">
          <div class="w-full flex pt-12 pt-xxl lg:pt-24 md:pt-8 sm:pt-4">
            <div class="md:pt-4 sm:py-8 max-w-[600px] w-full">
              <div class="bg-primary rounded-xl w-full shadow-2xl p-12">
                <div class="text-6xl titleFontBold text-white pb-6">
                  <h1 class="textDecoration pb-1 italic text-white flex w-60">
                    FinanBest
                  </h1>
                  <h1 class="text-6xl titleFontBold pt-2 text-white">
                    Financiamento veicular da SejaBest
                  </h1>
                </div>
                <p class="pt-0 text-white pb-8 border-div-video">
                  Escolha o carro, novo ou usado, e financie até 100% do valor.
                  Faça uma simulação agora e veja como ficam as parcelas.
                </p>
                <div class="flex pt-2">
                  <h2
                    class="w-6/12 text-lg text-white pt-2 font-semibold text-textPrimary"
                  >
                    De quanto <br />
                    você precisa?
                  </h2>
                  <div class="w-full flex items-end gap-4">
                    <div class="w-9/12 pr-1">
                      <inputMoney
                        id="valueDesktop"
                        v-model="value"
                        class="w-full"
                        placeholder="60.000,00"
                      />
                    </div>
                    <div class="w-3/12">
                      <div
                        class="p-2 w-full bg-primary rounded-xl text-white text-center"
                      >
                        <a
                          :href="
                            $options.information.appVehicleSimulator +
                            useObjectToQueryString($route.query)
                          "
                          style="text-decoration: none"
                          aria-label="Clique aqui para simular seu financiamento"
                          target="_blank"
                          >Simular</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="h-[500px] p-16 w-[600px] md:w-7/12 text-white md:pr-4 sm:hidden"
              @click="showVideo = true"
            ></div>
          </div>
        </section>
      </div>
    </div>

    <!-- 🧮 Tablet -->
    <div class="sm:hidden xl:hidden lg:hidden">
      <div class="maxWidth bg-primary">
        <TopBar v-if="showMenu" class="relative text-white" />
        <section class="w-full flex justify-center items-center pt-6">
          <div
            class="w-10/12 pt-4 mt-auto mb-auto bg-secondary shadow-md rounded-lg p-6"
          >
            <div>
              <div class="text-5xl titleFontBold pt-2 text-white pb-6">
                <h1 class="textDecoration pb-1 italic text-white flex w-48">
                  FinanBest
                </h1>
                <h1 class="text-4xl titleFontBold pt-2 text-white">
                  Financiamento veicular da SejaBest
                </h1>
              </div>
              <p class="text-white pb-6 text-lg">
                Escolha o carro, novo ou usado, e financie até 100% do valor.
                Faça uma simulação agora e veja como ficam as parcelas.
              </p>
              <div
                class="flex w-full items-center border-b-1 border-complementaryColor3 pb-4"
              >
                <div class="pr-1 mt-auto mb-auto">
                  <img
                    :src="$options.imageConfig.iconSejaBestWhite"
                    alt="Logo SejaBest"
                    class="w-12 h-auto"
                  />
                </div>
                <p class="w-10/12 text-lg text-white">
                  Sem <span class="text-complementaryColor3">Filas.</span> Sem
                  <span class="text-complementaryColor3">gerentes.</span> Sem
                  <span class="text-complementaryColor3">complexidades</span>
                </p>
              </div>
              <h2
                class="w-10/12 text-xl text-white pt-2 font-semibold text-textPrimary"
              >
                De quanto você precisa?
              </h2>
              <div class="w-full flex items-end justify-between pb-2">
                <div class="w-9/12 pr-1">
                  <inputMoney
                    id="value"
                    v-model="value"
                    class="w-full"
                    label=""
                    placeholder=""
                  />
                </div>
                <div class="w-3/12">
                  <div
                    class="p-2 w-full bg-primary rounded-xl text-white text-center"
                  >
                    <a
                      :href="
                        $options.information.appVehicleSimulator +
                        useObjectToQueryString($route.query)
                      "
                      style="text-decoration: none"
                      target="_blank"
                      aria-label="Clique aqui para simular seu financiamento"
                      >Simular</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- 📱 Mobile-->
    <div class="xl:hidden lg:hidden md:hidden">
      <div class="maxWidth bg-primary">
        <TopBar v-if="showMenu" position="relative" class="text-white" />
        <section class="w-full pt-10">
          <div
            class="py-8 bg-secondary sm:py-4 p-6 mt-4 rounded-lg shadow-md w-full"
          >
            <div class="rounded-xl w-full">
              <div class="text-4xl titleFontBold text-white pb-2">
                <h1 class="textDecoration pb-1 italic text-white flex w-36">
                  FinanBest
                </h1>
                <h1 class="text-2xl titleFontBold pt-2 text-white">
                  Financiamento veicular da SejaBest
                </h1>
              </div>
              <p class="text-white pb-6">
                Escolha o carro, novo ou usado, e financie até 100% do valor.
                Faça uma simulação agora e veja como ficam as parcelas.
              </p>
              <div class="bg-bgLight2Color p-4 rounded-xl">
                <div
                  class="flex w-full items-center border-b-1 border-primary pb-4"
                >
                  <div class="w-1/12 pr-1 mt-auto mb-auto">
                    <img
                      :src="$options.imageConfig.iconSejaBest"
                      alt="Logo SejaBest"
                      class="w-6 h-auto"
                    />
                  </div>
                  <p class="w-10/12 text-md">
                    Sem <span class="text-primary">Filas.</span> Sem
                    <span class="text-primary">gerentes.</span> Sem
                    <span class="text-primary">complexidade</span>
                  </p>
                </div>
                <h2 class="w-10/12 text-xl pt-2 font-semibold text-textPrimary">
                  De quanto você precisa?
                </h2>
                <div class="w-full flex items-end justify-between">
                  <div class="w-9/12 pr-1">
                    <inputMoney
                      id="value"
                      v-model="value"
                      class="w-full"
                      label=""
                      placeholder=""
                    />
                  </div>
                  <div class="w-3/12">
                    <div
                      class="p-2 w-full bg-primary rounded-xl text-white text-center"
                    >
                      <a
                        :href="
                          $options.information.appVehicleSimulator +
                          useObjectToQueryString($route.query)
                        "
                        style="text-decoration: none"
                        aria-label="Clique aqui para simular seu financiamento"
                        target="_blank"
                        >Simular</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopBar from '@/components/structure/topBar/index.component.vue'
import { useObjectToQueryString } from '@/composables/useObjectToQueryString'

export default defineComponent({
  name: 'TopBarVideo',
  components: {
    TopBar,
  },
  props: {
    showMenu: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      useObjectToQueryString,
      isVisible: false,
      value: 40000,
      showVideo: false,
      videoStyle: 'w-full h-[36rem] mr-auto ml-auto rounded-2xl ',
      videoUrl: 'https://www.youtube.com/embed/Mlg8eDX61uE',
      tutorial: {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      },
    }
  },
})
</script>

<style>
@media (min-width: 1880px) {
  .pt-xxl {
    padding-top: 6.5rem;
  }
}
</style>
