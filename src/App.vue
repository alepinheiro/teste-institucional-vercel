<template>
  <div id="app" class="w-full defaultFont" v-if="!isLoading">
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
        isLoading:true,
        notification : {
          type: 'warning',
          title: "Aviso",
          message: "teste",
          showMessage: false,
          buttonText:'Continuar'
        } as NotificationInterface,
        utms:"" as String
      }
    },
  mounted() {
    if( this.$route.fullPath.includes("?") ){
      var fullUrl = this.$route.fullPath.split("?")
      this.$root.utms="?"+(fullUrl[1])  
    }
    setTimeout(() => {  
      this.isLoading=false 
    }, 100);
  }
    
   
    
})
</script>
