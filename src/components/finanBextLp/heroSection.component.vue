<template>
  <section class="w-full flex relative min-h-screen">
    <div class="absolute inset-0 overflow-hidden z-0 flex items-end sm:h-2/3">
      <ResponsiveImage
        imagePath="/images/finanBext/heroBgXL.png"
        :imgAttrs="{
          role: 'presentation',
          class: 'object-cover',
          loading: 'eager',
          fetchpriority: 'high',
        }"
        class="hidden min-lg:block h-full ml-auto" />
      <ResponsiveImage
        imagePath="/images/finanBext/heroBgMD.png"
        :imgAttrs="{
          role: 'presentation',
          class: 'object-cover',
          loading: 'eager',
          fetchpriority: 'high',
        }"
        class="min-lg:hidden h-full w-full" />
    </div>

    <div
      class="relative max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto flex flex-row w-full z-10 py-0 px-0 min-md:px-5">
      <!--  -->
      <div
        class="lg:w-7/12 xl:w-5/12 lg:flex-initial min-md:mt-auto md:pb-10 pt-32 min-lg:pb-32">
        <div
          class="bg-gradient-to-b min-md:bg-gradient-to-t sm:text-center via-white from-transparent to-white/80 lg:shadow-md xl:shadow-md flex flex-col gap-6 p-8 xl:px-6 py-6 min-md:rounded-xl min-hd:shadow-lg md:shadow-lg h-full justify-end">
          <h1
            class="min-lg:font-darkerGrotesque font-Public-Sans text-2xl md:text-4xl min-lg:text-6xl text-primary leading-tight whitespace-pre-line min-lg:font-bold">
            <span class="font-bold">
              Financie com a Bext e multiplique as suas opções
            </span>
          </h1>
          <!--  -->
          <p
            class="text-base text-textPrimary text-justify sm:text-center min-lg:hidden">
            Financie seu imóvel com as melhores condições do mercado.
            <b>
              Sem filas, sem gerentes, sem complexidade e com um time de
              especialistas totalmente pronto pra lhe ajudar.
            </b>
          </p>
          <!--  -->
          <div class="hidden min-lg:flex flex-row gap-4">
            <div
              v-for="{ description, icon, id } of cards"
              :key="id"
              class="flex flex-row gap-2 items-center mx-auto w-full">
              <Component :is="icon" class="text-primary flex-shrink-0" />
              <p class="text-textPrimary text-left text-base">
                {{ description }}
              </p>
            </div>
          </div>

          <hr class="border-1 border-textPrimary hidden min-lg:block" />
          <InputsForm
            v-model="formData"
            class="w-full sm:bg-[#EFEFEF] rounded-xl py-4"
            @submit="onSubmit" />
        </div>
        <!--  -->
        <button
          v-scroll-to="'#businessPartners'"
          class="flex gap-2 justify-between w-fit mx-auto text-textSecondary sm:pt-4 pt-8 hover:underline">
          <ChevronDown class="animate-bounce h-4 w-3" />
          <span class="text-xs">
            Ou saiba mais sobre o FinanBext rolando para baixo
          </span>
          <ChevronDown class="animate-bounce h-4 w-3" />
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, markRaw, ref, defineAsyncComponent } from 'vue';
  import { links } from '@/configurations/information';
  import InputsForm from '@/components/finanBextLp/heroForm.component.vue';
  import ChevronDown from '@/assets/svg/faIcon/chevronDown.vue';

  export default defineComponent({
    components: {
      InputsForm,
      ChevronDown,
    },
    data() {
      const formData = ref({
        assetValue: 500000,
        creditValue: 400000,
      });

      const cards = [
        {
          id: 'percent',
          icon: markRaw(
            defineAsyncComponent(
              () => import('@/assets/svg/percentWithBackground.vue'),
            ),
          ),
          description: 'Taxas a partir de 9,70% a.a. + taxas referencial',
        },
        {
          id: 'calendar',
          icon: markRaw(
            defineAsyncComponent(
              () => import('@/assets/svg/calendarWithClock.vue'),
            ),
          ),
          description: 'Pague em até 420 meses',
        },
      ];

      return {
        formData,
        cards,
      };
    },
    methods: {
      onSubmit() {
        window.open(links.simulator.urlRealty + this.$root.utms, '_blank');
      },
    },
  });
</script>
