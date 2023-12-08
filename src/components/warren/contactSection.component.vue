<template>
  <section class="relative bg-warren-terracota z-0">
    <div
      class="absolute bg-[url('/images/warren/mobile/contactBackground.png')] top-0 inset-x-0 lg:inset-x-auto xl:inset-x-auto lg:bottom-0 xl:bottom-0 h-[48%] lg:h-auto xl:h-auto lg:left-[41%] xl:left-[41%] lg:right-0 xl:right-0 bg-cover bg-center md:h-2/5 -z-10"
    ></div>
    <div
      class="flex flex-col lg:flex-row-reverse xl:flex-row-reverse md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:mx-auto lg:mx-auto xl:mx-auto"
    >
      <div
        class="mx-auto flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 justify-center lg:justify-end xl:justify-end lg:pr-5 xl:pr-5 items-center py-24 text-white w-4/6"
      >
        <LogoSejaBestSVG class="h-14" />
        <p class="text-3xl font-bold">+</p>
        <LogoWarrenSVG class="h-14" />
      </div>
      <div
        class="bg-warren-terracota flex flex-col gap-5 justify-center items-center py-12 px-5 text-center lg:text-start xl:text-start text-white lg:w-2/6 xl:w-2/6"
      >
        <h2 class="text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold">
          Uma parceria de sucesso
        </h2>
        <p>
          Uma grande parceria que reforça a oferta de serviços financeiros da
          Warren, proporcionando aos clientes soluções abrangentes para suas
          necessidades imobiliárias.
          <b>
            Juntas, essas empresas líderes estão transformando a experiência
            financeira no setor imobiliário.
          </b>
        </p>
        <CustomButton
          :text="'Quero simular meu crédito'"
          class="mt-8 w-fit mx-auto lg:ml-0 xl:ml-0"
          @click="onButtonClick"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LogoSejaBestSVG from '@/components/base/logos/logoSejaBestSVG.component.vue'
import LogoWarrenSVG from '@/components/warren/icons/logoWarrenSVG.component.vue'
import CustomButton from '@/components/warren/customButton.component.vue'
import information from '@/configurations/information'

export default defineComponent({
  name: 'ContactSection',
  components: { LogoSejaBestSVG, LogoWarrenSVG, CustomButton },
  data() {
    const utm = new URLSearchParams({
      utm_source: 'warren-landing-page',
      utm_medium: 'contact-section',
      utm_campaign: 'landing-pages-dez-23',
    })

    return {
      utm,
    }
  },
  methods: {
    onButtonClick() {
      window.open(`${information.appSimulator}${this.$root.utms}`, '_blank')
    },
  },
})
</script>
