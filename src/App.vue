<template>
  <div id="app" class="w-full defaultFont">
    <router-view />
    <footerComponent v-if="!isLoading" />
    <notificationPopUp />
  </div>
</template>

<script lang='ts'>

import { NotificationInterface } from '@/interfaces/notification.interface';
import notificationPopUp from '@/components/base/notificationPopUp.component.vue';
import footerComponent from '@/components/structure/footer.component.vue';
import { defineComponent, ComponentPublicInstance } from 'vue'

type IRootExtension = ComponentPublicInstance & { [key: string]: string }

export default defineComponent({
  components: { notificationPopUp, footerComponent },
  data() {
    return {
      isLoading: false,
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
