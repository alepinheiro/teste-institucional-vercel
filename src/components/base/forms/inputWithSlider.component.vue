<template>
  <form
    class="flex flex-col gap-6 sm:gap-3 md:gap-3 rounded-xl p-4"
    :class="[
      props.backgroundColor ? 'bgPropsColor' : 'bg-primary sm:bg-white/20',
    ]"
    @submit.prevent="onSubmit"
  >
    <label
      for="creditAmountWithSlider"
      class="text-xl text-inherit font-bold text-center sm:text-md"
      :class="{ 'text-white': props.backgroundColor === 'var(--primaryColor)' }"
    >
      {{ props.title }}
    </label>
    <div class="flex flex-row gap-2">
      <CurrencyInput
        :options="creditValue.options"
        v-model="creditValue.modelValue"
        name="creditAmountWithSlider"
        data-testid="creditAmountWithSlider"
        type="text"
        class="rounded-md w-full px-4 sm:py-2"
        :class="{ 'bg-[#EFEFEF]': props.backgroundColor === 'transparent' }"
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
        class="bg-primary font-bold text-white px-4 py-2 rounded-md sm:hidden hover:-translate-y-1 hover:shadow-md hover:shadow-black/50 transition-all active:scale-90"
      >
        Simular
      </button>
    </div>
    <input
      id="rangeSlider"
      v-model="creditValue.modelValue"
      name="rangeSlider"
      step="10000"
      type="range"
      aria-label="Deslize para alterar o valor"
      title="Faixa de valor"
      :min="props.minimumValue"
      :max="props.maximumValue"
      class="slider w-full accent-primary"
    />
    <button
      aria-label="Simular"
      title="simular"
      class="bg-primary text-white px-4 py-2 rounded-md hidden sm:block w-fit mx-auto font-bold"
    >
      Simular
    </button>
  </form>
</template>
<script setup lang="ts">
import CurrencyInput from '@/components/base/currencyInput.component.vue'
import { ref, computed } from 'vue'
import { type CurrencyInputOptions, CurrencyDisplay } from 'vue-currency-input'

const { props: sliderProps } = defineProps<{
  props: {
    minimumValue: number
    maximumValue: number
    defaultValue: number
    backgroundColor: string
    title: string
  }
}>()

const emit = defineEmits<{
  (e: 'submit', value: number): void
  (e: 'change', value: number): void
  (e: 'update:modelValue', value: number): void
}>()

const creditValue = ref<{
  modelValue: number
  options: CurrencyInputOptions
}>({
  modelValue: sliderProps.defaultValue,
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

const sliderValue = ref(sliderProps.defaultValue)
const bgColor = computed(() => sliderProps.backgroundColor)

const onInput = (event: Event) => {
  const { value } = event.target as HTMLInputElement

  if (value) {
    sliderValue.value = creditValue.value.modelValue
  }
}

const onSubmit = (event: Event) => {
  if (!event) return
  if (!event.target) return
  const formData = new FormData(event.target as HTMLFormElement)

  const data = {
    realtyValue: formData.get('realtyValue'),
    creditAmount: formData.get('creditAmountWithSlider'),
    rangeSlider: formData.get('rangeSlider'),
  }

  if (data.creditAmount) {
    const cleanedValue = data.creditAmount.toString().replace('R$', '').trim()
    const formattedValue = cleanedValue.replace(/\./g, '').replace(',', '.')
    const floatNumber = parseFloat(formattedValue)
    emit('submit', floatNumber)
  }
}
</script>
<style lang="scss">
.bgPropsColor {
  background-color: v-bind(bgColor);
}
</style>
