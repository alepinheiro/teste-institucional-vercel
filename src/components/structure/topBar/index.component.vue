<template>
  <div class="flex flex-row w-full justify-between items-center">
    <router-link :to="logo.link ?? '/'">
      <img
        :src="logo.source"
        :alt="logo.alt"
        srcset=""
        class="h-14 object-contain"
      />
    </router-link>
    <nav class="relative">
      <button
      aria-label=""
        class="hidden md:flex text-white hover:bg-complementaryColor1 p-2 rounded"
        @click="handleMenu"
      >
        <i v-if="menuIsOpen" class="fa-solid fa-x h-8 w-8 m-auto"></i>
        <i v-else class="fa-solid fa-bars h-8 w-8 m-auto"></i>
      </button>
      <ul
        :class="[
          menuIsOpen ? 'md:absolute md:right-0 md:w-64 md:top-14' : 'md:hidden',
        ]"
        class="flex flex-row md:flex-col items-center gap-10 border border-red-500"
      >
        <li
          v-for="{ id, link, title, subMenu } in menuItems"
          :key="id"
          class="relative group"
        >
          <router-link
            :to="link"
            class="font-Public-Sans text-white font-bold relative"
          >
            <span>
              {{ title }}
            </span>
            <span
              v-if="activeItem === id"
              class="absolute top-6 inset-x-0 h-1 bg-complementaryColor3"
            >
            </span>
          </router-link>
          <div v-if="subMenu && subMenu.length > 0">
            <SubMenuItem :sub-menu-items="subMenu" />
          </div>
        </li>
        <li>
          <button
            class="bg-complementaryColor1 text-white font-bold px-4 rounded-md py-2 hover:drop-shadow-md hover:-translate-y-0.5 transition-all"
          >
            Simule seu Crédito
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
    required: true,
  },
  /**
   * Exibe a decoração do item ativo
   */
  activeItem: {
    type: String,
    default: 'inicio',
  },
})

const menuIsOpen = ref(true);

const handleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value;
}
</script>
