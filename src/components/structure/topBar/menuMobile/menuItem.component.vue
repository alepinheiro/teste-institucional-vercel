<template>
  <Component
    :is="$props.routePath.startsWith('https') ? 'a' : 'RouterLink'"
    :href="$props.routePath.startsWith('https') ? $props.routePath : undefined"
    :to="{
      path: $props.routePath,
      query: $route.query,
    }"
    class="rounded-lg px-4 py-2 optionsHover flex flex-row items-center w-full justify-between group"
    @click="$emit('click')">
    {{ $props.label }}
    <Icon
      icon="fa-solid fa-arrow-right"
      class="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all" />
  </Component>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'MenuMobileItem',
    props: {
      routePath: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
    },
    emits: {
      click: () => true,
    },
    data() {
      return {};
    },
  });
</script>
