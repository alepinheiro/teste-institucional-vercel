<template>
  <section class="border-b border-[#D0FE42] py-10">
    <div class="sm:px-5 w-10/12 sm:w-full max-w-7xl mx-auto">
      <button
        v-for="item of questions"
        :key="item.id"
        class="flex flex-col w-full overflow-hidden border-b border-white/50 hover:border-[#D0FE42]"
        @click="item.isOpen = !item.isOpen"
      >
        <div
          class="text-left flex flex-row gap-2 items-center darkGreyText group py-4 w-full"
        >
          <span
            :class="[item.isOpen ? 'text-[#D0FE42] ' : 'text-[#ABABAB]']"
            class="group-hover:text-[#D0FE42] transition-all flex-grow"
          >
            {{ item.title }}
          </span>
          <span
            :class="[
              item.isOpen
                ? 'fill-[#D0FE42] border-[#D0FE42]'
                : 'fill-white border-white',
            ]"
            class="border rounded-full w-5 h-5 p-1 flex-shrink-0 group-hover:fill-[#D0FE42] group-hover:border-[#D0FE42] transition-all"
          >
            <svg
              v-if="item.isOpen"
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              viewBox="0 0 448 512"
            >
              <path
                d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              viewBox="0 0 448 512"
            >
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
          </span>
        </div>
        <div
          :class="[item.isOpen ? 'h-auto py-5 border-t ' : 'h-0']"
          class="border-[#D0FE42] text-left overflow-hidden transition-all"
        >
          <!-- eslint-disable-next-line vue/no-v-html -->
          <p v-html="item.text"></p>
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
      required: true,
    },
  },
  data() {
    return {}
  },
})
</script>
