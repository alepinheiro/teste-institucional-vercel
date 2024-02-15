<template>
  <section>
    <div>
      <img
        src="/images/aboutUs/heroBackground.png"
        alt=""
        class="min-h-[50vh] object-cover"
      />
      <div class="md:max-w-2xl min-lg:max-w-5xl mx-auto">
        <div class="flex flex-col gap-2 text-center -mt-14">
          <h2
            class="bg-primary text-white w-fit mx-auto px-3 py-2 rounded-xl text-lg"
          >
            Temos uma missão <b>grandiosa:</b>
          </h2>
          <h1
            class="text-4xl min-md:text-6xl font-darkerGrotesque font-bold text-primary"
          >
            “Transformar o acesso ao crédito para quem busca sua melhor versão”
          </h1>
        </div>
        <!--  -->
        <a
          href="#"
          v-scroll-to="'#businessPartners'"
          class="flex gap-2 justify-between w-fit mx-auto text-textSecondary pt-10 hover:underline"
        >
          <i class="fa-solid fa-chevron-down animate-bounce"></i>
          <span class="text-xs">
            Clique aqui ou role para saber como estamos fazendo isso
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeroSection',
  data() {
    return {}
  },
})
</script>
