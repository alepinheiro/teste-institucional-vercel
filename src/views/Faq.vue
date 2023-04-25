<template>
  <div class="w-full bg-bglightColor">
    <div class="w-full gradienteSB">
      <div class="maxWidth ">
        <TopbarComponent position="relative" />
      </div>
      <div class="maxWidth ">
        <h1 class="text-white text-5xl titleFontBold  pt-12">
          Crédito Imobiliário pode ser complicado.
        </h1>
        <h3 class="text-white text-2xl pt-8 pb-12">Por isto estamos aqui com você.</h3>
      </div>
    </div>
    <div class="maxWidth py-12">

      <div class="pb-6">
        <Questions
          v-for="i in perguntas"
          :key="i.id"
          :title="i.title"
          :text="i.text"
          :text-aux="i.text2"
          :video-url="i.videoUrl"
          :video-style="videoStyle" :with-video="true" />
      </div>
    </div>
    <div class="maxWidth">
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue"
import Questions from '@/components/base/questions.component.vue'
import TopbarComponent from '@/components/structure/topbar.component.vue'

export default defineComponent({
  name: 'Help',
  components: { Questions, TopbarComponent },
  data() {
    return {
      perguntas: [
        {
          id: 0,
          title: 'O que é a SejaBest?',
          text: 'A SejaBest é uma fintech de crédito imobiliário, que visa trazer agilidade e segurança por meio da tecnologia para pessoas que buscam: Financiamento Imobiliário ou Home Equity (Crédito com Garantia de Imóvel).',
          text2: undefined,
          videoUrl: 'https://www.youtube.com/embed/rb49Jt9dt4M',
        },
        {
          id: 1,
          title: 'Como funciona o nosso atendimento?',
          text: 'Nosso atendimento é feito por meio da união da tecnologia com a força humana. Feito por meio dos melhores especialistas do mercado de crédito imobiliário. Esses especialistas estarão com você do começo ao fim.',
          text2: undefined,
          videoUrl: 'https://www.youtube.com/embed/Hz7URcvfiDE',
        },
        {
          id: 2,
          title: 'É seguro? ',
          text: 'Sua segurança é nossa prioridade. Por isso, nosso simulador conta com criptografia de ponta a ponta. Ou seja, todos os seus dados pessoais estarão seguros.',
          text2: undefined,
          videoUrl: 'https://www.youtube.com/embed/2vZyQSawB1Q',
        },
        {
          id: 3,
          title: 'O que é o CashBest?',
          text: 'O CashBest é o nome dado para uma modalidade de crédito, onde você deixa seu imóvel como garantia, e em troca recebe o capital que você precisa.',
          text2: undefined,
          videoUrl: 'https://www.youtube.com/embed/1-y5dOFywUg',
        },
        {
          id: 4,
          title: 'O que é o Financiamento Imobiliário?',
          text: 'Financiamento Imobiliário é uma modalidade de crédito, onde o banco empresta capital para que você possa adquirir seu imóvel.',
          text2: undefined,
          videoUrl: 'https://www.youtube.com/embed/HakXQ0t9Sb0',
        },
        {
          id: 5,
          title: 'O que é uma Fintech?',
          text: 'Fintech é a nomenclatura dada a empresas que unem o mundo financeiro e o tecnológico. Por meio delas, tanto atendimento quanto os processos são agilizados.',
          text2: undefined,
          videoUrl: 'https://www.youtube.com/embed/wW4_gssWxSU',
        },
        {
          id: 6,
          title: 'Por que escolher a SejaBest?',
          text: 'Você tem um sonho, certo? Nós também temos nossos sonhos e um deles é ajudar você a conquistar tudo que precisa. Nós iremos lutar por você até o fim. E o fim para a gente, é o seu sonho sendo concretizado.',
          text2: undefined,
          videoUrl: 'https://www.youtube.com/embed/PzSOvyV1mWY',
        },
      ],
      videoStyle: "w-full h-80 mr-auto ml-auto  xl:rounded-br-2xl lg:rounded-br-2xl md:rounded-br-2xl"
    }
  },
})
</script>