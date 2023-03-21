<template>
<div class="w-full bg-bglight2Color overflow-x-hidden overflow-y-hidden">
  <div class="text-textPrimary ">
    <div class="bgFinanBest sm:hidden md:hidden">
      <div class="maxWidth xl:h-screen lg:h-screen" >
        <div class="w-full flex ">
          
          
          <div @click="showVideo=true" class="h-[500px] p-16 w-[600px]  md:w-7/12 text-white md:pr-4 sm:hidden ">
            
          </div>
          <div class="md:pt-4 sm:py-8 max-w-[600px] w-full ">
            <div class="bg-bglight2Color rounded-xl w-full shadow-2xl p-12 ">
                <div class="text-5xl titleFontBold text-primary  pb-6" >
                  <h1><div>Conheça o <span class="textDecoration">FinanBest,</span> </div>
                  <div class=" titleFontBold pt-2  " >
                    O Financiamento Imobiliário da SejaBest.
                  </div></h1>
                </div>
                <div class=" py-4  pb-6">
                  Financie seu imóvel com as melhores condições do mercado. Tudo de forma online, digital, 
                  transparente e com o auxílio do nosso time de especialistas!
                </div>
                <div class="flex w-full items-center border-b-1 border-secondary pb-4">
                  <div class="w-1/12 pr-6 mt-auto mb-auto">
                    <img  :src="$options.imageConfig.iconSejaBest" alt="SejaBest" class="w-6 h-auto ">
                  </div>
                  <div class="w-11/12 text-lg "> 
                    Sem <span class="text-primary">Filas.</span> 
                    Sem <span class="text-primary">gerentes.</span>  
                    Sem <span class="text-primary">complexidade</span> 
                  </div>
                </div>
                <div class="w-10/12 text-xl text-primary pt-2 font-semibold "> 
                  De quanto você precisa?
                </div>
                <div class="w-full flex  items-end justify-between">
                  <div class="w-9/12 pr-1">
                    <inputMoney class="w-full" v-model="value" id="value" label=""  placeholder=""  />
                  </div>
                  <div class="w-3/12 ">
                    <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center" >
                      <a :href="$options.information.appRealEstateSimulator+this.$root.utms"  style=" text-decoration: none;"
                      target="_blank">Simular</a>
                    </div>
                  </div>
                </div>
                
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
    <div class=" xl:hidden lg:hidden md:hidden">
      <div class="maxWidth pb-12" >
        <div class="w-full ">
          <div @click="showVideo=true" class="w-full pt-4">
            <img :src="$options.imageConfig.finanBest.phoneVideo" alt="Video Financiamento Imobiliário"  class="w-full h-auto "/>
          </div>
          <div class="py-4  w-full">
            <div class="">
                <div class="text-4xl titleFontBold text-primary  pb-4 pr-8" >
                  <h1><div>Conheça o <span class="textDecoration">FinanBest,</span> </div>
                  <div class="text-xl titleFontBold pt-2  " >
                    O Financiamento Imobiliário da SejaBest.
                  </div></h1>
                </div>
                <div class="   pb-6">
                  Financie seu imóvel com as melhores condições do mercado. Tudo de forma online, digital, 
                  transparente e com o auxílio do nosso time de especialistas!
                </div>
                <div class="bg-primary p-4 rounded-xl">
                  <div class="flex w-full items-center border-b-1 border-complementaryColor3 pb-4">
                    <div class="w-2/12 pr-2 mt-auto mb-auto">
                      <img  :src="$options.imageConfig.iconSejaBestWhite" alt="SejaBest" class="w-18 h-auto ">
                    </div>
                    <div class="w-11/12 text-lg text-white"> 
                      Sem <span class="text-complementaryColor3">Filas.</span> 
                      Sem <span class="text-complementaryColor3">gerentes.</span>  
                      Sem <span class="text-complementaryColor3">complexidade</span> 
                    </div>
                  </div>
                  <div class="w-10/12 text-xl text-white pt-2 font-semibold "> 
                    De quanto você precisa?
                  </div>
                  <div class="w-full flex  items-end justify-between">
                    <div class="w-9/12 pr-1">
                      <inputMoney class="w-full" v-model="value" id="value" label=""  placeholder=""  />
                    </div>
                    <div class="w-3/12 ">
                      <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center" >
                        <a :href="$options.information.appRealEstateSimulator+this.$root.utms"  style=" text-decoration: none;"
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
      <div class="maxWidth mb-12" >
        <div class="w-full flex">
          
          <div class="w-1/2 pt-4 mt-auto mb-auto ">
            <div class="">
                <div class="text-4xl titleFontBold text-primary  pb-6 pr-8" >
                  <div>Conheça o <span class="textDecoration">FinanBest,</span> </div>
                  <div class=" titleFontBold pt-2  " >
                    O Financiamento Imobiliário da SejaBest.
                  </div>
                </div>
                <div class=" py-4  pb-6">
                  Financie seu imóvel com as melhores condições do mercado. Tudo de forma online, digital, 
                  transparente e com o auxílio do nosso time de especialistas!
                </div>
                <div class="flex w-full items-center border-b-1 border-secondary pb-4">
                  <div class="w-1/12 pr-6 mt-auto mb-auto">
                    <img  :src="$options.imageConfig.iconSejaBest" alt="SejaBest" class="w-12 h-auto ">
                  </div>
                  <div class="w-11/12 text-lg "> 
                    Sem <span class="text-primary">Filas.</span> 
                    Sem <span class="text-primary">gerentes.</span>  
                    Sem <span class="text-primary">complexidade</span> 
                  </div>
                </div>
                <div class="w-10/12 text-xl text-primary pt-2 font-semibold "> 
                  De quanto você precisa?
                </div>
                <div class="w-full flex  items-end justify-between">
                  <div class="w-9/12 pr-1">
                    <inputMoney class="w-full" v-model="value" id="value" label=""  placeholder=""  />
                  </div>
                  <div class="w-3/12 ">
                    <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center" >
                      <a :href="$options.information.appRealEstateSimulator+this.$root.utms"  style=" text-decoration: none;"
                      target="_blank">Simular</a>
                    </div>
                  </div>
                </div>
                
            </div>
          </div>
          <div @click="showVideo=true" class="w-1/2 text-white md:pr-4 sm:hidden mt-auto mb-auto">
            
            <img :src="$options.imageConfig.cashBest.phoneVideoMd" alt="video Financiamento Imobiliário" class="w-8/12 h-auto mr-auto ml-auto "/>
          </div>
        </div>
        
      </div>
      
    </div>
    <div class="maxWidth flex pt-10 pb-26 sm:pb-4 sm:pt-0 ">
      <div class="w-1/4 sm:w-1/2 mt-auto mb-auto pr-4">
        <div class="text-4xl sm:text-2xl md:text-2xl text-primary font-bold">
          Apenas vantagens para você
        </div>
        <div class="py-6 sm:text-base sm:py-2 text-primary">
          Descubra porque o <span class="text-complementaryColor3 font-bold">FinanBest</span> 
          pode ser a sua melhor opção de Financiamento Imobiliário.
        </div>
      </div>
      <div class="w-3/4 sm:w-1/2 mt-auto mb-auto">
        <div class="bg-primary sm:hidden md:hidden  rounded-2xl ">
          <Splide :options=" {type:'loop', perPage: 2, perMove: 1, padding: '10rem', drag   : 'free',
             rewind : true, focus  : 'center', pagination:true} " aria-label="Vantagens para você">
            <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderPhones">
              <div  class="">
                <img :src="slide.img" 
                class="px-1" :alt="slide.alt">
              </div>
            </SplideSlide>
              
          </Splide>
        </div>
        <div class="bg-primary xl:hidden lg:hidden sm:hidden  rounded-2xl ">
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
    <div class="maxWidth sm:hidden flex md:mt-12">
      <div class="w-6/12 sm:w-[0.3] mt-auto mb-auto py-16">
        <img :src="$options.imageConfig.finanBest.photoKeys" alt="Financiamento Imobiliário"  class="w-11/12 mr-4 ml-auto h-auto"/>
        
      </div>
      <div class="w-6/12 sm:w-[0.7] mt-auto mb-auto">
        <div class="text-8xl sm:text-3xl lg:text-7xl md:text-6xl titleFontBold text-right text-primary pt-8" >
          A chave para os seus<span class="textDecoration"> Sonhos.</span>
        </div>
        <div class=" text-lg  sm:text-xs md:text-sm text-right w-11/12 mr-0 ml-auto mt-12 sm:mt-6">
          Aqui realizamos o sonho da casa própria! Com o financiamento imobiliário da SejaBest, 
            você pode garantir ótimas taxas, além de ter à sua disposição um assessor que vai te 
            auxiliar do início ao fim do processo. É um investimento seguro com diversas vantagens 
            a curto e a longo prazo. Com condições facilitadas, o FinanBest é perfeito para você!
        </div>
        <div class="pt-6 sm:pt-4 text-right pb-12" >
          <button class="buttonComplementaryColor1"><a class="sm:text-sm text-2xl"
            :href="$options.information.appRealEstateSimulator+this.$root.utms"  style=" text-decoration: none;"
            target="_blank">Faça uma simulação</a> </button>
        </div>
      </div>
    </div>
    <div class="maxWidth xl:hidden lg:hidden md:hidden">
      <div class="text-3xl  titleFontBold text-center text-primary pt-8" >
          A chave para os seus<span class="textDecoration"> Sonhos.</span>
        </div>
        <div class=" w-full text-center py-8 ">
          Aqui realizamos o sonho da casa própria! Com o financiamento imobiliário da SejaBest, 
            você pode garantir ótimas taxas, além de ter à sua disposição um assessor que vai te 
            auxiliar do início ao fim do processo. É um investimento seguro com diversas vantagens 
            a curto e a longo prazo. Com condições facilitadas, o FinanBest é perfeito para você!
        </div>
      <div class="border-1 gradienteSBDark  rounded-xl w-full text-white flex flex-col self-center ">
            <div class=" rounded-t-xl bg-secondary p-4  text-center border-b-4 border-complementaryColor3">
              <div class="text-4xl titleFont">Finan<span class="font-semibold">Best</span></div>
              <div class="text-xl titleFont">As melhores soluções em </div>
              <div class="text-xl titleFont">Financiamento Imobiliário</div>
            </div>
            <div class="w-full p-6 rounded-b-xl ">
              <div class="w-full flex  items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.percentageFill" alt="Taxa"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  Taxas a partir de 9,70% a.a. + taxas referencial
                </div>
              </div>
              <div class="w-full flex pt-8 items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.calendarFill" alt="Prazo"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  Pague em até 420 meses
                </div>
              </div>
              <div class="w-full flex pt-8 items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.moneyFill" alt="Banco" class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  Os melhores bancos do mercado
                </div>
              </div>
              <div class="buttonComplementaryColor1 mt-8 text-center">
                <a :href="$options.information.appRealEstateSimulator+this.$root.utms"  style=" text-decoration: none;"
                  target="_blank">Faça uma simulação</a>
              </div>
            </div>
          </div>
    </div>
   
    
  </div>
  <div class=" w-full mt-8 flex justify-center sm:hidden md:hidden">
    <div class="ml-auto  mr-auto maxWidth">
      <Splide :options=" {type:'loop', perPage: 1, perMove: 1,  drag   : 'free' ,  height   : '25rem',trimSpace: 'move', 
        rewind : true, pagination:true, arrows:true} " aria-label="Você pode obter o recurso para:">
        <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderTutorial">
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
        A simulação é feita através do nosso <a :href="$options.information.appRealEstateSimulator+this.$root.utms" class="text-primary" style=" text-decoration: none;"
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
  <div class="w-full pb-16 mb-12 pt-16 sm:pt-0">
      <div class="maxWidth md:w-full flex sm:h-full mr-auto ml-auto sm:ml-0S" >
        <div class="mt-auto mb-auto w-full bg-bglight2Color shadow-xl border-1 rounded-2xl flex-wrap flex justify-center p-6">
        
          <div class="w-full flex py-4 ">
            <div class="w-1/3 sm:w-2/4 mt-auto mb-0 text-3xl sm:text-base ml-8 text-primary text-center  font-bold">Por que ser Best?</div>
            <div class="w-1/3   sm:w-1/4   mt-auto mb-0">
              <img :src="$options.imageConfig.logoVertical" alt="SejaBest"  class="w-24 sm:w-18 h-auto mr-auto ml-auto"/>
            </div>
            <div class="w-1/3  sm:w-1/4 mt-auto mb-0 text-center">
              <div class="text-textSecondary text-3xl sm:text-2xl mt-auto mb-auto px-4"> Bancos</div>
            </div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0  ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg"> As menores taxas do mercado </div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto sm:pl-4"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0  ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg"> Múltiplas opções de banco </div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto sm:pl-4"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0  ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Plataforma multiprodutos</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto sm:pl-4"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0  ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Transparência</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto sm:pl-4"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0  ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Processo agilizado</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto sm:pl-4"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0  ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Atendimento 7 dias por semana</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto sm:pl-4"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0  ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Assessoria personalizada</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto sm:pl-4"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0  ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Totalmente Digital</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto sm:pl-4"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0  ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Sem burocracias</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto sm:pl-4"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0  ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Sem filas</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto sm:pl-4"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex py-3 ml-8 sm:ml-0 ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-lg">Foco no cliente</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto sm:pl-4"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-7 h-auto mr-auto ml-auto"/></div>
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
import rodape from '@/components/base/bannerBottomPage.vue';
export default defineComponent({
  name: 'Financing',
  components:{
    topbarComponent , popUpVideo, rodape
  },
  metaInfo () {
    return {
      title: "Conheça o FinanBest. O Financiamento Imobiliário da SejaBest.",
      meta: [
        { vmid: 'description', name: 'description', content: "Financie seu imóvel com as melhores condições do mercado. Tudo de forma online, digital, transparente e com o auxílio do nosso time de especialistas!" }
      ]
    }
  },
  data() {
    return {
      isVisible:false,
      value:300000,
      showVideo:false,
      videoStyle: "w-full h-[36rem] mr-auto ml-auto rounded-2xl ",
      videoUrl:"https://www.youtube.com/embed/Mlg8eDX61uE",
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
	  fill: #0063f2;
  }

  .splide__arrow--prev {
    left: -2em;
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