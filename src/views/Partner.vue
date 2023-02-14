<template>
<div class="w-full gradienteSBLight2">
  <div class="text-textPrimary ">
    <div class="bgBusinessman sm:hidden md:hidden">
      <div class="maxWidth xl:h-screen lg:h-screen" >
        <topbarComponent position="relative" />
        <div class="w-full px-24 sm:px-0 flex flex-wrap justify-between mt-20 ">
          <div class=" max-w-[400px] w-full md:mr-auto md:ml-auto sm:mr-auto sm:ml-auto marginXL">
            <div class="text-white w-full  ">
              <div class="text-6xl titleFontBold  " >
               <h1> Alavanque seus resultados com o <span class="textDecoration"> BestHub. </span></h1>
              </div>
              <div class=" py-8">
                O sistema de parceiros que vem revolucionando o mercado de crédito imobiliário.
              </div>
              <div class="">
                <button class="buttonComplementaryColor1 sm:p-2 md:p-2"><a class="sm:text-sm text-2xl "
                  :href="$options.information.apppartnerRegistration"  style=" text-decoration: none;"
                  target="_blank">Quero ser parceiro</a> </button>
              </div>  
          
            </div>
          </div>
          <div class=" md:w-7/12 text-white md:pr-4 sm:hidden  mt-auto mb-auto">
            
          </div>
          
        </div>
        
      </div>
      
    </div>
    <div class="bg-bglightColor xl:hidden lg:hidden w-full">
    <div class="maxWidth  " >
      <topbarComponent position="top" />
      <div class="w-full gradienteSBLight2 mt-4 rounded-2xl text-white ">
        <img :src="$options.imageConfig.partner.businessman" alt="BestHub"  class="w-auto h-60 rounded-t-2xl  mr-auto ml-auto"/>
        <div class=" w-full rounded-t-xl">
          <div class="text-white w-full p-4 ">
              <div class="text-4xl titleFontBold  " >
                Alavanque seus resultados com o <span class="textDecoration"> BestHub. </span>
              </div>
              <div class=" py-4">
                O sistema de parceiros que vem revolucionando o mercado de crédito imobiliário.
              </div>
              <div class="text-center">
                <button class="buttonComplementaryColor1 "><a class="sm:text-sm text-2xl "
                  :href="$options.information.apppartnerRegistration"   style=" text-decoration: none;"
                  target="_blank">Quero ser parceiro</a> </button>
              </div>  
          
            </div>
          
        </div>
      </div>
    </div>
    </div>
    
      <div class="maxWidth">
        <div class="w-full flex flex-wrap pt-8 sm:pt-16 xl:py-32 xl:pb-20 lg:py-32 md:py-24">
          <div class="w-1/2 mt-auto mb-auto sm:w-full md:w-full md:hidden sm:hidden">
            <img :src="$options.imageConfig.partner.manIcon" alt="Parceiro Best"
              class="sm:w-full md:w-11/12 w-9/12  h-auto  "/>
          </div>
          <div class="w-1/2 sm:w-full md:w-full mt-auto mb-auto flex flex-wrap text-white">
            <div class="xl:w-12/12 lg:w-2/3 md:w-full sm:w-full sm:text-center md:text-center text-4xl pb-4 md:text-3xl sm:text-2xl font-semibold ">
              Por que ser um parceiro <span class="textDecoration">Best?</span>
            </div>
            <div class="mt-8 md:mt-6 sm:mt-4  mr-12 md:mr-0 sm:mr-0  w-1/2 sm:pr-2 md:pr-2" @mouseenter="glitch = true" @mouseleave="glitch = false" :class="{ 'glitchBlue': glitch }">
              <div class="bg-bglightColor rounded-xl w-full flex p-2 h-12 ">
                <div class="mt-auto mb-auto">
                  <img :src="$options.imageConfig.icons.phoneFill" alt="1"  class="w-auto h-8 "/>
                </div>
                <div class="w-full pl-4 mt-auto mb-auto">
                  <div class="text-primary xl:text-2xl text-xl sm:text-sm">
                    Totalmente digital
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="mt-4 md:mt-6 sm:mt-4 ml-auto mr-12 w-1/2 md:mr-0 sm:mr-0 md:ml-0 sm:ml-0 sm:pl-2 md:pl-2" @mouseenter="glitch2 = true" @mouseleave="glitch2 = false" :class="{ 'glitchBlue': glitch2 }">
              <div class="bg-bglightColor rounded-xl w-full flex p-2 h-12">
                <div class="mt-auto mb-auto">
                  <img :src="$options.imageConfig.icons.calendarFill" alt="2"  class="w-auto h-8 "/>
                </div>
                <div class="w-full pl-4 mt-auto mb-auto">
                  <div class="text-primary xl:text-2xl text-xl sm:text-sm">
                     7 dias por semana
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="mt-4 w-1/2 ml-8  md:mr-0 sm:mr-0 md:ml-0 sm:ml-0 sm:pr-2 md:pr-2"  @mouseenter="glitch3 = true" @mouseleave="glitch3 = false" :class="{ 'glitchBlue': glitch3 }">
              <div class="bg-bglightColor rounded-xl w-full flex p-2 h-12 ">
                <div class="mt-auto mb-auto">
                  <img :src="$options.imageConfig.icons.percentageFill" alt="3"  class="w-auto h-8 "/>
                </div>
                <div class="w-full pl-4 mt-auto mb-auto">
                  <div class="text-primary xl:text-2xl text-xl sm:text-sm">
                    Transparência total
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="mt-4 ml-auto mr-0 w-1/2 md:mr-0 sm:mr-0 md:ml-0 sm:ml-0 sm:pl-2 md:pl-2"  @mouseenter="glitch4 = true" @mouseleave="glitch4 = false" :class="{ 'glitchBlue': glitch4 }">
              <div class="bg-bglightColor rounded-xl w-full flex p-2 h-12 ">
                <div class="mt-auto mb-auto ">
                  <img :src="$options.imageConfig.icons.moneyFill" alt="4" class="w-auto h-8 "/>
                </div>
                <div class="w-full pl-4 mt-auto mb-auto">
                  <div class="text-primary xl:text-2xl text-xl sm:text-sm">
                    Ganho no sucesso
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="mt-4 xl:w-9/12 w-8/12  mr-auto ml-auto"  @mouseenter="glitch5 = true" @mouseleave="glitch5 = false" :class="{ 'glitchBlue': glitch5 }">
              <div class="bg-bglightColor rounded-xl w-full flex p-2 h-12 ">
                <div class="mt-auto mb-auto">
                  <img :src="$options.imageConfig.icons.userFill" alt="5" class="w-auto h-8 "/>
                </div>
                <div class="w-full pl-4 mt-auto mb-auto">
                  <div class="text-primary xl:text-2xl text-xl sm:text-sm">
                    Perfil do cliente em tempo real
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="maxWidth pt-24 md:pt-8 sm:pt-8 xl:pb-0">
        <div class="text-6xl lg:text-5xl pb-24 md:pb-8 sm:pb-8 md:text-4xl sm:px-8 sm:text-4xl titleFontBold  text-white  text-center  " >
          Conheça nossos produtos.
        </div>
        
        <div class="w-full flex justify-center pb-14 sm:hidden">
          <div class="border-1  rounded-xl w-4/12 md:w-5/12 lg:w-5/12 text-white mr-4">
            <div class=" rounded-t-xl bg-primary p-4  text-center border-b-4 border-complementaryColor1">
              <div class="text-4xl titleFont">Cash<span class="font-semibold">Best</span></div>
              <div class="text-xl titleFont defaultFont">Conheça o Crédito com </div>
              <div class="text-xl titleFont defaultFont">garantia de imóvel</div>
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
          <div class="border-1 gradienteSBDark  rounded-xl w-4/12 md:w-5/12 lg:w-5/12 text-white ml-4">
            <div class=" rounded-t-xl bg-secondary p-4  text-center border-b-4 border-complementaryColor3">
              <div class="text-4xl titleFont">Finan<span class="font-semibold">Best</span></div>
              <div class="text-xl defaultFont">As melhores soluções em </div>
              <div class="text-xl defaultFont">Financiamento imobiliário</div>
            </div>
            <div class="w-full p-6 rounded-b-xl ">
              <div class="w-full flex  items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.percentageFill" alt="Taxa" class="w-9 h-8  "/>
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
                  <img :src="$options.imageConfig.icons.moneyFill" alt="Banco"  class="w-9 h-8  "/>
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
              <div class="w-11/12 mr-auto ml-auto max-w-sm p-4">
                <div class="border-1 rounded-xl w-full text-white ">
                  <div class=" rounded-t-xl bg-primary p-4  text-center border-b-4 border-complementaryColor1">
                    <div class="text-4xl titleFont">Cash<span class="font-semibold">Best</span></div>
                    <div class="text-xl titleFont">Conheça o Crédito com </div>
                    <div class="text-xl titleFont">garantia de imóvel</div>
                  </div>
                  <div class="w-full p-6 bg-secondary rounded-b-xl">
                    <div class="w-full flex  items-center">
                      <div class="pr-6 ">
                        <img :src="$options.imageConfig.icons.percentageFill" alt="Taxa" class="w-9 h-8  "/>
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
                        <img :src="$options.imageConfig.icons.moneyFill" alt="Valor" class="w-9 h-8  "/>
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
              <div class="w-11/12 mr-auto ml-auto max-w-sm p-4">
                <div class="border-1 w-full gradienteSBDark  rounded-xl text-white ">
                  <div class=" rounded-t-xl bg-secondary p-4  text-center border-b-4 border-complementaryColor3">
                    <div class="text-4xl titleFont">Finan<span class="font-semibold">Best</span></div>
                    <div class="text-sm titleFont">As melhores soluções em </div>
                    <div class="text-sm titleFont">Financiamento imobiliário</div>
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
                        <img :src="$options.imageConfig.icons.calendarFill" alt="Praza" class="w-9 h-8  "/>
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
      <div class="maxWidth flex flex-wrap pt-8 sm:pt-16 xl:py-32 lg:py-32 md:py-24">
          <div class="w-1/2 mt-auto mb-auto sm:w-full">
            <img :src="$options.imageConfig.partner.mockupTablet" alt="BestHub"  
              class="sm:w-full md:w-11/12 h-auto  xl:max-w-3xl xl:w-[42rem]"/>
          </div>
          <div class="w-1/2 sm:w-full text-right sm:text-left mt-auto mb-auto text-white">
            <div class="xl:w-2/3 lg:w-2/3 md:w-full sm:text-center text-5xl md:text-3xl sm:text-3xl font-semibold text-right mr-0 ml-auto">
              Como o BestHub pode ajudar o seu <span class="text-complementaryColor3">negócio?</span>
            </div>
            <div class="pt-6  text-xl md:text-lg sm:text-center">
              Uma plataforma multibanco e 100% digital. As melhores opções do mercado na palma da sua mão.
            </div>
            <div class="py-6   text-xl md:text-lg sm:text-center ">
              Aqui você vivencia uma nova experiência com crédito imobiliário. Temos as melhores 
              taxas do mercado e unimos atendimento humanizado com muita tecnologia para você e seu cliente.
            </div>
            <div class=" px-4 sm:text-center">
              <button class="buttonComplementaryColor1  "><a class="sm:text-sm text-2xl md:text-xl"
                :href="$options.information.apppartnerRegistration"  style=" text-decoration: none;"
                target="_blank">Quero ser parceiro</a> </button>
            </div>
          </div>
        </div>
      <div class="bg-bglightColor xl:pb-40 lg:pb-40">
        <div class="maxWidth    mr-auto ml-auto">
          <div class="w-full text-center">
            <div class="text-4xl pt-40 sm:pt-8 md:pt-8 sm:text-2xl text-primary font-semibold">
               A melhor plataforma multibancos 
            </div>
            <div class="text-textSecondary text-xl ">
              Conheça os parceiros que estão decolando com a <span class="font-semibold">SejaBest</span>.
            </div>
          </div>
          <div class="w-full pt-16 sm:pt-8 md:pt-8 flex flex-wrap justify-center">
            <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.cashme" alt="Cashme" class="w-44 sm:w-36 md:w-36 h-auto "/></div>
            <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.inter" alt="Inter" class="w-44 sm:w-32 md:w-36 h-auto "/></div>
            <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.rodobens" alt="Rodobens" class="w-44 sm:w-36 md:w-36 h-auto "/></div>
            <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.piratini" alt="Piratini"  class="w-44 sm:w-36 md:w-36 h-auto "/></div>
            <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.santander" alt="Santander"  class="w-44 sm:w-36 md:w-36 h-auto "/></div>
            <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.daycoval" alt="Daycoval"  class="w-44 sm:w-36 md:w-36 h-auto "/></div>
            <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.pontte" alt="Pontte" class="w-44 sm:w-36 md:w-36 h-auto "/></div>
            <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.creditas" alt="Creditas" class="w-44 sm:w-36 md:w-36 h-auto "/></div>
            <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.itau" alt="Itaú"  class="w-44 sm:w-32 md:w-36 h-auto "/></div>
            <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.libra" alt="Libra"  class="w-44 sm:w-32 md:w-36 h-auto "/></div>
            <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.wimo" alt="Wimo" class="w-44 sm:w-32 md:w-36 h-auto "/></div>
            <div class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"><img :src="$options.imageConfig.logoPartners.gray.bari" alt="Bari" class="w-44 sm:w-32 md:w-36 h-auto "/></div>
          </div>
          
        </div>
      </div>
      <div class="w-full maxWidth xl:py-32 lg:py-32 py-12 xl:pb-8">
        <div class="w-full flex flex-wrap justify-center ">
          <div class="p-4 w-1/2 sm:w-full ">
            <img :src="$options.imageConfig.logoBestHub" alt="BestHub"  class="w-auto h-28 sm:h-18 sm:ml-auto sm:mr-auto xl:ml-20"/>
          </div>
          <div class="p-4 w-1/2 sm:w-full">
            <div class="text-white text-6xl sm:text-2xl w-9/12 sm:w-full sm:text-center sm:pb-8 xl:ml-20">
              Um hub <span class="textDecoration">cheio </span>  de vantagens.
            </div>
          </div>
        </div> 
        <div class="w-full flex flex-wrap justify-center pt-16 sm:pt-0">
          <div class="px-4 mb-8 w-1/2 sm:w-full sm:px-0 transition duration-450 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <div class="bg-bglightColor rounded-xl flex p-4 h-36 sm:h-auto ">
              <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.phoneFill" alt="Vantagem"  class="w-auto h-18 sm:h-12 "/>
              </div>
              <div class="w-full pl-4 mt-auto mb-auto" @mouseenter="glitch = true" @mouseleave="glitch = false" :class="{ 'glichBlue': glitch }">
                <div class="text-primary text-2xl sm:text-xl">
                  Plataforma multibancos integrada.
                </div>
                <div clas="text-textPrimary text-sm sm:text-[0.4rem] pt-2">
                  Simule, elabore suas propostas e gerencie tudo em um único ambiente totalmente digitalizado.
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 mb-8 w-1/2 sm:w-full sm:px-0 transition duration-450 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <div class="bg-bglightColor rounded-xl flex p-4 h-36 sm:h-auto ">
              <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.notebookFill" alt="Plataforma BestHub"  class="w-auto h-18 sm:h-12 "/>
              </div>
              <div class="w-full pl-4 mt-auto mb-auto" @mouseenter="glitch = true" @mouseleave="glitch = false" :class="{ 'glichBlue': glitch }">
                <div class="text-primary text-2xl sm:text-xl">
                  Plataforma White Label.
                </div>
                <div clas="text-textPrimary text-sm sm:text-[0.4rem] pt-2">
                  Com o BestHub você usa sua própria marca, entregando uma experiência diferenciada para seus cliente.
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 mb-8 w-1/2 sm:w-full sm:px-0 transition duration-450 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <div class="bg-bglightColor rounded-xl flex p-4 h-36 sm:h-auto ">
              <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.userFill" alt="Perfil do cliente"  class="w-auto h-18 sm:h-12 "/>
              </div>
              <div class="w-full pl-4 mt-auto mb-auto" @mouseenter="glitch = true" @mouseleave="glitch = false" :class="{ 'glichBlue': glitch }">
                <div class="text-primary text-2xl sm:text-xl">
                  Perfil de crédito do cliente em tempo real.
                </div>
                <div clas="text-textPrimary text-sm sm:text-[0.4rem] pt-2">
                  Em poucos cliques você descobre o perfil de crédito do seu cliente no mercado bancário.
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 mb-8 w-1/2 sm:w-full sm:px-0 transition duration-450 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <div class="bg-bglightColor rounded-xl flex p-4 h-36 sm:h-auto ">
              <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.moneyFill" alt="Plataforma multibancos" class="w-auto h-18 sm:h-12 "/>
              </div>
              <div class="w-full pl-4 mt-auto mb-auto" @mouseenter="glitch = true" @mouseleave="glitch = false" :class="{ 'glichBlue': glitch }">
                <div class="text-primary text-2xl sm:text-xl">
                  Potencialize seus ganhos.
                </div>
                <div clas="text-textPrimary text-sm sm:text-[0.4rem] pt-2">
                  Com uma solução multibancos, você oferece as melhores condições para seus clientes 
                  com uma excelente remuneração por produtividade.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="w-full  pt-10 sm:pt-4 md:pt-4  mr-auto ml-auto flex">
        <div class="w-7/12 flex justify-center mt-auto mb-auto">
          <div class="w-7/12 md:w-full lg:w-8/12 sm:w-full p-4 md:pl-8 text-white marginl-40R marginl-12R marginl-50R marginl-24R">
            <div class="text-5xl sm:text-2xl md:text-4xl font-semibold ">
              Somos <span class="textDecoration">autoridade</span> no assunto.
            </div>
            <div class="text-xl sm:text-sm md:text-sm sm:pt-4 md:pt-4 lg:pt-8  pt-10">
              Através de nossos canais, a SejaBest é referencia quando se fala em crédito Imobiliário.
              <span class="font-semibold">Confira:</span>
            </div>
            
            <div  class="flex py-10 sm:py-4 md:py-4 ">
              <a :href="$options.information.socialMedia.youtube" style=" text-decoration: none;"
                target="_blank" class="p-1 pr-2 text-white  sm:text-2xs  flex rounded-lg">
                <svg  class="w-10 h-10 sm:w-8 sm:h-8 mx-2 sm:mx-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                
              </a>
              <a :href="$options.information.socialMedia.linkedin"  style=" text-decoration: none;"
                target="_blank">
                <svg  class="w-10 h-10 sm:w-8 sm:h-8 mx-2 sm:mx-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              </a>
              <a :href="$options.information.socialMedia.instagram" style=" text-decoration: none;"
                target="_blank">
                <svg  class="w-10 h-10 sm:w-8 sm:h-8 mx-2 sm:mx-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
              <a :href="$options.information.socialMedia.facebook"  style=" text-decoration: none;"
                  target="_blank">
                <svg  class="w-10 h-10 sm:w-8 sm:h-8 mx-2 sm:mx-1 fill-white"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
              </a>
              <a :href="$options.information.socialMedia.telegram"  style=" text-decoration: none;"
                  target="_blank">
                <svg class="w-10 h-10 sm:w-8 sm:h-8 mx-2 sm:mx-1 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                  <path class="cls-1" d="M540,3.31C241.77,3.31,0,245.08,0,543.31s241.77,540,540,540,540-241.77,540-540S838.23,3.31,540,3.31Zm235.82,354.71c-7.78,83.91-41.46,287.53-58.6,381.52-7.25,39.76-21.52,53.09-35.34,54.41-30.04,2.84-52.84-20.37-81.94-39.94-45.52-30.6-71.24-49.69-115.43-79.55-51.07-34.53-17.96-53.5,11.14-84.52,7.61-8.1,139.96-131.59,142.52-142.82,.32-1.39,.62-6.6-2.41-9.37-3.03-2.75-7.49-1.81-10.71-1.05-4.56,1.05-77.29,50.37-218.16,147.94-20.64,14.54-39.34,21.63-56.09,21.25-18.46-.42-53.99-10.73-80.4-19.52-32.39-10.8-58.14-16.53-55.9-34.87,1.17-9.55,14-19.33,38.48-29.3,150.78-67.41,251.32-111.83,301.63-133.3,143.64-61.3,173.48-71.95,192.94-72.29,4.28-.09,13.85,1.01,20.05,6.15,5.23,4.36,6.67,10.26,7.36,14.4,.69,4.12,1.55,13.53,.87,20.87Z"/>
                </svg>
              </a>
            </div>
            <div class="pb-[6rem] xl:pb-28">
                <button class="buttonComplementaryColor1 sm:p-2 md:p-2"><a class="sm:text-sm text-2xl "
                  :href="$options.information.apppartnerRegistration"  style=" text-decoration: none;"
                  target="_blank">Quero ser parceiro</a> </button>
              </div>
          </div>
        </div>
        <div class="w-5/12 flex justify-end">
          <img :src="$options.imageConfig.home.mockupPhonesDesktopCrop" alt="BestHub"  class="w-8/12 lg:w-full mr-0 ml-auto sm:hidden md:hidden h-auto "/>
          <img :src="$options.imageConfig.home.mockupPhonesSM" alt="BestHub"  class="w-full md:w-8/12 mr-0 ml-auto xl:hidden lg:hidden h-auto "/>
        </div>
      </div>
    
    
    
    
  </div>  
    
    

  
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import topbarComponent from '@/components/structure/topbar.component.vue';
export default defineComponent({
  name: 'Home',
  components:{
    topbarComponent 
  },
  metaInfo () {
    return {
      title: "Como o BestHub pode ajudar o seu negócio?",
      meta: [
        { vmid: 'description', name: 'description', content: "Uma plataforma multibanco e 100% digital. As melhores opções do mercado na palma da sua mão. " }
      ]
    }
  },
  data() {
    return {
      isVisible:false,
      value:1000000,
      glitch: false,
      glitch2: false,
      glitch3: false,
      glitch4: false,
      glitch5: false,
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
   @media (min-width:1880px) {
    .marginXL{
      margin-top: 7rem;
    }
   }

   @media (min-width: 1880px) and (max-width:2000px) {
    .marginl-12R{
      margin-left: 12rem;
    }
    
  }

  @media (min-width: 2001px) and (max-width:2549rem) {
    .marginl-24R{
      margin-left: 24rem;
    }
  }

  @media (min-width: 2550px) and (max-width:2870px) {
    .marginl-40R{
      margin-left: 40rem;
    }
  }

  @media (min-width: 2871px) {
    .marginl-50R{
      margin-left: 50rem;
    }
  }
</style>