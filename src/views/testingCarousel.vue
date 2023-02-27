<template lang="">
    <div class="w-screen h-screen">
        <div class="flex flex-wrap maxWidth">
            <carousel  v-for="i in cards" :key="i.id" 
          :titlePart1="i.titlePart1" :titlePart2="i.titlePart2" :subtitle1="i.subtitle1" :subtitle2="i.subtitle2"
          :topic1="i.topic1" :topic2="i.topic2" :topic3="i.topic3" :btnMt="i.btnMt" :internCard="i.internCard"/>
        </div> 
    </div>
</template>
<script>
import carousel from '@/components/pop-up/carousel.vue';
export default {
    components: {carousel},
    data(){
        return {
            cards:[],
        }
    },
    methods: {
    cardCount() {
        this.cards = [
        {
            titlePart1: 'Cash',
            titlePart1: 'Best',
            subtitle1: 'Conheça o Crédito com',
            subtitle2: "garantia de imóvel",
            topic1: "Taxa As menores taxas do mercado, a partir de 0,88% a.m. + IPCA ou 1,49% a.m. Fixa",
            topic2: "Prazos de até 20 anos",
            topic3: " Até 60% do valor do imóvel como capital",
            btnMt: "xl:mt-6",
            internCard: "xl:pt-6"
        },
        {
            titlePart1: "Finan",
            titlePart2:"Best",
            subtitle1: "As melhores soluções em",
            subtitle2: "Financiamento imobiliário",
            topic1: "Taxas a partir de 9,70% a.a. + taxas referencial",
            topic2: "Pague em até 420 meses",
            topic3: "Os melhores bancos do mercado",
            btnMt: "xl:mt-8",
            internCard: "xl:pt-8"
         },
    ]
  }
 },
 beforeMount() {
    this.cardCount()
  }
}
</script>
<style lang="">
    
</style>