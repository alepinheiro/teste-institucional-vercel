<template>
  <form @submit.prevent="onSubmitForm">
    <div class="flex flex-col gap-5 ">
      

      <div class="flex flex-col gap-2 text-center pb-4 sm:py-2">
        <label for="creditValue" class="text-xl sm:text-base w-10/12 mx-auto">
          De quanto você precisa?
        </label>
        <CurrencyInput
          :options="creditValue.options"
          id="creditValue"
          name="creditValue"
          placeholder="R$ 35.000,00"
          v-model="model.creditValue"
          class="bg-transparent border-b text-3xl sm:text-xl text-textPrimary text-center border-gray-300 py-2 px-4 focus-visible:outline-none focus-within:border-primary w-10/12  mx-auto"
        />
      </div>

      <button
        type="submit"
        class="text-white mb-4 sm:mb-2 sm:px-6 font-bold bg-complementaryColor1 rounded-lg w-fit px-4 py-3 mx-auto hover:scale-105 shadow hover:shadow-black/10 hover:shadow-lg transition"
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

const emit = defineEmits<{
  submit: [value: typeof model.value]
}>()

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

const onSubmitForm = () => {
  emit('submit', model.value)
}
</script>
