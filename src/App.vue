<template>
  <div
    class="w-full defaultFont selection:bg-primary selection:text-white"
  >
    <LoadingBrandChange />
    <RouterView />
    <NotificationPopUp />
  </div>
</template>

<script lang="ts">
import NotificationPopUp from '@/components/base/notificationPopUp.component.vue'
import { NotificationInterface } from '@/interfaces/notification.interface'
import  LoadingBrandChange  from '@/components/structure/loadingBrandChange.component.vue'
import { defineComponent } from 'vue'
import { register } from 'swiper/element/bundle'

export default defineComponent({
  components: { NotificationPopUp, LoadingBrandChange },
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
    }
  },
  created() {
    import('@/configurations/color.css')
    import('@/assets/css/tailwind.css')
    import('@/configurations/customStyle.css')
    import('@/configurations/themeCustomization.scss')
  },
  mounted() {
    register()
  },
})
</script>
