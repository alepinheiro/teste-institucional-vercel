<template>
  <div class="w-full relative sm:static">
    <div class="xoAluguel sm:hidden md:hidden"></div>
    <div>
      <img 
        src="/images/getOutRent/xoAluguelSM.png"
        alt="Xô, Aluguel! o metodo best para conquistar seu primeiro imóvel com financiamento imobiliário "
        class="w-full lg:hidden xl:hidden " />
    </div>
    <div class="w-full h-screen sm:h-full flex items-center  ">
      <div
        class="text-white w-[33%] lg:w-[40%] md:w-full sm:text-center md:text-center sm:w-full sm:ml-0 md:ml-0 p-4 ml-14">
        <h1 class="text-3xl sm:text-2xl">
          Chegou a sua hora de deixar o aluguel para trás com
          <br /><span class="font-bold text-4xl sm:text-3xl border-b-4 border-primary">
            Financiamento Imobiliário</span>
        </h1>
        <p class="text-xl sm:text-base pt-8 sm:pt-6">
          Não deixe que o aluguel continue sendo um obstáculo entre você e a realização do sonho de ter sua própria
          casa. Com o guia <span class="font-bold text-2xl sm:text-xl">Xô, Aluguel: O Método Best para conquistar seu
          primeiro
          imóvel com Financiamento
          Imobiliário"</span>, você terá o conhecimento necessário para dar o primeiro passo em direção à conquista
          desse
          objetivo.
        </p>
        <p class="text-xl sm:text-base py-8 sm:py-6"> 
          Não espere mais! Invista em seu futuro e conquiste a tão sonhada
          independência
          imobiliária.
        </p>
        <button 
          class="bg-primary transition duration-500 ease-in-out 
          transform hover:translate-y-1 hover:scale-105 rounded-lg text-2xl p-4 font-semibold"
          @click="openLink()">
          Quero sair do aluguel
        </button>
      </div>
    </div>
  </div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BannerXoAluguel',
  data() {
    return {
      isVisible: false,
    }
  },
  methods:{
    openLink(){
      window.open( this.$options.information.hotmartXoAluguel, '_blank' );
    },
  }
})
</script>
    
<style scoped>
@media (min-width: 1024px) and (max-width: 1279px) {
  .xoAluguel {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 90%;
    background: url('/images/getOutRent/xoAluguelSM.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right center;
    margin-top: -1.3rem;
  }
}

@media (min-width: 1279px) {
  .xoAluguel {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background: url('/images/getOutRent/xoAluguel.png');
    background-size: cover;
    background-position: right center;
  }
}</style>