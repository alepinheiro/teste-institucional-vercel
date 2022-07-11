<template>
<div class="text-textPrimary">
  <div class="w-full border-b-1">
      <div class="maxWidth " >
        <topbarComponent position="top" />
      </div>
  </div>
  <div class="w-full bgBannerArrowRight sm:hidden">
    <div class="maxWidth xl:h-screen lg:h-screen flex justify-between" >
      <div class="w-full flex mt-auto mb-auto">
        <div class="w-5/12 mt-auto mb-auto">
          <div class="  text-4xl md:text-2xl font-semibold text-primary">Vivencie uma nova experiência   </div>
          <div class=" text-4xl md:text-2xl font-semibold text-primary"><span class=" textDecoration">em crédito imobiliário</span></div>
          <div class="pb-4 pt-8 md:pt-4 text-2xl md:text-lg text-primary">
           Desafiando o sistema tradicional, pré-aprove<br/> o seu crédito em até 20min.
          </div>
          <div class="  text-textSecondary">
            Comprar ou refinanciar uma casa leva tempo, paciência e,<br/>
            tradicionalmente, muita papelada. Desmontamos a antiga<br/>
            infraestrutura de hipotecas e a substituímos por tecnologia <br/>
            inovadora e muito menos barreiras.
            
          </div>
          
        </div>
        <div class="w-7/12 mt-auto mb-auto ">
          <div class=" max-w-sm w-full  mr-auto ml-auto mb-8">
            <div class="bg-white rounded-xl w-full shadow-2xl p-4 py-24 md:py-12 sm:py-12">
              <div class="text-3xl sm:text-2xl font-semibold pb-3 text-primary "><span class=" textDecoration"> Vamos começar?</span></div>
              <div class="text-xl sm:text-lg">Nos conte de quanto você precisa?</div>
              <inputMoney v-model="value" id="value" label=""  placeholder=""  />
              <div class="buttonGradient mt-12 text-center xl:text-xl w-full">
                <a :href="$options.appSimulator"  style=" text-decoration: none;"
                  target="_blank">Simule seu crédito</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full  lg:hidden xl:hidden md:hidden">
      <div class="maxWidth " >
        <div class="w-full ">
          <div class=" mt-8 text-2xl font-semibold text-primary">Vivencie uma nova experiência   </div>
          <div class="text-2xl font-semibold text-primary"><span class=" textDecoration">em crédito imobiliário</span></div>
          <div class="pb-4 pt-8 md:pt-4 text-xl md:text-lg text-primary">
           Desafiando o sistema tradicional, pré-aprove<br/> o seu crédito em até 20min.
          </div>
          <div class="text-textSecondary">
            Comprar ou refinanciar uma casa leva tempo, paciência e,<br/>
            tradicionalmente, muita papelada. Desmontamos a antiga<br/>
            infraestrutura de hipotecas e a substituímos por tecnologia <br/>
            inovadora e muito menos barreiras.
            
          </div>
        </div>
        <div class="w-full py-36 bgBannerArrowRightSM">
          <div class=" max-w-sm w-full  mr-auto ml-auto mb-8">
            <div class="bg-white rounded-xl w-full shadow-2xl p-4 py-24 ">
              <div class="text-2xl font-semibold pb-3 text-primary "><span class=" textDecoration"> Vamos começar?</span></div>
              <div class="text-lg">Nos conte de quanto você precisa?</div>
              <inputMoney v-model="value" id="value" label=""  placeholder=""  />
              <div class="buttonGradient mt-12 text-center xl:text-xl w-full">
                <a :href="$options.appSimulator"  style=" text-decoration: none;"
                  target="_blank">Simule seu crédito</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div class="w-full bgBannerProducts sm:hidden md:py-12 py-36">
      <div class="pb-24 md:pb-12 text-4xl md:text-2xl font-semibold text-white text-center"><span class="textDecoration">Nossos Produtos</span></div>
      <div class="maxWidth  flex justify-around">
        <div class="mt-auto mb-auto w-4/12 md:w-1/2 md:pr-2">
          <div class=" bg-white w-full  border-1 rounded-xl shadow-2xl p-4">
            <div class=" text-2xl md:text-2xl text-center font-semibold text-primary px-8">Home Equity: Crédito com <span class=" textDecoration">Garantia de Imóvel.</span>  </div>
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
            <div class="text-2xl md:text-2xl text-center font-semibold text-primary px-8 py-6"><span class=" textDecoration">Financiamento imobiliário</span>  </div>
            <div class="text-textSecondary text-center px-8 py-4">
              Linha de crédito para quem não possui o bem imóvel e quer efetuar a compra.
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
                  A partir de 9,10% a.a + TR 
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
                  Até 420 meses para pagar 
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
                  Até 90% do valor de avaliação do imóvel. 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div class="w-full  lg:hidden xl:hidden md:hidden">
      <div class="text-4xl md:text-2xl sm:text-2xl font-semibold text-primary text-center"><span class="textDecoration">Nossos Produtos</span></div>
      <div class="maxWidth  flex flex-wrap justify-around">
        <div class="mt-8 mb-4 w-full">
          <div class=" bg-white w-full  border-1 rounded-xl shadow-2xl p-4">
            <div class="text-2xl md:text-2xl text-center font-semibold text-primary px-8">Home Equity: Crédito com <span class=" textDecoration">Garantia de Imóvel.</span>  </div>
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
            <div class=" text-2xl md:text-2xl text-center font-semibold text-primary px-8"><span class=" textDecoration">Financiamento imobiliário</span>  </div>
            <div class="text-textSecondary text-center px-8 py-4">
              Linha de crédito para quem não possui o bem imóvel e quer efetuar a compra.
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
                  A partir de 9,10% a.a + TR 
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
                  Até 420 meses para pagar 
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
                  Até 90% do valor de avaliação do imóvel. 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div class="w-full bgBlueHalf">
    <div class="maxWidth xl:h-screen lg:h-screen md:py-20 flex " >
      <div class="w-full mt-auto mb-auto flex flex-wrap justify-between">
        <div class="w-7/12 lg:w-8/12 lg:pl-12 md:w-full sm:w-full sm:mt-24 md:pt-8  mt-auto  mb-auto">
        <div class="text-4xl sm:text-2xl font-semibold text-white"><span class=" textDecoration">Home Equity: </span>Crédito</div>
          <div class="text-4xl sm:text-2xl  pt-2 font-semibold text-white">com Garantia de Imóvel.</div>
          <div class=" pt-8 text-white">
            O Crédito com Garantia de Imóvel, também conhecido <br/>
            como Home Equity, é a modalidade ideal para quem <br/>
            quer as menores taxas de juros do mercado e um longo <br/>
            prazo para pagamento. Nessa modalidade, você utiliza<br/>
            sua casa, apartamento ou sala comercial como garantia<br/>
            de crédito e desfruta das melhores condições <br/>
            disponíveis no mercado.
          </div>
          
        </div>
        <div class="w-5/12 lg:w-4/12  md:w-full sm:w-full flex sm:pt-64 md:pt-116 pb-24 mt-auto mb-auto ">
          <div class="mr-auto ml-auto">
          <div class="text-4xl  sm:text-2xl font-semibold text-primary"><span class=" textDecoration">Financiamento imobiliário.</span></div>
          <div class=" pt-8 text-textSecondary">
            O financiamento imobiliário é uma linha de crédito <br/>
            destinada a quem precisa comprar um imóvel e não <br/>
            dispõe de todo recurso ou até mesmo não pretende <br/>
            desembolsar integralmente o valor da compra devido <br/>
            as condições atrativas da modalidade. 
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div class="bg-gradient-to-r from-secondary to-primary w-full ">
    <div class="maxWidth flex h-screen sm:h-full " >
      <div class="mt-auto mb-auto w-full flex justify-center sm:flex-wrap sm:text-center">
            <div class="w-5/12 md:w-1/2 sm:w-full mt-auto mb-auto text-white">
              <div class="text-4xl md:text-2xl sm:text-2xl font-semibold sm:text-center py-6">
                <span class=" textDecoration">
                  Até 10X mais barato.
                </span> 
              </div>
              <div class="font-semibold sm:text-center text-xl pb-4">
                O melhor produto de crédito do<br/> mercado financeiro.
              </div>
              <div class="pb-3 sm:text-center ">
                As menores taxas e os maiores prazos<br/> entre os produtos do mercado.
              </div>
              <button class=" buttonWhite text-center text-xl mt-6"><a :href="$options.appSimulator" >Quero simular</a></button>
            </div>
            <div class="w-5/12 md:w-1/2 sm:pb-6 sm:w-full mt-auto mb-auto">
              <img :src="$options.imageConfig.graphic"  class="w-11/12 mr-auto ml-auto h-auto "/>
            </div>
          </div>
      </div>
    </div>
  </div>
  <div class="w-full ">
    <div class="maxWidth flex sm:h-full " >
      <div class="mt-auto mb-auto w-full  flex-wrap py-12">
       <div class=" text-4xl md:text-2xl sm:text-2xl text-center font-semibold text-primary py-6"><span class=" textDecoration">Nossos diferenciais</span></div>
        <div class="w-full flex border-b py-4  pt-12">
          <div class="w-1/3 sm:w-2/4 mt-auto mb-auto"></div>
          <div class="w-1/3  sm:w-1/4  mt-auto mb-auto">
            <img :src="$options.imageConfig.logoSejabest"  class="w-48 sm:w-28 h-auto mr-auto ml-auto"/>
          </div>
          <div class="w-1/3  sm:w-1/4  mt-auto mb-auto text-center">
            <div class="text-primary text-4xl sm:text-2xl mt-auto mb-auto px-4"> Bancos</div>
          </div>
        </div>
        <div class="w-full flex border-b py-2  ">
          <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center font-semibold text-textSecondary text-2xl sm:text-lg">Taxas mais baixas</div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.check"  class="w-12 h-auto mr-auto ml-auto"/></div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.check"  class="w-12 h-auto mr-auto ml-auto"/></div>
        </div>
        <div class="w-full flex border-b py-2  ">
          <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center font-semibold text-textSecondary text-2xl sm:text-lg">Multibancos</div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.check"  class="w-12 h-auto mr-auto ml-auto"/></div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.error"  class="w-12 h-auto mr-auto ml-auto"/></div>
        </div>
        <div class="w-full flex border-b py-2  ">
          <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center font-semibold text-textSecondary text-2xl sm:text-lg">Multiprodutos</div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.check"  class="w-12 h-auto mr-auto ml-auto"/></div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.check"  class="w-12 h-auto mr-auto ml-auto"/></div>
        </div>
        <div class="w-full flex border-b py-2  ">
          <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center font-semibold text-textSecondary text-2xl sm:text-lg">Transparência</div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.check"  class="w-12 h-auto mr-auto ml-auto"/></div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.error"  class="w-12 h-auto mr-auto ml-auto"/></div>
        </div>
        <div class="w-full flex border-b py-2  ">
          <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center font-semibold text-textSecondary text-2xl sm:text-lg">Agilidade no processo</div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.check"  class="w-12 h-auto mr-auto ml-auto"/></div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.error"  class="w-12 h-auto mr-auto ml-auto"/></div>
        </div>
        <div class="w-full flex border-b py-2  ">
          <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center font-semibold text-textSecondary text-2xl sm:text-lg">Atendimento 7ndias na semana</div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.check"  class="w-12 h-auto mr-auto ml-auto"/></div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.error"  class="w-12 h-auto mr-auto ml-auto"/></div>
        </div>
        <div class="w-full flex border-b py-2  ">
          <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center font-semibold text-textSecondary text-2xl sm:text-lg">Assessoria personalizada</div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.check"  class="w-12 h-auto mr-auto ml-auto"/></div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.error"  class="w-12 h-auto mr-auto ml-auto"/></div>
        </div>
        <div class="w-full flex border-b py-2  ">
          <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center font-semibold text-textSecondary text-2xl sm:text-lg">Totalmente Digital</div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.check"  class="w-12 h-auto mr-auto ml-auto"/></div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.error"  class="w-12 h-auto mr-auto ml-auto"/></div>
        </div>
        <div class="w-full flex border-b py-2  ">
          <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center font-semibold text-textSecondary text-2xl sm:text-lg">Menos burocracia</div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.check"  class="w-12 h-auto mr-auto ml-auto"/></div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.error"  class="w-12 h-auto mr-auto ml-auto"/></div>
        </div>
        <div class="w-full flex border-b py-2  ">
          <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center font-semibold text-textSecondary text-2xl sm:text-lg">Sem filas</div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.check"  class="w-12 h-auto mr-auto ml-auto"/></div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.error"  class="w-12 h-auto mr-auto ml-auto"/></div>
        </div>
        <div class="w-full flex border-b py-2  ">
          <div class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center font-semibold text-textSecondary text-2xl sm:text-lg">Foco no cliente</div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.check"  class="w-12 h-auto mr-auto ml-auto"/></div>
          <div class="w-1/3 sm:w-1/4  mt-auto mb-auto"><img :src="$options.imageConfig.icons.error"  class="w-12 h-auto mr-auto ml-auto"/></div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full py-8 sm:pt-12 sm:pb-12 ">
        <div class="maxWidth flex h-screen sm:h-full" >
          <div class="mt-auto mb-auto w-full" >
            <div class="text-center text-4xl  font-semibold text-primary pb-6">
              <span class=" textDecoration">Nossos números</span>  
            </div>
            <div class="flex w-full justify-around  sm:flex-wrap pt-8 sm:pt-0">
                <div class="w-64 sm:w-full text-center">
                  <img :src="$options.imageConfig.icons.users" class="w-full sm:w-5/12 mr-auto ml-auto" />
                  <div class="text-3xl font-semibold text-primary">+2000</div>
                  <div class="text-primary pt-2">Propostas por mês</div>
                </div>
                <div class="w-64 sm:w-full text-center">
                  <img :src="$options.imageConfig.icons.money" class="w-full sm:w-5/12 mr-auto ml-auto" />
                  <div class="text-3xl  font-semibold text-primary">+ R$400 milhões</div>
                  <div class="text-primary pt-2">Emprestados</div>
                </div>
                <div class="w-64 sm:w-full text-center">
                  <img :src="$options.imageConfig.icons.car" class="w-full sm:w-5/12 mr-auto ml-auto" />
                  <div class="text-3xl font-semibold text-primary">+ R$2.5 bilhões</div>
                  <div class="text-primary pt-2">Em solicitações</div>
                </div>
            </div>
          </div>
        </div>
  </div>
  <div class="bgBannerPrimary w-full ">
        <div class="maxWidth flex h-screen sm:h-full " >
         <div class="mt-auto mb-auto w-full flex justify-between sm:flex-wrap">
            <div class="w-5/12 md:w-1/2 sm:w-full mt-auto mb-auto text-white sm:pt-12">
              <div class="text-4xl md:text-2xl font-semibold sm:text-center py-6">
                <span class=" textDecoration">Você no centro!</span> 
              </div>
              <div class="pb-3 sm:text-center ">
                Acreditamos que você merece uma experiência completa, que soma o melhor do atendimento humanizado 
                e personalizado dos nossos especialistas com a tecnologia, simplificando e agilizando todo os processos.
              </div>
              <div class="py-4 sm:text-center" >
                <a class="buttonComplementaryColor1" :href="$options.appSimulator"  style=" text-decoration: none;"
                  target="_blank">Simule seu crédito</a>
              </div>
            </div>
            <div class="w-5/12 md:w-1/2  sm:w-full mt-auto mb-auto">
              <img :src="$options.imageConfig.phoneSemFila"  class="w-11/12 mr-auto ml-auto h-auto "/>
            </div>
          </div>
        </div>
      </div>

  <div class="w-full ">
    <div class="maxWidth  pb-20  flex flex-wrap" >
      <div class="w-full text-center">
        <div class="w-full  font-semibold text-primary text-4xl md:text-2xl  md:py-16 lg:py-20 sm:py-16 py-30">  
          Quem já está<span class=" textDecoration"> decolando com a gente?</span></div>
      </div>
      <img :src="$options.imageConfig.banks"  class="w-full"/>
    </div>
  </div>
  <div class="w-full  sm:pt-12 sm:pb-12 bgMidias">
        <div class="maxWidth flex h-screen sm:h-full justify-end" >
          <div class="mt-auto mb-auto sm:w-7/12 md:pr-20" >
            <div class="text-4xl  sm:text-2xl font-semibold text-white pb-6">
              <span class=" textDecoration">Acompanhe </span> <br/>
              <span class=" textDecoration">nossos canais!</span> 
            </div> 
            <div class="text-white py-8 sm:py-5 sm:text-sm">
              Estamos presentes nas principais plataformas de <br />
              comunicação ensinando sobre Crédito Imobiliário.
            </div>
            <div class="flex justify-around sm:mr-auto sm:ml-auto sm:pt-4 ">
              <a href="https://www.youtube.com/c/SejaBest/videos?sub_confirmation=1" style=" text-decoration: none;"
                target="_blank">
                <svg  class="w-8 h-8 mx-2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/bestsf/"  style=" text-decoration: none;"
                target="_blank">
                <svg  class="w-8 h-8 mx-2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              </a>
              <a href="https://www.instagram.com/seja.best/" style=" text-decoration: none;"
                target="_blank">
                <svg  class="w-8 h-8 mx-2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
              <a href="https://www.facebook.com/seja.best"  style=" text-decoration: none;"
                  target="_blank">
                <svg  class="w-8 h-8 mx-2 fill-white"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
              </a>
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
  data() {
    return {
      isVisible:false,
      value:250000,
    }
  },
})
</script>
