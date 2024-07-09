<template>
  <div class="w-full h-full">
    <section class="bgFinanCar">
      <div class="maxWidth xl:h-screen lg:h-screen">
        <TopBar
          v-if="showMenu"
          customMobileMenuColor="white"
          color="primary"
          class="text-white" />
        <div class="maxWidth">
          <div
            class="w-full xl:w-5/12 lg:w-5/12 md:w-10/12 md:mr-auto md:ml-auto xl:pt-42 pt-18 sm:pt-8">
            <div
              class="py-8 sm:py-4 mt-4 w-full bg-bgLightColor p-6 sm:p-4 rounded-xl">
              <div class="rounded-xl w-full">
                <div class="titleFontBold flex pb-2">
                  <h1
                    class="text-5xl sm:text-4xl textDecoration pb-1 text-primary">
                    FinanBext:
                  </h1>
                </div>
                <h1 class="text-3xl sm:text-2xl titleFontBold pt-2">
                  Financiamento veicular da Bext
                </h1>
                <p class="py-4 pb-6">
                  Escolha o carro, novo ou usado, e financie até 100% do valor.
                  <span class="font-semibold"
                    >Faça uma simulação agora e veja como ficam as
                    parcelas.</span
                  >
                </p>
                <div class="bg-bgLight2Color p-3 rounded-xl">
                  <div
                    class="flex w-full items-center justify-center border-b-1 border-primary pb-4">
                    <div class="mt-auto mb-auto p-2 sm:pr-4">
                      <img
                        :src="$options.imageConfig.brand.blueIcon.image"
                        :alt="$options.imageConfig.brand.blueIcon.alt"
                        class="w-6 sm:w-12 h-auto mr-auto ml-auto" />
                    </div>
                    <p class="sm:text-base">
                      Sem <span class="text-primary">Filas.</span> Sem
                      <span class="text-primary">gerentes.</span> Sem
                      <span class="text-primary">complexidade.</span>
                    </p>
                  </div>
                  <h2
                    class="w-full text-2xl sm:text-xl text-center pt-4 font-bold">
                    De quanto você precisa?
                  </h2>
                  <div class="w-full">
                    <InputMoney
                      id="value"
                      v-model="value"
                      class="w-full text-xl sm:text-base mb-4"
                      label=""
                      placeholder="" />
                    <div
                      class="py-3 px-8 w-full bg-primary rounded-xl text-white font-bold text-center">
                      <a
                        :href="
                          $options.information.appVehicleSimulator + $root.utms
                        "
                        style="text-decoration: none"
                        aria-label="Clique aqui para simular seu financiamento"
                        target="_blank">
                        Simular
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import TopBar from '@/components/structure/topBar/index.component.vue';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
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
      };
    },
  });
</script>

<style>
  @media (min-width: 1880px) {
    .pt-xxl {
      padding-top: 6.5rem;
    }
  }
</style>
