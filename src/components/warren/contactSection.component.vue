<template>
  <section
    class="flex flex-col lg:flex-row-reverse xl:flex-row-reverse w-full text-white"
  >
    <div
      class="bg-[url('/images/warren/mobile/contactBackground.png')] h-[340px] bg-cover flex flex-col md:flex-row lg:flex-row xl:flex-row gap-2 items-center justify-center bg-center lg:w-4/6 lg:h-auto xl:w-4/6 xl:h-auto"
    >
      <LogoSejaBestSVG class="h-14" />
      <p class="text-3xl font-bold">+</p>
      <LogoWarrenSVG class="h-14" />
    </div>
    <div
      class="bg-warren-terracota flex flex-col gap-6 px-5 py-12 text-center lg:w-2/6 lg:items-start lg:text-left xl:w-2/6 xl:text-left"
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
      />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LogoSejaBestSVG from '@/components/base/logos/logoSejaBestSVG.component.vue'
import LogoWarrenSVG from '@/components/warren/icons/logoWarrenSVG.component.vue'
import CustomButton from '@/components/warren/customButton.component.vue'

export default defineComponent({
  name: 'ContactSection',
  components: { LogoSejaBestSVG, LogoWarrenSVG, CustomButton },
  data() {
    return {}
  },
})
</script>
