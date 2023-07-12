<template>
  <section class="border-b greeYellowBorder py-10">
    <div class="sm:px-5 max-w-7xl mx-auto">
      <button
        v-for="item of questions"
        :key="item.id"
        class="flex flex-col overflow-hidden border-b border-white/50 hover:greeYellowBorder"
        @click="item.isOpen = !item.isOpen"
      >
        <div class="text-left flex flex-row items-center darkGreyText group py-4 w-full">
          <span class="group-hover:greeYellowText transition-all flex-grow">
            {{ item.title }}
          </span>
          <span class=" fill-white border rounded-full border-white w-5 h-5 p-1 flex-shrink-0 group-hover:greeYellowFill group-hover:greeYellowBorder transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
          </span>
        </div>
        <div :class="[item.isOpen ? 'h-auto pb-5' : 'h-0']" class="text-left overflow-hidden transition-all">
          {{ item.text }}
        </div>
      </button>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FaqSection',
  props: {
    questions: {
      type: Array<{
        id: number
        text: string
        title: string
        isOpen: boolean
      }>,
      required: true
    }
  },
  data() {
    return {}
  }
})
</script>
