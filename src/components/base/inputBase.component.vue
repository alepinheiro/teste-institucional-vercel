<template>
  <div>
    <div :class="{' titleInputsError': (error!==undefined && error!==''),'titleInputs':(!(error!==undefined && error!==''))}">
      <label :for="id">{{ label }}</label>
    </div>
    <input :id="id"
      :value="modelValue"
      @input="emitValue"
      :type="type"
      :placeholder="placeholder"
      :class="{'inputBaseError w-full':
        (error!==undefined && error!==''),
        'inputBase w-full':
        (!(error!==undefined && error!==''))}"  >
    <div class="textError px-2" v-if="error!==undefined && error!==''"> {{ error }} </div>
  </div>
  </template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'inputBase',
  props: {
    id: String,
    error: String,
    label: String,
    type: String,
    placeholder: String,
    modelValue: String,
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
