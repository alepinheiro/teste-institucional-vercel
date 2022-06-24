<template>
<div class="flex mt-auto mb-auto justify-between">
  <div class="flex ">
    <div class=" cursor-pointer rounded-lg px-4 py-1">
      <router-link to="/sobre" class="" > Sobre </router-link>
    </div>
    <div class=" cursor-pointer rounded-lg px-4 py-1">
      <router-link to="/home-equity" > Home Equity  </router-link>
    </div>
    <div class=" cursor-pointer rounded-lg px-4 py-1">
      <router-link to="/financiamento-imobiliario" > Financiamento </router-link>
    </div>
    <div class=" cursor-pointer rounded-lg px-4 py-1">
      <router-link to="/parceiro" > Seja um Parceiro </router-link>
    </div>
    <div class=" cursor-pointer rounded-lg px-4 py-1">
      <a href="https://seja.best/"  style=" text-decoration: none;"
        target="_blank"> Portal</a>
    </div>
    
  </div>
  <div class="flex">
    <div class="bg-complementaryColor1 rounded-lg px-4 py-1 font-semibold 
    transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105">
      <a href="https://simulador.seja.best/"  style=" text-decoration: none;"
        target="_blank">Simule seu crédito</a>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'menuComponent',
  
  data() {
    return {
      isVisible:false,
    }
  },
})
</script>
