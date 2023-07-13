<template>
  <main id="bestProReleaseLandingPage" class="text-white bg-black">
    <div class="relative">
      <img
        class="absolute sm:hidden"
        src="/images/bestPro/pricesBackground.png"
        alt=""
      />
      <PricesSection :options="prices" />
    </div>

    <TelegramSection />
    <FaqSection :questions="questions" />
    <FooterSection />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PricesSection from '@/components/bestPro/pricesSection.component.vue'
import TelegramSection from '@/components/bestPro/telegramSection.component.vue'
import FaqSection from '@/components/bestPro/faqSection.component.vue'
import FooterSection from '@/components/bestPro/footerSection.component.vue'
export default defineComponent({
  name: 'BestProLP',
  components: { FooterSection, FaqSection, TelegramSection, PricesSection },
  data() {
    return {
      questions: [
        {
          id: 1,
          title: 'Preciso ter faturamento mínimo para contratar o empréstimo?',
          text: 'Bacon ipsum dolor amet doner pancetta filet mignon, meatloaf t-bone ball tip boudin rump burgdoggen shoulder. Corned beef bresaola tongue shank. Meatloaf chuck andouille, pork ball tip kielbasa buffalo chicken jowl spare ribs jerky. Ground round turkey ribeye bresaola, tail buffalo meatball landjaeger pork chop beef ribs short ribs chislic pancetta. Sirloin bresaola tenderloin, chicken tri-tip sausage picanha cupim flank landjaeger bacon meatball.',
          isOpen: false
        },
        {
          id: 2,
          title: 'Preciso ter faturamento mínimo para contratar o empréstimo?',
          text: 'Bacon ipsum dolor amet doner pancetta filet mignon, meatloaf t-bone ball tip boudin rump burgdoggen shoulder. Corned beef bresaola tongue shank. Meatloaf chuck andouille, pork ball tip kielbasa buffalo chicken jowl spare ribs jerky. Ground round turkey ribeye bresaola, tail buffalo meatball landjaeger pork chop beef ribs short ribs chislic pancetta. Sirloin bresaola tenderloin, chicken tri-tip sausage picanha cupim flank landjaeger bacon meatball.',
          isOpen: false
        },
        {
          id: 3,
          title: 'Preciso ter faturamento mínimo para contratar o empréstimo?',
          text: 'Bacon ipsum dolor amet doner pancetta filet mignon, meatloaf t-bone ball tip boudin rump burgdoggen shoulder. Corned beef bresaola tongue shank. Meatloaf chuck andouille, pork ball tip kielbasa buffalo chicken jowl spare ribs jerky. Ground round turkey ribeye bresaola, tail buffalo meatball landjaeger pork chop beef ribs short ribs chislic pancetta. Sirloin bresaola tenderloin, chicken tri-tip sausage picanha cupim flank landjaeger bacon meatball.',
          isOpen: false
        },
        {
          id: 4,
          title: 'Preciso ter faturamento mínimo para contratar o empréstimo?',
          text: 'Bacon ipsum dolor amet doner pancetta filet mignon, meatloaf t-bone ball tip boudin rump burgdoggen shoulder. Corned beef bresaola tongue shank. Meatloaf chuck andouille, pork ball tip kielbasa buffalo chicken jowl spare ribs jerky. Ground round turkey ribeye bresaola, tail buffalo meatball landjaeger pork chop beef ribs short ribs chislic pancetta. Sirloin bresaola tenderloin, chicken tri-tip sausage picanha cupim flank landjaeger bacon meatball.',
          isOpen: false
        }
      ],
      prices: [
        {
          id: 1,
          title: 'Plano mensal',
          price: 'R$ 129,90',
          recurrence: '/mês',
          features: ['Pagamento mensal', 'R$ 1.558,80 anualmente'],
          link: '#',
          label: ''
        },
        {
          id: 2,
          title: 'Plano semestral',
          price: 'R$ 99,90',
          recurrence: '/mês',
          features: ['Pagamento semestral', 'R$ 599,40 à vista'],
          link: '#',
          label: 'Economizou R$ 360,00'
        },
        {
          id: 3,
          title: 'Plano anual',
          price: 'R$ 79,90',
          recurrence: '/mês',
          features: ['Pagamento anual', 'R$ 958,80 anualmente'],
          link: '#',
          label: 'Economizou R$ 600,00'
        }
      ]
    }
  }
})
</script>
<style lang="scss"></style>
