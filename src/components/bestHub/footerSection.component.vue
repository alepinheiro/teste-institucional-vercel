<template>
  <section class="py-10">
    <div
      data-nosnippet
      class="px-5 flex sm:flex-col flex-row items-center sm:gap-2 justify-between">
      <RouterLink :to="'/' + $root.utms" class="block sm:w-5/12 mx-auto">
        <img
          :src="bextImages.whiteLogo.src"
          :alt="bextImages.whiteLogo.alt"
          class="w-40 sm:w-11/12 h-auto" />
      </RouterLink>
      <div class="text-center text-sm text-[#ABABAB]">
        <span class="block"
          >© {{ new Date().getFullYear() }} Bext Fintech</span
        >
        <RouterLink :to="'/' + $root.utms" class="block hover:text-[#D0FE42]">
          <span> www.bext.vc </span>
        </RouterLink>
      </div>
      <div class="flex flex-row mx-auto">
        <Component
          :is="item.component"
          v-for="item of icons"
          :key="item.id"
          :="item.props" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import FacebookIcon from '@/components/imagesSVG/socialIcons/facebook.image.vue';
  import InstagramIcon from '@/components/imagesSVG/socialIcons/instagram.image.vue';
  import LinkedinIcon from '@/components/imagesSVG/socialIcons/linkedin.image.vue';
  import TelegramIcon from '@/components/imagesSVG/socialIcons/telegram.image.vue';
  import YoutubeIcon from '@/components/imagesSVG/socialIcons/youtube.image.vue';
  import { bextImages } from '@/configurations/images';
  import { defineComponent, markRaw } from 'vue';

  export default defineComponent({
    name: 'FooterSection',
    data() {
      return {
        bextImages,
        icons: [
          {
            id: 'youtube',
            props: {
              customClass:
                'w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white greeYellowFillHover',
            },
            component: markRaw(YoutubeIcon),
          },
          {
            id: 'linkedin',
            props: {
              customClass:
                'w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white greeYellowFillHover',
            },
            component: markRaw(LinkedinIcon),
          },
          {
            id: 'instagram',
            props: {
              customClass:
                'w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white greeYellowFillHover',
            },
            component: markRaw(InstagramIcon),
          },
          {
            id: 'facebook',
            props: {
              customClass:
                'w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white greeYellowFillHover',
            },
            component: markRaw(FacebookIcon),
          },
          {
            id: 'telegram',
            props: {
              customClass:
                'w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-white greeYellowFillHover',
            },
            component: markRaw(TelegramIcon),
          },
        ],
      };
    },
  });
</script>
