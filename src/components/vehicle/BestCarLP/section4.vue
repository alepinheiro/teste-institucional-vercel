<template lang="">
    <div class="pt-14 sm:pt-11">
        <div class="maxWidth py-16 sm:py-10 ">
            <h1 class="text-4xl sm:text-3xl font-bold text-white pb-8">Dúvidas frequentes</h1>   
            <Faq />
        </div>
        <h1 class="maxWidth text-4xl sm:text-2xl text-white text-center pt-5l pb-5 sm:pb-2 font-bold">
            Quem sonhou, se organizou e<br />
            investiu com a ajuda da SejaBest
        </h1>
        <Carousel />
        <comparativeBoard />
  </div>

</template>

<script>
import Faq from './Faq.vue';
import Carousel from './carousel.vue';
import comparativeBoard from './comparativeBoard.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'section4',
    components: {Faq,Carousel, comparativeBoard
    } 
})
</script>

<style>
</style>