<template>
  <div class="w-full defaultFont selection:bg-primary selection:text-white">
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KVJ4GJS"
        height="0"
        width="0"
        style="display: none; visibility: hidden"></iframe
    ></noscript>
    <RouterView />
  </div>
</template>

<script lang="ts">
  import { NotificationInterface } from '@/interfaces/notification.interface';
  import { defineComponent } from 'vue';
  import { register } from 'swiper/element/bundle';
  import { useHead } from '@unhead/vue';
  import { useGoogleTagManager } from '@/composables/useGoogleTagManager';

  export default defineComponent({
    props: {
      utmQuery: {
        type: String,
        required: false,
        default: '',
      },
    },
    setup(props, ctx) {
      useHead({
        script() {
          useGoogleTagManager(
            window,
            document,
            'script',
            'dataLayer',
            'GTM-KVJ4GJS',
          );
          return [{}];
        },
        title:
          'Bext - Crédito imobiliário - Sem filas, sem gerentes, sem complexidade.',
        meta: [
          {
            name: 'description',
            content:
              'A Bext é um fintech focada no mercado de crédito, atuando por meio de dois produtos: Financiamento Imobiliário e empréstimo com garantia de imóvel (Home Equity). Mais de 10 anos de experiência em crédito Imobiliario, temos uma missão clara: Transformar o acesso ao Crédito Imobiliário para todos os brasileiros.',
          },
          {
            name: 'keywords',
            content:
              'crédito imobiliário, crédito automotivo, menores taxas, pagamento em até 60x, pagamento em até 240x, pagamento em até 420x, plataforma multibancos, processo agilizado, assessoria personalizada, atendimento 7 dias por semana, sem burocracias, sem filas, foco no cliente',
          },
          {
            name: 'robots',
            content:
              'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
          },
          {
            name: 'googlebot',
            content: 'index, follow, all',
          },
          {
            name: 'author',
            content: 'Bext',
          },
          {
            name: 'publisher',
            content: 'Bext',
          },
        ],
      });
    },
    data(props) {
      return {
        isLoading: true,
        notification: {
          type: 'warning',
          title: 'Aviso',
          message: 'teste',
          showMessage: false,
          buttonText: 'Continuar',
        } as NotificationInterface,
        utms: props.utmQuery ?? '',
      };
    },
    created() {
      import('@/configurations/color.css');
      import('@/configurations/themeCustomization.scss');
      import('@/configurations/customStyle.css');
    },
    mounted() {
      register();
    },
  });
</script>
