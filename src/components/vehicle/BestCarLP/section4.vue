<template>
    <div class="pt-14 sm:pt-11">
        <section class="maxWidth py-16 sm:py-10 ">
            <h1 class="text-4xl sm:text-3xl font-bold text-white pb-8">
                Dúvidas frequentes
            </h1>
            <Faq />
        </section>
        <section>
            <h1 class="maxWidth text-4xl sm:text-2xl text-white text-center pt-5l pb-5 sm:pb-2 font-bold">
                Quem sonhou, se organizou e<br />
                investiu com a ajuda da SejaBest
            </h1>
            <Carousel />
        </section>
        <ComparativeBoard />
  </div>
</template>

<script lang="ts">

import Faq from './Faq.vue';
import Carousel from './carousel.vue';
import ComparativeBoard from './comparativeBoard.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Section4',
    components: {
        Faq,
        Carousel,
        ComparativeBoard
    }
})

</script>

<style></style>