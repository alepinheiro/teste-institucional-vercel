<template>
  <div class="flex flex-row w-full justify-between items-center">
    <div>
      <img :src="logo.source" :alt="logo.alt" srcset="" />
    </div>
    <div>
      <ul class="flex flex-row gap-4">
        <li v-for="menuItem of menuItems" :key="menuItem.id">
          <router-link v-if="menuItem.link" :to="menuItem.link">
            <i v-if="menuItem.icon">
              {{ menuItem.icon }}
            </i>
            {{ menuItem.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface MenuItemInterface {
  id: string
  title: string
  icon: string | null
  target: string
  link: string
  subMenu: MenuItemInterface[] | null
}

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
    default: '',
    required: true,
  },
  menuItems: {
    type: Object as () => MenuItemInterface[],
    default: () => [
      {
        id: 'inicio',
        title: 'Início',
        icon: null,
        link: '/',
        target: '/',
        subMenu: null,
      },
    ],
  },
})
</script>
