<template>
  <div class="w-full">
    <form
      class="w-full bg-white sm:bg-transparent rounded-xl p-5 flex flex-col gap-5"
      @submit.prevent="onSubmit"
    >
      <div class="flex flex-col gap-2">
        <label for="name" class="sm:text-white">Nome Completo</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Digite seu nome completo"
          required
          class="bg-zinc-200 rounded p-2 focus-within:shadow-md transition-all ring-0 focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:outline-none"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="email" class="sm:text-white">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Seu melhor e-mail"
          required
          class="bg-zinc-200 rounded p-2 focus-within:shadow-md transition-all ring-0 focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:outline-none"
        />
      </div>
      <div v-if="showHomeEquity" class="flex flex-col gap-2">
        <label for="realtyValue" class="sm:text-white">
          Quanto vale seu imóvel?
        </label>
        <input
          id="realtyValue"
          ref="realtyValue"
          name="realtyValue"
          type="text"
          :required="showHomeEquity"
          class="bg-zinc-200 rounded p-2 focus-within:shadow-md transition-all ring-0 focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:outline-none"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="creditAmount" class="sm:text-white">
          De quanto você precisa?
        </label>
        <input
          id="creditAmount"
          ref="creditAmount"
          name="creditAmount"
          type="text"
          placeholder="R$ 250.000,00"
          required
          class="bg-zinc-200 rounded p-2 focus-within:shadow-md transition-all ring-0 focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:outline-none"
        />
      </div>
      <button
        title="Iniciar simulação agora"
        aria-label="Iniciar simulação agora"
        class="bg-complementaryColor1 w-fit mx-auto px-3 py-2 rounded-md text-white font-bold mt-4 hover:-translate-y-1 hover:shadow-md hover:shadow-black/50 transition-all active:scale-90"
      >
        Iniciar simulação agora
      </button>
    </form>
  </div>
</template>
<script lang="ts" setup>
import information from '@/configurations/information'
import { useRoute } from 'vue-router'
import {
  CurrencyInputOptions,
  useCurrencyInput,
  //@ts-expect-error no types
} from 'vue-currency-input'

const options: CurrencyInputOptions = {
  currency: 'BRL',
  currencyDisplay: 'narrowSymbol',
  precision: 2,
  hideCurrencySymbolOnFocus: false,
  hideGroupingSeparatorOnFocus: false,
  hideNegligibleDecimalDigitsOnFocus: false,
  autoDecimalDigits: true,
  autoSign: true,
  useGrouping: true,
  accountingSign: false,
}
const { inputRef: realtyValue } = useCurrencyInput(options)
const { inputRef: creditAmount } = useCurrencyInput(options)

const { fullPath } = useRoute()

defineProps({
  showHomeEquity: {
    type: Boolean,
    required: true,
  },
})

const onSubmit = (event: Event) => {
  if (!event) return
  if (!event.target) return
  const formData = new FormData(event.target as HTMLFormElement)

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    realtyValue: formData.get('realtyValue'),
    creditAmount: formData.get('creditAmount'),
    rangeSlider: '',
  }

  if (data.creditAmount) {
    const cleanedValue = data.creditAmount.toString().replace('R$', '').trim()
    const formattedValue = cleanedValue.replace(/\./g, '').replace(',', '.')
    const floatNumber = parseFloat(formattedValue)
    data.creditAmount = `${floatNumber}`
  }

  localStorage.setItem('simulationData', JSON.stringify(data))
  window.fbq('track', 'ViewContent', { eventID: new Date().toISOString() })
  window.open(
    `${information.appSimulator}?${fullPath.split('?')[1]}&creditAmount=${
      data.creditAmount
    }`,
    '_blank',
  )
}
</script>
