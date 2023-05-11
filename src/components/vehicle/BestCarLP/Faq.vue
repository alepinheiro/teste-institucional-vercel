<template>
  <div>
    <div class="">
      <div class="pb-6">
        <questions 
          v-for="i in perguntas" :key="i.id" :title="i.title" :text="i.text" :text-aux="i.text2"
          :with-video="false" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import questions from '@/components/base/questions.component.vue'
export default defineComponent({
  name: 'Faq',
  components: { questions },
  data() {
    return {
      perguntas: [],
      withVideo: false,
    }
  },
  beforeMount() {
    this.checkOrgName()
  },
  methods: {
    checkOrgName() {

      this.perguntas = [
        {
          title: 'Quais documentos são necessários para fazer o CarBest?',
          text: 'Documentos pessoais, do veículo e comprovante de renda.',
        },
        {
          title: 'Como contratar esse empréstimo?',
          text: 'Você começa com a simulação. Daí, vamos usar seus dados para fazer uma análise de crédito. Depois, retornaremos para informar se a proposta foi aprovada. Se o resultado for positivo, vamos avaliar o veículo e os documentos. Se estiver tudo certinho, é só assinar os documentos para o dinheiro cair em sua conta.',
          text2: null,
        },
        {
          title: 'Tenho que fazer o pagamento antecipado para ter o empréstimo? ',
          text: 'Não! Em hipótese alguma pedimos pagamento antecipado para liberar o valor do crédito. ',
          text2: null,
        },
        {
          title: 'Preciso entregar meu carro de imediato?',
          text: 'Não. O veículo entra como uma garantia, mas não é necessário se desfazer dele. Ou seja, você continua usando o carro normalmente.',
          text2: null,
        },
        {
          title: 'Estou negativado.Consigo fazer esse empréstimo?',
          text: 'Não. Esse tipo de crédito é para quem não tem restrições no nome.',
          text2: null,

        },
        {
          title: 'Posso fazer o empréstimo com carro alienado?',
          text: 'Não. O veículo precisa estar quitado e totalmente regularizado para que você tenha o crédito aprovado.',
          text2: null,
        },
        {
          title: 'Posso usar qualquer veículo com garantia?',
          text: 'Carro de passeio com xxx anos de uso; van, caminhão baú e carreta com xxx anos de uso. Moto não entra nessa modalidade de empréstimo.',
          text2: null,
        },
        {
          title: 'Qual o valor das parcelas?',
          text: 'Vai depender da quantidade de vezes em que você dividiu o débito e do valor emprestado. Os juros são de 1,49% ao mês, 23% ao ano e o prazo máximo é de 5 anos.',
          text2: null,
        },
        {
          title: 'E se eu não pagar as parcelas?',
          text: 'Com três meses de atraso, começa o processo para leiloar o veículo. Mas essa não é a intenção da instituição, que vai entrar em contato com a pessoa para que seja feita uma negociação.',
          text2: null,
        },
        {
          title: 'O crédito aprovado só pode ser usado para quitar divídas?',
          text: 'Não. O dinheiro é seu e você vai poder usar da maneira que quiser',
          text2: null,
        },
      ]
    }
  },


})
</script> 