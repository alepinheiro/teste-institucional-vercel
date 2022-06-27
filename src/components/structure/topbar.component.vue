<template>
<div class="w-full  flex py-4 justify-between" :class="{'bg-transparent':(position!=='top'),'bg-white':(position==='top')}">
  <div class="pr-8">
    <img v-if="position==='top'" :src="$options.imageConfig.logoSejabest"  class="w-auto h-12 "/>
    <img v-if="position!=='top'" :src="$options.imageConfig.logoSejabestWhite"  class="w-auto h-12 "/>
  </div>
  <menuComponent class="sm:hidden md:hidden" :linkStyle="linkStyle" />
  <menuMobileComponent class="xl:hidden lg:hidden"  :color="color" :linkStyle="linkStyle" />
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
      linkStyle:'linkStyleDark'
    }
  },
  mounted() {
    if(this.position === 'top'){
      this.color = 'fill-textPrimary'
      this.linkStyle = 'linkStyle'
    }
  },
})
</script>
