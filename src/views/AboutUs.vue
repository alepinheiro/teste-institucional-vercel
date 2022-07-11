<template>
  <div class="text-textPrimary">
    <div class="w-full  ">
      <div class="maxWidth " >
        <topbarComponent position="top" />
        
      </div>
      <div class="bgBannerBlueRight h-screen w-full sm:hidden">
        <div class="maxWidth flex justify-between" >
          <div class="w-5/12 md:w-1/2 mt-auto mb-auto ">
            <div class="text-4xl md:text-2xl font-semibold text-primary pb-6">
              Nascendo para <span class=" textDecoration">transformar</span> o mercado brasileiro.
            </div>
            <div class="pb-3 text-textSecondary">
              Com mais de 10 anos de experiência no mercado financeiro, nossos fundadores identificaram grandes 
              problemas ao trabalharem com as maiores instituições financeiras do mercado. Cansados de ver a 
              dificuldade que era conseguir um crédito imobiliário, tomaram a decisão de lutar contra o sistema tradicional. 
            </div>
            <div class="text-textSecondary">
              Foi a partir disso que nasceu a SejaBest, com a verdadeira missão de transformar o crédito com garantia de 
              imóvel no Brasil, tornando-o mais rápido através da tecnologia, suprimindo etapas físicas pelo online e deixando 
              especialistas 100% do tempo a disposição dos clientes, reduzindo drasticamente o tempo de processo.
            </div>
          </div>
          <div class="w-5/12 md:w-1/2 md:mr-0 my-20 mr-24">
            <img :src="$options.imageConfig.founders"  class="w-full h-auto "/>
          </div>
        </div>
      </div>
      <div class=" pt-8 w-full xl:hidden lg:hidden  md:hidden">
        <div class="maxWidth  justify-between" >
          <div class="w-full mt-auto mb-auto ">
            <div class="text-3xl font-semibold text-primary pb-6">
              Nascendo para <span class=" textDecoration">transformar</span> o mercado brasileiro.
            </div>
            <div class="pb-3 text-textSecondary">
              Com mais de 10 anos de experiência no mercado financeiro, nossos fundadores identificaram grandes 
              problemas ao trabalharem com as maiores instituições financeiras do mercado. Cansados de ver a 
              dificuldade que era conseguir um crédito imobiliário, tomaram a decisão de lutar contra o sistema tradicional. 
            </div>
            <div class="text-textSecondary  ">
              Foi a partir disso que nasceu a SejaBest, com a verdadeira missão de transformar o crédito com garantia de 
              imóvel no Brasil, tornando-o mais rápido através da tecnologia, suprimindo etapas físicas pelo online e deixando 
              especialistas 100% do tempo a disposição dos clientes, reduzindo drasticamente o tempo de processo.
            </div>
          </div>
          <div class="w-full ">
            <img :src="$options.imageConfig.founders"  class="w-full h-auto "/>
          </div>
        </div>
      </div>


       <div class="w-full py-8 sm:pt-12 sm:pb-24">
        <div class="maxWidth flex h-screen sm:h-full" >
          <div class="mt-auto mb-auto w-full" >
            <div class="text-center text-4xl md:text-3xl sm:text-3xl font-semibold text-primary pb-6">
              <span class=" textDecoration">Reconhecimento</span>  do mercado.
            </div>
            <div class="text-textSecondary text-center sm:hidden">
              Eleita e selecionada pelos principais programas de startups da Améria Latina e do Brasil,<br/> 
              a SejaBest é uma das principais Fintechs do mercado.
            </div>
            <div class="text-textSecondary text-center xl:hidden lg:hidden  md:hidden">
              Eleita e selecionada pelos principais programas de  <br/>startups da Améria Latina e do Brasil,
              a SejaBest<br/> é uma das principais Fintechs do mercado.
            </div>
            <div class="flex w-full justify-around pt-8">
                <img :src="$options.imageConfig.logoBNDS" class="w-64 sm:w-1/4" />
                <img :src="$options.imageConfig.logoFbStart" class="w-64 sm:w-1/4" />
                <img :src="$options.imageConfig.logoInovativa" class="w-64 sm:w-1/4" />
                <img :src="$options.imageConfig.logoStartup" class="w-64 sm:w-1/4" />
            </div>
          </div>
        </div>
      </div>
      

      <div class="bg-gradient-to-r from-secondary to-primary w-full ">
        <div class="maxWidth flex h-screen sm:h-full " >
         <div class="mt-auto mb-auto w-full flex justify-between sm:flex-wrap">
            <div class="w-5/12 md:w-1/2 sm:w-full mt-auto mb-auto text-white">
              <div class="text-4xl md:text-2xl font-semibold sm:text-center py-6">
                <span class=" textDecoration">Você no centro!</span> 
              </div>
              <div class="pb-3 sm:text-center ">
                Acreditamos que você merece uma experiência completa, que soma o melhor do atendimento humanizado 
                e personalizado dos nossos especialistas com a tecnologia, simplificando e agilizando todo os processos.
              </div>

            </div>
            <div class="w-5/12 md:w-1/2  sm:w-full mt-auto mb-auto">
              <img :src="$options.imageConfig.phoneSemFila"  class="w-11/12 mr-auto ml-auto h-auto "/>
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
      <div class="w-full  sm:pt-12 sm:pb-12 bgBannerPrimary">
        <div class="maxWidth flex h-screen sm:h-full" >
          <div class="mt-auto mb-auto w-full" >
            <img :src="$options.imageConfig.logoSejabestWhite"  class="w-64 h-auto mr-auto ml-auto"/>
            <div class="text-white text-xl text-center pt-12">
              É por isso que a nossa marca é um convite. Um convite para que você possa vivenciar<br />
              essa experiência e desfrutar da liberdade para realizar seus sonhos 
            </div>
            <div class="text-white text-3xl pt-12 text-center">
              E aí vem ser <span class=" textDecoration">Best</span> com a gente ?
            </div>
            <div class="flex sm:flex-wrap w-full justify-center pt-12">
              <div class="buttonComplementaryColor1 mr-4 w-64 sm:w-full text-center">
                <a :href="$options.appSimulator"  style=" text-decoration: none;"
                  target="_blank">Simule seu crédito</a>
              </div>
              <div class="buttonWhite mr-4 w-64 sm:mt-4 sm:w-full text-center">
                <a :href="$options.appPartner"  style=" text-decoration: none;"
                  target="_blank">Quero ser parceiro</a>
              </div>
            </div>
          </div>
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
