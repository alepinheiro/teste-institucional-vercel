<template>
  <section class="pb-10 w-full bg-[#EFEFEF]">
    <div class="w-full mx-auto maxWidth">
      <Swiper
        :is="'swiper-container'"
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
          modules: [Autoplay, Pagination],
        }"
        class="w-full px-5">
        <SwiperSlide
          v-for="{ id, icon, title, text, link } of steps"
          :key="id"
          class="bg-white rounded-lg p-8 sm:p-6 h-auto w-80 lg:w-80 md:w-72 sm:w-60 mb-10 hover:shadow-lg hover:shadow-[#0524dd30] transition-all ease-linear cursor-default group hover:bg-primary">
          <div class="flex flex-col gap-4 items-start font-Public-Sans">
            <Component
              :is="icon"
              class="text-primary w-5 h-5 group-hover:text-white" />
            <h3
              class="text-2xl lg:text-lg sm:text-xl font-bold group-hover:text-white">
              {{ title }}
            </h3>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <p class="text-base group-hover:text-white" v-html="text"></p>
            <a
              v-if="link"
              :href="link[0]"
              class="underline sm:text-sm group-hover:text-white">
              {{ link[1] }}
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script lang="ts">
  import useWindowSize from '@/composables/useWindowSize';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import {
    defineComponent,
    ref,
    onMounted,
    computed,
    markRaw,
    defineAsyncComponent,
  } from 'vue';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
  import { useRoute } from 'vue-router';
  import { Autoplay, Pagination } from 'swiper/modules';

  export default defineComponent({
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      const { width } = useWindowSize();
      const route = useRoute();
      const pagination = computed(() => width.value < 1024);

      const steps = [
        {
          id: 1,
          icon: markRaw(
            defineAsyncComponent(
              () => import('@/assets/svg/faIcon/layerGroup.vue'),
            ),
          ),
          title: '1. Simule',
          text: 'A simulação é feita através do nosso simulador. <b>Em até 20 minutos você tem o resultado, porque seu tempo é valioso.</b>',
          link: [
            `https://simulador.bext.vc/imovel${useObjectToQueryString(route.query)}`,
            'Simule agora',
          ],
        },
        {
          id: 2,
          icon: markRaw(
            defineAsyncComponent(() => import('@/assets/svg/faIcon/file.vue')),
          ),
          title: '2. Documentação',
          text: 'Para uma análise de crédito detalhada, envie os documentos solicitados.<b> Então seus dados serão analisados e, em seguida, uma proposta será enviada </b>',
          link: [
            `https://simulador.bext.vc/imovel${useObjectToQueryString(route.query)}`,
            'Baixe o checklist',
          ],
        },
        {
          id: 3,
          icon: markRaw(
            defineAsyncComponent(
              () => import('@/assets/svg/faIcon/magnifyingGlass.vue'),
            ),
          ),
          title: '3. Avaliação e Jurídico',
          text: 'Nesta etapa, um engenheiro avalia quanto o imóvel vale. Além disso, é feita uma análise para conferir a <b>situação jurídica da propriedade e validar o bem como uma garantia.</b>',
          link: null,
        },
        {
          id: 4,
          icon: markRaw(
            defineAsyncComponent(
              () => import('@/assets/svg/faIcon/circleDollarToSlot.vue'),
            ),
          ),
          title: '4. Liberação',
          text: 'Agora a documentação é encaminhada para o cartório e você assina os documentos digitalmente. <b>O seu bem é então alienado e seu recurso liberado na sua conta!</b>',
          link: null,
        },
      ];

      return {
        route,
        steps,
        Autoplay,
        Pagination,
        pagination,
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
