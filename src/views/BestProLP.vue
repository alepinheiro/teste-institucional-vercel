<template>
  <main class="text-white bg-black">
    <TelegramSection />
    <FaqSection :questions="questions" />
    <FooterSection />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TelegramSection from '@/components/bestPro/telegramSection.component.vue'
import FaqSection from '@/components/bestPro/faqSection.component.vue'
import FooterSection from '@/components/bestPro/footerSection.component.vue'
export default defineComponent({
  name: 'BestProLP',
  components: { FooterSection, FaqSection, TelegramSection },
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
        },
      ]
    }
  }
})
</script>
<style lang="scss"></style>
