<template>
<div class="flex mt-auto mb-auto justify-between">
  <div class="flex ">
    <div :class="linkStyle">
      <router-link to="/" class="lineDecoration" > Início </router-link>
    </div>
    <div :class="linkStyle">
      <router-link to="/sobre" class="lineDecoration" > Sobre </router-link>
    </div>
    <div :class="linkStyle">
      <router-link to="/home-equity" class="lineDecoration" > Home Equity  </router-link>
    </div>
    <div :class="linkStyle">
      <router-link to="/financiamento-imobiliario" class="lineDecoration" > Financiamento </router-link>
    </div>
    <div :class="linkStyle">
      <router-link to="/parceiro" class="lineDecoration" > Seja um Parceiro </router-link>
    </div>
    <div :class="linkStyle">
      <a href="https://seja.best/portal/#destaques"  style=" text-decoration: none;" class="lineDecoration"
        target="_blank"> Portal</a>
    </div>
    
  </div>
  <div class="flex">
    <div class="buttonComplementaryColor1 text-center">
      <a :href="$options.information.appSimulator"  style=" text-decoration: none;"
        target="_blank">Faça uma simulação</a>
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
