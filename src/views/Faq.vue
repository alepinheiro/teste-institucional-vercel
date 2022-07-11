<template>
  <div class="w-full">
    <div class="w-full border-b-1">
      <div class="maxWidth " >
        <topbarComponent position="top" />
      </div>
    </div>
    <div class="maxWidth " >
      <div class="text-4xl md:text-2xl font-semibold text-primary py-12">
        <span class=" textDecoration">Perguntas frequentes</span>
      </div>
      <div class="pb-6">
        <questions v-for="i in perguntas" :key="i.id" :title="i.title" :text="i.text" :textAux="i.text2" />
      </div>
    </div>
    
  </div>
</template>

<script>
import { defineComponent } from "vue";
import questions from '@/components/base/questions.component.vue'
import topbarComponent from '@/components/structure/topbar.component.vue';
export default defineComponent({
  name: 'Help',
  components: { questions,topbarComponent },
  data(){
    return {
      perguntas: []
    }
  },
  methods: {
    checkOrgName() {
      this.perguntas = [
        {
          title: 'O que é a SejaBest?',
          text: 'A SejaBest é uma fintech de crédito imobiliário, que visa trazer agilidade e segurança por meio da tecnologia para pessoas que buscam: financiamento imobiliário ou home equity (crédito com garantia de imóvel).',
          text2:null
        },
        {
          title: 'O que é uma Fintech?',
          text: 'Fintech é a nomenclatura dada a empresas que unem o mundo financeiro e o tecnológico. Por meio delas, tanto atendimento quanto os processos são agilizados.',
          text2:null
        },
        {
          title: 'O que a SejaBest faz?',
          text: 'A SejaBest é uma das startups que vem revolucionando o mercado de crédito imobiliário através de suas soluções altamente precisas e seguras quando falamos de tomada de capital. Seja na área de financiamento imobiliário ou Home Equity, a SejaBest tem contribuindo para a evolução do mercado de crédito como um todo.',
          text2:null
        },
        {
          title: 'Por que escolher a SejaBest?',
          text: 'Você tem um sonho, certo? Nós também temos nossos sonhos e um deles é ajudar você a conquistar tudo que precisa. Nós iremos lutar por você até o fim. E o fim para a gente, é o seu sonho sendo concretizado.',
          text2:null
        },
        {
          title: 'TR X IPCA',
          text: 'A principal vantagem da TR (Taxa Referencial) é a estabilidade, garantindo maior segurança.É o indexador mais procurado pela grande maioria. É o melhor custo benefício de longo prazo, por ter taxas atrativas e com oscilação pouco agressiva.',
          text2: 'O IPCA leva em consideração todos os fatores econômicos que estão ligados ao consumidor. Por exemplo: transporte, moradia, alimentação, saúde, entre outros. Ou seja, esse é o índice oficial da inflação. Por conta disso, não possui a mesma estabilidade da TR. Nas primeiras parcelas o IPCA parece ser atrativo e mais barato, porém fica mais caro com o tempo.'
        },
        {
          title: 'Como funciona a análise de crédito?',
          text: 'Depois de fornecer a documentação necessária, as instituições analisam os documentos de renda juntamente com as consultas aos órgãos de crédito (SPC, Serasa e BACEN) para apresentar uma proposta formal ao cliente.',
          text2:null
        },
        {
          title:'Podem consultar meu nome sem minha autorização?',
          text:'Não. Um dos documentos exigidos para a negociação é justamente uma autorização para as consultas aos órgãos de crédito.',
          text2:null
        },
        {
          title:'Como é realizada a avaliação do imóvel?',
          text:'Geralmente é feita in loco, com o apoio de um engenheiro terceirizado pela própria instituição que vai até o local para elaborar um laudo técnico do imóvel.',
          text2:null
        },
        {
          title:'Eu sou obrigado a pagar pela avaliação do imóvel?',
          text:'Sim, este é um dos custos operacionais para viabilizar a negociação, mas a maioria das instituições faz o financiamento dessa despesa e, o mais importante: esse custo é gerado apenas após sua aprovação formal da proposta apresentada, sem gerar nenhum tipo de ônus desnecessário.',
          text2:null
        },
        {
          title:'O que pode fazer com que o laudo do imóvel seja negado?',
          text:'Problemas estruturais da propriedade com relação ao estado de conservação ou padrão construtivo; bem como divergências entre documentações e local ou até mesmo o fato de ter mais residências no mesmo terreno utilizando a mesma entrada.',
          text2:null
        },
        {
          title:'Posso contratar sem avaliar o imóvel?',
          text:'Não! Como o imóvel fica alienado como garantia da operação, o laudo é indispensável.',
          text2:null
        },
        {
          title:'Meu imóvel é foreiro, possui usufruto/usucapião ou cláusula de incomunicabilidade ou inalienabilidade, posso colocar como garantia?',
          text:'O único ônus aceito nas operações são débitos relacionados a outra operacional imobiliária, desde que o saldo devedor atual se ajuste dentro dessa nova operação possibilitando sua quitação e liberação do bem para a nova negociação.',
          text2:null
        },
        {
          title:'Como são feitas as assinaturas de contrato?',
          text:'Dois formatos básicos que variam entre instituições que são: digital e físico. No digital através de um certificado digital o cliente assina de casa o contrato e aguarda que seja procedido com registro de imóveis. No físico, o cliente faz a impressão das vias, assina, a instituição assina e após isso, as documentações são levadas para o registro de imóveis.',
          text2:null
        },
        {
          title:'Posso ser representado por procuração para assinatura de contrato?',
          text:'Pode, desde que seja uma procuração pública e devidamente ajustada aos termos necessários de contratação. Se aplica inclusive para envolvidos residentes no exterior.',
          text2:null
        },
        {
          title:'Posso contratar sem assinatura de alguma das partes?',
          text:'Negativo. Todos precisam assinar e reconhecer as assinaturas no registro de imóveis quando contrato físico. ',
          text2:null
        },
        {
          title:'Depois de assinado o contrato, em quanto tempo recebo?',
          text:'Depende da demanda do registro de imóveis. O prazo legal dos cartórios é de 30 dias e o prazo legal para recebimento do recurso após o registro do contrato é de até 5 dias úteis, desde que não haja inconsistências do documento do imóvel ou dívidas condicionadas a pagamento.',
          text2:null
        },
        {
          title:'Depois de assinado, tem chance de não dar certo a negociação?',
          text:'Não, uma vez que o contrato é emitido e não existindo no registro de imóveis nenhum processo em cima da garantia, é apenas o tempo de registro do contrato para finalização e recebimento.',
          text2:null
        },
        
       
      ]
    }
  },
  beforeMount() {
    this.checkOrgName()
  }
})
</script>