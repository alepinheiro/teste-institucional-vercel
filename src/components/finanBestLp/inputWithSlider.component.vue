<template>
  <div>
    <form
      class="flex flex-col gap-6 sm:gap-3 md:gap-3 rounded-xl p-4"
      :class="[
        props.backgroundColor ? 'bgPropsColor' : 'bg-primary sm:bg-white/20',
      ]"
      @submit.prevent="onSubmit"
    >
      <label
        for="creditAmountWithSlider"
        class="text-xl text-white font-bold text-center sm:text-md"
      >
        {{ props.title }}
      </label>
      <div class="flex flex-row gap-2">
        <input
          id="creditAmountWithSlider"
          ref="inputRef"
          v-model="inputValue"
          name="creditAmountWithSlider"
          type="text"
          class="rounded-md w-full px-4 sm:py-2"
          :placeholder="
            props.defaultValue.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          "
          required
          @input="onInput"
        />
        <button
          aria-label="Simular"
          title="simular"
          class="bg-complementaryColor1 text-black px-4 py-2 rounded-md sm:hidden"
        >
          Simular
        </button>
      </div>
      <input
        id="rangeSlider"
        v-model="numberValue"
        name="rangeSlider"
        step="10000"
        type="range"
        aria-label="Deslize para alterar o valor"
        title="Faixa de valor"
        :min="props.minimumValue"
        :max="props.maximumValue"
        class="slider"
        @input="setValue(numberValue)"
      />
      <button
        aria-label="Simular"
        title="simular"
        class="bg-complementaryColor1 text-black px-4 py-2 rounded-md hidden sm:block w-fit mx-auto"
      >
        Simular
      </button>
    </form>
  </div>
</template>
<script setup lang="ts">
import information from '@/configurations/information'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  CurrencyInputOptions,
  useCurrencyInput,
  //@ts-expect-error no types
} from 'vue-currency-input'

const { fullPath } = useRoute()
const { props: sliderProps } = defineProps<{
  /**
   * Propriedades do componente
   */
  props: {
    /**
     * Valor mínimo do slider
     */
    minimumValue: number
    /**
     * Valor máximo do slider
     */
    maximumValue: number
    defaultValue: number
    backgroundColor: string
    title: string
  }
}>()

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
const inputValue = ref(sliderProps.defaultValue)
const sliderValue = ref(sliderProps.defaultValue)
const bgColor = sliderProps.backgroundColor

const onInput = (event: Event) => {
  const { value } = event.target as HTMLInputElement

  if (value) {
    sliderValue.value = numberValue.value
  }
}

const onSubmit = (event: Event) => {
  if (!event) return
  if (!event.target) return
  const formData = new FormData(event.target as HTMLFormElement)

  const data = {
    name: '',
    email: '',
    realtyValue: formData.get('realtyValue'),
    creditAmount: formData.get('creditAmountWithSlider'),
    rangeSlider: formData.get('rangeSlider'),
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
<style lang="scss">
.bgPropsColor {
  background-color: v-bind(bgColor);
}
</style>
