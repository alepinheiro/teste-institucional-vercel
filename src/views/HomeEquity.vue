<template>
<div class="w-full bg-bglight2Color overflow-x-hidden overflow-y-hidden">
  <div class="text-textPrimary gradienteSBLight">
    <div class="bgCashBest sm:hidden md:hidden">
      <div class="maxWidth xl:h-screen lg:h-screen" >
        <topbarComponent position="relative" />
        <div class="w-full flex mt-6 xl:mt-28 lg:mt-24 md:mt-4 sm:mt-4 mt-0rem">
          <div class="md:pt-4 sm:py-8 max-w-[600px] w-full">
            <div class="bg-primary rounded-xl w-full shadow-2xl p-12">
                <div class="text-6xl titleFontBold  text-white  pb-6" >
                  <h1><div>Conheça o <span class="textDecoration text-complementaryColor3">CashBest</span> </div>
                  <div class="text-6xl titleFontBold pt-2 text-white  " >
                    O Home Equity da SejaBest
                  </div></h1>
                </div>
                <div class=" pt-0 text-white pb-6">
                  As menores taxas do mercado, a partir de <span class="font-semibold">0,88% a.m + IPCA ou fixa 1,49% a.m.</span>
                  Pegando até  <span class="font-semibold">60% do valor</span> do seu imóvel como capital para usar como quiser,  você tem até 240 meses para pagar.
                  <span class="text-complementaryColor3"> Assista ao lado e saiba como.</span>
                </div>
                <div class="flex w-full items-center border-b-1 border-complementaryColor3 pb-4">
                  <div class="w-2/12 pr-6 mt-auto mb-auto">
                    <img  :src="$options.imageConfig.iconSejaBestWhite" alt="SejaBest" class="w-12 h-auto ">
                  </div>
                  <div class="w-10/12 text-lg text-white"> 
                    Sem <span class="text-complementaryColor3">Filas.</span> 
                    Sem <span class="text-complementaryColor3">gerentes.</span>  
                    Sem <span class="text-complementaryColor3">complexidade</span> 
                  </div>
                </div>
                <div class="w-10/12 text-xl text-white pt-2 font-semibold text-textPrimary"> 
                  De quanto você precisa?
                </div>
                <div class="w-full flex  items-end justify-between">
                  <div class="w-9/12 pr-1">
                    <inputMoney class="w-full" v-model="value" id="value" label=""  placeholder=""  />
                  </div>
                  <div class="w-3/12 ">
                    <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center" >
                      <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                      target="_blank">Simular</a>
                    </div>
                  </div>
                </div>
                
            </div>
          </div>
          <div @click="showVideo=true" class="h-[500px] p-16 w-[600px]  md:w-7/12 text-white md:pr-4 sm:hidden ">
            
          </div>
        </div>
        
      </div>
      
    </div>
    <div class=" xl:hidden lg:hidden md:hidden">
      <div class="maxWidth " >
        <topbarComponent position="relative" />
        <div class="w-full ">
          <div @click="showVideo=true" class="w-full mt-4">
            <img :src="$options.imageConfig.cashBest.phoneVideo" alt="Video crédito com garantia de imóvel" class="w-full h-auto "/>
          </div>
          <div class="py-8 sm:py-4  w-full">
            <div class=" rounded-xl w-full ">
                <div class="text-4xl titleFontBold  text-white  pb-2" >
                  <h1><div>Conheça o <span class="textDecoration text-complementaryColor3">CashBest</span> </div>
                  <div class="text-4xl titleFontBold pt-2 text-white  " >
                    O Home Equity da SejaBest
                  </div></h1>
                </div>
                <div class=" py-4 text-white pb-6">
                  As menores taxas do mercado, a partir de <span class="font-semibold">0,88% a.m + IPCA ou fixa 1,49% a.m.</span>
                  Pegando até  <span class="font-semibold">60% do valor</span> do seu imóvel como capital para usar como quiser,  você tem até 240 meses para pagar.
                  <span class="text-complementaryColor3"> Assista acima e saiba como.</span>
                </div>
                <div class="bg-bglight2Color p-4 rounded-xl">
                  <div class="flex w-full items-center border-b-1 border-primary pb-4">
                    <div class="w-2/12 pr-6 mt-auto mb-auto">
                      <img  :src="$options.imageConfig.iconSejaBest" alt="SejaBest" class="w-6 h-auto ">
                    </div>
                    <div class="w-10/12 text-lg "> 
                      Sem <span class="text-primary">Filas.</span> 
                      Sem <span class=" text-primary">gerentes.</span>  
                      Sem <span class=" text-primary">complexidade</span> 
                    </div>
                  </div>
                  <div class="w-10/12 text-xl  pt-2 font-semibold text-textPrimary"> 
                    De quanto você precisa?
                  </div>
                  <div class="w-full flex  items-end justify-between">
                    <div class="w-9/12 pr-1">
                      <inputMoney class="w-full" v-model="value" id="value" label=""  placeholder=""  />
                    </div>
                    <div class="w-3/12 ">
                      <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center" >
                        <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                        target="_blank">Simular</a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </div>
    <div class=" sm:hidden xl:hidden lg:hidden">
      <div class="maxWidth " >
        <topbarComponent position="relative" />
        <div class="w-full flex">
          
          <div class="w-1/2 pt-4 mt-auto mb-auto ">
            <div class="">
                <div class="text-5xl titleFontBold  text-white  pb-6" >
                  <div>Conheça o <span class="textDecoration text-complementaryColor3">CashBest</span> </div>
                  <div class="text-5xl titleFontBold pt-2 text-white  " >
                    O Home Equity da SejaBest
                  </div>
                </div>
                <div class=" py-4 text-white pb-6">
                  As menores taxas do mercado, a partir de <span class="font-semibold">0,88% a.m + IPCA ou fixa 1,49% a.m.</span>
                  Pegando até  <span class="font-semibold">60% do valor</span> do seu imóvel como capital para usar como quiser,  você tem até 240 meses para pagar.
                  <span class="text-complementaryColor3"> Assista ao lado e saiba como.</span>
                </div>
                <div class="flex w-full items-center border-b-1 border-complementaryColor3 pb-4">
                  <div class="w-2/12 pr-6 mt-auto mb-auto">
                    <img  :src="$options.imageConfig.iconSejaBestWhite" alt="SejaBest" class="w-12 h-auto ">
                  </div>
                  <div class="w-10/12 text-lg text-white"> 
                    Sem <span class="text-complementaryColor3">Filas.</span> 
                    Sem <span class="text-complementaryColor3">gerentes.</span>  
                    Sem <span class="text-complementaryColor3">complexidade</span> 
                  </div>
                </div>
                <div class="w-10/12 text-xl text-white pt-2 font-semibold text-textPrimary"> 
                  De quanto você precisa?
                </div>
                <div class="w-full flex  items-end justify-between">
                  <div class="w-9/12 pr-1">
                    <inputMoney class="w-full" v-model="value" id="value" label=""  placeholder=""  />
                  </div>
                  <div class="w-3/12 ">
                    <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center" >
                      <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                      target="_blank">Simular</a>
                    </div>
                  </div>
                </div>
                
            </div>
          </div>
          <div @click="showVideo=true" class="w-1/2 text-white md:pr-4 sm:hidden mt-auto mb-auto">
            
            <img :src="$options.imageConfig.cashBest.phoneVideoMd" alt="Video crédito com garantia de imóvel" class="w-8/12 h-auto mr-auto ml-auto "/>
          </div>
        </div>
        
      </div>
      
    </div>
    <div class="md:hidden xl:hidden lg:hidden maxWidth">
      <div class="text-7xl lg:text-5xl text-center pb-8 sm:text-5xl md:text-6xl titleFontBold  text-white  " >
          E o que é <br/>Home<span class="textDecoration">  Equity?</span>
        </div>
      <div class="text-white text-sm text-center pb-6">
          É o Crédito com Garantia de Imóvel, também conhecido como Empréstimo,
          ideal para quem quer as menores taxas de juros do 
          mercado e um longo prazo para pagamento. Nessa modalidade, você 
          utiliza sua casa, apartamento ou sala comercial como garantia de
          crédito e desfruta das melhores condições disponíveis no mercado.
        </div>
      <div class="border-1  rounded-xl w-full text-white mr-4">
            <div class=" rounded-t-xl bg-primary p-4  text-center border-b-4 border-complementaryColor1">
              <div class="text-4xl titleFont">Cash<span class="font-semibold">Best</span></div>
              <div class="text-xl titleFont">Conheça o Crédito com </div>
              <div class="text-xl titleFont">garantia de imóvel</div>
            </div>
            <div class="w-full p-6 bg-secondary rounded-b-xl">
              <div class="w-full flex  items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.percentageFill" alt="Taxa"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  As menores taxas do mercado, a partir de 0,88% a.m. + IPCA ou 1,49% a.m. Fixa
                </div>
              </div>
              <div class="w-full flex pt-6 items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.calendarFill" alt="Prazo"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  Prazos de até 20 anos
                </div>
              </div>
              <div class="w-full flex pt-6 items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.moneyFill" alt="Valor"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  Até 60% do valor do imóvel como capital
                </div>
              </div>
              <div class="buttonComplementaryColor1 mt-6 text-center">
                <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                  target="_blank">Faça uma simulação</a>
              </div>
            </div>
          </div>
    
    </div>
    <div class="maxWidth sm:hidden flex md:mt-12">
      <div class="w-6/12 sm:w-4/12 mt-auto mb-auto">
        <img :src="$options.imageConfig.cashBest.photoMan" alt="Home Equity" class="w-full h-auto xl:absolute lg:absolute 
        xl:w-116 lg:w-[28rem] xl:bottom-[-34rem] lg:bottom-[-31rem] mb-0rem"/>
      </div>
      <div class="w-6/12 sm:w-8/12 mt-auto mb-auto xl:mt-3 lg:mt-3">
        <div class="text-7xl lg:text-5xl sm:text-5xl md:text-6xl titleFontBold text-right text-white  " >
          E o que é <br/>Home<span class="textDecoration">  Equity?</span>
        </div>
        <div class="text-white text-xl  sm:text-xs md:text-sm text-right w-11/12 mr-0 ml-auto mt-12 sm:mt-6">
          É o Crédito com Garantia de Imóvel, também conhecido como Home Equity,
           ideal para quem quer as menores taxas de juros do 
          mercado e um longo prazo para pagamento. Nessa modalidade, você 
          utiliza sua casa, apartamento ou sala comercial como garantia de
          crédito e desfruta das melhores condições disponíveis no mercado.
        </div>
        <div class="pt-6 sm:pt-4 text-right" >
          <button class="buttonComplementaryColor1"><a class="sm:text-sm text-2xl"
            :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
            target="_blank">Faça uma simulação</a> </button>
        </div>
      </div>
    </div>
    <div class="maxWidth flex py-24 sm:py-12">
      <div class="w-1/4 sm:w-1/2 text-white mt-auto mb-auto pr-4">
        <div class="text-4xl sm:text-2xl md:text-2xl title-font font-bold">
          Apenas vantagens<br /> para você
        </div>
        <div class="py-6 text-lg sm:text-sm sm:py-2 ">
          Descubra porque o <span class="text-complementaryColor3">CashBest</span> 
          pode ser a sua melhor opção de Crédito.
        </div>
      </div>
      <div class="w-3/4 sm:w-1/2 mt-auto mb-auto">
        <div class="bg-bglightColor sm:hidden md:hidden rounded-2xl ">
          <Splide :options=" {type:'loop', perPage: 2, perMove: 1, padding: '6rem', drag   : 'free',
             rewind : true, focus  : 'center', pagination:true} " aria-label="Vantagens para você">
            <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderPhones">
              <div  class="">
                <img :src="slide.img" 
                class="px-4 " :alt="slide.alt">
              </div>
            </SplideSlide>
              
          </Splide>
        </div>
        <div class="bg-bglightColor xl:hidden lg:hidden sm:hidden  rounded-2xl ">
          <Splide :options=" {type:'loop', perPage: 2, perMove: 1,  drag   : 'free',
            } " aria-label="Vantagens para você">
            <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderPhones">
              <div  class="w-full">
                <img :src="slide.img" 
                class="px-4" :alt="slide.alt">
              </div>
            </SplideSlide>
              
          </Splide>
        </div>
        <div class="bg-bglightColor xl:hidden lg:hidden md:hidden  rounded-2xl ">
          <Splide :options=" {type:'loop', perPage: 1, perMove: 1,  drag   : 'free',
            } " aria-label="Vantagens para você">
            <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderPhones">
              <div  class="w-full">
                <img :src="slide.img" 
                class="px-4" :alt="slide.alt">
              </div>
            </SplideSlide>
              
          </Splide>
        </div>
        
      </div>
    </div>
    <div class="maxWidth flex pt-32 sm:pt-8 pb-56 md:pb-4 sm:pb-4">
      
      <div class="w-3/4 md:w-2/3 sm:w-1/2 flex mt-auto mb-auto">
        <div class="w-full xl:hidden lg:hidden md:hidden rounded-2xl ">
          <Splide :options=" {type:'loop', perPage: 1, perMove: 1,  drag   : 'free',height   : '23.5rem',
             rewind : true, pagination:false, direction: 'ttb',} " aria-label="Você pode obter o recurso para:">
            <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderMoney1">
              <div  class="pt-[2.5rem]">
                <img :src="slide.img" 
                class="px-4 w-[20rem]" :alt="slide.alt">
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div class="w-full xl:hidden lg:hidden sm:hidden rounded-2xl ">
          <Splide :options=" {type:'loop', perPage: 1, perMove: 1,  drag   : 'free',height   : '26.5rem',
             rewind : true, pagination:false, direction: 'ttb',} " aria-label="Você pode obter o recurso para:">
            <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderMoney1">
              <div  class="pt-[2.5rem]">
                <img :src="slide.img" 
                class="px-4 w-[20rem]" :alt="slide.alt">
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div class="w-full xl:hidden lg:hidden sm:hidden rounded-2xl mt-10">
          <Splide :options=" {type:'loop', perPage: 1, perMove: 1,  drag   : 'free',height   : '26.5rem',
             rewind : true, pagination:false, direction: 'ttb',} " aria-label="Você pode obter o recurso para:">
            <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderMoney2">
              <div  class="pt-[2.5rem]">
                <img :src="slide.img" 
                class="px-4 w-[20rem]" :alt="slide.alt">
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div class="w-1/3 sm:hidden md:hidden rounded-2xl ">
          <Splide :options=" {type:'loop', perPage: 1, perMove: 1,  drag   : 'free',height   : '32.5rem',
             rewind : true, pagination:false, direction: 'ttb',} " aria-label="Você pode obter o recurso para:">
            <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderMoney1">
              <div  class="pt-[2.5rem]">
                <img :src="slide.img" 
                class="px-4 w-[20rem]" :alt="slide.alt">
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div class="w-1/3 sm:hidden md:hidden rounded-2xl mt-16">
          <Splide :options=" {type:'loop', perPage: 1, perMove: 1,  drag   : 'free',height   : '32.5rem',
             rewind : true, pagination:false, direction: 'ttb',} " aria-label="Você pode obter o recurso para:">
            <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderMoney2">
              <div  class="pt-[2.5rem]">
                <img :src="slide.img" 
                class="px-4 w-[20rem]" :alt="slide.alt">
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div class="w-1/3 sm:hidden md:hidden rounded-2xl ">
          <Splide :options=" {type:'loop', perPage: 1, perMove: 1,  drag   : 'free',height   : '32.5rem',
             rewind : true, pagination:false, direction: 'ttb',} " aria-label="Você pode obter o recurso para:">
            <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderMoney3">
              <div  class="pt-[2.5rem]">
                <img :src="slide.img" 
                class="px-4 w-[20rem]" :alt="slide.alt">
              </div>
            </SplideSlide>
          </Splide>
        </div>
        
      </div>
      <div class="w-1/4 md:w-1/3 sm:w-1/2 text-right text-white mt-auto mb-auto pr-4">
        <div class="text-4xl md:text-2xl sm:text-2xl titleFontBold">
          Faça o que você quiser
          com <br/><span class="text-complementaryColor3">seu dinheiro</span>
        </div>
        <div class="py-6 xl:text-lg">
          Depois que os recursos forem liberados na sua conta, você pode usar do jeito que quiser.
        </div>
      </div>
    </div>
    
  </div>
  <div class=" w-full xl:mt-[-10rem] sm:mt-[-8rem] flex justify-center sm:hidden md:hidden">
    <div class="ml-auto  mr-auto maxWidth">
      <Splide :options=" {type:'loop', perPage: 1, perMove: 1,  drag   : 'free' ,  height   : '25rem',trimSpace: 'move', 
        rewind : true, pagination:true, arrows:true}" aria-label="Você pode obter o recurso para:"  class="blueSplide">
        <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderTutorial"  ref="splide">
          <div  class="">
            <img :src="slide.img" class="px-4 lg:pt-12" :alt="slide.alt">
          </div>
        </SplideSlide>
      </Splide>  
    </div>  
  </div>
  <div class="maxWidth xl:hidden lg:hidden">
    <div class="titleFontBold text-5xl sm:text-4xl text-primary text-center py-12"> É tão simples que você só precisa de <span class="text-complementaryColor1 ">4 etapas</span></div>
    <div class="bg-bglight2Color shadow-xl border-1 rounded-xl p-4">
      <div class="flex w-full ">
        <div @click="showTutorial(1)" class="mt-auto mb-auto text-xl pr-4 text-primary">
           
            <i v-if="!tutorial.show1" class="ti ti-angle-right" ></i>
            <i v-if="tutorial.show1" class="ti ti-angle-down" ></i>
        </div>
        <div class="text-primary text-2xl titleFontBold pr-2">
          <span class="text-complementaryColor1">#1</span> Simule e solicite.
        </div>
        
      </div>
      <div class=" p-4" v-if="tutorial.show1">
        A simulação é feita através do nosso <a :href="$options.information.appSimulator+this.$root.utms" class="text-primary" style=" text-decoration: none;"
            target="_blank">simulador.</a> Em até minutos você tem o resultado, porque seu tempo é valioso.
      </div>
    </div>
    <div class="bg-bglight2Color mt-4 shadow-xl border-1 rounded-xl p-4">
      <div class="flex w-full ">
        <div @click="showTutorial(2)" class="mt-auto mb-auto text-xl pr-4 text-primary">
           
            <i v-if="!tutorial.show2" class="ti ti-angle-right" ></i>
            <i v-if="tutorial.show2" class="ti ti-angle-down" ></i>
        </div>
        <div class="text-primary text-2xl titleFontBold pr-2">
          <span class="text-complementaryColor1">#2</span> Envie seus documentos
        </div>
        
      </div>
      <div class=" p-4" v-if="tutorial.show2">
        Para uma análise de crédito mais detalhada, envie os documentos solicitados.
         Após o envio, seus documentos serão analisados e será enviada uma proposta concreta.     
      </div>
    </div>
    <div class="bg-bglight2Color mt-4 shadow-xl border-1 rounded-xl p-4">
      <div class="flex w-full ">
        <div @click="showTutorial(3)" class="mt-auto mb-auto text-xl pr-4 text-primary">
           
            <i v-if="!tutorial.show3" class="ti ti-angle-right" ></i>
            <i v-if="tutorial.show3" class="ti ti-angle-down" ></i>
        </div>
        <div class="text-primary text-2xl titleFontBold pr-2">
          <span class="text-complementaryColor1">#3</span> Avaliação do Imóvel
        </div>
        
      </div>
      <div class=" p-4" v-if="tutorial.show3">
        Nesta etapa, o imóvel passará por uma avaliação que irá certificar que o mesmo está apto para ser a garantia do processo. 
      </div>
    </div>
    <div class="bg-bglight2Color mt-4 shadow-xl border-1 rounded-xl p-4">
      <div class="flex w-full ">
        <div @click="showTutorial(4)" class="mt-auto mb-auto text-xl pr-4 text-primary">
           
            <i v-if="!tutorial.show4" class="ti ti-angle-right" ></i>
            <i v-if="tutorial.show4" class="ti ti-angle-down" ></i>
        </div>
        <div class="text-primary text-2xl titleFontBold pr-2">
          <span class="text-complementaryColor1">#4</span> Liberação do recurso
        </div>
        
      </div>
      <div class=" p-4" v-if="tutorial.show4">
        Depois de passar por todas as etapas e a documentação estiver concluída, 
        seu recurso será liberado! Aqui encerramos a operaçãocom êxito, 
        sempre entregando a melhor experiência ao cliente!
      </div>
    </div>
  </div>
  <div class="w-full py-12">
      <div class="maxWidth md:w-full flex sm:h-full mr-auto ml-auto" >
        <div class="mt-auto mb-auto w-full bg-bglight2Color shadow-xl border-1 rounded-2xl flex-wrap flex justify-center p-6">
          <div class="w-10/12">
          <div class="w-full flex ml-8 sm:ml-0 py-4 ">
            <div class="w-1/3 sm:w-2/4 mt-auto mb-0 text-2xl sm:text-xl sm:leading-5 text-primary text-center">Por que ser Best?</div>
            <div class="w-1/3  sm:w-1/4  mt-auto mb-0">
              <img :src="$options.imageConfig.logoVertical" alt="SejaBest" class="w-30 sm:w-24 h-auto mr-auto ml-auto"/>
            </div>
            <div class="w-1/3  sm:w-1/4  mt-auto mb-0 text-center">
              <div class="text-textSecondary text-3xl sm:text-xl mt-auto mb-auto px-4"> Bancos</div>
            </div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg"> As menores taxas do mercado </div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg"> Múltiplas opções de banco </div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Plataforma multiprodutos</div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Transparência</div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Processo agilizado</div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Atendimento 7 dias por semana</div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Assessoria personalizada</div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Totalmente Digital</div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Sem burocracias</div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Sem filas</div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Foco no cliente</div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          </div>
        </div>
      </div>
  </div>
  <rodape />
  <popUpVideo  v-if="showVideo" :videoUrl="videoUrl" 
    :videoStyle="videoStyle" @closePopUp="showVideo=false" />
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import popUpVideo from "@/components/base/popUpVideo.component.vue"
import topbarComponent from '@/components/structure/topbar.component.vue';
import rodape from '@/components/base/rodape.vue';
export default defineComponent({
  name: 'HomeEquity',
  components:{
    topbarComponent , popUpVideo, rodape
  },
  metaInfo () {
    return {
      title: "Conheça o CashBest O Home Equity da SejaBest ",
      meta: [
        { vmid: 'description', name: 'description', content: "E o que é Home Equity? É o Crédito com Garantia de Imóvel, também conhecido como Home Equity, ideal para quem quer as menores taxas de juros do mercado e um longo prazo para pagamento. Nessa modalidade, você utiliza sua casa, apartamento ou sala comercial como garantia de crédito e desfruta das melhores condições disponíveis no mercado.  " }
      ]
    }
  },
  data() {
    return {
      isVisible:false,
      value:250000,
      showVideo:false,
      videoStyle: "w-full h-[36rem] mr-auto ml-auto rounded-2xl ",
      videoUrl:"https://www.youtube.com/embed/eDWFe4Wrb2A",
      tutorial:{
        show1:false,
        show2:false,
        show3:false,
        show4:false,
      }
    }
  },
  
  methods: {
      showTutorial(item){
        if(item===1 && this.tutorial.show1==false){
          this.tutorial={
            show1:true,
            show2:false,
            show3:false,
            show4:false,
          }
        }else if(item===2 && this.tutorial.show2==false){
          this.tutorial={
            show1:false,
            show2:true,
            show3:false,
            show4:false,
          }
        }else if(item===3 && this.tutorial.show3==false){
          this.tutorial={
            show1:false,
            show2:false,
            show3:true,
            show4:false,
          }
        }else if(item===4 && this.tutorial.show4==false){
          this.tutorial={
            show1:false,
            show2:false,
            show3:false,
            show4:true,
          }
        }else if(item===1 && this.tutorial.show1){
          this.tutorial={
            show1:false,
            show2:false,
            show3:false,
            show4:false,
          }
        }else if(item===2 && this.tutorial.show2){
          this.tutorial={
            show1:false,
            show2:false,
            show3:false,
            show4:false,
          }
        }else if(item===3 && this.tutorial.show3){
          this.tutorial={
            show1:false,
            show2:false,
            show3:false,
            show4:false,
          }
        }else if(item===4 && this.tutorial.show4){
          this.tutorial={
            show1:false,
            show2:false,
            show3:false,
            show4:false,
          }
        }

      }
  },
  mounted() {
    if( this.$route.fullPath.includes("?") ){
      var fullUrl = this.$route.fullPath.split("?")
      this.$root.utms="?"+(fullUrl[1])  
    }
  }
 
})
</script>


<style>
  .splide__arrow svg {
	  fill: #d1d1d1;
  }
  
  .splide__arrow--prev {
    left: -1.5em;
  }

  .splide__arrow--next {
    right: -1.5em;
  }

  @media ( min-width: 1024px) and (max-width: 1279px) {
    .splide__arrow--prev {
      left: -1em;
  }
    .splide__arrow--next {
      right: -1em;
  }
  }

</style>
