<template>
  <div
    id="bestBrokerLP"
    class="w-full text-white overflow-x-hidden font-Sizmo-Pro subpixel-antialiased"
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

import HeroSection from '@/components/bestBroker/heroSection.component.vue'
import ProductBox from '@/components/bestBroker/productBox.component.vue'
import ProfileSection from '@/components/bestBroker/profileSection.component.vue'
import ContentSection from '@/components/bestBroker/contentSection.component.vue'
import ToolsSection from '@/components/bestBroker/toolsSection.component.vue'
import TestimonialsSection from '@/components/bestBroker/testimonialsSection.component.vue'
import BestHub from '@/components/bestBroker/bestHub.component.vue'
import OfferSection from '@/components/bestBroker/offerSection.component.vue'
import FooterSection from '@/components/bestBroker/footerSection.component.vue'

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

#bestBrokerLP {
  @apply relative z-0;
  background-color: #0d0d0d;
  &:after {
    @apply absolute inset-0 -z-10 opacity-30;
    content: ' ';
    background-image: url('/images/bestBroker/bgBestBroker.png');
    background-repeat: repeat-y;
    background-size: 100%;
    @screen sm {
      background-size: 200%;
    }
  }
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
  background-image: url('/images/bestBroker/heroImageDesktop.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: right top;

  @screen sm {
    background-image: url('/images/bestBroker/heroImageMobile.png');
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @screen md {
    background-size: contain;
    background-position: 15rem 0;
  }

  @screen lg {
    background-position: 28rem 0;
    background-size: 80%;
  }

  @screen xl {
    background-image: none;
  }
}
</style>
