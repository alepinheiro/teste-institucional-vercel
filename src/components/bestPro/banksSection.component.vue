<template>
  <section class="py-10">
    <div class="flex flex-col w-full items-center">
      <h2>As melhores instituições financeiras na palma da sua mão</h2>
      <div class="flex flex-col gap-5 w-full max-w-md">
        <div
          v-for="line in banks"
          :key="line.toString()"
          class="flex flex-row gap-2 odd:ml-auto"
        >
          <span
            v-for="{ id, text } of line"
            :key="id"
            :class="
              text === 'hiddenText'
                ? 'text-white/0 select-none bg-gradient-to-r odd:first:bg-gradient-to-l from-white/10 to-transparent'
                : 'bg-white/10'
            "
            class="rounded-xl px-3 py-2 w-fit"
          >
            {{ text }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BanksSection',
  data() {
    return {
      banks: [
        [
          {
            id: 1,
            text: 'daycoval',
          },
          {
            id: 2,
            text: 'santander',
          },
          {
            id: 3,
            text: 'hiddenText',
          },
        ],
        [
          {
            id: 4,
            text: 'hiddenText',
          },
          {
            id: 5,
            text: 'creditas',
          },
          {
            id: 6,
            text: 'cashme',
          },
        ],
        [
          {
            id: 7,
            text: 'inter',
          },
          {
            id: 8,
            text: 'caixa',
          },
          {
            id: 9,
            text: 'itau',
          },
          {
            id: 10,
            text: 'hiddenText',
          },
        ],
        [
          {
            id: 11,
            text: 'hiddenText',
          },
          {
            id: 12,
            text: 'bradesco',
          },
          {
            id: 13,
            text: 'c6Bank',
          },
        ],
      ],
    }
  },
})
</script>
