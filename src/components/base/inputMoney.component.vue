<template> 
  <div>
    <div :class="{' titleInputsError': (error!==undefined && error!==''),'titleInputs':(!(error!==undefined && error!==''))}">
      <label :for="id">{{ label }}</label>
    </div>
    <input :id="id" ref="inputRef" type="text" :placeholder="placeholder"
      :class="{'inputBaseError w-full':
        (error!==undefined && error!==''),
        'inputBase w-full':
        (!(error!==undefined && error!==''))}"  >
    <div class="textError px-2" v-if="error!==undefined && error!==''"> {{ error }} </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCurrencyInput } from 'vue-currency-input'

export default defineComponent({
  name: 'inputMoney',
  props: {
    id: String,
    error: String,
    label: String,
    placeholder: String,
    modelValue: Number, 
  },
  setup(props) {
    const options = {
      currency: 'BRL' as string,
      currencyDisplay: 'narrowSymbol' as string,
      precision: 2 as Number,
      hideCurrencySymbolOnFocus: false as boolean,
      hideGroupingSeparatorOnFocus: false as boolean,
      hideNegligibleDecimalDigitsOnFocus: false as boolean,
      autoDecimalDigits: true as boolean,
      autoSign: true as boolean,
      useGrouping: true as boolean,
      accountingSign: false as boolean
    } as any

    const { inputRef } = useCurrencyInput(options)

    return { inputRef }
  }
})
</script>
