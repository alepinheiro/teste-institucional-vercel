<template>
  <main class="text-white bg-black font-Sizmo overflow-x-hidden z-0">
    <HeroSection />
    <BanksSection />
    <DiscoverSection />
    <BenefitsSection />
    <VideoSection class="z-10" />
    <ProductsSection />
    <CommissionSection />
    <PricesSection :options="prices" class="static z-10" />
    <BestTable />
    <div class="relative">
      <ProductBoxSection />
      <FaqSection :questions="questions" />
      <FooterSection />
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent, ComponentPublicInstance } from 'vue'

import HeroSection from '@/components/bestHub/heroSection.component.vue'
import BanksSection from '@/components/bestHub/banksSection.component.vue'
import DiscoverSection from '@/components/bestHub/discoverSection.component.vue'
import BenefitsSection from '@/components/bestHub/benefitsSection.component.vue'
import VideoSection from '@/components/bestHub/videoSection.component.vue'
import ProductsSection from '@/components/bestHub/productsSection.component.vue'
import CommissionSection from '@/components/bestHub/commissionSection.component.vue'
import PricesSection from '@/components/bestHub/pricesSection.component.vue'
import BestTable from '@/components/bestHub/bestTable.component.vue'
import ProductBoxSection from '@/components/bestHub/productBox.component.vue'
import FaqSection from '@/components/bestHub/faqSection.component.vue'
import FooterSection from '@/components/bestHub/footerSection.component.vue'
export default defineComponent({
  name: 'BestHubLP',
  components: {
    HeroSection,
    BanksSection,
    DiscoverSection,
    FooterSection,
    FaqSection,
    BestTable,
    PricesSection,
    CommissionSection,
    BenefitsSection,
    VideoSection,
    ProductsSection,
    ProductBoxSection,
  },
  props: {
    showMenu: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      questions: [
        {
          id: 1,
          title: 'O que é o BestHub? ',
          text: 'O BestHub é uma ferramenta B2B para a oferta de crédito. Imagine que você é uma imobiliária, corretora, construtora, correspondente ou qualquer tipo de empresa que trabalhe ofertando crédito. Dentro do BestHub você pode simular, estruturar, acompanhar as operações de crédito de seus clientes, e no fim ganhar uma comissão sobre cada produto assinado.',
          isOpen: false,
        },
        {
          id: 2,
          title: 'Para onde vão as operações do BestHub?',
          text: 'As operações simuladas dentro de um requisito específico (confira o manual de contratação), são encaminhadas para a SejaBest, que estrutura as operações com vários parceiros com o fim de trazer o melhor produto para seus clientes.',
          isOpen: false,
        },
        {
          id: 3,
          title: 'O que é a SejaBest?',
          text: 'A SejaBest é uma fintech multibancos, que trabalha com operações de crédito com garantia. Sejam elas de financiamento ou empréstimo.',
          isOpen: false,
        },
        {
          id: 4,
          title: 'O que é uma simulação detalhada?',
          text: 'Uma simulação detalhada dentro do BesHub, traz todos os detalhes da operação que você escolheu, segundo uma taxa base de mercado (Não é a taxa final).',
          isOpen: false,
        },
        {
          id: 5,
          title: 'O que é uma simulação multibanco?',
          text: 'Uma simulação multibancos traz todas as comparações entre simulações de bancos que estão na base da SejaBest. De forma resumida, você consegue acompanhar as diferentes taxas e parcelas segundo cada instituição.',
          isOpen: false,
        },
        {
          id: 6,
          title: 'O que é uma simulação multi prazos?',
          text: 'Uma simulação multi prazos traz diferentes prazos para o mesmo tipo de produto, o que impacta diretamente na parcela do seu cliente.',
          isOpen: false,
        },
        {
          id: 7,
          title: 'O que é uma simulação simples?',
          text: 'Diferente da simulação detalhada, a simulação simples traz apenas a primeira e última parcela segundo uma taxa base de mercado.',
          isOpen: false,
        },
        {
          id: 8,
          title: 'Ainda não sei nada sobre crédito, o que devo fazer?',
          text: 'Como falamos no primeiro tópico, o BestHub também tem um braço de educação onde você pode aprender tudo sobre produtos de crédito com garantia (principalmente sobre o que é uma simulação e parcela). Caso tenha interesse, <a href="#" class="underline">clique aqui</a>.',
          isOpen: false,
        },
      ],
      prices: [
        {
          id: 1,
          title: 'Plano mensal',
          price: 'R$ 129,90',
          recurrence: '/mês',
          features: ['Pagamento mensal', 'R$ 1.558,80 anualmente'],
          link: '#',
          label: '',
        },
        {
          id: 2,
          title: 'Plano semestral',
          price: 'R$ 99,90',
          recurrence: '/mês',
          features: ['Pagamento semestral', 'R$ 599,40 à vista'],
          link: '#',
          label: 'Economizou R$ 360,00',
        },
        {
          id: 3,
          title: 'Plano anual',
          price: 'R$ 79,90',
          recurrence: '/mês',
          features: ['Pagamento anual', 'R$ 958,80 anualmente'],
          link: '#',
          label: 'Economizou R$ 600,00',
        },
      ],
    }
  },
  mounted() {
    let fullUrl = this.$route.fullPath.split('?')
    if (this.$route.fullPath.includes('?')) {
      this.$root.utms = '?' + fullUrl[1]
    }
  },
})
</script>
<style lang="scss"></style>
