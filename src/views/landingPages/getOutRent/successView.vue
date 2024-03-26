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
  components: {
    SuccessBanner,
    FooterSection,
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
      isVisible: false,
      value: 300000,
      showVideo: false,
      videoStyle: 'w-full h-[36rem] mr-auto ml-auto rounded-2xl ',
      videoUrl: 'https://www.youtube.com/embed/XgvSqZf8PM0',
    }
  },
  mounted() {
    gtag('event', 'CompraFinalizada')
    window.fbq('trackCustom', 'Comprafinalizada')
    window.fbq('trackCustom', 'Comprafinalizada', {
      value: 0.0,
      currency: 'USD',
    })
    window.fbq('track', 'Purchase', { value: 0.0, currency: 'USD' })
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
