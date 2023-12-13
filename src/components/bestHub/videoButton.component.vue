<template>
  <div class="relative w-16 mx-auto my-10 transition-all z-50">
    <button
      v-if="showVideo"
      title="Overlay"
      aria-label="Fechar vídeo"
      class="fixed text-white inset-0 bg-black/80 content-[''] w-full"
      @click="handleOverlay"
    ></button>
    <dialog
      :open="showVideo"
      class="fixed inset-0 z-[200] bg-black bestHubDialogBox rounded-2xl"
    >
      <div class="relative shadow-lg flex justify-center items-center">
        <button
          title="Fechar vídeo"
          aria-label="Fechar vídeo"
          class="absolute -top-4 -right-4 text-white/30 hover:text-white transition-all"
          @click="handleOverlay"
        >
          <i class="fa-regular fa-circle-xmark"></i>
        </button>
        <iframe
          :key="`${showVideo}`"
          class="bh-videoPlayer rounded-2xl overflow-hidden bg-transparent"
          :src="`https://www.youtube.com/embed/${videoId}`"
          title="Financiamento imobiliário: Vale a pena fazer agora?"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </dialog>
    <PlayVideo class="absolute h-16 top-0 -z-10 inset-x-0 " @click="handleOverlay" />

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PlayVideo from '@/components/base/buttons/playVideo.component.vue'

export default defineComponent({
  name: 'VideoButton',
  components: { PlayVideo },
  props: {
    videoId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showVideo: false,
    }
  },
  methods: {
    handleOverlay() {
      this.showVideo = !this.showVideo
    },
  },
})
</script>
<style lang="scss">
.overlay {
  &::after {
    @apply absolute inset-0 bg-black/60 z-10 blur-lg;
    content: ' ';
  }
}

.bh-videoPlayer {
  @apply aspect-video;

  @screen sm {
    width: 80vw;
  }

  @screen md {
    width: 75vw;
  }

  width: 50vw;
  height: auto;
}
</style>
