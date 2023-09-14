<template>
  <div
    id="bestBrokerLP"
    class="bg-[#0d0d0d] w-full text-white overflow-x-hidden font-Sizmo-Pro subpixel-antialiased"
  >

    <HeroSection />
    <ProductBox />
    <ProfileSection />
    <ContentSection />
    <ToolsSection />
    <TestimonialsSection />
    <OfferSection />
    <BestHub />
    <FooterSection />
  </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import { register } from 'swiper/element/bundle'

import HeroSection from '@/components/bestBroker/heroSection.component.vue'
import ProductBox from '@/components/bestBroker/productBox.component.vue'
import ProfileSection from '@/components/bestBroker/profileSection.component.vue'
import ContentSection from '@/components/bestBroker/contentSection.component.vue'
import ToolsSection from '@/components/bestBroker/toolsSection.component.vue'
import TestimonialsSection from '@/components/bestBroker/testimonialsSection.component.vue'
import BestHub from '@/components/bestBroker/bestHub.component.vue'
import OfferSection from '@/components/bestBroker/offerSection.component.vue'
import FooterSection from '@/components/bestBroker/footerSection.component.vue'

register()

export default defineComponent({
  name: 'BestBrokerLP',
  components: {
    HeroSection,
    ProductBox,
    ProfileSection,
    ContentSection,
    ToolsSection,
    TestimonialsSection,
    BestHub,
    OfferSection,
    FooterSection,
  },
  data() {
    return {}
  },
})
</script>
<style lang="scss">
#bestBrokerLP > * {
  margin: 0 !important;
}

.bgGradientToBottom {
  background-image: url('/images/bestBroker/bgGradientToBottom.svg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;

  @screen sm {
    background-size: cover;
  }

  @screen lg {
    background-size: cover;
  }

  @screen xl {
    background-position: left top;
    background-size: 22rem 10rem;
  }
}

.contentBg {
  background-image: url('/images/bestBroker/contentBg.png');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 100%;
}

.bestBrokerHeroBg {
  background-image: url('/images/bestBroker/heroImageMd.png');
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: right top;
  background-size: contain;

  @screen sm {
    background-image: url('/images/bestBroker/heroImageMobile.webp');
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @screen xl {
    background-image: url('/images/bestBroker/heroImageDesktop.png');
    background-position: 80% top;
    background-repeat: no-repeat;
  }
}
</style>
