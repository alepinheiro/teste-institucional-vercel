<template>
  <section>
    <div
      class="flex flex-col max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto w-full min-md:min-h-screen justify-center">
      <ResponsiveImage
        imagePath="/images/cashBext/initialSessionSM.png"
        class="aspect-square min-md:hidden object-cover"
        :imgAttrs="{
          loading: 'eager',
          fetchpriority: 'high',
          alt: 'Gaspar Motta - CEO Bext',
        }" />

      <ResponsiveImage
        imagePath="/images/cashBext/initialSessionXL.png"
        class="hidden xl:block absolute inset-0 h-screen -right-48 ml-auto -z-10"
        :imgAttrs="{
          loading: 'eager',
          fetchpriority: 'high',
          alt: 'Gaspar Motta - CEO Bext',
          class: 'object-contain object-right',
        }" />

      <ResponsiveImage
        imagePath="/images/cashBext/initialSessionLG.png"
        class="hidden lg:block absolute inset-0 object-contain -right-24 ml-auto -z-10"
        :imgAttrs="{
          loading: 'eager',
          fetchpriority: 'high',
          alt: 'Gaspar Motta - CEO Bext',
          class: 'object-contain object-right',
        }" />

      <ResponsiveImage
        imagePath="/images/Home/linesMd.png"
        :imgAttrs="{
          role: 'presentation',
          loading: 'lazy',
        }"
        class="hidden md:block absolute inset-0 w-full object-contain -z-10" />
      <div
        class="flex flex-col gap-5 min-md:gap-10 items-center lg:w-8/12 xl:w-7/12 min-lg:mr-auto min-lg:items-start text-center xl:text-left lg:text-left -mt-16 min-md:mt-0 min-md:pt-28 min-md:pb-10 px-5">
        <h1
          class="text-3xl min-md:text-5xl font-bold font-darkerGrotesque text-center text-textPrimary leading-7 lg:text-left xl:text-left">
          Maximize as oportunidades com
          <span class="text-primary">CashBext:</span> obtenha até
          <span class="text-primary">20X</span> mais opções através do crédito
          com garantia de imóvel
        </h1>

        <Swiper
          v-bind="{
            spaceBetween: 0,
            slidesPerView: 1,
            loop: true,
            autoHeight: false,
            autoplay: {
              delay: 2000,
            },
            breakpoints: {
              667: {
                slidesPerView: 3,
                autoplay: false,
                spaceBetween: 20,
                loop: false,
              },
            },
            modules: [Autoplay],
          }"
          class="w-full sm:my-2">
          <SwiperSlide
            v-for="{ description, icon, id } of cards"
            :key="id"
            class="cursor-default my-auto px-5 min-md:px-0 w-full">
            <div class="flex flex-row gap-2 items-center w-fit mx-auto">
              <Component :is="icon" class="text-primary flex-shrink-0" />
              <p
                class="text-textPrimary text-center text-sm md:text-left min-lg:text-base">
                {{ description }}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <DoubleInputsForm
          v-model="doubleFormData"
          class="bg-[#EFEFEF] p-2 rounded-2xl sm:w-11/12 w-9/12 md:w-full mx-auto"
          @submit="onSubmit" />
        <button
          v-scroll-to="'#businessPartners'"
          class="flex gap-1 justify-between w-fit mx-auto text-textSecondary pt-10 hover:underline">
          <ChevronDown class="animate-bounce h-4 w-3" />
          <span class="text-xs">
            Ou saiba mais sobre o cashBext rolando para baixo
          </span>
          <ChevronDown class="animate-bounce h-4 w-3" />
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { links } from '@/configurations/information';
  import { Autoplay } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { defineAsyncComponent, defineComponent, markRaw } from 'vue';

  export default defineComponent({
    components: {
      DoubleInputsForm: defineAsyncComponent(
        () => import('@/components/cashBext/heroForm.component.vue'),
      ),
      ChevronDown: defineAsyncComponent(
        () => import('@/assets/svg/faIcon/chevronDown.vue'),
      ),
      Swiper,
      SwiperSlide,
    },
    props: {
      showMenu: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        Autoplay,
        doubleFormData: {
          assetValue: 500000,
          creditValue: 250000,
        },
        cards: [
          {
            id: 'percent',
            icon: markRaw(
              defineAsyncComponent(
                () => import('@/assets/svg/percentWithBackground.vue'),
              ),
            ),
            description: 'A partir de 1.09% a.m. + IPCA ou 1.49% a.m. fixa.',
          },
          {
            id: 'house',
            icon: markRaw(
              defineAsyncComponent(
                () => import('@/assets/svg/houseWithMoneySign.vue'),
              ),
            ),
            description: 'Até 60% do valor seu imóvel como empréstimo',
          },
          {
            id: 'calendar',
            icon: markRaw(
              defineAsyncComponent(
                () => import('@/assets/svg/calendarWithClock.vue'),
              ),
            ),
            description: 'Escolha como pagar. Em até 20 anos.',
          },
        ],
      };
    },
    methods: {
      onSubmit() {
        window.open(links.simulator.urlRealty + this.$root.utms, '_blank');
      },
    },
  });
</script>
