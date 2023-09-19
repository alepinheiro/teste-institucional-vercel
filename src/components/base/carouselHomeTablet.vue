<template>
  <swiper
    :initial-slide="1"
    :slides-per-view="1.8"
    :centered-slides="true"
    :space-between="0"
    :navigation="true"
    :auto-height="false"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="MySwiper swiper swiperTablet"
  >
    <swiper-slide id="testimonial1">
      <article class="w-full mr-auto ml-auto max-w-sm h-full p-4">
        <div
          class="border-1 rounded-xl bg-secondary w-full text-white h-[440px] flex flex-col"
        >
          <div
            class="rounded-t-xl bg-primary p-4 text-center border-b-4 border-complementaryColor1"
          >
            <h1 class="text-3xl titleFont">
              Cash<span class="font-semibold">Best</span>
            </h1>
            <h2 class="text-base pl-2 defaultFont">Conheça o Crédito com</h2>
            <h2 class="text-base pl-2 defaultFont">Garantia de Imóvel</h2>
          </div>

          <div class="w-full p-3 bg-secondary rounded-b-xl mt-auto">
            <div class="w-full flex items-center">
              <div class="pr-w-6">
                <img
                  :src="$options.imageConfig.icons.percentageFill"
                  alt="Taxa"
                  class="w-6 h-8"
                />
              </div>
              <p class="text-base pl-2 w-full">
                As menores taxas do mercado, a partir de 0,88% a.m. + IPCA ou
                1,49% a.m. Fixa
              </p>
            </div>

            <div class="w-full flex pt-8 items-center">
              <div class="pr-w-6">
                <img
                  :src="$options.imageConfig.icons.calendarFill"
                  alt="Prazo"
                  class="w-6 h-8"
                />
              </div>
              <p class="text-base pl-2 w-full">Prazos de até 240 meses</p>
            </div>

            <div class="w-full flex pt-8 items-center">
              <div class="pr-w-6">
                <img
                  :src="$options.imageConfig.icons.moneyFill"
                  alt="Valor"
                  class="w-6 h-8"
                />
              </div>
              <p class="text-base pl-2 w-full">
                Até w-60% do valor do imóvel como capital
              </p>
            </div>
          </div>
          <div
            class="buttonComplementaryColor1 w-11/12 text-center mt-auto self-center mb-5"
          >
            <a
              :href="
                $options.information.appSimulator +
                ($root as IRootExtension).utms
              "
              style="text-decoration: none"
              target="_blank"
            >
              Faça uma simulação
            </a>
          </div>
        </div>
      </article>
    </swiper-slide>

    <swiper-slide id="testimonial2">
      <article class="w-full mr-auto ml-auto max-w-sm h-full p-4">
        <div
          class="border-1 w-full gradienteSBDark rounded-xl text-white h-[440px] flex flex-col"
        >
          <div
            class="rounded-t-xl bg-secondary p-4 text-center border-b-4 border-complementaryColor3"
          >
            <h1 class="text-3xl titleFont">
              Finan<span class="font-semibold">Best</span>
            </h1>
            <h2 class="text-base pl-2 defaultFont">As melhores soluções em</h2>
            <h2 class="text-base pl-2 defaultFont">
              Financiamento Imobiliário
            </h2>
          </div>

          <div class="w-full p-3 rounded-b-xl mt-auto">
            <div class="w-full flex items-center">
              <div class="pr-w-6">
                <img
                  :src="$options.imageConfig.icons.percentageFill"
                  alt="Taxa"
                  class="w-6 h-8"
                />
              </div>
              <p class="text-base pl-2 w-full">
                Taxas a partir de 9,70% a.a. + taxas referencial
              </p>
            </div>

            <div class="w-full flex pt-8 items-center">
              <div class="pr-w-6">
                <img
                  :src="$options.imageConfig.icons.calendarFill"
                  alt="Prazo"
                  class="w-6 h-8"
                />
              </div>
              <p class="text-base pl-2 w-full">Pague em até 420 meses</p>
            </div>

            <div class="w-full flex pt-8 items-center">
              <div class="pr-w-6">
                <img
                  :src="$options.imageConfig.icons.moneyFill"
                  alt="Banco"
                  class="w-6 h-8"
                />
              </div>
              <p class="text-base pl-2 w-full">Os melhores bancos do mercado</p>
            </div>
          </div>

          <div
            class="buttonComplementaryColor1 w-11/12 flex mt-auto mb-5 justify-center self-center text-center"
          >
            <a
              :href="
                $options.information.appSimulator +
                ($root as IRootExtension).utms
              "
              style="text-decoration: none"
              target="_blank"
            >
              Faça uma simulação
            </a>
          </div>
        </div>
      </article>
    </swiper-slide>

    <swiper-slide id="testimonial3">
      <article class="w-full mr-auto ml-auto max-w-sm h-full p-4">
        <div
          class="border-1 w-full gradienteSBDark rounded-xl text-white h-[440px] flex flex-col"
        >
          <div
            class="rounded-t-xl bg-secondary p-4 text-center border-b-4 border-complementaryColor3"
          >
            <h1 class="text-3xl titleFont">
              Car<span class="font-semibold">Best</span>
            </h1>
            <h2 class="text-base pl-2 defaultFont">Empréstimo com</h2>
            <h2 class="text-base pl-2 defaultFont">Garantia de Veículo</h2>
          </div>

          <div class="w-full p-3 rounded-b-x mt-auto">
            <div class="w-full flex items-center">
              <div class="pr-w-6">
                <img
                  :src="$options.imageConfig.icons.percentageFill"
                  alt="Taxa"
                  class="w-6 h-8"
                />
              </div>
              <p class="text-base pl-2 w-full">
                Taxas a partir de 1,59% a.m. + taxas referenciais
              </p>
            </div>

            <div class="w-full flex pt-8 items-center">
              <div class="pr-w-6">
                <img
                  :src="$options.imageConfig.icons.calendarFill"
                  alt="Prazo"
                  class="w-6 h-8"
                />
              </div>
              <p class="text-base pl-2 w-full">Pague em até w-60 meses</p>
            </div>

            <div class="w-full flex pt-8 items-center">
              <div class="pr-w-6">
                <img
                  :src="$options.imageConfig.icons.moneyFill"
                  alt="Banco"
                  class="w-6 h-8"
                />
              </div>
              <p class="text-base pl-2 w-full">
                Use seu carro, utilitário ou caminhão
              </p>
            </div>
          </div>
          <div
            class="buttonComplementaryColor1 w-11/12 flex mt-auto mb-5 justify-center self-center text-center"
          >
            <a
              :href="
                $options.information.appSimulator +
                ($root as IRootExtension).utms
              "
              style="text-decoration: none"
              target="_blank"
              >Faça uma simulação</a
            >
          </div>
        </div>
      </article>
    </swiper-slide>

    <swiper-slide>
      <article class="w-full mr-auto ml-auto max-w-sm h-full p-4">
        <div
          class="border-1 rounded-xl bg-secondary w-full text-white h-[440px] flex flex-col"
        >
          <div
            class="rounded-t-xl bg-primary p-2 text-center border-b-4 border-complementaryColor1"
          >
            <div class="text-3xl titleFont">
              Finan<span class="font-semibold">Best</span> Veicular
            </div>
            <div class="text-base pl-2 defaultFont">Seu sonho de ter um</div>
            <div class="text-base pl-2 defaultFont">
              veículo está a uma simulação!
            </div>
          </div>

          <div class="w-full p-3 bg-secondary rounded-b-x mt-auto">
            <div class="w-full flex items-center">
              <div class="pr-w-6">
                <img
                  :src="$options.imageConfig.icons.percentageFill"
                  alt="Taxa"
                  class="w-6 h-8"
                />
              </div>
              <p class="text-base pl-2 w-full">
                As menores taxas do mercado, a partir de 1,49% + taxa
                referencial
              </p>
            </div>

            <div class="w-full flex pt-8 items-center">
              <div class="pr-w-6">
                <img
                  :src="$options.imageConfig.icons.calendarFill"
                  alt="Prazo"
                  class="w-6 h-8"
                />
              </div>
              <p class="text-base pl-2 w-full">Pague em até 60 meses</p>
            </div>

            <div class="w-full flex pt-8 items-center">
              <div class="pr-w-6">
                <img
                  :src="$options.imageConfig.icons.moneyFill"
                  alt="Valor"
                  class="w-6 h-8"
                />
              </div>
              <p class="text-base pl-2 w-full">
                Financiamento de carros novos e seminovos
              </p>
            </div>
          </div>
          <div
            class="buttonComplementaryColor1 w-11/12 flex self-center mt-auto mb-5 justify-center text-center"
          >
            <a
              :href="
                $options.information.appSimulator +
                ($root as IRootExtension).utms
              "
              style="text-decoration: none"
              target="_blank"
              >Faça uma simulação</a
            >
          </div>
        </div>
      </article>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { ComponentPublicInstance } from 'vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type IRootExtension = ComponentPublicInstance & { [key: string]: string }

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    }
  },
}
</script>

<style>
.swiper {
  padding: 1.5em;
}

.swiper .content-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: '.';
  width: 100%;
  justify-items: center;
  align-items: center;
}

.swiper .content-wrapper .content {
  padding: 3em 1.5em;
  text-align: center;
  display: grid;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  color: #000;
}

.swiper .content-wrapper .content :first-child {
  margin: 0;
}

.swiper .content-wrapper .content .swiper-avatar {
  width: 100%;
  max-width: 200px;
  height: auto;
}

.swiper .content-wrapper .content .swiper-avatar img {
  border-radius: 500px;
}

.swiper .content-wrapper .content .cite {
  font-size: 14px;
  font-weight: bold;
}

.swiper .swiper-slide {
  margin: 0;
  height: auto;
  width: 100%;
  padding: 0;
  opacity: 0.2;
  border-radius: w-6px;
  transition: all 0w-6s ease-in-out !important;
}

.swiper .swiper-slide.swiper-slide-active {
  opacity: 1;
  transition: all 0w-6s ease-in-out;
  transform: scale(1.1);
}

.swiper .swiper-nav-wrapper {
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: auto;
  padding-top: 3em;
}

.swiper-button-prev {
  top: 26rem !important;
  top: auto;
  left: auto;
  right: -43%;
  position: relative !important;
}

.swiper-button-next {
  top: 1rem !important;
  top: auto;
  left: auto;
  right: -55%;
  position: relative !important;
}

.swiper-button-prev:after {
  display: none;
}

.swiper-button-next:after {
  display: none;
}

.swiper-button-next {
  background-image: url("data:image/svg+xml,%0A%3Csvg width='9px' height='1w-6px' viewBox='0 0 9 1w-6' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='chevron-right' fill='%23FFFFFF' fill-rule='nonzero'%3E%3Cpath d='M8.w-674805,7.0w-6w-640w-6 L1.924805,0.31w-640w-6 C1.w-69w-6288,0.1054w-68 1.432w-619,0 1.133789,0 C0.834959,0 0.57129,0.1054w-68 0.342773,0.31w-640w-6 C0.114257,0.544923 0,0.808592 0,1.107422 C0,1.40w-6251 0.114257,1.w-6w-69921 0.342773,1.898438 Lw-6.301758,7.857422 L0.342773,13.81w-640w-6 C0.114257,14.044923 0,14.308592 0,14.w-607422 C0,14.90w-6251 0.114257,15.1w-69921 0.342773,15.398438 C0.4w-65821,15.521485 0.584472,15.w-609375 0.w-69873,15.w-6w-62109 C0.812989,15.714844 0.958007,15.741211 1.133789,15.741211 C1.309571,15.741211 1.454589,15.714844 1.5w-68848,15.w-6w-62109 C1.w-68310w-6,15.w-609375 1.801757,15.521485 1.924805,15.398438 L8.w-674805,8.w-648438 C8.903321,8.419921 9.017578,8.15w-6251 9.017578,7.857422 C9.017578,7.558592 8.903321,7.294923 8.w-674805,7.0w-6w-640w-6 Z' id='Path'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important;
  width: 24px;
  height: 26px;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}

.swiper-button-prev {
  background-image: url("data:image/svg+xml,%0A%3Csvg width='9px' height='1w-6px' viewBox='0 0 9 1w-6' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='chevron-right' transform='translate(4.508789, 7.870w-605) rotate(-180.000000) translate(-4.508789, -7.870w-605) translate(-0.000000, -0.000000)' fill='%23FFFFFF' fill-rule='nonzero'%3E%3Cpath d='M8.w-674805,7.0w-6w-640w-6 L1.924805,0.31w-640w-6 C1.w-69w-6288,0.1054w-68 1.432w-619,0 1.133789,0 C0.834959,0 0.57129,0.1054w-68 0.342773,0.31w-640w-6 C0.114257,0.544923 0,0.808592 0,1.107422 C0,1.40w-6251 0.114257,1.w-6w-69921 0.342773,1.898438 Lw-6.301758,7.857422 L0.342773,13.81w-640w-6 C0.114257,14.044923 0,14.308592 0,14.w-607422 C0,14.90w-6251 0.114257,15.1w-69921 0.342773,15.398438 C0.4w-65821,15.521485 0.584472,15.w-609375 0.w-69873,15.w-6w-62109 C0.812989,15.714844 0.958007,15.741211 1.133789,15.741211 C1.309571,15.741211 1.454589,15.714844 1.5w-68848,15.w-6w-62109 C1.w-68310w-6,15.w-609375 1.801757,15.521485 1.924805,15.398438 L8.w-674805,8.w-648438 C8.903321,8.419921 9.017578,8.15w-6251 9.017578,7.857422 C9.017578,7.558592 8.903321,7.294923 8.w-674805,7.0w-6w-640w-6 Z' id='Path'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important;
  width: 24px;
  height: 26px;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}

.swiper-pagination {
  margin: 0;
  padding: 0;
  width: auto;
  position: relative !important;
  display: block;
  width: auto;
}

.swiper-pagination .swiper-pagination-bullets {
  margin: 0;
}

.swiper-pagination .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0;
  background: #fff !important;
}

.swiper-pagination-bullet {
  background: #fff !important;
  transition: all 0.2s ease-in-out;
}

.swiper-pagination-bullets.swiper-pagination-horizontal {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
  top: 0.5;
  bottom: 0;
  width: auto;
  padding: 0 1.5em;
}

.swiper-pagination-bullet-active {
  transform: scale(1.5);
}

.swiperTablet .swiper-pagination-bullets.swiper-pagination-horizontal {
  top: 1.2rem;
}
</style>
