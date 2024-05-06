<template>
  <nav class="flex">
    <button
      :style="{
        color,
      }"
      id="divMenu"
      title="Menu"
      aria-label="menu"
      class="cursor-pointer w-8 h-8 flex text-inherit"
      @click="toggleMenu(), handleClickOutside($event)"
    >
      <i class="fa-solid fa-bars w-full h-full"></i>
    </button>
    <div
      v-if="openProfileMenu"
      id="menuMobile"
      class="w-full border-1 max-w-sm bgPopUpHover rounded-xl shadowDark z-40 fixed p-2 top-15 right-2 text-textPrimary"
    >
      <button
        class="cursor-pointer rounded-lg px-4 py-2 mb-2 optionsHover flex flex-row justify-between"
        @mouseover="hoverSVG4 = true"
        @focusin="hoverSVG4 = true"
        @mouseout="hoverSVG4 = false"
        @focusout="hoverSVG4 = false"
        @click="openProfileMenu = !openProfileMenu"
      >
        <RouterLink
          :to="{
            path: '/',
            query: $route.query,
          }"
          class="hover:font-semibold"
        >
          Início
        </RouterLink>
        <svg
          v-show="hoverSVG4"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 opacity-o group-hover:opacity-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <!--Dropdown Mobile-->
      <div
        id="dropdown1"
        class="flex flex-col justify-between mb-2"
        :class="{ optionsOpen: dropdownOpen }"
      >
        <button
          class="cursor-pointer flex items-center px-4 py-2 justify-between"
          :class="{ 'text-primary': dropdownOpen }"
          @click="toggleDropdown(), removeClass()"
        >
          Produtos
          <svg
            :class="[
              'w-6 h-6 ml-2',
              dropdownOpen ? 'transform rotate-180' : '',
            ]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          class="py-2 ml-2 px-4 shadow-lg"
          :class="{ hidden: !dropdownOpen }"
        >
          <ul class="flex flex-col space-y-2">
            <li
              class="w-full flex flex-row justify-between items-center"
              @mouseover="hover4 = true"
              @focusin="hover4 = true"
              @mouseout="hover4 = false"
              @focusout="hover4 = false"
            >
              <RouterLink
                :to="{
                  path: '/home-equity',
                  query: $route.query,
                }"
                class="hover:text-primary hover:font-semibold text-textPrimary py-1"
              >
                Crédito com Garantia de Imóvel
              </RouterLink>
              <svg
                v-show="hover4"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 opacity-o group-hover:opacity-100 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
            <li
              class="w-full flex flex-row justify-between items-center"
              @mouseover="hover1 = true"
              @mouseout="hover1 = false"
            >
              <RouterLink
                :to="{
                  path: '/financiamento-imobiliario',
                  query: $route.query,
                }"
                class="block text-textPrimary py-1 hover:font-semibold"
                :class="{ 'text-primary': hover1 }"
              >
                Financiamento Imobiliário
              </RouterLink>
              <svg
                v-show="hover1"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 opacity-o group-hover:opacity-100 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
            <li
              class="w-full flex flex-row justify-between items-center"
              @mouseover="hover3 = true"
              @mouseout="hover3 = false"
            >
              <RouterLink
                :to="{
                  path: '/emprestimo-com-garantia-de-veiculo',
                  query: $route.query,
                }"
                class="text-textPrimary block py-1 hover:font-semibold"
                :class="{ 'text-primary': hover3 }"
              >
                Crédito com Garantia Veicular
              </RouterLink>
              <svg
                v-show="hover3"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 opacity-o group-hover:opacity-100 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
            <li
              class="w-full flex flex-row justify-between items-center"
              @mouseover="hover2 = true"
              @mouseout="hover2 = false"
            >
              <RouterLink
                :to="{
                  path: '/financiamento-veicular',
                  query: $route.query,
                }"
                class="text-textPrimary block py-1 hover:font-semibold"
                :class="{ 'text-primary': hover2 }"
              >
                Financiamento Veicular
              </RouterLink>
              <svg
                v-show="hover2"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 opacity-o group-hover:opacity-100 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <!--Dropdown Mobile-->
      <div
        id="dropdown2"
        class="flex flex-col mb-2"
        :class="[dropdown2 ? 'optionsOpen' : '']"
      >
        <button
          class="cursor-pointer flex items-center px-4 py-2 mb-2 justify-between"
          @click="toggleDropdown2(), removeClassDropdown2()"
        >
          Soluções Digitais
          <svg
            :class="[
              'w-6',
              'h-6',
              'ml-2',
              {
                transform: dropdown2,
                'rotate-180': dropdown2,
                'rotate-0': dropdownOpen,
              },
            ]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          v-if="dropdown2"
          class="py-2 px-4 shadow-lg"
          :class="{ hidden: dropdownOpen }"
        >
          <ul class="flex flex-col space-y-2">
            <li
              class="w-full flex flex-row justify-between items-center"
              @mouseover="hover4 = true"
              @mouseout="hover4 = false"
            >
              <RouterLink
                :to="{
                  path: '/xo-aluguel',
                  query: $route.query,
                }"
                target="_blank"
                class="hover:text-primary hover:font-semibold text-textPrimary py-1"
              >
                Xô, aluguel
              </RouterLink>
              <svg
                v-show="hover4"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 opacity-o group-hover:opacity-100 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
            <li
              class="w-full flex flex-row justify-between items-center"
              @mouseover="hover5 = true"
              @mouseout="hover5 = false"
            >
              <RouterLink
                :to="{
                  path: '/best-broker',
                  query: $route.query,
                }"
                target="_blank"
                class="block text-textPrimary py-1 hover:text-primary hover:font-semibold"
              >
                Best Broker
              </RouterLink>
              <svg
                v-show="hover5"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 opacity-o group-hover:opacity-100 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="cursor-pointer rounded-lg px-4 py-2 mb-2 optionsHover flex flex-row justify-between"
        @mouseover="hoverSVG1 = true"
        @mouseout="hoverSVG1 = false"
        @click="openProfileMenu = !openProfileMenu"
      >
        <RouterLink
          :to="{
            path: '/besthub',
            query: $route.query,
          }"
          class="hover:font-semibold"
        >
          Seja um Parceiro
        </RouterLink>
        <svg
          v-show="hoverSVG1"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 opacity-o group-hover:opacity-100"
          viewBox="0 0 20 20"
          fill="currentColor "
        >
          <path
            fill-rule="evenodd"
            d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <div
        class="cursor-pointer rounded-lg px-4 py-2 mb-2 optionsHover flex flex-row justify-between"
        @mouseover="hoverSVG2 = true"
        @mouseout="hoverSVG2 = false"
        @click="openProfileMenu = !openProfileMenu"
      >
        <a
          :href="
            'https://portal.seja.best/' + useObjectToQueryString($route.query)
          "
          style="text-decoration: none"
          class="hover:font-semibold"
          target="_blank"
        >
          Portal Bext
        </a>
        <svg
          v-show="hoverSVG2"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 opacity-o group-hover:opacity-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="cursor-pointer rounded-lg px-4 py-2 mb-2 optionsHover flex flex-row justify-between"
        @mouseover="hoverSVG3 = true"
        @mouseout="hoverSVG3 = false"
        @click="openProfileMenu = !openProfileMenu"
      >
        <RouterLink
          :to="{
            path: '/sobre',
            query: $route.query,
          }"
          class="hover:font-semibold"
        >
          Sobre Nós
        </RouterLink>
        <svg
          v-show="hoverSVG3"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 opacity-o group-hover:opacity-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div
        class="bg-primary text-white rounded-lg px-4 py-2 font-semibold transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-100 text-center"
        @click="openProfileMenu = !openProfileMenu"
      >
        <a
          :href="
            $options.information.appSimulator +
            useObjectToQueryString($route.query)
          "
          style="text-decoration: none"
          target="_blank"
        >
          Simule seu crédito
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useObjectToQueryString } from '@/composables/useObjectToQueryString'

export default defineComponent({
  name: 'MenuMobileComponent',
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
  data() {
    return {
      isVisible: false,
      dropdownOpen: false,
      openProfileMenu: false,
      dropdown2: false,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
      hover6: false,
      hover7: false,
      hoverSVG1: false,
      hoverSVG2: false,
      hoverSVG3: false,
      hoverSVG4: false,
      useObjectToQueryString,
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    },
    toggleDropdown2() {
      this.dropdown2 = !this.dropdown2
    },
    removeClass() {
      this.dropdown2 = false
      const dropdownDisabled = document.querySelector('#dropdown2')
      if (dropdownDisabled) dropdownDisabled.classList.remove('optionsOpen')
    },
    removeClassDropdown2() {
      this.dropdownOpen = false
      const dropdownClosed = document.querySelector('#dropdown1')
      if (dropdownClosed) dropdownClosed.classList.remove('optionsOpen')
    },
    toggleMenu() {
      this.openProfileMenu = !this.openProfileMenu
    },
    handleClickOutside(event: MouseEvent) {
      const menu = document.querySelector('#menuMobile') as HTMLElement
      if (menu) {
        if (!menu.contains(event.target as HTMLElement)) {
          menu.classList.add('hidden')
        }
      }
    },
    mounted() {
      window.addEventListener('click', this.handleClickOutside)
    },
    beforeDestroy() {
      window.removeEventListener('click', this.handleClickOutside)
    },
  },
})
</script>
