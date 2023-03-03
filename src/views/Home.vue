<template>

<div class="w-full bg-bglightColor overflow-x-hidden overflow-y-hidden scroll-smooth">

  <div class="text-textPrimary gradienteSBHome">
    <div class="bgManWithPhone sm:hidden md:hidden">
      <div class="maxWidth xl:h-screen lg:h-screen" >
        <topbarComponent position="relative" />
        <div class="w-full px-24 sm:px-0 flex flex-wrap justify-between mt-6 md:mt-4 sm:mt-4">
          <div class=" md:w-7/12 text-white md:pr-4 sm:hidden  mt-auto mb-auto">
            <a class="flex flex-row borderWhite xl:p-1 lg:p-1 xl:text-lg lg:text-lg absolute xl:mt-40 xl:ml-28 lg:mt-32 lg:ml-32 gap-4 rounded-md cursor-pointer" @click="scrollToElement('#SaibaMaisAbaixo')">
                <span class="text-left xl:mt-1 px-1">Saiba Mais</span>
               <img :src="$options.imageConfig.icons.setaBaixowhite" alt="SejaBest"  class="xl:w-8 lg:w-7 borderWhite rounded-full xl:ml-3 lg:ml-3 xl:mr-2 lg:mr-1 xl:p-2 lg:p-2 h-auto "/>
            </a>
          </div>
          <div class="md:pt-4 sm:py-8 max-w-[400px] w-full md:mr-auto md:ml-auto sm:mr-auto sm:ml-auto ">
 
            <div class="bg-WhiteTransparency rounded-xl w-full shadow-2xl p-12">
                <div class="text-6xl titleFontBold  text-primary  " >
                  <div>Crédito Imobiliário nunca foi </div>
                  <div  class="flex ">
                    <div>tão</div> <div class="pb-1 textDecoration">&nbsp;fácil.</div>
                  </div>
                </div>
                <div class="text-sm py-4">Pré-aprove o seu crédito em até 20 minutos.</div>
                <div class="flex w-full items-center border-b-1 border-textSecondary pb-2">
                  <div class="w-2/12 pr-6 mt-auto mb-auto">
                    <img  :src="$options.imageConfig.iconSejaBest" alt="SejaBest"  class="w-full h-auto ">
                  </div>
                  <div class="w-10/12 text-xl text-textPrimary"> 
                    Sem Filas. Sem gerentes. Sem complexidade
                  </div>
                </div>
                <div class="w-10/12 text-xl pt-2 font-semibold text-textPrimary"> 
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
    <div class="maxWidth  xl:hidden lg:hidden" >
      <topbarComponent position="relative" />
      <div class="w-full gradienteSBHome mt-4 rounded-2xl text-white ">
        <img :src="$options.imageConfig.bg.manWithPhone" alt="Crédito Imobiliário"  class="w-full rounded-t-2xl h-auto mr-auto ml-auto"/>
        <div class=" w-full rounded-t-xl">
        <div class="p-4">
          <div class="text-5xl md:text-6xl titleFontBold   mt-[-3.8rem] " >
            <div class="text-center">
              Crédito Imobiliário nunca foi tão <span class="textDecoration">fácil.</span>
            </div>
          </div>
          <div class="text-sm py-6 md:text-lg text-center">Pré-aprove o seu crédito em até 20 minutos.</div>
          <div class="flex w-full items-center border-b-1 border-complementaryColor3 pb-4">
            <div class="w-2/12 pr-6 mt-auto mb-auto">
              <img  :src="$options.imageConfig.iconSejaBestWhite" alt="SejaBest"  class="w-12 h-auto ">
            </div>
            <div class="w-10/12 text-lg text-white"> 
              Sem <span class="text-complementaryColor3">Filas.</span> 
              Sem <span class="text-complementaryColor3">gerentes.</span>  
              Sem <span class="text-complementaryColor3">complexidade</span> 
            </div>
          </div>
          <div class="w-10/12 text-xl pt-2 font-semibold "> 
            De quanto você precisa?
          </div>
          <div class="w-full flex  text-textPrimary items-end justify-between">
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
    <div class="maxWidth pt-24 md:pt-8 sm:pt-8">
        <div class="text-6xl lg:text-5xl md:text-4xl sm:px-8 sm:text-4xl titleFontBold  text-white  text-center" id="SaibaMaisAbaixo" >
          Como a SejaBest pode te ajudar hoje?
        </div>
        <div class="text-3xl sm:text-2xl  titleFontBold  text-white  text-center pt-4 pb-20 sm:pb-8">
          Conheça as melhores soluções em Crédito Imobiliário do mercado:
        </div>
        <div class="w-full flex justify-center pb-16 sm:hidden">
          <div class="border-1  rounded-xl w-4/12 md:w-5/12 lg:w-5/12 text-white mr-4">
            <div class=" rounded-t-xl bg-primary p-4  text-center border-b-4 border-complementaryColor1">
              <div class="text-4xl titleFont">Cash<span class="font-semibold">Best</span></div>
              <div class="text-xl defaultFontt">Conheça o Crédito com </div>
              <div class="text-xl defaultFontt">garantia de imóvel</div>
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
          <div class="border-1 gradienteSBDark  rounded-xl w-4/12 md:w-5/12 lg:w-5/12 text-white ml-4">
            <div class=" rounded-t-xl bg-secondary p-4  text-center border-b-4 border-complementaryColor3">
              <div class="text-4xl titleFont">Finan<span class="font-semibold">Best</span></div>
              <div class="text-xl defaultFont">As melhores soluções em </div>
              <div class="text-xl defaultFont">Financiamento imobiliário</div>
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
                  <img :src="$options.imageConfig.icons.moneyFill" alt="Valor" class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  Os melhores bancos do mercado
                </div>
              </div>
              <div class="buttonComplementaryColor1 mt-8 text-center">
                <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                  target="_blank">Faça uma simulação</a>
              </div>
            </div>
          </div>
        </div> 
        <div class="w-full md:hidden lg:hidden xl:hidden">
          <Splide  :options=" {type:'loop', perPage: 1, perMove: 1,  drag   : 'free', pagination:false,
            } " aria-label="Vantagens para você">
            <SplideSlide >
              <div class="w-10/12 mr-auto ml-auto max-w-sm p-4">
                <div class="border-1 rounded-xl w-full text-white ">
                  <div class=" rounded-t-xl bg-primary p-4  text-center border-b-4 border-complementaryColor1">
                    <div class="text-4xl titleFont">Cash<span class="font-semibold">Best</span></div>
                    <div class="text-xl defaultFont">Conheça o Crédito com </div>
                    <div class="text-xl defaultFont">garantia de imóvel</div>
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
                        <img :src="$options.imageConfig.icons.calendarFill" alt="Prazo" class="w-9 h-8  "/>
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
            </SplideSlide>
            <SplideSlide >
              <div class="w-10/12 mr-auto ml-auto max-w-sm p-4">
                <div class="border-1 w-full gradienteSBDark  rounded-xl text-white ">
                  <div class=" rounded-t-xl bg-secondary p-4  text-center border-b-4 border-complementaryColor3">
                    <div class="text-4xl titleFont">Finan<span class="font-semibold">Best</span></div>
                    <div class="text-xl defaultFont">As melhores soluções em </div>
                    <div class="text-xl defaultFont
                    
                    ">Financiamento imobiliário</div>
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
                        <img :src="$options.imageConfig.icons.calendarFill" alt="Prazo" class="w-9 h-8  "/>
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
                      <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                        target="_blank">Faça uma simulação</a>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>  
          </Splide>  
        </div>
    </div>
    <div class="w-full pt-24 md:pt-8 sm:pt-8 sm:bg-bglightColor">
      <div class="maxWidth md:w-full flex sm:h-full mr-auto ml-auto sm:ml-0S" >
        <div class="mt-auto mb-auto w-full bg-bglightColor rounded-2xl flex-wrap p-6 sm:p-2 flex justify-center">
          <div class="w-10/12 sm:w-11/12">
          <div class="w-full flex ml-8 sm:ml-0 py-4 ">
            <div class="w-1/3 sm:w-[50%] mt-auto mb-0 text-2xl sm:leading-5 sm:text-xl sm:mr- xl:text-3xl text-primary defaultFontBold text-center">Por que ser Best?</div>
            <div class="w-1/3  sm:w-[25%]  mt-auto mb-0">
              <img :src="$options.imageConfig.logoVertical" alt="SejaBest"  class="w-30 sm:w-24 h-auto mr-auto ml-auto sm:ml-2"/>
            </div>
            <div class="w-1/3  sm:w-[25%] mt-auto mb-0 text-center">
              <div class="text-textSecondary text-3xl sm:text-xl mt-auto mb-auto px-4 sm:px-0 sm:ml-4"> Bancos</div>
            </div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base"> As menores taxas do mercado </div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base"> Múltiplas opções de banco </div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">Plataforma multiprodutos</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">Transparência</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">Processo agilizado</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">Atendimento 7 dias por semana</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0 ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">Assessoria personalizada</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0 ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">Totalmente Digital</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0 ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">Sem burocracias</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex border-b py-3 ml-8 sm:ml-0 ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">Sem filas</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
          </div>
          <div class="w-full flex py-3 ml-8 sm:ml-0 ">
            <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">Foco no cliente</div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.checkFill"  alt="Contém" class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
            <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto"><img :src="$options.imageConfig.icons.errorFill"  alt="Não contém"  class="w-8 sm:w-6 h-auto mr-auto ml-auto"/></div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="w-full maxWidth pt-24 sm:pt-8 md:py-12 sm:bg-bglightColor">
      <div class=" w-full px-4 bg-bglightColor rounded-2xl sm:hidden flex justify-center">
        <div class="pt-12 pr-12">
          <img :src="$options.imageConfig.home.phoneProposal" alt="Mais de 2000 propostas todo mês"  class="w-80  h-auto mr-auto ml-auto"/>
        </div>
        <div class="pr-12">
          <img :src="$options.imageConfig.home.phoneLend" alt="Mais de R$ 500 milhões emprestados" class="w-80   h-auto mr-auto ml-auto"/>
        </div>
        <div class="pt-12 ">
          <img :src="$options.imageConfig.home.phoneRequested" alt="Mais de R$ 2.5 bilhões em solicitações" class="w-80  h-auto mr-auto ml-auto"/>
        </div>
      </div>
      <div class="bg-primary xl:hidden lg:hidden md:hidden  rounded-2xl ">
          <Splide :options=" {type:'loop', perPage: 1, perMove: 1,  drag   : 'free', pagination:false,
            } " aria-label="Vantagens para você">
            <SplideSlide >
              <div  class="w-8/12 mr-auto ml-auto ">
                <img :src="$options.imageConfig.home.phoneProposal" 
                class="px-4" alt="Mais de 2000 propostas todo mês">
              </div>
            </SplideSlide>
            <SplideSlide >
              <div  class="w-8/12 mr-auto ml-auto">
                <img :src="$options.imageConfig.home.phoneLend" 
                class="px-4" alt="Mais de R$ 500 milhões emprestados">
              </div>
            </SplideSlide>
            <SplideSlide >
              <div  class="w-8/12 mr-auto ml-auto">
                <img :src="$options.imageConfig.home.phoneRequested" 
                class="px-4" alt="Mais de R$ 2.5 bilhões em solicitações">
              </div>
            </SplideSlide>
              
          </Splide>
        </div>
    </div>
    
  </div>  
  <div class="w-full bgMeioAzul p-4 sm:hidden md:hidden pt-24 sm:pt-8">
      <div class="maxWidth p-0 shadow-lg bg-bglightColor rounded-2xl flex flex-wrap">
        <div class="w-6/12 mb-auto ">
          <div class="pl-24 lg:pl-12 py-16 ">
            <div class="text-6xl xl:text-7xl titleFontBold text-primary xl:leading-[3.5rem] lg:leading-[3rem]  " >
                <div>Você está </div>
              <div  class="flex ">
                <div>no</div>&nbsp; <div class="pb-1 textDecoration">centro</div><div>&nbsp;das</div>
              </div>
              <div>nossas decisões </div>
            </div>
            <div class="pt-6 lg:pt-6 text-xl lg:text-lg text-textSecondary">
              Acreditamos que você merece uma experiência <br/>
              completa, que soma o melhor do nosso atendimento <br/>
              humanizado e personalizado dos nossos <br/>
              especialistas com a tecnologia, simplificando e <br/>
              agilizando todos os processos.
            </div>
            <router-link :to="'/sobre'+this.$root.utms">
              <div class="  p-2 w-6/12 bg-complementaryColor1 rounded-md text-white text-center text-xl sm:mb-1 mt-14" >
                Conheça a SejaBest
              </div> 
            </router-link>
          </div>
        </div>
        <div class="w-6/12 ">
          <img :src="$options.imageConfig.home.phoneMan" alt="Crédito imobiliário" class="w-full h-auto rounded-r-2xl"/>
        </div>
      </div>
  </div> 
  <div class="maxWidth xl:hidden lg:hidden">
    <div class="bg-white rounded-2xl w-full">
      <div class="rounded-t-2xl bg-primary pb-4" ></div>
      <img :src="$options.imageConfig.home.phoneManSM" alt="Crédito imobiliário" class="w-full h-auto "/>
      <div class="p-8">
      
        <div class="text-6xl sm:text-4xl titleFontBold text-center text-primary  " >
          Você está no <span class="textDecoration">centro</span> das nossas decisões.
        </div>
        <div class="text-textSecondary md:text-xl pt-8 text-justify">
              Acreditamos que você merece uma experiência 
              completa, que soma o melhor do nosso atendimento 
              humanizado e personalizado dos nossos 
              especialistas com a tecnologia, simplificando e 
              agilizando todos os processos.
        </div>
        <router-link :to="'/sobre'+this.$root.utms" >
          <div class=" pt-8 w-full  text-white text-center" >
            <a>Conheça a SejaBest</a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="maxWidth   sm:bg-bglightColor mr-auto ml-auto">
      <div class="w-full text-center">
        <div class="text-4xl pt-24 sm:pt-8 md:pt-8 sm:text-2xl text-primary font-bold">
          A melhor plataforma multibancos 
        </div>
        <div class="text-textSecondary text-xl ">
          Conheça os parceiros que estão decolando com a <span class="font-semibold">SejaBest</span>.
        </div>
      </div>
      <div class="w-full pt-16 sm:pt-8 md:pt-8 flex flex-wrap justify-center">
        <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.cashme" alt="cashme"  class="w-44 sm:w-36 md:w-36 h-auto "/></div>
        <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.inter" alt="inter"  class="w-44 sm:w-32 md:w-36 h-auto "/></div>
        <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.rodobens" alt="rodobens"  class="w-44 sm:w-36 md:w-36 h-auto "/></div>
        <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.piratini" alt="piratini"  class="w-44 sm:w-36 md:w-36 h-auto "/></div>
        <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.santander" alt="santander"  class="w-44 sm:w-36 md:w-36 h-auto "/></div>
        <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.daycoval" alt="daycoval"  class="w-44 sm:w-36 md:w-36 h-auto "/></div>
        <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.pontte" alt="pontte" class="w-44 sm:w-36 md:w-36 h-auto "/></div>
        <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.creditas" alt="creditas"  class="w-44 sm:w-36 md:w-36 h-auto "/></div>
        <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.itau" alt="Itaú"  class="w-44 sm:w-32 md:w-36 h-auto "/></div>
        <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.libra" alt="Libra"  class="w-44 sm:w-32 md:w-36 h-auto "/></div>
        <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.wimo" alt="Wimo"  class="w-44 sm:w-32 md:w-36 h-auto "/></div>
        <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.bari" alt="Bari"  class="w-44 sm:w-32 md:w-36 h-auto "/></div>
      </div>
      <div class="p-6 w-9/12 mr-auto ml-auto border-b-1 sm:p-2 md:p-2 border-textSecondary"></div>
  </div>
  <div class="w-full  pt-10 sm:pt-4 md:pt-4 mr-auto ml-auto flex">
     <div class="w-7/12 sm:w-9/12 flex justify-center mt-auto mb-auto">
      <div class="w-7/12 md:w-full lg:w-8/12 sm:w-full p-4 sm:p-0 sm:pl-6 md:pl-8  marginl-15R marginl-24R marginl-40R marginl-50R">
        <div class="text-5xl sm:text-2xl md:text-4xl font-semibold text-primary ">
          Transformando sua vida através da <span class="textDecoration">informação.</span>
        </div>
        <div class="text-xl sm:text-sm md:text-sm sm:pt-4 md:pt-4 lg:pt-8 text-textSecondary pt-10">
          Siga a <span class="font-semibold">SejaBest</span> em todos os nossos canais pra ficar por dentro de 
          <span class="font-semibold">notícias, novidades e oportunidades</span> do mercado financeiro.
        </div>
        <div class="text-xl md:text-sm md:pt-2 sm:text-sm sm:pt-2 lg:pt-4 text-textSecondary pt-8">
          conheça nosso <a :href="$options.information.socialMedia.youtube" style=" text-decoration: none;"
          target="_blank" class="text-primary font-semibold"> canal no YouTube.</a>  Conteúdos educativos 
          <span class="font-semibold"> gratuitos </span> sobre tudo do mercado de Financiamento Imobiliário.
          
        </div>
        <div  class="flex pt-10 sm:pt-4 md:pt-4 pb-[6rem] sm:pb-13 xl:pb-36">
          <a :href="$options.information.socialMedia.youtube" style=" text-decoration: none;"
            target="_blank" class="p-1 pr-2 sm:pr-0 text-white bg-primary sm:text-2xs  flex rounded-lg">
            <svg  class="w-6 h-6  sm:w-5 sm:h-4 mx-2 sm:mx-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
            <span class="sm:pt-[0.15rem] sm:pr-2">Inscreva-se </span>
          </a>
          <a :href="$options.information.socialMedia.linkedin"  style=" text-decoration: none;"
            target="_blank">
            <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-1 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
          </a>
          <a :href="$options.information.socialMedia.instagram" style=" text-decoration: none;"
            target="_blank">
            <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-1 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
          <a :href="$options.information.socialMedia.facebook"  style=" text-decoration: none;"
              target="_blank">
            <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-1 fill-primary"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
          </a>
          <a :href="$options.information.socialMedia.telegram"  style=" text-decoration: none;"
              target="_blank">
            <svg class="w-8 h-8 sm:w-6 sm:h-6 mx-1 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
              <path class="cls-1" d="M540,3.31C241.77,3.31,0,245.08,0,543.31s241.77,540,540,540,540-241.77,540-540S838.23,3.31,540,3.31Zm235.82,354.71c-7.78,83.91-41.46,287.53-58.6,381.52-7.25,39.76-21.52,53.09-35.34,54.41-30.04,2.84-52.84-20.37-81.94-39.94-45.52-30.6-71.24-49.69-115.43-79.55-51.07-34.53-17.96-53.5,11.14-84.52,7.61-8.1,139.96-131.59,142.52-142.82,.32-1.39,.62-6.6-2.41-9.37-3.03-2.75-7.49-1.81-10.71-1.05-4.56,1.05-77.29,50.37-218.16,147.94-20.64,14.54-39.34,21.63-56.09,21.25-18.46-.42-53.99-10.73-80.4-19.52-32.39-10.8-58.14-16.53-55.9-34.87,1.17-9.55,14-19.33,38.48-29.3,150.78-67.41,251.32-111.83,301.63-133.3,143.64-61.3,173.48-71.95,192.94-72.29,4.28-.09,13.85,1.01,20.05,6.15,5.23,4.36,6.67,10.26,7.36,14.4,.69,4.12,1.55,13.53,.87,20.87Z"/>
            </svg>
          </a>
        </div>
      </div>
     </div>
     <div class="w-5/12 flex justify-end">
       <img :src="$options.imageConfig.home.mockupPhonesDesktopCrop" alt="SejaBest Mídias Sociais"  class="w-8/12 lg:w-full mr-0 ml-auto sm:hidden md:hidden h-auto "/>
       <img :src="$options.imageConfig.home.mockupPhonesSM"   alt="SejaBest Mídias Sociais"  class="w-full md:w-8/12 mr-0 ml-auto xl:hidden lg:hidden h-auto sm:h-[80%] "/>
     </div>
  </div>
  <rodape />

</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import topbarComponent from '@/components/structure/topbar.component.vue';
import rodape from '@/components/base/bannerBottomPage.vue';
export default defineComponent({
  name: 'Home',
  components:{
    topbarComponent, rodape
  },
  data() {
    return {
      
      isVisible:false,
      value:250000,
    }
  },
  methods: {
    scrollToElement(elementId) {
      window.scrollTo({
        top: document.querySelector(elementId).offsetTop,
        behavior: 'smooth'
      });
    }
  },
  metaInfo () {
    return {
      title: "SejaBest",
      meta: [
        { vmid: 'description', name: 'description', content: "Crédito Imobiliário nunca foi tão fácil. Conheça as melhores soluções em Crédito Imobiliário do mercado: Conheça o Crédito com garantia de imóvel e o financiamento imobiliário" }
      ]
    }
  },
  mounted() {
    if( this.$route.fullPath.includes("?") ){
      var fullUrl = this.$route.fullPath.split("?")
      this.$root.utms="?"+(fullUrl[1])  
    }
    /* Função para aparecer somente se é a primeira visita, creio que pode ser reutilizado
    if (!localStorage.getItem('isVisited')) {
      localStorage.setItem('isVisited', true);
      this.showCookies= true;
    } else {
      this.showCookies= false;
    } */
  }
})
</script>

<style>
  .splide__arrow svg {
	  fill: #d1d1d1;
  }

</style>