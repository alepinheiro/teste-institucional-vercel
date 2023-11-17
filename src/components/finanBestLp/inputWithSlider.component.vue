<template>
  <div>
    <div class="bg-primary sm:bg-white/20 flex flex-col gap-6 sm:gap-3 md:gap-3 rounded-xl p-4">
      <label for="amountInput" class="text-xl text-white font-bold sm:text-center sm:text-md">
        Quanto custa o seu sonho?
      </label>
      <div class="flex flex-row gap-4">
        <input
          id="amountInput"
          ref="inputRef"
          v-model="inputValue"
          name="amountInput"
          type="text"
          class="rounded-md w-full px-4 sm:py-2"
          placeholder="R$ 250.000,00"
          @input="onInput"
        />
        <button class="bg-complementaryColor1 text-white px-4 py-2 rounded-md sm:hidden">
          Simular
        </button>
      </div>
      <input
        id="rangeSlider"
        v-model="numberValue"
        step="100"
        type="range"
        min="sliderProps.minimumValue"
        :max="sliderProps.maximumValue"
        class="slider"
        @input="setValue(numberValue)"
      />
      <button class="bg-complementaryColor1 text-white px-4 py-2 rounded-md hidden sm:block w-fit mx-auto">
          Simular
        </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import {
  CurrencyInputOptions,
  useCurrencyInput,
  //@ts-expect-error no types
} from 'vue-currency-input'

const props = defineProps({
  sliderProps: {
    type: Object as () => {
      minimumValue: number
      maximumValue: number
      defaultValue: number
    },
    required: true,
  },
})

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
const { inputRef, numberValue, setValue } = useCurrencyInput(options)

const inputValue = ref(props.sliderProps.defaultValue)
const sliderValue = ref(props.sliderProps.defaultValue)

const onInput = (event: Event) => {
  const { value } = event.target as HTMLInputElement

  if (value) {
    sliderValue.value = numberValue.value
  }
}
</script>
