<template>
  <div class="mb-4 bg-bgDefaultColor rounded-2xl">
    <div class=" header">
      <div>
        <div
          :class="{'bg-primary text-white rounded-t-2xl':(show==true),
        'bg-bgDefaultColor text-primary rounded-2xl':(show==false)}"
          style="cursor: pointer; display: flex; font-size: 16px;" class="justify-between p-6 "
          @click="showAnswer()"
        >
          <div class=" text-lg  pr-2">{{ title }}</div>
          <div class="mt-auto mb-auto text-xl">
           
            <i v-if="!show" class="ti ti-angle-right" ></i>
            <i v-if="show" class="ti ti-angle-down" ></i>
          </div>
        </div>
      </div>
      <div v-if="show" class=" flex flex-wrap-reverse">
        <div class="w-1/2 sm:w-full mb-auto mt-auto p-6">
          <p class="sm:text-sm italic text-textPrimary">
            {{ text }}
          </p>
          <p v-if="textAux!==undefined && textAux!==null" class="sm:text-sm italic text-textPrimary">
            {{ textAux }}
          </p>
        </div>
        <div class="w-1/2 sm:w-full">
          <videoBase :url="videoUrl" :style="videoStyle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'questions',
  props: {
      title: String,
      text: String,
      textAux: String,
      videoUrl: String,
      videoStyle: String,
    },
  data() {
    return {
      show: false
    }
  },
  methods: {
    showAnswer() {
      this.show = !this.show
    }
  }
});

</script>