<template>
  <article class="mb-4 bg-bgDefaultColor rounded-2xl">
    <div class="header">
      <div>
        <div
          :class="{
            'bg-primary text-white rounded-t-2xl': (show == true),
            'bg-bgDefaultColor text-primary rounded-2xl': (show == false)
          }"
          style="cursor: pointer; display: flex; font-size: 16px;"
          class="justify-between p-6 sm:p-4"
          @click="showAnswer()">
          <h1 class=" text-xl font-semibold pr-2 sm:pr-1 sm:text-xs">
            {{ title }}
          </h1>
          <div class="mt-auto mb-auto text-xl sm:text-xs ">
            <i class="ti" :class="[show ? 'ti-angle-down' : 'ti-angle-right']"></i>
          </div>
        </div>
      </div>
      <div v-show="show" class="flex flex-wrap-reverse">
        <div class="w-1/2 sm:w-full mb-auto mt-auto p-6">
          <p class="sm:text-sm italic text-textPrimary">
            {{ text }}
          </p>
          <p v-if="textAux !== undefined && textAux !== null" class="sm:text-sm italic text-textPrimary">
            {{ textAux }}
          </p>
        </div>
        <div v-if="withVideo" class="w-1/2 sm:w-full">
          <videoBase :url="videoUrl" :style="videoStyle" />
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Questions',
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    textAux: {
      type: String || null,
      default: null
    },
    videoUrl: {
      type: String,
      default: ''
    },
    videoStyle: {
      type: String,
      default: ''
    },
    withVideo: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    showAnswer() {
      this.show = !this.show
    }
  }
});

</script>