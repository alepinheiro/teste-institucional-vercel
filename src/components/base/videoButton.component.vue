<template>
  <div class="relative w-16 mx-auto my-10 transition-all z-0">
    <Teleport to="body">
      <Overlay
        v-if="showVideo"
        :video-id="videoId"
        @closeOverlay="showVideo = false"
      />
    </Teleport>
    <PlayButton
      class="absolute h-16 top-0 -z-10 inset-x-0"
      @click="showVideo = true"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PlayButton from '@/components/base/buttons/playVideo.component.vue'
import Overlay from '@/components/base/overlays/youtubeVideo.component.vue'

export default defineComponent({
  name: 'VideoButton',
  components: { PlayButton, Overlay },
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
})
</script>
