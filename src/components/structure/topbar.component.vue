<template>
<div class="w-full sm:px-2 md:px-2 flex py-4 justify-between" :class="{'bg-transparent':(position!=='top'),'bg-white':(position==='top')}">
  <div class="pr-8">
    <img v-if="position==='top'" :src="$options.imageConfig.logoSejabest"  class="w-auto h-12 "/>
    <img v-if="position!=='top'" :src="$options.imageConfig.logoSejabestWhite"  class="w-auto h-12 "/>
  </div>
  <menuComponent class="sm:hidden md:hidden" :class="{'text-white':(position!=='top'),'text-primary':(position==='top')}" />
  <menuMobileComponent class="xl:hidden lg:hidden"  :color="color" />
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import menuComponent from '@/components/structure/menu.component.vue'
import menuMobileComponent from '@/components/structure/menuMobile.component.vue'
export default defineComponent({
  name: 'topbarComponent',
  components:{menuComponent, menuMobileComponent},
  props: {
    position: String,
  },
  data() {
    return {
      color:'fill-white',
    }
  },
  mounted() {
    if(this.position==='top'){
      color='fill-menuIconColor'
    }
  },
})
</script>
