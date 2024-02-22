<template>
  <div class="w-full bg-bgDarkColor2">
    <SuccessBanner />
    <FooterSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SuccessBanner from '@/components/getOutRent/successBanner.component.vue'
import FooterSection from '@/components/getOutRent/footerSection.component.vue'

export default defineComponent({
  name: 'GetOutRent',
  props: {
    showMenu: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  components: {
    SuccessBanner,
    FooterSection,
  },
  // metaInfo() {
  //   return {
  //     title: 'Conheça o FinanBest. O Financiamento Imobiliário da SejaBest.',
  //     meta: [
  //       {
  //         vmid: 'description',
  //         name: 'description',
  //         content:
  //           'Financie seu imóvel com as melhores condições do mercado. Tudo de forma online, digital, transparente e com o auxílio do nosso time de especialistas!',
  //       },
  //     ],
  //   }
  // },
  data() {
    return {
      isVisible: false,
      value: 300000,
      showVideo: false,
      videoStyle: 'w-full h-[36rem] mr-auto ml-auto rounded-2xl ',
      videoUrl: 'https://www.youtube.com/embed/XgvSqZf8PM0',
    }
  },
  mounted() {
    //@ts-expect-error global function gtag
    // eslint-disable-next-line no-undef
    gtag('event', 'CompraFinalizada')
    ;(window as any)
      .fbq(
        'trackCustom',
        'Comprafinalizada',
      )(window as any)
      .fbq('trackCustom', 'Comprafinalizada', { value: 0.0, currency: 'USD' })(
        window as any,
      )
      .fbq('track', 'Purchase', { value: 0.0, currency: 'USD' })
  },
})
</script>

<style scoped>
.mockup {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: url('/images/getOutRent/mockup.png');
  background-size: cover;
  background-position: right center;
}
</style>
