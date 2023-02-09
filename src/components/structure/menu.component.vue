<template>
<div class="flex mt-auto mb-auto justify-between">
  <div class="flex ">
    <div :class="linkStyle">
      <router-link :to="'/'+this.$root.utms" class="lineDecoration" > Início </router-link>
    </div>
    <div :class="linkStyle">
      <router-link :to="'/sobre'+this.$root.utms" class="lineDecoration" > Sobre </router-link>
    </div>
    <div :class="linkStyle">
      <router-link :to="'/home-equity'+this.$root.utms" class="lineDecoration" > Home Equity  </router-link>
    </div>
    <div :class="linkStyle">
      <router-link :to="'/financiamento-imobiliario'+this.$root.utms" class="lineDecoration" > Financiamento </router-link>
    </div>
    <div :class="linkStyle">
      <router-link :to="'/parceiro'+this.$root.utms" class="lineDecoration" > Seja um Parceiro </router-link>
    </div>
    <div :class="linkStyle">
      <a :href="'https://portal.seja.best/'+this.$root.utms" class="lineDecoration"
        target="_blank"> Portal</a>
    </div>
    
  </div>
  <div class="flex">

    <div class="bg-complementaryColor1 rounded-lg px-4 py-1 font-semibold  text-white
    transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105">

      <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"

        target="_blank">Simule seu crédito</a>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'menuComponent',
  props:{
    linkStyle:String
  },
  data() {
    return {
      isVisible:false,
    }
  },

})
</script>
