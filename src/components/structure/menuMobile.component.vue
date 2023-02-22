<template>
<div class="flex mt-auto mb-auto justify-between shadow-lg">
  <div @click="openProfileMenu= !openProfileMenu" class="cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" :class="color" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
  </div>
  <div v-if="openProfileMenu" class="w-full border-1 max-w-sm bgPopUpHover rounded-xl shadow-2xl z-40 fixed p-2 top-15 right-2 ">
        <!--Dropdown Mobile-->
    <div class="flex flex-col justify-between" :class="{'optionsHover': dropdownOpen}"  > 
      <button @click="toggleDropdown" class=" cursor-pointer flex items-center px-4 py-2 justify-between"  :class="{'text-complementaryColor1': dropdownOpen }">
        Para você
      <svg :class="['w-4 h-4 ml-2', dropdownOpen ? 'transform rotate-180' : '']" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
      </button>
      <div  class=" py-2 px-4 shadow-lg" :class="{hidden: !dropdownOpen}">
        <ul class="flex flex-col space-y-2 ">
        <li class="w-full flex flex-row justify-between items-center" @mouseover="hover1 = true"  @mouseout="hover1 = false">
          <router-link :to="'/financiamento-imobiliario'+this.$root.utms" class="block text-textPrimary py-1 hover:font-semibold" :class="{'text-primary': hover1}" > Financiamento </router-link>
          <svg v-show="hover1" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-o group-hover:opacity-100 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z" clip-rule="evenodd" />
          </svg>
        </li >
        <li class="w-full flex flex-row justify-between items-center" @mouseover="hover2 = true"   @mouseout="hover2 = false">
          <router-link :to="'/financiamento-veicular'+this.$root.utms" class="text-textPrimary block py-1 hover:font-semibold" :class="{'text-primary': hover2}">Financiamento de veículo</router-link>
          <svg v-show="hover2" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-o group-hover:opacity-100 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z" clip-rule="evenodd" />
        </svg>
        </li>
        <li class="w-full flex flex-row justify-between items-center" @mouseover="hover3 = true"  @mouseout="hover3 = false">
          <router-link :to="'/emprestimo-com-garantia-de-veiculo'+this.$root.utms" class="text-textPrimary block py-1  hover:font-semibold" :class="{'text-primary': hover3}">Empréstimo com garantia de veículo</router-link>
          <svg v-show="hover3" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-o group-hover:opacity-100 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z" clip-rule="evenodd" />
        </svg>
        </li>
        </ul>
      </div>
    </div>
    <!--Dropdown Mobile-->
    <div class="flex flex-col" :class="{'optionsHover': dropdown2}"> 
      <button @click="toggleDropdown2" class=" cursor-pointer flex items-center px-4 py-2 justify-between"  :class="{'text-complementaryColor1': dropdown2 }">
        Para o seu negócio
      <svg :class="['w-4 h-4 ml-2', dropdown2 ? 'transform rotate-180' : '']" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
      </button>
      <div  class=" py-2 px-4 shadow-lg" :class="{hidden: !dropdown2}">
        <ul class="flex flex-col space-y-2">
        <li class="w-full flex flex-row justify-between items-center" @mouseover="hover4 = true"  @mouseout="hover4 = false">
          <router-link :to="'/home-equity'+this.$root.utms" class="hover:text-primary hover:font-semibold text-textPrimary  py-1 " > Home Equity  </router-link>
          <svg v-show="hover4" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-o group-hover:opacity-100 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z" clip-rule="evenodd" />
        </svg>
          
        </li>  
        <li class="w-full flex flex-row justify-between items-center" @mouseover="hover5 = true"  @mouseout="hover5 = false">
          <router-link :to="'/financiamento-imobiliario'+this.$root.utms" class="block text-textPrimary  py-1 hover:text-primary hover:font-semibold" > Financiamento </router-link>
          <svg v-show="hover5" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-o group-hover:opacity-100 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z" clip-rule="evenodd" />
        </svg>
        </li>
        <li class="w-full flex flex-row justify-between items-center" @mouseover="hover6 = true"  @mouseout="hover6 = false">
          <router-link :to="'/financiamento-veicular'+this.$root.utms" class="text-textPrimary block  py-1 hover:text-primary hover:font-semibold" >Financiamento de veículo</router-link>
          <svg v-show="hover6" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-o group-hover:opacity-100 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z" clip-rule="evenodd" />
        </svg>
        </li>
        <li class="w-full flex flex-row justify-between items-center" @mouseover="hover7 = true"  @mouseout="hover7 = false">
          <router-link :to="'/emprestimo-com-garantia-de-veiculo'+this.$root.utms" class="text-textPrimary block  py-1 hover:text-primary hover:font-semibold" >Empréstimo com garantia de veículo</router-link>
          <svg v-show="hover7" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-o group-hover:opacity-100 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M14.293 10.293a1 1 0 0 0 0-1.414L10.414 5.586a1 1 0 1 0-1.414 1.414L11.586 9H3a1 1 0 0 0 0 2h8.586l-3.707 3.707a1 1 0 1 0 1.414 1.414L14.293 11.7a1 1 0 0 0 0-1.414z" clip-rule="evenodd" />
        </svg>
        </li>

        </ul>
      </div>
    </div>
    <div @click="openProfileMenu= !openProfileMenu" class=" cursor-pointer rounded-lg px-4 py-2">
      <router-link :to="'/parceiro'+this.$root.utms" class="hover:text-primary hover:font-semibold " > Seja um Parceiro </router-link>
    </div>

    <div @click="openProfileMenu= !openProfileMenu" class=" cursor-pointer rounded-lg px-4 py-2">
      <a :href="'https://portal.seja.best/'+this.$root.utms"  style=" text-decoration: none;"  class="hover:text-primary hover:font-semibold "
        target="_blank"> Portal</a>
    </div>
    <div @click="openProfileMenu= !openProfileMenu" class=" cursor-pointer rounded-lg px-4 py-2">
      <router-link :to="'/sobre'+this.$root.utms" class="hover:text-primary hover:font-semibold " > Sobre </router-link>
    </div>
    <div @click="openProfileMenu= !openProfileMenu" class="bg-complementaryColor1 text-white rounded-lg px-4 py-2 font-semibold 
      transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-100">

      <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
        target="_blank">
        Simule seu crédito 
      </a>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'menuMobileComponent',
  props:{
    color:String,
    linkStyle:String
  },
  data() {
    return {
      openProfileMenu:false,
      isVisible:false,
      dropdownOpen:false,
      dropdown2:false,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
      hover6: false,
      hover7: false,
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    toggleDropdown2() {
      this.dropdown2 = !this.dropdown2;
    }
  }
})
</script>
