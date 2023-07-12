<template>
  <section class="py-5">
    <div
      class="px-5 flex sm:flex-col flex-row items-center sm:gap-2 justify-between"
    >
      <router-link :to="'/' + $root.utms" class="block sm:w-5/12 mx-auto">
        <img
          :src="$options.imageConfig.logoSejabestWhite"
          alt="Logo SejaBest "
          title="SejaBest"
          class="w-40 sm:w-11/12 h-auto"
        />
      </router-link>
      <div class="text-center text-sm darkGreyText">
        <span class="block">© 2023 SejaBest Fintech de Crédito</span>
        <router-link :to="'/' + $root.utms" class="block greeYellowTextHover">
          <span> www.seja.best </span>
        </router-link>
      </div>
      <div class="flex flex-row mx-auto">
        <Component
          :is="item.component"
          v-for="item of icons"
          :key="item.id"
          :="item.props"
        />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, markRaw } from 'vue'
import YoutubeIcon from '@/components/imagesSVG/socialIcons/youtube.image.vue'
import LinkedinIcon from '@/components/imagesSVG/socialIcons/linkedin.image.vue'
import InstagramIcon from '@/components/imagesSVG/socialIcons/instagram.image.vue'
import FacebookIcon from '@/components/imagesSVG/socialIcons/facebook.image.vue'
import TelegramIcon from '@/components/imagesSVG/socialIcons/telegram.image.vue'

export default defineComponent({
  name: 'FooterSection',
  data() {
    return {
      icons: [
        {
          id: 'youtube',
          props: {
            customClass:
              'w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white greeYellowFillHover'
          },
          component: markRaw(YoutubeIcon)
        },
        {
          id: 'linkedin',
          props: {
            customClass:
              'w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white greeYellowFillHover'
          },
          component: markRaw(LinkedinIcon)
        },
        {
          id: 'instagram',
          props: {
            customClass:
              'w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white greeYellowFillHover'
          },
          component: markRaw(InstagramIcon)
        },
        {
          id: 'facebook',
          props: {
            customClass:
              'w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white greeYellowFillHover'
          },
          component: markRaw(FacebookIcon)
        },
        {
          id: 'telegram',
          props: {
            customClass:
              'w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white greeYellowFillHover'
          },
          component: markRaw(TelegramIcon)
        }
      ]
    }
  }
})
</script>
