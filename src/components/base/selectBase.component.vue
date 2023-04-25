<template>
  <div class="">
    <div
      :class="{ ' titleInputsError': (error !== undefined && error !== ''), 'titleInputs': (!(error !== undefined && error !== '')) }">
      <label :for="id">{{ label }}</label>
    </div>
    <select
      :id="id" :value="modelValue" :class="{
      'inputBaseError w-full':
        (error !== undefined && error !== ''),
      'inputBase w-full':
        (!(error !== undefined && error !== ''))
      }" @input="emitValue">
      <option value=""> {{ placeholder }} </option>
      <option v-for="i in options" :key="i.value" :value="i.value" > {{ i.text }} </option>
    </select>
    <div v-if="error !== undefined && error !== ''" class="textError"> {{ error }} </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SelectBase',
  props: {
    error: {
      type: String,
      default: ''
    },
    id: {
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
      type: String,
      default: ''
    },
    options: {
      type: Array as () => Array<{
        value: string,
        text: string
      }>,
      default: () => []
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
    }
  },
  methods: {
    emitValue(e: Event) {
      const element = e.target as HTMLSelectElement
      if(element){
        this.$emit('update:modelValue', element.value )
      }
    }
  },
})
</script>
