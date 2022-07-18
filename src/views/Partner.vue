<template>

  <div class="">
    <div class="w-full border-b-1">
      <div class="maxWidth " >
        <topbarComponent position="top" />
      </div>
    </div>

    <div class="w-full bgBannerArrowRight sm:hidden">
      <div class="maxWidth xl:h-screen lg:h-screen flex justify-between" >
        <div class="w-5/12 xl:mt-20 lg:mt-20 md:mt-8 mb-auto">
          <img :src="$options.imageConfig.bestHub"  class="w-56 h-auto "/>
          <div class=" xl:mt-20 lg:mt-20 md:mt-8 text-4xl md:text-2xl font-semibold text-primary">Alavanque seus  </div>
          <div class=" text-4xl md:text-2xl font-semibold text-primary">resultados com o <span class=" textDecoration">BestHub.</span></div>
          <div class=" my-8 md:my-4 text-2xl md:text-lg text-textSecondary">O sistema de parceiros que vem revolucionando o mercado de crédito imobiliário.</div>
          <button class=" buttonBlue text-xl md:mb-16"><a href="https://parceiros.seja.best/register" >Quero ser parceiro</a></button>
        </div>
        <div class="w-7/12 mt-auto mb-auto ">
          <img :src="$options.imageConfig.bestHubGif"  class="w-full md:w-10/12 h-auto "/>
        </div>
      </div>
    </div>
    <div class="w-full  lg:hidden xl:hidden md:hidden">
      <div class="maxWidth " >
        <div class="w-full ">
          <img :src="$options.imageConfig.bestHub"  class="w-36 h-auto py-8"/>
          <div class="text-2xl font-semibold text-primary">Alavanque seus  </div>
          <div class="text-2xl font-semibold text-primary">resultados com o <span class=" textDecoration">BestHub.</span></div>
          <div class=" my-6 text-textSecondary">O sistema de parceiros que vem revolucionando o mercado de crédito imobiliário.</div>
          <div class="text-center mb-8">
          <button class="buttonBlue text-xl "><a href="https://parceiros.seja.best/register" >Quero ser parceiro</a></button>
          </div>
        </div>
        <div class="w-full py-48 bgBannerArrowRightSM">
          <img :src="$options.imageConfig.bestHubGif"  class="w-11/12 h-auto mr-auto ml-auto "/>
        </div>
      </div>
    </div>

    <div class="w-full ">
      <div class="maxWidth xl:h-screen lg:h-screen flex flex-wrap justify-between" >
        <div class="w-5/12 sm:hidden md:hidden sm:pt-8 md:pt-8  mt-auto  mb-auto">

          <div class="text-4xl  font-semibold text-primary">Por que ser um</div>
          <div class="text-4xl  font-semibold text-primary"><span class=" textDecoration">parceiro Best?</span></div>
          
        </div>
        <div class="w-full xl:hidden lg:hidden sm:pt-16 md:pt-16  mt-auto  mb-auto">

          <div class="text-2xl md:text-4xl  sm:  font-semibold text-primary">Por que ser um <span class=" textDecoration">parceiro Best?</span></div>
          
        </div>
        <div class="w-7/12 sm:w-full md:w-full pt-4 mt-auto mb-auto ">
          <div class="w-full flex border-b-1 py-4">
            <div class="w-2/12 flex justify-center">
              <div class="mt-auto mb-auto">
              <img :src="$options.imageConfig.icons.phone"  class="w-24"/>
              </div>
            </div>
            <div class="w-10/12 pl-4 mt-auto mb-auto">
              <div class="text-xl text-primary">Totalmente digital</div>
              <div class=" text-textSecondary">
                Sem depender de vários bancos, gerentes de parceria, fluxos manuais, e-mails e documentações intermináveis.
              </div>
            </div>
          </div>
          <div class="w-full flex border-b-1 py-4">
            <div class="w-2/12 flex justify-center">
              <div class="mt-auto mb-auto">
              <img :src="$options.imageConfig.icons.calendar"  class="w-24"/>
              </div>
            </div>
            <div class="w-10/12 pl-4 mt-auto mb-auto">
              <div class="text-xl text-primary">7 dias por semana</div>
              <div class=" text-textSecondary">
                Atendimento personalizado, bancos só funcionam nos próprios horários.
              </div>
            </div>
          </div>
          <div class="w-full flex border-b-1 py-4">
            <div class="w-2/12 flex justify-center">
              <div class="mt-auto mb-auto">
              <img :src="$options.imageConfig.icons.user"  class="w-24"/>
              </div>
            </div>
            <div class="w-10/12 pl-4 mt-auto mb-auto">
              <div class="text-xl text-primary">Descubra o perfil do seu cliente em tempo real</div>
              <div class=" text-textSecondary">
                Diferente dos bancos tradicionais, não é necessário esperar dias para saber se seu cliente tem crédito, 
                não precisa abrir contas, fazer aplicações, movimentar meses para conseguir o crédito. Com o BestHub você 
                consulta seu cliente em tempo real.
              </div>
            </div>
          </div>
          <div class="w-full flex border-b-1 py-4">
            <div class="w-2/12 flex justify-center">
              <div class="mt-auto mb-auto">
              <img :src="$options.imageConfig.icons.percentage"  class="w-24"/>
              </div>
            </div>
            <div class="w-10/12 pl-4 mt-auto mb-auto">
              <div class="text-xl text-primary">Transparência total</div>
              <div class=" text-textSecondary">
                Não cobramos nenhuma taxa antecipada e a plataforma é 100% gratuita.
              </div>
            </div>
          </div>
          <div class="w-full flex border-b-1 py-4">
            <div class="w-2/12 flex justify-center">
              <div class="mt-auto mb-auto">
              <img :src="$options.imageConfig.icons.money"  class="w-24 "/>
              </div>
            </div>
            <div class="w-10/12 pl-4 mt-auto mb-auto">
              <div class="text-xl text-primary">Ganho no sucesso</div>
              <div class=" text-textSecondary">
                Somos focados no êxito, diferente do gerente que tem seu confortável salário e metas a cumprir, 
                você não é a prioridade dele, portanto precisamos lhe indicar uma boa taxa para fazermos negócio.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <div class="w-full bgBannerArrowRight  sm:hidden">
      <div class="maxWidth xl:h-screen lg:h-screen flex justify-between" >
        <div class="w-5/12 mt-auto mb-auto border-l-4 border-primary md:border-l-0 pl-8">
          <div class="mt-6 text-4xl md:text-2xl font-semibold text-primary">Como o BestHub pode  </div>
          <div class="text-4xl md:text-2xl font-semibold text-primary">ajudar o <span class=" textDecoration"> seu negócio? </span></div>
          <div  class="mt-8 mb-4 md:my-4  text-textSecondary">
            Uma plataforma multibancos e 100% digital. As melhores opções do mercado na palma da sua mão.
          </div>
          <div  class="mb-6 md:my-4  text-textSecondary">
            Aqui você vivencia uma nova experiência com crédito imobiliário. Temos as melhores taxas do mercado e unimos atendimento 
            humanizado com muita tecnologia para você e seu cliente.
          </div>
        </div>
        <div class="w-7/12 mt-auto mb-auto flex justify-end">
          <img :src="$options.imageConfig.bestHubMockupMob"  class="w-1/2 h-auto "/>
          <div class="mt-auto mb-auto">
            <img :src="$options.imageConfig.logoItau"  class="w-32 h-auto mr-auto ml-auto mb-8"/>
            <img :src="$options.imageConfig.logoSantander"  class="w-48 h-auto mr-auto ml-auto mb-8"/>
            <img :src="$options.imageConfig.logoCreditas"  class="w-52 h-auto mr-auto ml-auto mb-8"/>
            <img :src="$options.imageConfig.logoPontte"  class="w-40 h-auto mr-auto ml-auto"/>
            
            
            
          </div>
        </div>
      </div>
    </div>
    <div class="w-full  lg:hidden xl:hidden md:hidden">
      <div class="maxWidth " >
        <div class="w-full my-16 border-l-4 border-primary  pl-8">
          <div class="mt-6 text-4xl md:text-2xl font-semibold text-primary">Como o BestHub pode  </div>
          <div class="text-4xl md:text-2xl font-semibold text-primary">ajudar o <span class=" textDecoration"> seu negócio? </span></div>
          <div  class="mt-8 mb-4 md:my-4  text-textSecondary">
            Uma plataforma multibancos e 100% digital. As melhores opções do mercado na palma da sua mão.
          </div>
          <div  class="mb-6 md:my-4  text-textSecondary">
            Aqui você vivencia uma nova experiência com crédito imobiliário. Temos as melhores taxas do mercado e unimos atendimento 
            humanizado com muita tecnologia para você e seu cliente.
          </div>
        </div>
        <div class="w-full bgBannerArrowRightSM mt-auto mb-auto flex justify-end">
          <img :src="$options.imageConfig.bestHubMockupMob"  class="w-1/2 h-auto "/>
          <div class="mt-auto mb-auto">
            <img :src="$options.imageConfig.logoItau"  class="w-32 h-auto mr-auto ml-auto mb-8"/>
            <img :src="$options.imageConfig.logoSantander"  class="w-48 h-auto mr-auto ml-auto mb-8"/>
            <img :src="$options.imageConfig.logoCreditas"  class="w-52 h-auto mr-auto ml-auto mb-8"/>
            <img :src="$options.imageConfig.logoPontte"  class="w-40 h-auto mr-auto ml-auto"/>
          </div>
        </div>
      </div>
    </div>
    
    <div class="w-full bgBannerProducts sm:hidden md:py-12 py-24">
      <div class="pb-24 md:pb-12 text-4xl md:text-2xl font-semibold text-white text-center"><span class="textDecoration">Nossos Produtos</span></div>
      <div class="maxWidth  flex justify-around">
        <div class="mt-auto mb-auto w-4/12 md:w-1/2 md:pr-2">
          <div class=" bg-white w-full  border-1 rounded-xl shadow-2xl p-4">
            <div class="text-white text-2xl md:text-2xl text-center font-semibold text-primary px-8">Home Equity: Crédito com <span class=" textDecoration">Garantia de Imóvel.</span>  </div>
            <div class="text-textSecondary text-center px-8 py-4">
              Crédito de uso livre para quem já possui o imóvel para dar em garantia.
            </div>
            <div class="w-full flex border-b-1 py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.percentage"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Taxas de juros</div>
                <div class=" text-textSecondary">
                  As menores taxas do mercado, a partir de 0,79% a.m + IPCA ou 1,29% a.m Fixa.
                </div>
              </div>
            </div>
            <div class="w-full flex border-b-1 py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.house"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Perfil de garantia</div>
                <div class=" text-textSecondary">
                  Casa, apartamento ou sala comercial
                </div>
              </div>
            </div>
            <div class="w-full flex border-b-1 py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.calendar"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Prazo</div>
                <div class=" text-textSecondary">
                  Até 240 meses para pagar
                </div>
              </div>
            </div>
            <div class="w-full flex  py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.money"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Limite de crédito</div>
                <div class=" text-textSecondary">
                  Até 60% do valor de avaliação do imóvel.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-auto mb-auto w-4/12  md:w-1/2 md:pl-2">
          <div class=" bg-white w-full  border-1 rounded-xl shadow-2xl p-4">
            <div class="text-white text-2xl md:text-2xl text-center font-semibold text-primary px-8">Home Equity: Crédito com <span class=" textDecoration">Garantia de Imóvel.</span>  </div>
            <div class="text-textSecondary text-center px-8 py-4">
              Crédito de uso livre para quem já possui o imóvel para dar em garantia.
            </div>
            <div class="w-full flex border-b-1 py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.percentage"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Taxas de juros</div>
                <div class=" text-textSecondary">
                  As menores taxas do mercado, a partir de 0,79% a.m + IPCA ou 1,29% a.m Fixa.
                </div>
              </div>
            </div>
            <div class="w-full flex border-b-1 py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.house"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Perfil de garantia</div>
                <div class=" text-textSecondary">
                  Casa, apartamento ou sala comercial
                </div>
              </div>
            </div>
            <div class="w-full flex border-b-1 py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.calendar"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Prazo</div>
                <div class=" text-textSecondary">
                  Até 240 meses para pagar
                </div>
              </div>
            </div>
            <div class="w-full flex  py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.money"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Limite de crédito</div>
                <div class=" text-textSecondary">
                  Até 60% do valor de avaliação do imóvel.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full  lg:hidden xl:hidden md:hidden">
      <div class="pt-12  text-4xl md:text-2xl font-semibold text-primary text-center"><span class="textDecoration">Nossos Produtos</span></div>
      <div class="maxWidth  flex flex-wrap justify-around">
        <div class="mt-8 mb-4 w-full">
          <div class=" bg-white w-full  border-1 rounded-xl shadow-2xl p-4">
            <div class="text-white text-2xl md:text-2xl text-center font-semibold text-primary px-8">Home Equity: Crédito com <span class=" textDecoration">Garantia de Imóvel.</span>  </div>
            <div class="text-textSecondary text-center px-8 py-4">
              Crédito de uso livre para quem já possui o imóvel para dar em garantia.
            </div>
            <div class="w-full flex border-b-1 py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.percentage"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Taxas de juros</div>
                <div class=" text-textSecondary">
                  As menores taxas do mercado, a partir de 0,79% a.m + IPCA ou 1,29% a.m Fixa.
                </div>
              </div>
            </div>
            <div class="w-full flex border-b-1 py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.house"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Perfil de garantia</div>
                <div class=" text-textSecondary">
                  Casa, apartamento ou sala comercial
                </div>
              </div>
            </div>
            <div class="w-full flex border-b-1 py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.calendar"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Prazo</div>
                <div class=" text-textSecondary">
                  Até 240 meses para pagar
                </div>
              </div>
            </div>
            <div class="w-full flex  py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.money"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Limite de crédito</div>
                <div class=" text-textSecondary">
                  Até 60% do valor de avaliação do imóvel.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-8 w-full">
          <div class=" bg-white w-full  border-1 rounded-xl shadow-2xl p-4">
            <div class="text-white text-2xl md:text-2xl text-center font-semibold text-primary px-8">Home Equity: Crédito com <span class=" textDecoration">Garantia de Imóvel.</span>  </div>
            <div class="text-textSecondary text-center px-8 py-4">
              Crédito de uso livre para quem já possui o imóvel para dar em garantia.
            </div>
            <div class="w-full flex border-b-1 py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.percentage"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Taxas de juros</div>
                <div class=" text-textSecondary">
                  As menores taxas do mercado, a partir de 0,79% a.m + IPCA ou 1,29% a.m Fixa.
                </div>
              </div>
            </div>
            <div class="w-full flex border-b-1 py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.house"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Perfil de garantia</div>
                <div class=" text-textSecondary">
                  Casa, apartamento ou sala comercial
                </div>
              </div>
            </div>
            <div class="w-full flex border-b-1 py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.calendar"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Prazo</div>
                <div class=" text-textSecondary">
                  Até 240 meses para pagar
                </div>
              </div>
            </div>
            <div class="w-full flex  py-4">
              <div class="w-2/12 flex justify-center">
                <div class="mt-auto mb-auto">
                <img :src="$options.imageConfig.icons.money"  class="w-20"/>
                </div>
              </div>
              <div class="w-10/12 pl-4 mt-auto mb-auto">
                <div class="text-xl text-primary">Limite de crédito</div>
                <div class=" text-textSecondary">
                  Até 60% do valor de avaliação do imóvel.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="w-full ">
      <div class="maxWidth  pb-20  flex flex-wrap" >
        <div class="w-full text-center">
          <div class="w-full  font-semibold text-primary  text-5xl lg:text-3xl md:text-3xl sm:text-3xl md:py-16 lg:py-20 sm:py-16 py-30">  
          Quem já está<span class=" textDecoration"> decolando com a gente?</span></div>
        </div>
        <img :src="$options.imageConfig.banks"  class="w-full"/>
      </div>
    </div>

    <div class="w-full bgBannerBlue sm:hidden">
      <div class="maxWidth md:pb-16 lg:pb-20 sm:pb-16 pb-30 flex flex-wrap" >
        <div class="w-1/3 sm:w-full text-white mb-auto mt-auto pr-12 md:pr-4 sm:pr-0">
          <div class="py-16  transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <img :src="$options.imageConfig.icons.phoneWhite"  class="w-24"/>
            <div class="text-xl md:text-md font-bold sm:text-md">Plataforma multibancos integrada.</div>
            <div class="md:text-sm sm:text-sm">
              Simule, elabore suas propostas e gerencie tudo em único ambiente totalmente digitalizado.
            </div>
          </div>
          <div class="pb-16 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <img :src="$options.imageConfig.icons.userWhite"  class="w-24"/>
            <div class="text-xl font-bold md:text-md sm:text-md">Consulte o perfil de crédito do seu cliente em tempo real.</div>
            <div class="md:text-sm sm:text-sm">
              Em poucos cliques você descobre o perfil de crédito do seu cliente no mercado bancário.
            </div>
          </div>
        </div>
        <div class="w-1/3 sm:w-full text-center">
          <div class="w-full  font-semibold text-white  text-5xl lg:text-3xl md:text-3xl sm:text-3xl md:py-16 lg:py-20 sm:py-16 py-30">  Quais as vantagens do <span class=" textDecoration">BestHub?</span></div>
          <div class="w-full "><img :src="$options.imageConfig.bestHubMockupMd"  class="w-full h-auto"/></div>
          <button class=" buttonWhite text-center text-xl mt-16"><a href="https://parceiros.seja.best/register" >Quero ser parceiro</a></button>
        </div>
        <div class="w-1/3 sm:w-full text-white text-right mb-auto mt-auto pl-12 md:pl-4 lg:pl-4 sm:pr-0">
          <div class="py-16 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <img :src="$options.imageConfig.icons.pcWhite"  class="w-24 h-auto mr-0 ml-auto"/>
            <div class="text-xl font-bold md:text-md sm:text-md">Plataforma White Label</div>
            <div class="md:text-sm sm:text-sm">
              Com o BestHub você usa sua própria marca, entregando uma experiência diferenciada para seus clientes.
            </div>
          </div>
          <div class="pb-16 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <img :src="$options.imageConfig.icons.moneyWhite"  class="w-24 h-auto mr-0 ml-auto"/>
            <div class="text-xl font-bold md:text-md sm:text-md">Potencialize seus ganhos.</div>
            <div class=" md:text-sm sm:text-sm">
              ECom uma solução completa multibancos, você oferece as melhores condições para seus clientes com uma excelente remuneração por produtividade.
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="w-full bgBannerBlue lg:hidden xl:hidden md:hidden text-white p-4">
      <div class="text-2xl  text-center  font-semibold ">
        <div class="py-12">Quais as vantagens do <span class=" textDecoration">BestHub?</span></div>
        
      </div>
      <div class="mb-4 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 border-l-4 border-white pl-4">
        <img :src="$options.imageConfig.icons.phoneWhite"  class="w-24"/>
        <div class="text-md font-bold">Plataforma multibancos integrada.</div>
        <div class="text-sm pb-4">
          Simule, elabore suas propostas e gerencie tudo em único ambiente totalmente digitalizado.
        </div>
      </div>
      <div class="mb-4 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 text-right border-r-4 border-white pr-4">
        <img :src="$options.imageConfig.icons.userWhite"  class="w-24 mr-0 ml-auto"/>
        <div class="font-bold text-md">Consulte o perfil de crédito do seu cliente em tempo real.</div>
        <div class="text-sm pb-4">
          Em poucos cliques você descobre o perfil de crédito do seu cliente no mercado bancário.
        </div>
      </div>
      <div class="mb-4 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 border-l-4 border-white pl-4">
        <img :src="$options.imageConfig.icons.pcWhite"  class="w-24"/>
        <div class="text-md font-bold">Plataforma White Label</div>
        <div class="text-sm pb-4">
          Com o BestHub você usa sua própria marca, entregando uma experiência diferenciada para seus clientes. 
        </div>
      </div>
      <div class="mb-4 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 text-right border-r-4 border-white pr-4">
        <img :src="$options.imageConfig.icons.moneyWhite"  class="w-24 mr-0 ml-auto"/>
        <div class="font-bold text-md">Potencialize seus ganhos.</div>
        <div class="text-sm pb-4">
          Com uma solução completa multibancos, você oferece as melhores condições para seus clientes com uma excelente remuneração por produtividade. 
        </div>
      </div>
      
      <div class="text-center ">
        <img :src="$options.imageConfig.bestHubMockupMd"  class="w-11/12 mr-auto ml-auto "/>
        <button class=" buttonWhite text-center text-xl my-16"><a href="https://parceiros.seja.best/register" >Quero ser parceiro</a></button>
      </div>
    </div>
    
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import topbarComponent from '@/components/structure/topbar.component.vue';
export default defineComponent({
  name: 'PrivacyPolicy',
  components:{
    topbarComponent 
  },
  data() {
    return {
      isVisible:false,
    }
  },
})
</script>
