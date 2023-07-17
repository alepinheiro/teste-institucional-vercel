<template>
  <section class="relative border-b border-[#D0FE42]">
    <div class="relative">
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/A6cmeg6s0Hg?autoplay=1&mute=1"
        title="Quais são as diferenças entre financiamento imobiliário do banco e da construtora?"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="sm:h-96 h-[800px]"
      ></iframe>
      <div
        class="h-fit w-full absolute bottom-0 pb-56 sm:pb-12 bg-gradient-to-b from-transparent to-black"
      >
        <div
          class="flex flex-col max-w-3xl sm:px-5 items-center mx-auto text-center"
        >
          <h2>Para ser Best, tem que ser Pro</h2>
          <h1 class="!font-medium !text-3xl">
            BestPro, a plataforma que vai fintechizar o seu negócio
          </h1>
          <a
            href="#"
            class="text-black px-6 py-2 rounded-xl font-hover transition-all bg-[#D0FE42] mt-5 font-sans hover:-translate-y-1"
          >
            Quero ser Pro
          </a>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto relative sm:hidden md:hidden">
      <img
        class="static"
        src="/images/bestPro/discoverBestPro.png"
        alt=""
        srcset=""
      />
      <div class="absolute top-[10%] right-[18%] text-3xl text-center">
        <span>Descubra o</span>
        <span class="font-bold block">Best Pro</span>
      </div>
      <div class="absolute top-[19%] left-[20%] cursor-pointer">
        <div class="relative group">
          <div class="static h-4 w-4 p-2 rounded-full bg-[#D0FE42]"></div>
          <div
            class="absolute h-8 w-8 rounded-full bg-[#D0FE4260] -top-2 -left-2 animate-ping"
          ></div>
          <div
            class="group-hover:flex hidden absolute flex-row top-0 left-3 w-auto"
          >
            <div class="popoverArrowToLeft"></div>
            <div class="absolute left-6 -top-12 w-96">
              <div
                class="flex flex-col text-center w-full py-4 px-6 gap-2 bg-white/10 backdrop-blur rounded-xl"
              >
                <span class="font-bold text-2xl w-full"
                  >Simulações em tempo real</span
                >
                <span class="inline-flex"
                  >As melhores opções de prazos, taxas e banco disponíveis na
                  hora que você precisar.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-[32%] left-[14%] cursor-pointer">
        <div class="relative group">
          <div class="static h-4 w-4 p-2 rounded-full bg-[#D0FE42]"></div>
          <div
            class="absolute h-8 w-8 rounded-full bg-[#D0FE4260] -top-2 -left-2 animate-ping"
          ></div>
          <div
            class="group-hover:flex hidden absolute flex-row top-0 left-3 w-auto"
          >
            <div class="popoverArrowToLeft"></div>
            <div class="absolute left-6 -top-12 w-96">
              <div
                class="flex flex-col text-center w-full py-4 px-6 gap-2 bg-white/10 backdrop-blur rounded-xl"
              >
                <span class="font-bold text-2xl w-full"
                  >Sua marca em destaque</span
                >
                <span class="inline-flex"
                  >Tenha seu perfil e a identidade do seu negócio em nossa
                  plataforma White Label.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute top-[55%] left-[55%] cursor-pointer">
        <div class="relative group">
          <div class="static h-4 w-4 p-2 rounded-full bg-[#D0FE42]"></div>
          <div
            class="absolute h-8 w-8 rounded-full bg-[#D0FE4260] -top-2 -left-2 animate-ping"
          ></div>
          <div
            class="group-hover:flex hidden absolute flex-row top-0 left-3 w-auto"
          >
            <div class="popoverArrowToLeft"></div>
            <div class="absolute left-6 -top-12 w-96">
              <div
                class="flex flex-col text-center w-full py-4 px-6 gap-2 bg-white/10 backdrop-blur rounded-xl"
              >
                <span class="font-bold text-2xl w-full"
                  >Resumo dos negócios</span
                >
                <span class="inline-flex"
                  >Uma dashboard completa com um resumo em gráficos de todos os
                  seus negócios.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-[13%] right-[20%] cursor-pointer">
        <div class="relative group">
          <div class="static h-4 w-4 p-2 rounded-full bg-[#D0FE42]"></div>
          <div
            class="absolute h-8 w-8 rounded-full bg-[#D0FE4260] -top-2 -left-2 animate-ping"
          ></div>
          <div
            class="group-hover:flex hidden absolute flex-row top-0 -left-6 w-auto"
          >
            <div class="popoverArrowToLeft rotate-90"></div>
            <div class="absolute -left-[23.7rem] -top-12 w-96">
              <div
                class="flex flex-col text-center w-full py-4 px-6 gap-2 bg-white/10 backdrop-blur rounded-xl"
              >
                <span class="font-bold text-2xl w-full"
                  >Acesse onde precisar</span
                >
                <span class="inline-flex"
                  >O BestPro está disponível onde você precisar. Simule em tempo
                  real de qualquer dispositivo.</span
                >
              </div>
            </div>
          </div>
        </div>
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
