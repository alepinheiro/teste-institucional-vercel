<template>
  <form onsubmit.prevent="submitForm()">
    <div class="flex flex-col gap-5">
      <div class="flex flex-col">
        <label for="assetValue">Quanto vale seu imóvel?</label>
        <input
          id="assetValue"
          name="assetValue"
          type="text"
          placeholder="R$ 35.000,00"
          v-model="model.assetValue"
        />
      </div>

      <div class="flex flex-col">
        <label for="creditValue">De quanto você precisa?</label>
        <input
          id="creditValue"
          name="creditValue"
          type="text"
          placeholder="R$ 35.000,00"
          v-model="model.assetValue"
        />
      </div>
    </div>
  </form>
</template>
<script setup lang="ts">

const model = defineModel<{
  assetValue: number
  creditValue: number
}>({
  required: true,
})

const submitForm = () => {
  console.log('submit')
}
</script>
