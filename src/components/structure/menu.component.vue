<template>
  <div class="flex justify-between items-stretch">
    <div class="flex justify-between gap-5 items-start pr-5 pt-2">
      <RouterLink :to="'/' + $root.utms" class="decoration">
        Início
      </RouterLink>
      <dropdownMenu class="hover:cursor-pointer decoration" />
      <dropdownForB class="hover:cursor-pointer decoration" />
      <RouterLink
        :to="'/bestHub' + $root.utms"
        class="decoration"
        target="_blank"
      >
        Seja um Parceiro
      </RouterLink>
      <a
        :href="'https://portal.seja.best/' + $root.utms"
        class="decoration"
        target="_blank"
      >
        Portal
      </a>

      <RouterLink
        :to="'/sobre' + $root.utms"
        class="decoration"
        target="_blank"
        active-class:
      >
        Sobre
      </RouterLink>
    </div>
    <a
      :href="$options.information.appSimulator + $root.utms"
      style="text-decoration: none"
      target="_blank"
      class="bg-complementaryColor1 rounded-lg px-4 my-auto py-2 font-semibold text-white transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 lg:text-sm"
    >
      Simule seu crédito
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import dropdownMenu from '../base/dropdownMenu.vue'
import dropdownForB from '../base/PopUpForBusiness.vue'

export default defineComponent({
  name: 'MenuComponent',
  components: {
    dropdownMenu,
    dropdownForB,
  },
  props: {
    linkStyle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isVisible: false,
    }
  },
})
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
