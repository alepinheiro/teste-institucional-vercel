<template>
  <form onsubmit.prevent="submitForm()">
    <div class="flex flex-col gap-5">
      <div class="flex flex-col">
        <label for="assetValue" class="font-bold"
          >Quanto vale seu imóvel?</label
        >
        <CurrencyInput
          :options="creditValue.options"
          id="assetValue"
          name="assetValue"
          type="text"
          placeholder="R$ 35.000,00"
          v-model="model.assetValue"
          class="bg-transparent border-b border-black py-2 px-4"
        />
      </div>

      <div class="flex flex-col">
        <label for="creditValue" class="font-bold"
          >De quanto você precisa?</label
        >
        <CurrencyInput
          :options="creditValue.options"
          id="creditValue"
          name="creditValue"
          placeholder="R$ 35.000,00"
          v-model="creditValue.modelValue"
          class="bg-transparent border-b border-black py-2 px-4"
        />
      </div>

      <div>
        <input
          :value="creditValue.modelValue"
          type="range"
          step="10"
          min="150000"
          max="10000000"
          @change="onSlide"
          class="accent-primary w-full"
        />
      </div>

      <button
        type="submit"
        class="text-white bg-complementaryColor1 rounded w-fit px-4 py-2 mx-auto"
      >
        Simular de graça
      </button>
    </div>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { type CurrencyInputOptions, CurrencyDisplay } from 'vue-currency-input'
import CurrencyInput from '@/components/base/currencyInput.component.vue'

const model = defineModel<{
  assetValue: number
  creditValue: number
}>({
  required: true,
})

const creditValue = ref<{
  modelValue: number
  options: CurrencyInputOptions
}>({
  modelValue: model.value.creditValue,
  options: {
    currency: 'BRL',
    currencyDisplay: CurrencyDisplay.narrowSymbol,
    precision: 2,
    hideCurrencySymbolOnFocus: false,
    hideGroupingSeparatorOnFocus: false,
    hideNegligibleDecimalDigitsOnFocus: false,
    autoDecimalDigits: true,
    useGrouping: true,
    accountingSign: false,
  },
})

const onSlide = (event: Event) => {
  const { value } = event.target as HTMLInputElement
  console.log(value)
  creditValue.value.modelValue = Number(value)
}

const submitForm = () => {
  console.log('submit')
}
</script>
