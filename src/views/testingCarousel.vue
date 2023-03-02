<template lang="">
    <div class="w-screen h-screen">
        <div class="flex flex-wrap flex-row maxWidth justify-center w-full">
            <carousel  v-for="(card, index) in cards" :key="card.id"  
            :titlePart1="card.titlePart1" :titlePart2="card.titlePart2" :subtitle1="card.subtitle1" :subtitle2="card.subtitle2"
            :topic1="card.topic1" :topic2="card.topic2" :topic3="card.topic3" :btnMt="card.btnMt" :internCard="card.internCard" :activeIndex="activeIndex" :class="{ 'cardActive': index === activeIndex, 'cardInative': index !== activeIndex}"/>
          <div class="flex flex-wrap sticky xl:mt-[2%] lg:mt-[3%] gap-28">
            <button @click="clickPrev()" class="w-4 h-4" id="prevBtn">
                <svg class="arrow-left w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7.5 5.5l-6 6 6 6l1.41-1.41L4.33 12l4.58-4.58z"/>
                </svg>
            </button>
            <button @click= "clickNext()" class="w-4 h-4" id="nextBtn">
                <svg class="arrow-right w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7.5 5.5l-6 6 6 6l1.41-1.41L4.33 12l4.58-4.58z"/>
                </svg>
            </button>
        </div>

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
            activeIndex: 1,
        }
    },
    methods: {
    cardCount() {
        this.cards = [
        {
            titlePart1: 'Cash',
            titlePart2: 'Best',
            subtitle1: 'Conheça o Crédito com',
            subtitle2: "garantia de imóvel",
            topic1: "Taxa As menores taxas do mercado, a partir de 0,88% a.m. + IPCA ou 1,49% a.m. Fixa",
            topic2: "Prazos de até 20 anos",
            topic3: " Até 60% do valor do imóvel como capital",
            btnMt: "xl:mt-6",
            internCard: "xl:pt-6",
 
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
            internCard: "xl:pt-8",
            translateX: 0,
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
            internCard: "xl:pt-8",
            translateX: 0,
         },    
        ]
    },
    clickNext(){
        const numCards = this.cards

        if(this.activeIndex === numCards.length - 1){
            this.activeIndex = 0
        } else{
            this.activeIndex++
        }
    },

    clickPrev(){
        if(this.activeIndex === 0 ){
            this.activeIndex = 2
        } else{
            this.activeIndex--
        }
    },

 },
 beforeMount() {
    this.cardCount()
  }
}
</script>
<style>
.cardInative{
  transform: scale(0.8);
  transform-style: preserve-3d; /* para colocar no container do carousel*/
  z-index: 0;
  opacity: 0.5;
}

.cardActive {
  position: relative;
  transition: all .3s ease-in-out;
  z-index: 1;
  opacity: 1;

}


.arrow-right{
    fill:black;
    transform: rotate(180deg);
}
.arrow-left{
    fill:black;

}
</style>