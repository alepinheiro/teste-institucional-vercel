<template>
  <div class="w-full bg-bgDarkColor2">
    <BannerXoAluguel />
    <BannerPackage @OpenPopUp="showVideo = $event" />
    <BannerSteps />
    <BannerPrice />
    <Footer />
    <PopUpVideo
      v-if="showVideo"
      :videoUrl="videoUrl"
      :videoStyle="videoStyle"
      @closePopUp="showVideo = false" />
  </div>
</template>
  
<script lang="ts">
import { defineComponent} from 'vue'
import BannerXoAluguel from '@/components/getOutRent/bannerXoAluguel.component.vue'
import BannerPackage from '@/components/getOutRent/bannerPackage.component.vue'
import BannerSteps from '@/components/getOutRent/bannerSteps.component.vue'
import BannerPrice from '@/components/getOutRent/bannerPrice.component.vue'
import Footer from '@/components/getOutRent/footer.component.vue'
import PopUpVideo from "@/components/base/popUpVideo.component.vue"

export default defineComponent({
  name: 'GetOutRent',
  components: {
    BannerXoAluguel,
    BannerPackage,
    BannerSteps,
    BannerPrice,
    PopUpVideo,
    Footer
  },
  metaInfo() {
    return {
      title: "Conheça o FinanBest. O Financiamento Imobiliário da SejaBest.",
      meta: [
        { vmid: 'description', name: 'description', content: "Financie seu imóvel com as melhores condições do mercado. Tudo de forma online, digital, transparente e com o auxílio do nosso time de especialistas!" }
      ]
    }
  },
  data() {
    return {
      isVisible: false,
      value: 300000,
      showVideo: false,
      videoStyle: "w-full h-[36rem] mr-auto ml-auto rounded-2xl ",
      videoUrl: "https://www.youtube.com/embed/XgvSqZf8PM0",
    }
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