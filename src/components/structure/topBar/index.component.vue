<template>
  <div class="flex flex-row w-full justify-between items-center bg-zinc-200">
    <div>
      <img :src="logo.source" :alt="logo.alt" srcset="" />
    </div>
    <nav>
      <ul class="flex flex-row gap-4">
        <li
          v-for="menuItem of menuItems"
          :key="menuItem.id"
          class="relative group"
        >
          <router-link :to="menuItem.link">
            {{ menuItem.title }}
          </router-link>
          <div v-if="menuItem.subMenu && menuItem.subMenu?.length > 0">
            <SubMenuItem :sub-menu-items="menuItem.subMenu" />
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type TopBarItemsInterface from '@/interfaces/structure/topBarItems.interface.ts'
import SubMenuItem from '@/components/structure/topBar/submenu.component.vue'

defineProps({
  /**
   * Localização da imagem
   */
  logo: {
    type: Object as () => {
      source: string
      alt: string
      link: string | null
    },
    required: true,
  },
  /**
   * Estrutura do menu
   */
  menuItems: {
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
