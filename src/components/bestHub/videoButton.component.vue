<template>
  <div class="relative w-16 mx-auto py-10 transition-all">
    <div v-if="showVideo" class="fixed text-white inset-0 bg-black/80" @click="handleOverlay">
    </div>
    <dialog
      :open="showVideo"
      class="fixed inset-0 z-[100] bg-black bestHubDialogBox"
    >

      <div class="relative shadow-lg flex justify-center items-center">
        <button
          class="absolute -top-4 -right-4 text-white/30 hover:text-white transition-all"
          @click="handleOverlay"
        >
          <i class="fa-regular fa-circle-xmark"></i>
        </button>
        <iframe
          class="bh-videoPlayer rounded-2xl overflow-hidden bg-transparent"
          :src="`https://www.youtube.com/embed/${videoId}`"
          title="Financiamento imobiliário: Vale a pena fazer agora?"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </dialog>
    <div class="absolute h-full top-0 -z-10">
      <div
        class="w-16 h-16 bg-white/30 rounded-full absolute my-auto inset-0 animate-ping"
      ></div>
    </div>
    <button class="h-full w-16" @click="handleOverlay">
      <img
        class="w-16"
        src="/images/bestHub/icons/playButton.svg"
        alt=""
        srcset=""
      />
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VideoButton',
  props: {
    videoId: {
      type: String,
      required: true,
    }
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
