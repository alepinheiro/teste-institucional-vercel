<template>
  <div class="relative shadow-md" @mouseenter="showPopOver = true" @mouseleave="showPopOver = false">
    <div class="decoration"  :color="color" :linkStyle="linkStyle" >Para você</div>
    <div v-if="showPopOver" class="absolute z-10 w-48 p-2 bg-white rounded shadow-lg">
      <div :class="linkStyle">
      <router-link :to="'/financiamento-imobiliario'+this.$root.utms" class="text-textPrimary hover:text-complementaryColor1 text-sm" > Financiamento </router-link>
      </div>
      <div :class="linkStyle">
      <router-link :to="'/financiamento-veicular'+this.$root.utms" class="text-textPrimary hover:text-complementaryColor1 text-sm" >Financiamento de veículo</router-link>
      </div>
      <div :class="linkStyle">
      <router-link :to="'/emprestimo-com-garantia-de-veiculo'+this.$root.utms" class="text-textPrimary hover:text-complementaryColor1 text-sm" >Empréstimo com garantia de veículo</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopOver: false,
      linkStyle:'linkStyleDark',
    }
  },
  mounted() {
    if(this.position === 'top'){
      this.color = 'fill-textPrimary'
      this.linkStyle = 'linkStyle'
    }
  },
}
</script>

<style>
.popover-option {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

</style>
