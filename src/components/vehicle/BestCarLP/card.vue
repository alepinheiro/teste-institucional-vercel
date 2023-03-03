<template lang="">
    <div class="flex flex-wrap justify-center pb-24 sm:pb-0 pt-10">
    <div class="mb-8 w-1/2 md:pl-0  md:pr-3  px-4 sm:w-full sm:px-0">
    <div class=" shadow-2xl p-6 sm:p-3  bg-primary rounded-lg flex gap-4 items-center sm:h-[130px] md:h-[170px] text-white" @mouseenter="hover = true" @mouseleave="hover = false" :class="{ 'hover': hover }">
        <img :src="$options.imageConfig.icons.phoneFill" alt="icone celular" class="w-16 md:w-12 sm:w-14" />
        <div class="gap-y-2 sm:gap-y-1 flex flex-col" >
            <h1 class="font-bold text-2xl titleCard md:text-xl sm:text-xl">
                100% digital
            </h1>
            <p class="text-lg leading-loose md:text-sm sm:text-xs ">
                Você simula, conversa com a nossa equipe e fazemos o resto. A gente sempre vai te atualizar
                sobre o andamento do processo.
            </p>
        </div>        
    </div>
    </div>
    <div class="mb-8 w-1/2 md:pl-0  md:pr-3  px-4 sm:w-full sm:px-0">
    <div class=" shadow-2xl p-6 md:p-4 sm:p-3 bg-primary rounded-lg flex gap-4 items-center sm:h-[130px] md:h-[170px] text-white " id="card" @mouseenter="hover2 = true" @mouseleave="hover2 = false" :class="{ 'hover': hover2 }">
        <img :src="$options.imageConfig.icons.notebookFill" alt="icone notebook" class="w-16 md:w-12 sm:w-12 sm:ml-3" />
        <div class="gap-y-2 sm:gap-y-1 md:gap-y-4  flex flex-col">
            <h1 class="font-bold text-2xl titleCard md:text-xl sm:text-xl">
                Plataforma multibancos
            </h1>
            <p class="text-lg leading-loose md:text-sm sm:text-xs">
                O BestCar leva a sua proposta de empréstimo para os maiores bancos do Brasil, 
                que vão analisar e aprovar o pedido.
            </p>
        </div>        
    </div>
    </div>
    <div class="mb-8 w-1/2 md:pl-0  md:pr-3  px-4 sm:w-full sm:px-0">
    <div class=" shadow-2xl p-6 sm:p-2 bg-primary rounded-lg flex gap-4 items-center sm:h-[130px] md:h-[170px]  text-white md:p-4" id="card" @mouseenter="hover3 = true" @mouseleave="hover3 = false" :class="{ 'hover': hover3 }">
        <img :src="$options.imageConfig.icons.moneyFill" alt="icone dinheiro" class="w-16 md:w-12 sm:w-12 sm:ml-3" />
        <div class="gap-y-2 sm:gap-y-1 md:gap-y-0 flex flex-col">
            <h1 class="font-bold text-2xl titleCard md:text-xl sm:text-xl">
                Até 90% do valor do veículo
            </h1>
            <p class="text-lg leading-loose md:text-sm sm:text-xs ">
                Se o carro custa R$50 mil, você pode consseguir crédito aprovado de até R$ 45
                para pagar conta, investir,<span class="md:hidden"> fazer poupança ,</span>etc.
            </p>
        </div>        
    </div>
    </div>
    <div class="mb-8 w-1/2 md:pl-0  md:pr-3  px-4 sm:w-full sm:px-0">
        <div class=" shadow-2xl p-6 sm:p-3 bg-primary rounded-lg flex gap-4 items-center sm:h-[130px] md:h-[170px] text-white md:p-4 " id="card" @mouseenter="hover4 = true" @mouseleave="hover4 = false" :class="{ 'hover': hover4 }">
                <img :src="$options.imageConfig.icons.calendarOutline" alt="icone dinheiro" class="w-16 md:w-12 sm:w-12 sm:ml-3" />
            <div class="gap-y-2 sm:gap-y-1 flex flex-col">
                <h1 class="font-bold text-2xl titleCard md:text-xl sm:text-xl">
                    Até 5 anos de prazo
                 </h1>
                <p class="text-lg leading-loose md:text-sm sm:text-xs ">
                    Você tem até 60 meses para quitar as parcelas,que sâo as mesmas
                    (Tabela Price) até você terminar de quitar as prestações.
                 </p>
        </div>        
    </div>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'card',

    data() {
        return {
            hover: false,
            hover2: false,
            hover3: false,
            hover4: false,
        };
    },
})

</script>
<style>
.hover {
    background: white;
    color: #525252;
}

.hover:hover .titleCard {
    color: #0524DD;
    font-weight: 700;
}
</style>