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
      import('@/assets/css/tailwind.css');
      import('@/configurations/customStyle.css');
      import('@/configurations/themeCustomization.scss');
    },
    mounted() {
      register();
    },
  });
</script>
