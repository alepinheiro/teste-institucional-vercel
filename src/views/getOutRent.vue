<template>
  <div class="flex flex-col w-full bg-bgDarkColor2 h-fit overflow-hidden">

    <BannerXoAluguel @open-pop-up="showVideo = $event" />
    <BannerPackage @open-pop-up="showVideo = $event" />
    <BannerSteps />
    <BannerCommentsCarousel />
    <BannerPrice />
    <FooterSection />
    <PopUpVideo
      v-if="showVideo"
      :video-url="videoUrl"
      :video-style="videoStyle"
      @close-pop-up="showVideo = false"
    />

  </div>
</template>

<script lang="ts">
import BannerCommentsCarousel from '@/components/getOutRent/bannerCommentsCarousel.component.vue'
import BannerPackage from '@/components/getOutRent/bannerPackage.component.vue'
import BannerPrice from '@/components/getOutRent/bannerPrice.component.vue'
import BannerSteps from '@/components/getOutRent/bannerSteps.component.vue'
import BannerXoAluguel from '@/components/getOutRent/bannerXoAluguel.component.vue'
import FooterSection from '@/components/getOutRent/footerSection.component.vue'
import PopUpVideo from '@/components/base/popUpVideo.component.vue'
import { defineComponent } from 'vue'

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
    BannerCommentsCarousel,
    BannerPackage,
    BannerPrice,
    BannerSteps,
    BannerXoAluguel,
    FooterSection,
    PopUpVideo,
  },
  metaInfo() {
    return {
      title: 'Xô, Aluguel!',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content:
            'O método best para conquistar seu primeiro imóvel com financiamento imobiliário',
        },
      ],
    }
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
})
</script>

