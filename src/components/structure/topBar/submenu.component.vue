<template>
  <div>
    <ul
      class="absolute group-hover:flex hidden top-8 left-0 w-80 bg-white border border-zinc-200 flex-col gap-3 p-4 rounded-md"
    >
      <li v-for="subMenuItem of subMenuItems" :key="subMenuItem.id">
        {{ subMenuItem.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type TopBarItemsInterface from '@/interfaces/structure/topBarItems.interface.ts'

defineProps({
  /**
   * Estrutura do sub menu
   */
  subMenuItems: {
    type: Object as () => TopBarItemsInterface[],
    default: () =>
      [
        {
          id: 'inicio',
          title: 'Início',
          icon: null,
          link: '/',
          target: '/',
          subMenu: null,
        },
      ] satisfies TopBarItemsInterface[],
  },
})
</script>
