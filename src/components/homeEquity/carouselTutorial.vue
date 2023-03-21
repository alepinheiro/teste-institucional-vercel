<template >
    <div class="ml-auto  mr-auto maxWidth">
      <Splide :options=" {type:'loop', perPage: 1, perMove: 1,  drag   : 'free' ,  height   : '25rem',trimSpace: 'move', 
        rewind : true, pagination:true, arrows:true, arrowClass: 'fill: #1500d4'}" aria-label="Você pode obter o recurso para:" id="sliderTutorial"  >
        <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderTutorial"  ref="splide1" >
          <div  class="">
            <img :src="slide.img" class="px-4 lg:pt-12" :alt="slide.alt">
          </div>
        </SplideSlide>
      </Splide>  
    </div>  
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'carouselTutorial',
});
</script>
<style scoped>

</style>