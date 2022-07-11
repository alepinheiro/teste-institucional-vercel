<template>
  <div class="mb-2 bg-bgDark rounded-xl">
    <div class="p-4 sm:p-2 header">
      <div>
        <div
          style="cursor: pointer; display: flex; font-size: 16px;" class="justify-between"
          @click="showAnswer()"
        >
          <div class="font-semibold text-textPrimary text-lg sm:text-sm pr-2">{{ title }}</div>
          <div class="mt-auto mb-auto">
            <i v-if="show">
              <svg
                class="sm:w-4 fill-textPrimary" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="24" height="24"
                viewBox="0 0 172 172"
                
              >
                <g
                  fill="none" fill-rule="none" stroke="none" stroke-width="1"
                  stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                  stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
                  font-size="none" text-anchor="none" style="mix-blend-mode: normal"
                >
                    <path d="M0,172v-172h172v172z" fill="none" fill-rule="nonzero" />
                    <g fill="var(--textPrimaryColor)" fill-rule="evenodd">
                      <path d="M14.33333,78.83333v14.33333h143.33333v-14.33333z" />
                    </g>
                </g>
              </svg>
            </i>
            <i v-if="!show">
              <svg
                class="sm:w-4 fill-textPrimary" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="24" height="24"
                viewBox="0 0 172 172"
              >
                <g
                  fill="none" fill-rule="none" stroke="none" stroke-width="1"
                  stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                  stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                  font-weight="none" font-size="none" text-anchor="none"
                  style="mix-blend-mode: normal"
                >
                  <path d="M0,172v-172h172v172z" fill="none" fill-rule="nonzero" />
                  <g fill="var(--textPrimaryColor)" fill-rule="evenodd">
                    <path d="M78.83333,14.33333v64.5h-64.5v14.33333h64.5v64.5h14.33333v-64.5h64.5v-14.33333h-64.5v-64.5z" />
                  </g>
                </g>
              </svg>
            </i>
          </div>
        </div>
      </div>
      <div v-if="show" class="p-4">
        <p class="sm:text-sm italic text-textPrimary">
          {{ text }}
        </p>
        <p v-if="textAux!==undefined && textAux!==null" class="sm:text-sm italic text-textPrimary">
          {{ textAux }}
        </p>
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