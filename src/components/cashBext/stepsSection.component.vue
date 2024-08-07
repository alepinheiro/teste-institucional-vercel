<template>
  <section class="py-10 sm:pt-0 bg-[#EFEFEF]">
    <div class="xl:max-w-7xl lg:max-w-5xl px-5 mx-auto flex flex-col gap-10">
      <div
        class="flex flex-row w-full justify-between items-center md:max-w-2xl md:mx-auto">
        <div class="flex flex-col gap-1">
          <h2 class="min-md:text-3xl text-2xl text-primary font-bold">
            Sem filas, Sem gerentes, Sem complexidade
          </h2>
          <p class="text-base text-textPrimary">
            São apenas 4 passos para você receber o seu crédito.
          </p>
        </div>
      </div>
      <Swiper
        v-bind="{
          spaceBetween: 20,
          slidesPerView: 'auto',
          pagination: true,
          autoplay: {
            delay: 8000,
          },
          breakpoints: {
            1280: {
              slidesPerView: 4,
            },
          },
          modules: [Pagination, Autoplay, Navigation],
        }"
        class="w-full md:pl-24">
        <SwiperSlide
          v-for="{ id, icon, title, description, callToAction } of stepCards"
          :key="id"
          class="bg-white rounded-lg p-6 h-auto w-80 lg:w-80 md:w-72 sm:w-60 mb-10 hover:shadow-lg hover:shadow-[#0524dd30] transition-all ease-linear cursor-default group hover:bg-primary">
          <div
            class="flex flex-col gap-5 xl:gap-8 items-start font-Public-Sans">
            <Component
              :is="icon"
              class="text-primary group-hover:text-white w-5 h-5" />
            <h3
              class="text-2xl lg:text-lg sm:text-xl font-bold group-hover:text-white">
              {{ id }}. {{ title }}
            </h3>
            <p
              class="text-base group-hover:text-white"
              v-html="description"></p>
            <a
              v-if="callToAction"
              :href="callToAction[1]"
              class="underline sm:text-sm group-hover:text-white">
              {{ callToAction[0] }}
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script lang="ts">
  import { Pagination, Autoplay, Navigation } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { defineAsyncComponent, defineComponent } from 'vue';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
  import { useRoute } from 'vue-router';
  import { markRaw } from 'vue';
  export default defineComponent({
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      const route = useRoute();

      const stepCards = [
        {
          id: 1,
          icon: markRaw(
            defineAsyncComponent(
              () => import('@/assets/svg/faIcon/layerGroup.vue'),
            ),
          ),
          title: 'Simule',
          description:
            'A simulação é feita através do nosso simulador. <b>Em até 20 minutos você tem o resultado, porque seu tempo é valioso.</b>',
          callToAction: [
            'Simule agora',
            `https://simulador.bext.vc/imovel${useObjectToQueryString(route.query)}`,
          ],
        },
        {
          id: 2,
          icon: markRaw(
            defineAsyncComponent(() => import('@/assets/svg/faIcon/file.vue')),
          ),
          title: 'Documentação',
          description:
            'Para uma análise de crédito detalhada, envie os documentos solicitados. <b>Então seus dados serão analisados e, em seguida, uma proposta será enviada.</b>',
          callToAction: [
            'Baixe o checklist',
            `https://simulador.bext.vc/imovel${useObjectToQueryString(route.query)}`,
          ],
        },
        {
          id: 3,
          icon: markRaw(
            defineAsyncComponent(
              () => import('@/assets/svg/faIcon/magnifyingGlass.vue'),
            ),
          ),
          title: 'Avaliação e jurídico',
          description:
            'Nesta etapa, um engenheiro avalia quanto o imóvel vale. Além disso, é feita uma análise para conferir a <b>situação jurídica da propriedade e validar o bem como uma garantia.</b>',
          callToAction: null,
        },
        {
          id: 4,
          icon: markRaw(
            defineAsyncComponent(
              () => import('@/assets/svg/faIcon/circleDollarToSlot.vue'),
            ),
          ),
          title: 'Liberação',
          description:
            'Agora a documentação é encaminhada para o cartório e você assina os documentos digitalmente. <b>O seu bem é então alienado e seu recurso liberado na sua conta!</b>',
          callToAction: null,
        },
      ];

      return {
        route,
        Autoplay,
        stepCards,
        Pagination,
        Navigation,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @screen sm {
    .swiper-slide-active {
      @apply shadow-lg shadow-[#0524dd30] bg-primary text-white;
      svg {
        @apply text-white;
      }
    }
  }
</style>
