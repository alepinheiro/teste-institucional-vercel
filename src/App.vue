<template>
  <div class="w-full defaultFont selection:bg-complementaryColor1 selection:text-white">
    <RouterView />
    <notificationPopUp />
  </div>
</template>

<script lang="ts">
import notificationPopUp from '@/components/base/notificationPopUp.component.vue'
import { NotificationInterface } from '@/interfaces/notification.interface'
import { defineComponent } from 'vue'
import { useObjectToQueryString } from '@/composables/useObjectToQueryString';

export default defineComponent({
  components: { notificationPopUp },
  data() {
    return {
      isLoading: true,
      notification: {
        type: 'warning',
        title: 'Aviso',
        message: 'teste',
        showMessage: false,
        buttonText: 'Continuar',
      } as NotificationInterface,
      utms: useObjectToQueryString(this.$route.query),
    }
  },
})
</script>
