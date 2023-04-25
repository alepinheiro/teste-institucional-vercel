<template >
    <div class="ml-auto  mr-auto maxWidth">
      <Splide 
        id="sliderTutorial"
        :options=" {type:'loop', perPage: 1, perMove: 1,  drag   : 'free' ,  height   : '25rem',trimSpace: 'move', 
        rewind : true, pagination:true, arrows:true, arrowClass: 'fill: #1500d4'}" aria-label="Você pode obter o recurso para:"   >
        <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderTutorial" :key="slide.img"  ref="splide1" >
          <div class="">
            <img :src="slide.img" class="px-4 lg:pt-12" :alt="slide.alt">
          </div>
        </SplideSlide>
      </Splide>  
    </div>  
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'CarouselTutorial',
});
</script>
<style scoped>

</style>