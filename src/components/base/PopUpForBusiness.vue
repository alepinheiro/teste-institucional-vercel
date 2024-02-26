<template>
  <div
    class="relative"
    @mouseenter="showPopOver = true"
    @mouseleave="showPopOver = false"
  >
    <div
      id="div-2"
      class="decoration"
      :color="color"
      :linkStyle="linkStyle"
      :class="{ textDecoration: activeDiv2 === 'div-2' }"
    >
      Soluções Digitais
    </div>

    <div
      v-if="showPopOver"
      class="absolute z-10 w-[19rem] p-2 bgPopUpHover rounded-lg shadowDark"
    >
      <div
        class="px-2 py-3 optionsHover hover:shadow-md text-textPrimary flex flex-row items-center w-full justify-between"
        @mouseover="hover4 = true"
        @mouseout="hover4 = false"
      >
        <RouterLink
          :to="{
            name: 'getOutRent',
            params: { id: 'div-2' },
            query: $route.query,
          }"
          target="_blank"
          class="text-sm"
        >
          Xô, aluguel
        </RouterLink>
        <svg
          v-show="hover4"
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
        class="px-2 py-3 optionsHover hover:shadow-md text-textPrimary flex flex-row items-center gap-21 w-full justify-between"
        @mouseover="hover = true"
        @mouseout="hover = false"
      >
        <RouterLink
          :to="{
            name: 'bestBroker',
            params: { id: 'div-2' },
            query: $route.query,
          }"
          target="_blank"
          class="text-sm"
        >
          Best Broker
        </RouterLink>
        <svg
          v-show="hover"
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
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showPopOver: false,
      linkStyle: 'linkStyleDark',
      hover: false,
      hover2: false,
      hover3: false,
      hover4: false,
    }
  },
  computed: {
    activeDiv2() {
      return this.$route.params.id
    },
  },
}
</script>

<style>
.popover-option {
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
