<template>
  <div id="app" class="w-full defaultFont">
    <router-view />
    <notificationPopUp />
  </div>
</template>

<script lang='ts'>

import { NotificationInterface } from '@/interfaces/notification.interface';
import notificationPopUp from '@/components/base/notificationPopUp.component.vue';
import { defineComponent, ComponentPublicInstance } from 'vue'

type IRootExtension = ComponentPublicInstance & { [key: string]: string }

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
    let fullUrl = this.$route.fullPath.split("?")
    if (this.$route.fullPath.includes("?")) {
      (this.$root as IRootExtension).utms = "?" + (fullUrl[1])
    }
    setTimeout(() => {
      this.isLoading = true
    }, 600);
  }
})
</script>
