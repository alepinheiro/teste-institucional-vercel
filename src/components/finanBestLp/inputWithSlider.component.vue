<template>
  <div>
    <div class="bg-primary flex flex-col gap-6 md:gap-3 rounded-xl p-4">
      <label for="amountInput" class="text-xl text-white font-bold">
        Quanto custa o seu sonho?
      </label>
      <div class="flex flex-row gap-4">
        <input
          id="amountInput"
          v-model="currencyValue"
          name="amountInput"
          type="text"
          class="rounded-md w-full px-4"
          placeholder="R$ 250.000,00"
          @change="changeInputValue"
        />
        <button class="bg-complementaryColor1 text-white px-4 py-2 rounded-md">
          Simular
        </button>
      </div>
      <input
        id="rangeSlider"
        v-model="sliderValue"
        step="1"
        type="range"
        min="sliderProps.minimumValue"
        :max="sliderProps.maximumValue"
        class="slider"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

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

const sliderValue = ref(props.sliderProps.defaultValue)

const currencyValue = computed(() => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return formatter.format(sliderValue.value)
})

const changeInputValue = (event: Event) => {
  const { value } = event.target as HTMLInputElement
  if (value) {
    sliderValue.value = parseInt(value)
  }
}
</script>
