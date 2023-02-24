<template>
    <div class="w-screen h-screen md:h-auto sm:h-auto bg-gradient-to-r from-primary to-[#08025d] md:bg-gradient-to-t md:from-primary md:to-[#08025d]  sm:bg-gradient-to-t sm:from-primary sm:to-[#08025d] flex md:flex sm:flex">
        <img :src="$options.imageConfig.bestNews.bgSejaBestSide" class="absolute h-full w-auto cover lg:w-6/12  md:hidden sm:hidden"/>
        <div class="flex items-center justify-center w-6/12 divResize lg:w-6/12  md:hidden sm:hidden ">
            <img :src="$options.imageConfig.bestNews.doublePhone" class="absolute left-[2%] top-[30%]  w-[26rem] lg:w-[21rem] lg:mt-14 imgResize"/>
        </div>
        <div class="flex flex-col justify-center maxWidth z-10 pl-4  h-full ">
            <div class="flex items-center md:flex-col sm:flex-col sm:items-start xl:gap-38 lg:justify-center lg:gap-28 mb-2 md:mb-12 sm:mb-8 md:pl-16 sm:pl-6">
                <img :src="$options.imageConfig.logoSejabestWhite" class="w-48 lg:w-36 pb-4 lg:pb-0 pt-4 md:self-start"/>
                <text class="text-white w-6/12  md:w-full sm:w-full lg:w-7/12 text-base xl:text-xl sm:text-left sm:text-xl md:self-center md:text-xl s">Aprenda tudo sobre financiamento, modalidades de empréstimo
                    e acompanhe o mercado financeiro todos os dias.
                </text>
            </div>   
            <div class="flex flex-wrap md:flex-row items-center md:justify-center sm:justify-center">
                <div class="text-white bg-secondary w-3/12 xl:w-[28%] lg:w-[31%] md:w-10/12 sm:w-11/12 h-auto xl:h-[22.8rem] lg:h-[17.2rem] p-6 lg:p-5 flex flex-col shadow-md rounded-lg md:my-8 sm:my-6 ">
                    <img :src="$options.imageConfig.bestNews.youBest" class="w-36 lg:w-30 pb-2 pt-4  md:self-center sm:self-center"/>
                    <text class="text-lg lg:text-base lg:leading-5 h-full flex items-center self-center md:text-center sm:text-center">
                        Veja explicações sobre financiamento imobiliário, empréstimo com garantia de imóvel e informações sobre taxas.
                    </text>
                    <button class="bg-complementaryColor1 mt-5 lg:mt-0 rounded-xl p-1 w-full self-center shadow-lg uppercase lg:text-sm lg:w-full lg:normal-case  md:w-6/12 sm:w-7/12 sm:text-sm xl:text-sm">
                        Assista de graça
                    </button>
                </div>
            <div class="text-white bg-secondary w-3/12 xl:w-[28%] lg:w-[31%] md:w-10/12 sm:w-11/12 h-auto xl:h-[22.8rem] lg:h-[17.2rem] p-6 lg:p-5 flex flex-col shadow-md rounded-lg ml-8 md:ml-0 sm:ml-0 md:my-8 sm:my-6 lg:ml-4">
                <img :src="$options.imageConfig.bestNews.bestNewsTelegram" class="w-36 lg:w-30 pb-2 pt-2 lg:pt-4 md:self-center sm:self-center"/>
                <text class="text-lg lg:text-base p-1 lg:leading-5 h-full flex items-center self-center md:text-center sm:text-center">
                    Ao entrar no nosso grupo no telegram, você recebe o conteúdo novo antes de todo mundo, assim que a gente posta.
                </text>
                <button class="bg-complementaryColor1 mt-5 lg:mt-0 rounded-xl p-1 lg:p-1 w-full self-center shadow-lg uppercase lg:text-sm lg:w-full md:w-6/12 sm:w-7/12 sm:text-sm  lg:normal-case xl:text-sm">
                    Exlcusividade agora
                </button>
            </div>
            <div class="text-white bg-secondary w-3/12 xl:w-[28%] lg:w-[31%] md:w-10/12 sm:w-11/12 h-auto xl:h-[22.8rem] lg:h-[17.2rem] p-6 lg:p-5 flex flex-col shadow-md rounded-lg ml-8 md:ml-0 sm:ml-0 md:my-8 sm:my-6 lg:ml-4">
                <img :src="$options.imageConfig.bestNews.bestNewsLinkedin" class="w-36 lg:w-30 pb-2 pt-4  md:self-center sm:self-center"/>
                <text class="text-lg lg:text-base lg:leading-5 h-full flex items-center self-center md:text-center sm:text-center">
                    Vamos conversar sobre empreendedorismo, carreira, rotina da empresa e, claro, o que você precisa para ser Best.
                </text>
                <div class="md:justify-center md:flex sm:flex sm:justify-center">
                <button class="bg-complementaryColor1 mt-5 lg:mt-0 rounded-xl p-1 w-full self-center shadow-lg uppercase lg:text-sm lg:w-full lg:normal-case md:w-6/12 sm:w-7/12 sm:text-sm  xl:text-sm">
                    Quero ser best
                </button>
                </div>               
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style >
@media (min-width: 1880px) {
    .imgResize{
        width: 30rem;
        top: 25%;
    }
    .divResize{
        width: 32%;
    }
}
</style>