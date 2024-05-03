<template lang="">
    <div>
    <div class="" >
      <div class="pb-6">
        <questions 
          v-for="i in perguntas" :key="i.id" 
          :title="i.title" :text="i.text" :text-aux="i.text2"
          :video-url="i.videoUrl" :video-style="videoStyle" :with-video="false" />
      </div>
    </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
import questions from '@/components/base/questions.component.vue'
export default defineComponent({
  name: 'Faq',
  components: { questions},
  data(){
    return {
      perguntas: [],
      videoStyle: "w-full h-80 mr-auto ml-auto  xl:rounded-br-2xl lg:rounded-br-2xl md:rounded-br-2xl"
    }
  },
  beforeMount() {
    this.checkOrgName()
  },
  methods: {
    checkOrgName() {

      this.perguntas = [
        {
          title: 'Estou negativado, consigo fazer o financiamento de carro?',
          text: 'A Bext é uma fintech de crédito imobiliário, que visa trazer agilidade e segurança por meio da tecnologia para pessoas que buscam: Financiamento Imobiliário ou Home Equity (Crédito com Garantia de Imóvel).',
          text2:null,
          videoUrl: 'https://www.youtube.com/embed/rb49Jt9dt4M',
        },
        {
          title: 'Posso financiar qualquer veículo?',
          text: 'Nosso atendimento é feito por meio da união da tecnologia com a força humana. Feito por meio dos melhores especialistas do mercado de crédito imobiliário. Esses especialistas estarão com você do começo ao fim.',
          text2:null,
          videoUrl: 'https://www.youtube.com/embed/Hz7URcvfiDE',
        },
        {
          title: 'Eu preciso fazer o seguro do carro assim que financio?',
          text: 'Sua segurança é nossa prioridade. Por isso, nosso simulador conta com criptografia de ponta a ponta. Ou seja, todos os seus dados pessoais estarão seguros.',
          text2:null,
          videoUrl: 'https://www.youtube.com/embed/2vZyQSawB1Q',
        },
        {
          title: 'O carro tem d ser, exclusicamento, de uma concessionária?',
          text: 'O cashBext é o nome dado para uma modalidade de crédito, onde você deixa seu imóvel como garantia, e em troca recebe o capital que você precisa.',
          text2:null,
          videoUrl: 'https://www.youtube.com/embed/1-y5dOFywUg',
        },
        {
          title: 'Quais documentos sâo necessários para fazer o financiamento?',
          text: 'Financiamento Imobiliário é uma modalidade de crédito, onde o banco empresta capital para que você possa adquirir seu imóvel.',
          text2: null,
          videoUrl: 'https://www.youtube.com/embed/HakXQ0t9Sb0',
        },
        {
          title: 'Posso usar meu veículo antigo de entrada?',
          text: 'Fintech é a nomenclatura dada a empresas que unem o mundo financeiro e o tecnológico. Por meio delas, tanto atendimento quanto os processos são agilizados.',
          text2:null,
          videoUrl: 'https://www.youtube.com/embed/wW4_gssWxSU',
        },
        {
          title:'É possível financiar sem entrada?',
          text:'Você tem um sonho, certo? Nós também temos nossos sonhos e um deles é ajudar você a conquistar tudo que precisa. Nós iremos lutar por você até o fim. E o fim para a gente, é o seu sonho sendo concretizado.',
          text2:null,
          videoUrl: 'https://www.youtube.com/embed/PzSOvyV1mWY',
        },   
        {
          title:'E se eu não pagar as parcelas?',
          text:'Você tem um sonho, certo? Nós também temos nossos sonhos e um deles é ajudar você a conquistar tudo que precisa. Nós iremos lutar por você até o fim. E o fim para a gente, é o seu sonho sendo concretizado.',
          text2:null,
          videoUrl: 'https://www.youtube.com/embed/PzSOvyV1mWY',
        },
        {
          title:'Qual é o melhor score de crédito para financiar um carro?',
          text:'Você tem um sonho, certo? Nós também temos nossos sonhos e um deles é ajudar você a conquistar tudo que precisa. Nós iremos lutar por você até o fim. E o fim para a gente, é o seu sonho sendo concretizado.',
          text2:null,
          videoUrl: 'https://www.youtube.com/embed/PzSOvyV1mWY',
        },
      ]
    }
  },
  
  
})
</script>
<style lang="">
    
</style>