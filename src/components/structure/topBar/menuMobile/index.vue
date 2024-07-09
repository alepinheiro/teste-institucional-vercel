<template>
  <nav class="flex">
    <button
      title="Menu"
      aria-label="menu"
      class="cursor-pointer w-8 h-8 flex text-inherit active:scale-95"
      :style="{
        color,
      }"
      @click="toggleMenu()">
      <Icon icon="fa-solid fa-bars" class="w-full h-full" />
    </button>
    <div
      ref="menuMobile"
      :class="[open ? 'h-fit p-2 border-1 ' : 'h-0']"
      class="w-full max-w-sm bgPopUpHover rounded-xl shadowDark z-40 fixed top-15 right-2 text-textPrimary flex flex-col gap-2 overflow-hidden transition-all ease-in-out">
      <MenuItem routePath="/" label="Início" @click="open = !open" />

      <DropDown
        title="Produtos"
        :items="[
          {
            path: '/home-equity',
            title: 'Crédito com Garantia de Imóvel',
          },
          {
            path: '/financiamento-imobiliario',
            title: 'Financiamento Imobiliário',
          },
          {
            path: '/emprestimo-com-garantia-de-veiculo',
            title: 'Crédito com Garantia Veicular',
          },
          {
            path: '/financiamento-veicular',
            title: 'Financiamento Veicular',
          },
        ]" />

      <DropDown
        title="Soluções Digitais"
        :items="[
          {
            path: '/xo-aluguel',
            title: 'Xô, aluguel',
          },
          {
            path: '/best-broker',
            title: 'Best Broker',
          },
        ]" />

      <MenuItem
        routePath="/besthub"
        label="Seja um Parceiro"
        @click="open = !open" />

      <MenuItem
        routePath="https://portal.seja.best/"
        label="Portal Bext"
        @click="open = !open" />

      <MenuItem routePath="/sobre" label="Sobre Nós" @click="open = !open" />

      <div
        class="bg-primary text-white rounded-lg px-4 py-2 font-semibold transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-100 text-center"
        @click="open = !open">
        <a
          :href="
            $options.information.appSimulator +
            useObjectToQueryString($route.query)
          "
          style="text-decoration: none"
          target="_blank">
          Simule seu crédito
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import DropDown from '@/components/structure/topBar/menuMobile/dropDown.component.vue';
  import MenuItem from '@/components/structure/topBar/menuMobile/menuItem.component.vue';
  import { defineComponent, ref } from 'vue';
  import { onClickOutside } from '@vueuse/core';
  import { useObjectToQueryString } from '@/composables/useObjectToQueryString';
  export default defineComponent({
    name: 'MenuMobileComponent',
    components: { MenuItem, DropDown },
    props: {
      color: {
        type: String,
        default: 'fill-white',
      },
      linkStyle: {
        type: String,
        default: '',
      },
    },
    setup() {
      const menuMobile = ref<HTMLDivElement | null>(null);

      return {
        menuMobile,
      };
    },
    data() {
      return {
        open: false,
        useObjectToQueryString,
      };
    },
    mounted() {
      if (this.menuMobile)
        onClickOutside(this.menuMobile, () => (this.open = false));
    },
    methods: {
      toggleMenu() {
        this.open = !this.open;
      },
    },
  });
</script>
