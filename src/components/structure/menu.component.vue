<template>
  <div class="flex justify-between items-stretch">
    <div class="flex justify-between gap-5 items-start pr-5 pt-2">
      <RouterLink
        :to="{
          path: '/',
          query: $route.query,
        }"
        class="decoration">
        Início
      </RouterLink>
      <DropdownMenu class="hover:cursor-pointer decoration" />
      <DropdownForB class="hover:cursor-pointer decoration" />
      <RouterLink
        :to="{
          path: '/sobre',
          query: $route.query,
        }"
        class="decoration"
        target="_self">
        Sobre Nós
      </RouterLink>
      <RouterLink
        :to="{
          path: '/bestHub',
          query: $route.query,
        }"
        class="decoration"
        target="_blank">
        Seja um Parceiro
      </RouterLink>
      <a
        :href="links.bextNews.url + $root.utms"
        class="decoration"
        target="_blank">
        Portal Bext
      </a>
    </div>
    <a
      :href="links.simulator.url + $root.utms"
      style="text-decoration: none"
      target="_blank"
      class="bg-primary rounded-lg px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 lg:text-sm">
      Simule seu crédito
    </a>
  </div>
</template>
<script lang="ts">
  import DropdownForB from '@/components/base/PopUpForBusiness.vue';
  import DropdownMenu from '@/components/base/dropdownMenu.vue';
  import { defineComponent } from 'vue';
  import { links } from '@/configurations/information';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
  export default defineComponent({
    name: 'MenuComponent',
    components: {
      DropdownMenu,
      DropdownForB,
    },
    props: {
      linkStyle: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        links,
        isVisible: false,
        useObjectToQueryString,
      };
    },
  });
</script>

<style>
  @media (min-width: 1024px) and (max-width: 1279px) {
    .linkStyleDark {
      padding-left: 0rem;
      padding-right: 0rem;
      margin-right: 1.25rem;
    }

    .linkStyle {
      padding-left: 0rem;
      padding-right: 0rem;
      margin-right: 1.25rem;
    }
  }
</style>
