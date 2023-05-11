<template>
  <div class="flex mt-auto mb-auto justify-between">
    <div class="flex ">
      <div :class="linkStyle">
        <router-link :to="'/' + ($root as IRootExtension).utms" class="decoration"> Início </router-link>
      </div>
      <div :class="linkStyle">
        <dropdownMenu />
      </div>
      <div :class="linkStyle">
        <dropdownForB />
      </div>
      <div :class="linkStyle">
        <router-link :to="'/parceiro' + ($root as IRootExtension).utms" class="decoration"> Seja um Parceiro </router-link>
      </div>
      <div :class="linkStyle">
        <a :href="'https://portal.seja.best/' + ($root as IRootExtension).utms" class="decoration" target="_blank"> Portal</a>
      </div>
      <div :class="linkStyle">
        <router-link :to="'/sobre' + ($root as IRootExtension).utms" class="decoration" active-class:> Sobre </router-link>
      </div>
    </div>
    <div class="flex">

      <div
        class="bg-complementaryColor1 rounded-lg px-4 py-1 font-semibold  text-white
        transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 lg:px-1 lg:text-sm">

        <a
          :href="$options.information.appSimulator + ($root as IRootExtension).utms"
          style=" text-decoration: none;"
          target="_blank">
          Simule seu crédito
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import { ComponentPublicInstance, defineComponent } from 'vue';
import dropdownMenu from '../base/dropdownMenu.vue';
import dropdownForB from '../base/PopUpForBusiness.vue';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
type IRootExtension = ComponentPublicInstance & { [key: string]: string }

export default defineComponent({
  name: 'MenuComponent',
  components: {
    dropdownMenu,
    dropdownForB,
  },
  props: {
    linkStyle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isVisible: false,
    }
  },
})
</script>

<style>
@media (min-width:1024px) and (max-width:1279px) {
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
