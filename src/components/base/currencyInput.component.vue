<template>
  <input ref="inputRef" type="text" />
</template>
<script lang="ts" setup>
import { type CurrencyInputOptions, useCurrencyInput } from 'vue-currency-input'
import { watch } from 'vue'

defineEmits(['change'])
const props = defineProps<{
  options: CurrencyInputOptions
}>()

const { inputRef, setValue } = useCurrencyInput(props.options)
const modelValue = defineModel<number>({
  required: true,
})

watch(
  () => modelValue.value,
  (value) => {
    setValue(value)
  },
)
</script>
