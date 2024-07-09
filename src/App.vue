<template>
  <div class="w-full defaultFont selection:bg-primary selection:text-white">
    <RouterView />
    <NotificationPopUp />
  </div>
</template>

<script lang="ts">
  import { NotificationInterface } from '@/interfaces/notification.interface';
  import { defineComponent } from 'vue';
  import { register } from 'swiper/element/bundle';

  export default defineComponent({
    components: {
      NotificationPopUp: () =>
        '@/components/base/notificationPopUp.component.vue',
    },
    props: {
      utmQuery: {
        type: String,
        required: false,
        default: '',
      },
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
