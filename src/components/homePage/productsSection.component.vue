<template>
  <section class="px-5 w-full">
    <div class="flex flex-col">
      <div
        class="flex flex-col text-textPrimary gap-5 text-center lg:text-left xl:text-left lg:max-w-5xl xl:max-w-7xl mx-auto w-full">
        <h2 class="text-xl min-md:text-3xl font-bold">
          Como podemos ajudar você ou seu negócio?
        </h2>
        <p class="min-md:text-xl">
          São diversos produtos pensados para a sua necessidade:
        </p>
      </div>
    </div>

    <div class="pb-12 pt-8 xl:max-w-7xl max-w-[100vw]">
      <Swiper
        v-bind="{
          loop: useWindow.width.value < 1024,
          spaceBetween: 20,
          autoHeight: false,
          slidesPerView: 1.2,
          centeredSlides: true,
          modules: [Pagination, Autoplay, Navigation],
          pagination: {
            enabled: true,
            clickable: true,
          },
          autoplay: {
            delay: 8000,
          },
          breakpoints: {
            767: {
              slidesPerView: 2.5,
            },
            1023: {
              slidesPerView: 3.5,
            },
            1277: {
              slidesPerView: 4,
              centeredSlides: false,
            },
          },
        }">
        <SwiperSlide
          v-for="{ title, description, moreInformation } of steps"
          :key="title"
          class="bg-white text-textPrimary hover:text-white py-8 px-4 rounded-lg mb-16 h-auto group hover:bg-bgDarkColor transition ease-in-out">
          <div class="flex flex-col gap-6 justify-between h-56">
            <h3 class="text-2xl font-bold">
              {{ title }}
            </h3>

            <p>
              {{ description }}
            </p>

            <div class="flex flex-row items-center gap-5 text-sm">
              <a
                :href="
                  information.appSimulator +
                  useObjectToQueryString($route.query)
                "
                target="_blank"
                class="bg-primary px-3 py-2 rounded-xl text-white font-bold">
                Simule grátis
              </a>
              <RouterLink
                :to="{ path: moreInformation, query: $route.query }"
                class="underline text-xs text-textSecondary">
                Saiba mais
              </RouterLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script lang="ts">
  import 'swiper/css/bundle';
  import BuildingIcon from '@/components/homePage/icons/buildingIcon.component.vue';
  import CalendarIcon from '@/components/homePage/icons/calendarIcon.component.vue';
  import CarIcon from '@/components/homePage/icons/carIcon.component.vue';
  import DollarBagIcon from '@/components/homePage/icons/dollarBag.component.vue';
  import DollarSignIcon from '@/components/homePage/icons/dollarSign.component.vue';
  import PercentIcon from '@/components/homePage/icons/percentIcon.component.vue';
  import information from '@/configurations/information';
  import { Pagination, Autoplay, Navigation } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { defineComponent, ref, markRaw } from 'vue';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
  import { useWindowSize } from '@vueuse/core';

  export default defineComponent({
    components: { Swiper, SwiperSlide },
    setup() {
      const steps = ref([
        {
          title: 'Crédito com Garantia de Imóvel',
          description:
            'Use seu imóvel quitado como garantia para conseguir crédito.',
          features: [
            {
              icon: markRaw(PercentIcon),
              text: 'Taxas a partir de <b>1,09% a.m.</b> + indexadores.',
            },
            {
              icon: markRaw(CalendarIcon),
              text: 'Escolha o prazo: pague em até <b>240 meses.</b>',
            },
            {
              icon: markRaw(DollarSignIcon),
              text: 'Até <b>60% do valor</b> do imóvel como capital.',
            },
          ],
          moreInformation: '/home-equity',
        },
        {
          title: 'Financiamento Imobiliário',
          description:
            'Financie seu imóvel com as melhores taxas e os melhores prazos.',
          features: [
            {
              icon: markRaw(PercentIcon),
              text: 'Taxas a partir de <b> 9,70% a.a. </b> + indexadores.',
            },
            {
              icon: markRaw(CalendarIcon),
              text: 'Pagamento flexível em até <b>420 meses.</b>',
            },
            {
              icon: markRaw(BuildingIcon),
              text: 'Financie em mais de <b>20 bancos parceiros.</b>',
            },
          ],
          moreInformation: '/financiamento-imobiliario',
        },
        {
          title: 'Crédito com Garantia Veicular',
          description: 'Use seu carro, caminhão ou utilitário como garantia.',
          features: [
            {
              icon: markRaw(PercentIcon),
              text: 'Crédito a partir de <b>1,59% a.m.</b> + taxas.',
            },
            {
              icon: markRaw(CalendarIcon),
              text: 'Pague em até 60 meses. <b>Você escolhe.</b>',
            },
            {
              icon: markRaw(DollarBagIcon),
              text: 'Use seu crédito como <b>você quiser.</b>',
            },
          ],
          moreInformation: '/emprestimo-com-garantia-de-veiculo',
        },
        {
          title: 'Financiamento Veicular',
          description:
            'Simule on-line e grátis e financie o carro dos seus sonhos.',
          features: [
            {
              icon: markRaw(PercentIcon),
              text: 'Taxas a partir de <b>1,49% a.m.</b> + indexadores.',
            },
            {
              icon: markRaw(CalendarIcon),
              text: 'Pagamento em até <b>60 meses ou 5 anos.</b>',
            },
            {
              icon: markRaw(CarIcon),
              text: 'Financie carros novos ou até seminovos.',
            },
          ],
          moreInformation: '/financiamento-veicular',
        },
      ]);

      return {
        steps,
        Autoplay,
        Pagination,
        information,
        Navigation,
        useWindow: useWindowSize(),
        useObjectToQueryString,
      };
    },
  });
</script>

<style lang="scss" scoped>
  ::part(bullet) {
    background: #d9d9d9;
    opacity: 100;
  }
  ::part(bullet-active) {
    @apply scale-150 transition-all bg-primary;
  }

  .swiper-wrapper {
    @apply flex flex-row h-full;
  }
</style>
