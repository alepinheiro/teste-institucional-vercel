<template>
  <div id="app" class="w-full  ">
    <router-view/>
    <footer />
    <notificationPopUp />
  </div>
</template>
<script lang='ts'>
import { NotificationInterface } from '@/interfaces/notification.interface';
import notificationPopUp from '@/components/base/notificationPopUp.component.vue';
import footer from '@/components/structure/footer.component.vue';
import { defineComponent } from 'vue'
export default defineComponent({
    components:{ notificationPopUp, footer  },
    data() {
      return{
        notification : {
          type: 'warning',
          title: "Aviso",
          message: "teste",
          showMessage: false,
          buttonText:'Continuar'
        } as NotificationInterface,
      }
    },
    
})
</script>
