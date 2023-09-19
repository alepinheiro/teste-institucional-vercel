<template>
  <section class="w-full text-white">
      <div
        class="flex flex-row sm:flex-col-reverse
        md:flex-col-reverse max-w-5xl md:max-w-2xl mx-auto h-screen md:h-auto sm:h-auto lg:relative xl:relative z-0"
      >
        <div
          class="flex-1 lg:flex-auto lg:w-4/6 xl:flex-auto xl:w-4/6 flex flex-col gap-5 my-auto px-5 sm:text-center md:text-center sm:pt-80 md:pt-80 z-10"
        >
          <div
            class=" md:bg-transparent xl:hidden lg:hidden rounded sm:flex flex-row items-center gap-4 py-4 px-6 w-fit sm:mx-auto md:mx-auto mr-auto"
          >
            <button
              class="relative sm:w-8 sm:h-8 w-14 h-14 bg-zinc-200 rounded-full mx-auto flex justify-center items-center z-0"
              @click="$emit('openPopUp', true)"
            >
              <div
                class="absolute bg-zinc-200 rounded-full inset-0 animate-ping z-0"
              ></div>
              <div class="flex m-auto">
                <i class="fa-solid fa-play z-10 text-black"></i>
              </div>
            </button>
            <span class="font-bold font-Public-Sans text-sm md:hidden">
              Toque aqui e assista agora uma palavra do CEO
            </span>
          </div>

          <div class="flex flex-col gap-5 sm:gap-8">
            <h1 class="text-5xl sm:text-3xl leading-tight">
              Chegou a sua hora de deixar o aluguel para trás com
              <b class="underlineGradient"> Financiamento Imobiliário </b>
            </h1>
            <p class="text-xl leading-relaxed sm:leading-[1.5] sm:tracking-wider md:py-15 lg:py-8 xl:py-6">
              Não deixe que o aluguel continue sendo um obstáculo entre você e a
              realização do sonho de ter sua própria casa. Com o guia
              <b>
                "Xô, Aluguel: O Método Best para conquistar seu primeiro imóvel
                com Financiamento Imobiliário",
              </b>
              você terá o conhecimento necessário para dar o primeiro passo em
              direção à conquista desse objetivo.
            </p>
          </div>

          <GradientBackground
            :height="'100%'"
            :width="'100%'"
            :color="'#0524DD'"
            :angle="getBackgroundAngle"
            :content-class="'flex flex-col gap-8 sm:justify-center justify-start w-fit p-4 text-center xl:text-left lg:text-left cursor-default'"
          >
            <template #content>
              <div
            class="flex flex-col gap-5 items-start p-5 text-xl"
          >
            <span class="font-bold w-5/6 sm:w-full md:w-full sm:tracking-wider">
              Não espere mais! Invista em seu futuro e conquiste a tão sonhada
              independência imobiliária.
            </span>
            <button
              class="bg-complementaryColor1 px-8 py-5 rounded-xl sm:mx-auto md:mx-auto transition-all hover:bg-[#0063f2] hover:scale-105 hover:shadow-md sm:tracking-wider"
              @click="openLink()"
              >
              Quero sair do aluguel
            </button>
          </div>
            </template>
          </GradientBackground>


        </div>

        <div class="flex-1 lg:flex-auto lg:w-2/6 xl:flex-auto xl:w-2/6 h-full flex w-full">

          <img
            src="/images/getOutRent/heroBg.png"
            alt="Xô, Aluguel! o método best para conquistar seu primeiro imóvel com financiamento imobiliário "
            class="absolute lg:-right-1/3 xl:-right-[40%] z-0 sm:h-4/5 object-cover md:inset-x-0"
          />

          <div class="absolute right-[10%] bottom-1/4 hidden lg:block xl:block">
            <button
              class="relative sm:w-8 sm:h-8 w-14 h-14 bg-zinc-200 rounded-full mx-auto flex justify-center items-center z-0"
              @click="$emit('openPopUp', true)"
            >
              <div
                class="absolute bg-zinc-200 rounded-full inset-0 animate-ping z-0"
              ></div>
              <div class="flex m-auto">
                <i class="fa-solid fa-play z-10 text-black"></i>
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GradientBackground from '@/components/bestBroker/gradientBackground.component.vue'

export default defineComponent({
  name: 'BannerXoAluguel',
  components: { GradientBackground },
  emits: ['openPopUp'],
  data() {
    return {
      isVisible: false,
      windowInnerWidth: 360,
    }
  },
  computed: {
    getBackgroundAngle() {
      if (this.windowInnerWidth <= 667) {
        return 180
      } else if (
        this.windowInnerWidth >= 668 &&
        this.windowInnerWidth <= 1023
      ) {
        return 180
      } else if (
        this.windowInnerWidth >= 1024 &&
        this.windowInnerWidth <= 1279
      ) {
        return 90
      } else {
        return 90
      }
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowInnerWidth = window.innerWidth
    })
  },
  methods: {
    openLink() {
      window.open(this.$options.information.hotmartXoAluguel + this.$root.utms, '_blank')
    },
  },
})
</script>

<style lang="scss" scoped>
.border-gradient {
  position: relative;
}

.border-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  border: 6px solid transparent;
  background: linear-gradient(75deg, #0524dd, #0524dd00) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}

.underlineGradient {
  @apply relative;
  /* text-decoration: underline var(--primaryColor); */
  &:after {
    @apply absolute inset-x-0 -bottom-2 h-2 bg-gradient-to-r from-primary to-transparent;
    content: ' ';
  }
}

</style>
