<template>
  <div
    class="flex flex-col justify-between transition-all"
    :class="{ 'optionsOpen mb-2': open }">
    <button
      class="flex items-center px-4 py-2 justify-between optionsHover"
      :class="{ 'text-primary font-bold': open }"
      @click="open = !open">
      {{ $props.title }}
      <ChevronDown
        class="w-4 h-4 transition ease-in-out"
        :class="[open ? 'rotate-180' : '']" />
    </button>
    <div
      class="px-4 overflow-hidden"
      :class="[open ? 'h-fit py-2 ml-2 ' : 'h-0']">
      <ul class="flex flex-col space-y-2">
        <li
          v-for="item of $props.items"
          :key="item.path"
          class="w-full flex flex-row justify-between items-center group">
          <RouterLink
            :to="{
              path: item.path,
              query: $route.query,
            }"
            class="hover:font-semibold hover:text-primary text-textPrimary py-1">
            {{ item.title }}
          </RouterLink>
          <ArrowRight
            class="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import ArrowRight from '@/assets/svg/faIcon/arrowRight.vue';
  import ChevronDown from '@/assets/svg/faIcon/chevronDown.vue';
  import { defineComponent, PropType } from 'vue';

  export default defineComponent({
    name: 'MenuMobileDropDown',
    components: { ArrowRight, ChevronDown },
    props: {
      title: {
        type: String,
        required: true,
      },
      items: {
        type: Array as PropType<
          Array<{
            path: string;
            title: string;
          }>
        >,
        required: true,
      },
    },
    data() {
      return {
        open: false,
      };
    },
  });
</script>
