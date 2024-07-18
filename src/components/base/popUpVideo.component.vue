<template>
  <div>
    <div
      class="sm:h-full z-50 fixed sm:bottom-0 sm:inset-x-0 px-4 pb-4 flex items-center justify-center lg:inset-0 xl:inset-0 md:inset-0">
      <button class="fixed inset-0 transition-opacity" @click="close">
        <div class="absolute inset-0 bg-black opacity-75"></div>
      </button>

      <div
        class="w-full max-w-[56rem] sm:max-w-sm rounded-xl shadow-xl transform transition-all ml-auto mr-auto sm:w-full overflow-y-scroll h-full sm:h-full">
        <div class="w-full p-4">
          <div class="w-full p-4 text-right text-white">
            <button @click="close">
              <Xmark class="text-white w-5 h-5" />
            </button>
          </div>
          <VideoBase :url="videoUrl" :style="videoStyle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import VideoBase from '@/components/base/videoBase.component.vue';
  import Xmark from '@/assets/svg/faIcon/xmark.vue';

  export default defineComponent({
    name: 'PopUpVideo',
    components: { VideoBase, Xmark },
    props: {
      urlButton: {
        type: String,
        default: '',
      },
      videoUrl: {
        type: String,
        default: '',
      },
      videoStyle: {
        type: String,
        default: '',
      },
    },
    emits: ['confirmPopUp', 'closePopUp'],
    data() {
      return {};
    },
    methods: {
      confirm() {
        this.$emit('confirmPopUp', false);
      },
      close() {
        this.$emit('closePopUp', false);
      },
    },
  });
</script>
