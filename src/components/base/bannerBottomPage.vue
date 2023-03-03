<template lang="">
  <div class="w-full bg-gradient-to-r from-primary to-secondary pb-4  bgFooter " >
    <div class="maxWidth flex justify-center sm:h-auto md:h-[200px]">
      <img :src="$options.imageConfig.home.photoFooter"  alt="Gaspar Motta"
         class="lg:hidden md:hidden xl:hidden w-[10rem] absolute bottom-[-1.77rem] sm:bottom-[-0.5rem] sm:left-[0.25rem] md:bottom-[-2.78rem] lg:bottom-[-2.9rem] h-auto "/>
      <div class="w-3/12 sm:w-6/12 md:w-4/12 relative sm:hidden">
       <img :src="$options.imageConfig.home.photoFooter"  alt="Gaspar Motta"
         class="w-full absolute bottom-[-1.77rem] sm:bottom-[-2.6rem] md:bottom-[-2.78rem] lg:bottom-[-2.9rem] h-auto "/>
      </div>
      <div class="w-9/12 sm:w-10/12 md:w-8/12 items-end flex justify-end flex-col sm:ml-20">
        <div class="text-white pt-4 sm:pt-0 titleFontBold text-7xl lg:text-7xl md:text-5xl sm:text-3xl ">
           E aí, vamos ser<br/> <span class="text-complementaryColor3"> Best</span> com a gente?
        </div>
        <div class="py-10 md:py-0 md:pt-2 lg:py-6 sm:py-2 sm:text-xs mr-20 md:mr-4 sm:mr-6" >
         <button class="p-2 px-8 sm:px-2 sm:p-1 text-2xl sm:text-lg md:text-xl bg-complementaryColor1 rounded-xl text-white w-full uppercase sm:normal-case">
          <a 
            :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
            target="_blank"><span class="font-bold">clique aqui</span> e simule <span class="sm:hidden">agora</span></a></button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: "rodape",
})
</script>
<style lang="">
    
</style>