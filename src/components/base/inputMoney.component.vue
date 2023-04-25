<template>
  <div>
    <div
      :class="{ ' titleInputsError': (error !== undefined && error !== ''), 'titleInputs': (!(error !== undefined && error !== '')) }">
      <label :for="id">{{ label }}</label>
    </div>
    <input 
      :id="id" ref="inputRef" type="text" :placeholder="placeholder" :class="{
      'inputBaseError w-full':
        (error !== undefined && error !== ''),
      'inputBase w-full':
        (!(error !== undefined && error !== ''))
    }">
    <div v-if="error !== undefined && error !== ''" class="textError px-2" > {{ error }} </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CurrencyDisplay, CurrencyInputOptions, useCurrencyInput } from 'vue-currency-input'

export default defineComponent({
  name: 'InputMoney',
  props: {
    id: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Number,
      default: 0
    },
  },
  setup() {
    const options: CurrencyInputOptions = {
      currency: 'BRL' as string,
      currencyDisplay: 'narrowSymbol' as CurrencyDisplay,
      precision: 2 as number,
      hideCurrencySymbolOnFocus: false as boolean,
      hideGroupingSeparatorOnFocus: false as boolean,
      hideNegligibleDecimalDigitsOnFocus: false as boolean,
      autoDecimalDigits: true as boolean,
      autoSign: true as boolean,
      useGrouping: true as boolean,
      accountingSign: false as boolean
    } 

    const { inputRef } = useCurrencyInput(options)

    return { inputRef }
  }
})
</script>
