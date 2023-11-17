<template>
  <div class="w-full">
    <form  class="w-full bg-white rounded-xl p-5 flex flex-col gap-2" @submit.prevent="onSubmit">
      <div class="flex flex-col">
        <label for="name">Nome Completo</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Digite seu nome completo"
          class="bg-zinc-200 rounded p-2 focus-within:shadow-md focus-within:outline-primary transition-all "
        />
      </div>
      <div class="flex flex-col">
        <label for="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Seu melhor e-mail"
          class="bg-zinc-200 rounded p-2 focus-within:shadow-md focus-within:outline-primary transition-all"
        />
      </div>
      <div v-if="showHomeEquity" class="flex flex-col">
        <label for="realtyValue">Quanto vale seu imóvel?</label>
        <input
          id="realtyValue"
          ref="realtyValue"
          name="realtyValue"
          type="text"
          placeholder="R$ 2500.000,00"
          class="bg-zinc-200 rounded p-2 focus-within:shadow-md focus-within:outline-primary transition-all"
        />
      </div>
      <div class="flex flex-row items-center gap-4">
        <label for="creditAmount">De quanto você precisa?</label>
        <input
          id="creditAmount"
          ref="creditAmount"
          name="creditAmount"
          type="text"
          placeholder="R$ 2500.000,00"
          class="bg-zinc-200 rounded p-2 flex-grow focus-within:shadow-md focus-within:outline-primary transition-all"
        />
      </div>
      <button class="bg-complementaryColor1 w-fit mx-auto px-3 py-2 rounded-md text-white font-bold md:mt-4">
        Iniciar simulação agora
      </button>
    </form>
  </div>
</template>
<script lang="ts" setup>
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

defineProps({
  showHomeEquity: {
    type: Boolean,
    required: true,
  },
})

const onSubmit = (event: Event) => {
  if(!event) return;
  if(!event.target) return;
  const formData = new FormData(event.target as HTMLFormElement);

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    realtyValue: formData.get('realtyValue'),
    creditAmount: formData.get('creditAmount'),
  }

  console.log(data)
}
</script>
