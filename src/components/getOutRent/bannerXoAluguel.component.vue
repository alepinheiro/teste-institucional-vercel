<template>
  <section class="flex flex-col w-full text-white relative z-0 max-w-5xl mx-auto">

    <div class="absolute max-h-[50rem] w-full h-full lg:-right-[22rem] xl:-right-[22rem] top-0 ">
      <img
        src="/images/getOutRent/heroBg.png"
        alt="Xô, Aluguel! o método best para conquistar seu primeiro imóvel com financiamento imobiliário "
        class="object-cover h-full w-fit mx-auto"
      />

      <div class="absolute flex flex-row w-fit items-center gap-4 mx-auto lg:inset-[40%] xl:inset-[40%] top-[20rem] lg:top-[60%] xl:top-[60%]">
        <button
        class="relative h-14 w-14 bg-zinc-200 rounded-full mx-auto flex justify-center items-center z-0"
        @click="$emit('openPopUp', true)"
        >
          <div class="absolute bg-zinc-200 rounded-full inset-2 animate-ping z-0"></div>
          <i class="fa-solid fa-play z-10 text-black"></i>
        </button>
        <p class="text-center text-base pt-5 w-fit">
          Toque aqui e assista agora uma palavra do CEO
        </p>
      </div>

    </div>

    <div
        class="flex flex-col gap-5 max-w-[666px] mr-auto md:mx-auto px-5 pt-[30rem] lg:pt-20 xl:pt-20 z-10"
      >
        <h1 class="text-5xl sm:text-4xl leading-tight text-center lg:text-left xl:text-left">
          Chegou a sua hora de deixar o aluguel para trás com
          <br />
          <span class="font-bold border-b-4 border-primary">
            Financiamento Imobiliário
          </span>
        </h1>
        <p class="text-2xl pt-4 sm:pt-6 leading-10 text-center lg:text-left xl:text-left">
          Não deixe que o aluguel continue sendo um obstáculo entre você e a
          realização do sonho de ter sua própria casa. Com o guia
          <span class="font-bold"
            >Xô, Aluguel: O Método Best para conquistar seu primeiro imóvel com
            Financiamento Imobiliário"</span
          >, você terá o conhecimento necessário para dar o primeiro passo em
          direção à conquista desse objetivo.
        </p>
        <div
          class="border-gradient bg-gradient-to-r from-[#0524DD70] to-[#0524DD10] px-7 py-6 rounded-lg flex flex-col gap-6"
        >
          <p class="text-2xl font-bold text-center">
            Não espere mais! Invista em seu futuro e conquiste a tão sonhada
            independência imobiliária.
          </p>
          <button
            class="bg-complementaryColor1 transition duration-500 ease-in-out w-fit mx-auto transform hover:translate-y-1 hover:scale-105 rounded-lg text-xl p-4 font-semibold"
            @click="openLink()"
          >
            Quero sair do aluguel
          </button>
        </div>
      </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ComponentPublicInstance } from 'vue'
type IRootExtension = ComponentPublicInstance & { [key: string]: string }
export default defineComponent({
  name: 'BannerXoAluguel',
  emits: ['openPopUp'],
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    openLink() {
      window.open(this.$options.information.hotmartXoAluguel, '_blank')
    },
  },
})
</script>

<style scoped>
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
/* @media (min-width: 1024px) and (max-width: 1279px) {
  .xoAluguel {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 90%;
    background: url('/images/getOutRent/xoAluguelSM.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right center;
    margin-top: -1.3rem;
  }
}

@media (min-width: 1279px) {
  .xoAluguel {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background: url('/images/getOutRent/xoAluguel.png');
    background-size: cover;
    background-position: right center;
  }
} */
</style>
