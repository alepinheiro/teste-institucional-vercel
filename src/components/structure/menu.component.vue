<template>
<div class="flex mt-auto mb-auto justify-between">
  <div class="flex ">
    <div :class="linkStyle">
      <router-link :to="'/'+this.$root.utms" class="decoration" > Início </router-link>
    </div>
    <div :class="linkStyle">
      <router-link :to="'/sobre'+this.$root.utms" class="decoration" activeClass: > Sobre </router-link>
    </div>
    <div :class="linkStyle">
      <router-link :to="'/home-equity'+this.$root.utms" class="decoration" > Home Equity  </router-link>
    </div>
    <div :class="linkStyle">
      <dropdownMenu />
    </div>
    <div :class="linkStyle">
      <router-link :to="'/parceiro'+this.$root.utms" class="decoration" > Seja um Parceiro </router-link>
    </div>
    <div :class="linkStyle">
      <a :href="'https://portal.seja.best/'+this.$root.utms" class="decoration"
        target="_blank"> Portal</a>
    </div>
    
  </div>
  <div class="flex">

    <div class="bg-complementaryColor1 rounded-lg px-4 py-1 font-semibold  text-white
    transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 lg:px-1 lg:text-sm">

      <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"

        target="_blank">Simule seu crédito</a>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import dropdownMenu from '../base/dropdownMenu.vue';
export default defineComponent({
  name: 'menuComponent',
  components: {
    dropdownMenu,
  },
  props:{
    linkStyle:String,
  },
  data() {
    return {
      isVisible:false,
      link:[],
    }
  },

})
</script>

<style>
@media (min-width:1024px) and (max-width:1279px) {
	.linkStyleDark{
		padding-left: 0rem;
		padding-right: 0rem;
		margin-right: 1.25rem;
	}
  .linkStyle{
		padding-left: 0rem;
		padding-right: 0rem;
		margin-right: 1.25rem;
	}
}
</style>
