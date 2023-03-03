<template lang="">
<div>
  <headVideo />
  <div class="gradientPrimaryToSecondary">
        <section2 />
        <section3 />
        <section4 />
  </div>
    <div class="w-full bg-gradient-to-r from-primary to-secondary pt-16 pb-4 sm:mt-0 sm:pt-0 lg:pt-0 md:pt-0" >
        <div class="maxWidth flex justify-center ">
            <div class="w-3/12 sm:w-6/12 md:w-4/12 relative">
                <img :src="$options.imageConfig.home.photoFooter"  alt="Gaspar Motta Filho"
                    class="w-full absolute bottom-[-1.77rem] sm:bottom-[-2.6rem] md:bottom-[-2.78rem] lg:bottom-[-2.9rem] h-auto "/>
            </div>
        <div class="w-9/12 sm:w-6/12 md:w-8/12">
            <div class="text-white pt-4 titleFontBold text-5xl lg:text-4xl md:text-3xl sm:text-xl text-right">
                E aí, vamos ser<br/> Best com a gente?
            </div>
        <div class="py-10 md:py-4 lg:py-6 sm:py-2 text-right sm:text-xs" >
         <button class="buttonComplementaryColor1">
          <a 
            :href="$options.information.appVehicleSimulator+this.$root.utms"  style=" text-decoration: none;"
            target="_blank">Faça uma simulação</a></button>
        </div>
        <div class="w-full flex">
          <div class="w-9/12 lg:w-8/12 sm:w-5/12 md:w-7/12 border-b-1 border-white mt-auto mb-auto"></div>
          <div class="w-3/12 lg:w-4/12 sm:w-7/12 md:w-5/12 text-right text-white">
            <div class="font-semibold sm:text-xs md:text-sm">Gaspar Motta Filho</div>
            <div class="text-sm sm:text-2xs">CEO & Founder - SejaBest</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';
import section2 from '@/components/vehicle/BestCarLP/section2.vue';
import section3 from '@/components/vehicle/BestCarLP/section3.vue';
import section4 from '@/components/vehicle/BestCarLP/section4.vue';
import headVideo from '@/components/vehicle/BestCarLP/headVideo.vue';
export default defineComponent({
    name:'BestCarLP',
    components: {section2,section3,section4,headVideo
    }
})
</script>
<style lang="">
    
</style>