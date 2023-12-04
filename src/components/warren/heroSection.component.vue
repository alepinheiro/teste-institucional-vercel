<template>
  <section class="w-full ">
    <div class="px-5 flex flex-col gap-6 items-center pt-18 pb-40 relative z-0">
      <img src="/images/warren/mobile/amanhecer@5x.png" class="absolute -z-10 top-0 h-full object-fill" alt="background" role="presentation" />
			<img src="/images/warren/logoWarrenWhite.svg" alt="" srcset="">
      <h1 class="text-3xl font-bold text-center text-white">Fazer crédito toma tempo, mas não precisa ser o seu</h1>
			<img src="/images/warren/sejaBestLogosWhite.svg" alt="" srcset="">
      <CustomButton :text="'Entre em contato'" @click="onButtonClick" />
      <img src="/images/warren/proDisplay@1x.png" class="absolute -bottom-1/4 z-10" alt="" srcset="">
		</div>
	</section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CustomButton from '@/components/warren/customButton.component.vue'
export default defineComponent({
  name: 'HeroSection',
  components: {
    CustomButton
  },
  data() {
    return {}
  },
  methods: {
    onButtonClick(){
      console.log('Hero Button clicked')
    }
  }
})
</script>
