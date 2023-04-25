<template>
  <div>
    <div
      :class="{ ' titleInputsError': (error !== undefined && error !== ''), 
      'titleInputs': (!(error !== undefined && error !== '')) }">
      <label :for="id">{{ label }}</label>
    </div>
    <input 
      :id="id" :value="modelValue" :type="type" :placeholder="placeholder" :class="{
      'inputBaseError w-full':
        (error !== undefined && error !== ''),
      'inputBase w-full':
        (!(error !== undefined && error !== ''))
    }" @input="emitValue">
    <div v-if="error !== undefined && error !== ''" class="textError px-2"> {{ error }} </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputBase',
  props: {
    id: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
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
  },
  emits: ['update:modelValue'],
  data() {
    return {
    }
  },
  methods: {
    emitValue(e: any) {
      this.$emit('update:modelValue', e.target.value)
    }
  },
})
</script>
