<template>
  <div id="app" class="w-full defaultFont">
    <router-view/>
    <footerComponent />
    <notificationPopUp />
  </div>
</template>
<script lang='ts'>
import { NotificationInterface } from '@/interfaces/notification.interface';
import notificationPopUp from '@/components/base/notificationPopUp.component.vue';
import footerComponent from '@/components/structure/footer.component.vue';
import { defineComponent } from 'vue'
export default defineComponent({
    components:{ notificationPopUp, footerComponent  },
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
