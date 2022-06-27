<template>
  <div class="">
    <div :class="{' titleInputsError': (error!==undefined && error!==''),'titleInputs':(!(error!==undefined && error!==''))}">
      <label :for="id">{{ label }}</label>
    </div>
    <select :id="id" :value="modelValue"
      @input="emitValue" :class="{'inputBaseError w-full':
        (error!==undefined && error!==''),
        'inputBase w-full':
        (!(error!==undefined && error!==''))}" >
      <option value=""> {{ placeholder }} </option>
      <option  v-for="i in options" :value="i.value"> {{i.text}} </option>
    </select>
    <div class="textError" v-if="error!==undefined && error!==''"> {{error}} </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'selectBase',
  props: {
    error: String,
    id: String,
    label: String,
    placeholder: String,
    modelValue: String,
    options: Array as () => Array<any>,
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
