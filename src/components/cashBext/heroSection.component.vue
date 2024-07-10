<template>
  <section>
    <div
      class="flex flex-col max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto w-full min-md:min-h-screen justify-center">
      <!--  <div
        class="absolute inset-x-0 top-48 md:hidden lg:right-1/4 lg:top-[65vh] xl:right-1/3 xl:top-auto z-50"
      >
        <VideoButton video-id="eDWFe4Wrb2A" class="xl:mr-0 lg:mr-0" />
      </div>-->
      <img
        src="/images/cashBext/initialSessionSM.png"
        class="aspect-square min-md:hidden object-cover"
        alt="" />
      <img
        src="/images/cashBext/initialSessionXL.png"
        class="hidden xl:block absolute inset-0 h-screen object-contain -right-48 ml-auto -z-10"
        alt="" />
      <img
        src="/images/cashBext/initialSessionLG.png"
        class="hidden lg:block absolute inset-0 object-contain -right-24 ml-auto -z-10"
        alt="" />
      <img
        src="/images/Home/linesMd.png"
        class="hidden md:block absolute inset-0 w-full object-contain -z-10"
        alt="" />
      <div
        class="flex flex-col gap-5 min-md:gap-10 items-center lg:w-8/12 xl:w-7/12 min-lg:mr-auto min-lg:items-start text-center xl:text-left lg:text-left -mt-16 min-md:mt-0 min-md:pt-28 min-md:pb-10 px-5">
        <h1
          class="text-3xl min-md:text-5xl font-bold font-darkerGrotesque text-center text-textPrimary leading-7 lg:text-left xl:text-left">
          Maximize as oportunidades com
          <span class="text-primary">CashBext:</span> obtenha até
          <span class="text-primary">20X</span> mais opções através do crédito
          com garantia de imóvel
        </h1>

        <component
          :is="'swiper-container'"
          v-bind="sliderOptions"
          class="w-full sm:my-2">
          <component
            :is="'swiper-slide'"
            v-for="{ description, icon, id } of cards"
            :key="id"
            class="cursor-default my-auto px-5 min-md:px-0 w-full">
            <div class="flex flex-row gap-2 items-center w-fit mx-auto">
              <component :is="icon" class="text-primary flex-shrink-0" />
              <p
                class="text-textPrimary text-center text-sm md:text-left min-lg:text-base">
                {{ description }}
              </p>
            </div>
          </component>
        </component>

        <DoubleInputsForm
          v-model="doubleFormData"
          class="bg-[#EFEFEF] p-2 rounded-2xl sm:w-11/12 w-9/12 md:w-full mx-auto"
          @submit="onSubmit" />
        <button
          v-scroll-to="'#businessPartners'"
          class="flex gap-2 justify-between w-fit mx-auto text-textSecondary pt-10 hover:underline">
          <i class="fa-solid fa-chevron-down animate-bounce"></i>
          <span class="text-xs"
            >Ou saiba mais sobre o cashBext rolando para baixo</span
          >
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import CalendarIcon from '@/assets/svg/calendarWithClock.vue';
  import DoubleInputsForm from '@/components/cashBext/heroForm.component.vue';
  import HouseIcon from '@/assets/svg/houseWithMoneySign.vue';
  import PercentIcon from '@/assets/svg/percentWithBackground.vue';
  import VideoButton from '@/components/base/videoButton.component.vue';
  import information from '@/configurations/information';
  import type { SwiperOptions } from 'swiper/types';
  import { defineComponent, markRaw } from 'vue';

  export default defineComponent({
    components: {
      HouseIcon,
      PercentIcon,
      VideoButton,
      CalendarIcon,
      DoubleInputsForm,
    },
    props: {
      showMenu: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        doubleFormData: {
          assetValue: 500000,
          creditValue: 250000,
        },
        cards: [
          {
            id: 'percent',
            icon: markRaw(PercentIcon),
            description: 'A partir de 1.09% a.m. + IPCA ou 1.49% a.m. fixa.',
          },
          {
            id: 'house',
            icon: markRaw(HouseIcon),
            description: 'Até 60% do valor seu imóvel como empréstimo',
          },
          {
            id: 'calendar',
            icon: markRaw(CalendarIcon),
            description: 'Escolha como pagar. Em até 20 anos.',
          },
        ],
        sliderOptions: {
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
        } as SwiperOptions,
      };
    },
    methods: {
      onSubmit() {
        window.open(
          information.appRealEstateSimulator + this.$root.utms,
          '_blank',
        );
      },
    },
  });
</script>
