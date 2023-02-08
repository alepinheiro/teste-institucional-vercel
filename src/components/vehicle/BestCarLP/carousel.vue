<template>
    <div>
        <div class="maxWidth">
        <div class="w-full mr-auto ml-auto sm:w-full py-8">
          <Splide :options=" {type:'loop', perPage: 1, perMove: 1, padding: '1rem', drag   : 'free',
             rewind : true, focus  : 'center', pagination:true} " aria-label="Vantagens para você">
            <SplideSlide v-for="slide in $options.imageConfig.depositions">
              <div  class="">
                <img :src="slide.img" 
                class="px-4 w-8/12 mr-auto ml-auto sm:w-full" :alt="slide.alt">
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Carousel',
})
</script>
<style lang="">
    
</style>