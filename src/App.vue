<template>
  <div
    class="w-full defaultFont selection:bg-complementaryColor1 selection:text-white"
  >
    <RouterView />
    <NotificationPopUp />
  </div>
</template>

<script lang="ts">
import NotificationPopUp from '@/components/base/notificationPopUp.component.vue'
import { NotificationInterface } from '@/interfaces/notification.interface'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { NotificationPopUp },
  props: {
    utmQuery: {
      type: String,
      required: false,
      default: '',
    }
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
})
</script>
