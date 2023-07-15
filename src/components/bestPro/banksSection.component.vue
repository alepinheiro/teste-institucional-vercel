<template>
  <section class="py-10">
    <div class="flex flex-col gap-8 w-full items-center">
      <h2>As melhores instituições financeiras na palma da sua mão</h2>
      <div class="flex flex-col gap-5 w-full max-w-[29rem]">
        <div
          v-for="line in banks"
          :key="line.toString()"
          class="flex flex-row gap-2 odd:ml-auto"
        >
          <span
            v-for="{ id, text, logo } of line"
            :key="id"
            :class="
              text === 'hiddenText'
                ? 'text-white/0 select-none bg-gradient-to-r odd:first:bg-gradient-to-l from-white/10 to-transparent max-w-[2.5rem]'
                : 'bg-white/10 min-w-[4rem]'
            "
            class="rounded-xl px-3 min-h-[3rem] flex "
          >
            <img :src="`/images/bestPro/icons/banks/${logo}.svg`" :alt="text"  class="my-auto mx-auto h-10 py-2">
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
            id: 14,
            text: 'hiddenText',
            logo: 'blank'
          },
          {
            id: 1,
            text: 'daycoval',
            logo: 'logoDaycovalWhite'
          },
          {
            id: 2,
            text: 'santander',
            logo: 'logoSantanderWhite'
          },
          {
            id: 3,
            text: 'hiddenText',
            logo: 'blank'
          },
        ],
        [
          {
            id: 4,
            text: 'hiddenText',
            logo: 'blank'
          },
          {
            id: 5,
            text: 'creditas',
            logo: 'logoCreditasWhite'
          },
          {
            id: 6,
            text: 'cashme',
            logo: 'logoCashMeWhite'
          },
          {
            id: 15,
            text: 'hiddenText',
            logo: 'blank'
          },
        ],
        [
        {
            id: 16,
            text: 'hiddenText',
            logo: 'blank'
          },
          {
            id: 7,
            text: 'inter',
            logo: 'logoInterWhite'
          },
          {
            id: 8,
            text: 'caixa',
            logo: 'logoCaixaWhite'
          },
          {
            id: 9,
            text: 'itau',
            logo: 'logoItauWhite'
          },
          {
            id: 10,
            text: 'hiddenText',
            logo: 'blank'
          },
        ],
        [
          {
            id: 11,
            text: 'hiddenText',
            logo: 'blank'
          },
          {
            id: 12,
            text: 'bradesco',
            logo: 'logoBradescoWhite'
          },
          {
            id: 13,
            text: 'c6Bank',
            logo: 'logoC6BankWhite'
          },
          {
            id: 17,
            text: 'hiddenText',
            logo: 'blank'
          },
        ],
      ],
    }
  },
})
</script>
