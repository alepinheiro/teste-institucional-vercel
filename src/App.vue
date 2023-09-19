<template>
  <div class="w-full defaultFont">
    <RouterView  />
    <notificationPopUp />
  </div>
</template>

<script lang="ts">

import notificationPopUp from '@/components/base/notificationPopUp.component.vue'
import { NotificationInterface } from '@/interfaces/notification.interface'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { notificationPopUp },
  data() {
    return {
      isLoading: true,
      notification: {
        type: 'warning',
        title: "Aviso",
        message: "teste",
        showMessage: false,
        buttonText: 'Continuar'
      } as NotificationInterface,
      utms: "" as string
    }
  },
  mounted() {
    let fullUrl = this.$route.fullPath.split('?')
    if (this.$route.fullPath.includes('?') && this.$root) {
      this.$root.utms = '?' + fullUrl[1]
    }
    setTimeout(() => {
      this.isLoading = true
    }, 600);
  }
})
</script>
