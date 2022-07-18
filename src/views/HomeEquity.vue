<template>
<div class="text-textPrimary">
  <div class="bgBannerPrimary">
    <div class="maxWidth xl:h-screen lg:h-screen" >
      <topbarComponent position="relative" />
      <div class="w-full flex flex-wrap justify-between mt-24 md:mt-4 sm:mt-4">
        <div class="sm:w-full md:w-7/12 text-white md:pr-4   mt-auto mb-auto">
          <div class="text-4xl sm:text-2xl md:text-2xl  font-semibold ">Empréstimo com as <br><span class=" textDecoration"> menores taxas</span> do mercado</div>
          <div class="font-semibold lg:text-2xl xl:text-2xl md:py-4  sm:py-4  py-16">Use seu imóvel para garantir as melhores condições <br> com até 240x para pagar usando o dinheiro como preferir.</div>
          <div class=" flex justify-between sm:justify-around">
            <div class="">
              <img :src="$options.imageConfig.icons.percentageWhite"  class="w-20 mr-auto ml-auto"/>
              <div class="text-sm text-center">Taxa a partir de<br/> 0,79% a.m + IPCA </div>
            </div>
            <div class="">
              <img :src="$options.imageConfig.icons.moneyWhite"  class="w-20 mr-auto ml-auto"/>
               <div class="text-sm text-center">Prazo de até<br/> 240 X</div>
            </div>
            <div class="sm:hidden">
              <img :src="$options.imageConfig.icons.calendarWhite"  class="w-20 mr-auto ml-auto"/>
               <div class="text-sm text-center">Atendimento personalizado<br/>7 dias por semana</div>
            </div>
          </div>
        </div>
        <div class="pt-24 md:pt-4 sm:py-8 md:w-5/12 max-w-sm w-full md:mr-auto md:ml-auto sm:mr-auto sm:ml-auto mb-8">
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
  <div class="w-full ">
      <div class="maxWidth xl:h-screen lg:h-screen flex flex-wrap justify-between" >
        <div class="w-5/12 sm:hidden md:hidden sm:pt-8 md:pt-8  mt-auto  mb-auto">

          <div class="text-4xl  font-semibold text-primary">O que podemos </div>
          <div class="text-4xl  font-semibold text-primary"><span class=" textDecoration">fazer por você?</span></div>
          
        </div>
        <div class="w-full xl:hidden lg:hidden sm:pt-16 md:pt-16  mt-auto  mb-auto">

          <div class="text-2xl md:text-4xl  sm:text-center  md:text-center font-semibold text-primary">O que podemos <span class=" textDecoration">fazer por você?</span></div>
          
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
                Simule seu crédito e acompanhe seu processo sem precisar se deslocar até uma agência!
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
              <div class="text-xl text-primary">Descubra o seu perfil em tempo real</div>
              <div class=" text-textSecondary">
                Diferente dos bancos tradicionais, não é necessário esperar dias para saber se tem crédito, 
                não precisa abrir contas, fazer aplicações, movimentar meses para conseguir o crédito. 
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
  <div class="w-full bgBlueHalf">
    <div class="maxWidth xl:h-screen lg:h-screen flex flex-wrap justify-between" >
      <div class="w-7/12 lg:w-8/12 lg:pl-12 sm:w-full sm:mt-24 md:pt-8  mt-auto  mb-auto">

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
        <div class="w-5/12 lg:w-4/12 sm:w-full  sm:pt-80 mt-auto mb-auto ">
          <div class="w-full flex border-b-1 py-4">
            <div class="w-2/12 flex justify-center">
              <div class="mt-auto mb-auto">
              <img :src="$options.imageConfig.icons.percentage"  class="w-24"/>
              </div>
            </div>
            <div class="w-10/12 pl-4 mt-auto mb-auto">
              <div class="text-xl text-primary">Taxas de juros</div>
              <div class=" text-textSecondary">
                As menores taxas do mercado, a partir de 0,79% a.m + IPCA ou 1,39% a.m Fixa.
              </div>
            </div>
          </div>
          <div class="w-full flex border-b-1 py-4">
            <div class="w-2/12 flex justify-center">
              <div class="mt-auto mb-auto">
              <img :src="$options.imageConfig.icons.house"  class="w-24"/>
              </div>
            </div>
            <div class="w-10/12 pl-4 mt-auto mb-auto">
              <div class="text-xl text-primary">Perfil de imóvel </div>
              <div class=" text-textSecondary">
                Casa, apartamento ou sala comercial
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
              <div class="text-xl text-primary">Prazo</div>
              <div class=" text-textSecondary">
                Até 240 meses para pagar
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
              <div class="text-xl text-primary">Limite de crédito</div>
              <div class=" text-textSecondary">
                Até 60% do valor de avaliação do imóvel.
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="maxWidth xl:h-screen lg:h-screen h-full flex justify-center" >
      <div class="mt-auto mb-auto">
        <div class="text-4xl sm:text-2xl pt-12 text-center font-semibold text-primary pb-12">Quem pode fazer <br /><span class=" textDecoration">Home Equity?</span></div>
        <img :src="$options.imageConfig.clients" class="w-full h-auto" />
        <div class="flex justify-around flex-wrap text-primary text-center text-2xl sm:text-xl pt-12">
          <div class="sm:w-1/2 p-2">Empresários</div>
          <div class="sm:w-1/2 p-2">Autônomos</div>
          <div class="sm:w-1/2 p-2">Profissionais liberais</div>
          <div class="sm:w-1/2 p-2">Aposentados</div>
        </div>
        <div class="flex justify-evenly flex-wrap text-primary text-center text-2xl sm:text-xl pt-6">
          <div class="sm:w-1/2 p-2">Assaláriados</div>
          <div class="sm:w-1/2 p-2">Pensionistas</div>
          <div class="sm:w-1/2 p-2">Funcionários Públicos</div>
        </div>
        <div class="text-center text-primary text-2xl sm:text-xl pt-6">
          Pessoa Jurídica também pode fazer Home Equity!
        </div>
      </div>
    </div>
  </div>
  <div class="w-full ">
      <div class="maxWidth xl:h-screen lg:h-screen flex flex-wrap justify-between" >
        <div class="w-5/12 sm:hidden md:hidden sm:pt-8 md:pt-8  mt-auto  mb-auto">

          <div class="text-4xl sm:text-2xl font-semibold text-primary">Por que fazer</div>
          <div class="text-4xl sm:text-2xl font-semibold text-primary"><span class=" textDecoration">Home Equity?</span></div>
          
        </div>
        <div class="w-full xl:hidden lg:hidden sm:pt-16 md:pt-16  mt-auto  mb-auto">

          <div class="text-2xl md:text-4xl  sm:text-center  md:text-center font-semibold text-primary">Por que fazer o <span class=" textDecoration">Home Equity?</span></div>
          
        </div>
        <div class="w-7/12 sm:w-full md:w-full pt-4 mt-auto mb-auto ">
          <div class="w-full flex border-b-1 py-4">
            <div class="w-2/12 flex justify-center">
              <div class="mt-auto mb-auto">
              <img :src="$options.imageConfig.icons.lightning"  class="w-24"/>
              </div>
            </div>
            <div class="w-10/12 pl-4 mt-auto mb-auto">
              <div class="text-xl text-primary">Investir </div>
              <div class=" text-textSecondary">
                Melhor alternativa para quem precisa investir em um negócio, projeto ou oportunidade.
              </div>
            </div>
          </div>
          <div class="w-full flex border-b-1 py-4">
            <div class="w-2/12 flex justify-center">
              <div class="mt-auto mb-auto">
              <img :src="$options.imageConfig.icons.money"  class="w-24"/>
              </div>
            </div>
            <div class="w-10/12 pl-4 mt-auto mb-auto">
              <div class="text-xl text-primary">Capital de giro </div>
              <div class=" text-textSecondary">
                Linha que ajuda pessoas físicas e jurídicas a levantarem capital de giro com as melhores condições do mercado.
              </div>
            </div>
          </div>
          <div class="w-full flex border-b-1 py-4">
            <div class="w-2/12 flex justify-center">
              <div class="mt-auto mb-auto">
              <img :src="$options.imageConfig.icons.doc"  class="w-24 "/>
              </div>
            </div>
            <div class="w-10/12 pl-4 mt-auto mb-auto">
              <div class="text-xl text-primary">Quitar dívidas </div>
              <div class=" text-textSecondary">
                Para pessoas ou empresas que possuem alto endividamento e precisam 
                de fôlego financeiro, alongando prazo e reduzindo custos.
              </div>
            </div>
          </div>
          <div class="w-full flex border-b-1 py-4">
            <div class="w-2/12 flex justify-center">
              <div class="mt-auto mb-auto">
              <img :src="$options.imageConfig.icons.heart"  class="w-24 "/>
              </div>
            </div>
            <div class="w-10/12 pl-4 mt-auto mb-auto">
              <div class="text-xl text-primary">Uso Livre </div>
              <div class=" text-textSecondary">
                Uma faculdade, uma viagem, um sonho, use como quiser.
              </div>
            </div>
          </div>
          
        </div>
      </div>
  </div>
  <div class="w-full bgBannerBlue sm:hidden">
      <div class="maxWidth md:pb-16 lg:pb-20 sm:pb-16 pb-30 flex flex-wrap" >
        <div class="w-1/3 sm:w-full text-white mb-auto mt-auto pr-12 md:pr-4 sm:pr-0">
          <div class="py-20  transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <div class="text-3xl  font-bold sm:text-md pb-2"><span class=" textDecoration">PASSO 1</span></div>
            <div class="text-xl md:text-md font-bold sm:text-md">Simule e solicite.</div>
            <div class="md:text-sm sm:text-sm">
              Pré-aprovação em tempo real porque seu tempo é valioso.
            </div>
          </div>
          <div class="pb-16 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <div class="text-3xl  font-bold sm:text-md pb-2"><span class=" textDecoration">PASSO 2</span></div>
            <div class="text-xl md:text-md font-bold sm:text-md">Envie seus documentos.</div>
            <div class="md:text-sm sm:text-sm">
              Envie os documentos de acordo com seu perfil para aprovarmos seu crédito de forma efetiva! 
            </div>
          </div>
        </div>
        <div class="w-1/3 sm:w-full text-center">
          <div class="w-full  font-semibold text-white  text-4xl lg:text-3xl md:text-3xl sm:text-3xl md:py-16 lg:py-20 sm:py-16 py-30">  
          O seu Home Equity <br/><span class=" textDecoration">em 4 Passos</span></div>
          <div class="w-full "><img :src="$options.imageConfig.appClientMd"  class="w-full h-auto"/></div>
          <button class=" buttonWhite text-center text-xl mt-16"><a :href="$options.appSimulator" >Quero simular</a></button>
        </div>
        <div class="w-1/3 sm:w-full text-white text-right mb-auto mt-auto pl-12 md:pl-4 lg:pl-4 sm:pr-0">
          <div class="py-20 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <div class="text-3xl  font-bold sm:text-md pb-2"><span class=" textDecoration">PASSO 3</span></div>
            <div class="text-xl md:text-md font-bold sm:text-md">
              Avaliação do imóvel e formalização.
            </div>
            <div class="md:text-sm sm:text-sm">
              Fique tranquilo que nesta etapa temos um especialista para lhe auxiliar até o fim do processo.
            </div>
          </div>
          <div class="pb-16 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105">
            <div class="text-3xl  font-bold sm:text-md pb-2"><span class=" textDecoration">PASSO 4</span></div>
            <div class="text-xl md:text-md font-bold sm:text-md">
              Liberação do recurso. 
            </div>
            <div class="md:text-sm sm:text-sm">
              Agora é com você! Aproveite a liberdade para realizar aquele sonho e tirar os projetos do papel!
            </div>
          </div>
        </div>
      </div>
  </div>
  <div class="w-full bgBannerBlue lg:hidden xl:hidden md:hidden text-white p-4">
      <div class="text-2xl  text-center  font-semibold ">
        <div class="py-12">O seu Home Equity<br /> <span class=" textDecoration">em 4 Passos</span></div>
        
      </div>
      <div class="mb-4 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 border-l-4 border-white pl-4">
        <div class="text-md font-bold pb-2"><span class=" textDecoration">PASSO 1</span></div>
        <div class="text-md font-bold">Simule e solicite.</div>
        <div class="text-sm pb-4">
          Pré-aprovação em tempo real porque seu tempo é valioso. 
        </div>
      </div>
      <div class="mb-4 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 text-right border-r-4 border-white pr-4">
        <div class="text-md font-bold pb-2"><span class=" textDecoration">PASSO 2</span></div>
        <div class="text-md font-bold">Envie seus documentos.</div>
        <div class="text-sm pb-4">
          Envie os documentos de acordo com seu perfil para aprovarmos seu crédito de forma efetiva! 
        </div>
      </div>
      <div class="mb-4 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 border-l-4 border-white pl-4">
        <div class="text-md font-bold pb-2"><span class=" textDecoration">PASSO 3</span></div>
        <div class="text-md font-bold">Avaliação do imóvel e formalização.</div>
        <div class="text-sm pb-4">
          Fique tranquilo que nesta etapa temos um especialista para lhe auxiliar até o fim do processo. 
        </div>
      </div>
      <div class="mb-4 transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 text-right border-r-4 border-white pr-4">
        <div class="text-md font-bold pb-2"><span class=" textDecoration">PASSO 4</span></div>
        <div class="text-md font-bold">Liberação do recurso. </div>
        <div class="text-sm pb-4">
          Agora é com você! Aproveite a liberdade para realizar aquele sonho e tirar os projetos do papel! 
        </div>
      </div>
      
      <div class="text-center ">
        <img :src="$options.imageConfig.bestHubMockupMd"  class="w-11/12 mr-auto ml-auto "/>
        <button class=" buttonWhite text-center text-xl my-16"><a :href="$options.appSimulator" >Quero simular</a></button>
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
      value:180000,
    }
  },
})
</script>
