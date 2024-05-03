<template>
  <section class="w-full pb-26 pt-24 md:pb-24 sm:pt-0 sm:pb-28">
      <div class="maxWidth md:w-full flex sm:h-full mr-auto ml-auto" >
        <div
          class="mt-auto mb-auto w-full bg-bgDarkColor shadow-xl rounded-2xl
          flex-wrap p-6 sm:p-2 flex justify-center">

          <div class="w-full flex ml-8 sm:ml-0 py-4 ">
            <h1
              class="w-1/3 sm:w-2/4 text-3xl sm:text-xl mt-auto mb-0 font-bold
              text-primary text-center">
              Por que ser Bext?
            </h1>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-0">
              <img
                :src="$options.imageConfig.logoVerticalWhite"
                alt="Logo Bext"
                class="w-28 sm:w-20 h-auto mr-auto ml-auto"/>
            </div>
            <div class="w-1/3  sm:w-1/4 mt-auto mb-0 text-center">
              <div class="text-white text-2xl sm:text-sm mt-auto mb-auto px-4">
                Bancos
              </div>
            </div>
          </div>

          <div class="w-full flex border-board py-3  ml-8 sm:ml-0">
            <h2
              class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-white text-xl
              font-semibold sm:font-normal tracking-wider sm:text-sm">
              As menores taxas do mercado
            </h2>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto">
              <img
                :src="$options.imageConfig.icons.checkAqua"
                alt="Ícone de marcação positiva"
                title="As menores taxas do mercado"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
            <div class="w-1/3 sm:w-1/4  mt-auto mb-auto sm:pl-4">
              <img
                :src="$options.imageConfig.icons.checkAqua"
                alt="Ícone de marcação positiva"
                title="As menores taxas do mercado"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
          </div>

          <div class="w-full flex border-board py-3  ml-8 sm:ml-0">
            <h2
              class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-white text-xl font-semibold
              tracking-wider sm:font-normal sm:text-sm">
              Múltiplas opções de banco
            </h2>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
              <img
                :src="$options.imageConfig.icons.checkAqua"
                alt="Ícone de marcação positiva"
                title="Múltiplas opções de banco"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto sm:pl-4">
              <img
                :src="$options.imageConfig.icons.errorFill"
                alt="Ícone de marcação negativa"
                title="Múltiplas opções de banco"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
          </div>

          <div class="w-full flex border-board py-3 ml-8 sm:ml-0">
            <h2
              class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-white text-xl
              font-semibold tracking-wider sm:font-normal sm:text-sm">
              Plataforma multiprodutos
            </h2>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
              <img
                :src="$options.imageConfig.icons.checkAqua"
                alt="Ícone de marcação positiva"
                title="Plataforma multiprodutos"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto sm:pl-4">
              <img
                :src="$options.imageConfig.icons.checkAqua"
                alt="Ícone de marcação positiva"
                title="Plataforma multiprodutos"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
          </div>

          <div class="w-full flex border-board py-3  ml-8 sm:ml-0  ">
            <h2
              class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-white text-xl
              font-semibold tracking-wider sm:font-normal sm:text-sm">
              Transparência
            </h2>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
              <img
                :src="$options.imageConfig.icons.checkAqua"
                alt="Ícone de marcação positiva"
                title="Transparência"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto sm:pl-4">
              <img
              :src="$options.imageConfig.icons.errorFill"
              alt="Ícone de marcação negativa"
              title="Transparência"
              class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
          </div>

          <div class="w-full flex border-board py-3  ml-8 sm:ml-0  ">
            <h2
              class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-white text-xl
              font-semibold tracking-wider sm:font-normal sm:text-sm">
              Processo agilizado
            </h2>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
              <img
                :src="$options.imageConfig.icons.checkAqua"
                alt="Ícone de marcação positiva"
                title="Processo agilizado"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto sm:pl-4">
              <img
                :src="$options.imageConfig.icons.errorFill"
                alt="Ícone de marcação negativa"
                title="Processo agilizado"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
          </div>

          <div class="w-full flex border-board py-3  ml-8 sm:ml-0  ">
            <h2
              class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center
              text-white text-xl font-semibold tracking-wider sm:font-normal sm:text-sm">
              Atendimento 7 dias por semana
            </h2>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
              <img
                :src="$options.imageConfig.icons.checkAqua"
                alt="Ícone de marcação positiva"
                title="Atendimento 7 dias por semana"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto sm:pl-4">
              <img
                :src="$options.imageConfig.icons.errorFill"
                alt="Ícone de marcação negativa"
                title="Atendimento 7 dias por semana"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
          </div>

          <div class="w-full flex border-board py-3 ml-8 sm:ml-0">
            <h2
              class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-white text-xl font-semibold
              tracking-wider sm:font-normal sm:text-sm">
              Assessoria personalizada
            </h2>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
              <img
                :src="$options.imageConfig.icons.checkAqua"
                alt="Ícone de marcação positiva"
                title="Assessoria personalizada"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
              </div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto sm:pl-4">
              <img
                :src="$options.imageConfig.icons.errorFill"
                alt="Ícone de marcação negativa"
                title="Assessoria personalizada"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
          </div>

          <div class="w-full flex border-board py-3 ml-8 sm:ml-0  ">
            <div
              class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-white text-xl
              font-semibold tracking-wider sm:font-normal sm:text-sm">
              Totalmente Digital
            </div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
              <img
                :src="$options.imageConfig.icons.checkAqua"
                alt="Ícone de marcação positiva"
                title="Totalmente Digital"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto sm:pl-4">
              <img
                :src="$options.imageConfig.icons.errorFill"
                alt="Ícone de marcação negativa"
                title="Totalmente Digital"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
          </div>

          <div class="w-full flex border-board py-3 ml-8 sm:ml-0">
            <h2
              class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-white
              text-xl font-semibold tracking-wider sm:font-normal sm:text-sm">
              Sem burocracias
            </h2>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
              <img
                :src="$options.imageConfig.icons.checkAqua"
                alt="Ícone de marcação positiva"
                title="Sem burocracias"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto sm:pl-4">
              <img
                :src="$options.imageConfig.icons.errorFill"
                alt="Ícone de marcação negativa"
                title="Sem burocracias"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
          </div>

          <div class="w-full flex border-board py-3 ml-8 sm:ml-0  ">
            <h2
              class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-white text-xl
              font-semibold tracking-wider sm:font-normal sm:text-sm">
              Sem filas
            </h2>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
              <img
                :src="$options.imageConfig.icons.checkAqua"
                alt="Ícone de marcação positiva"
                title="Sem filas"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto sm:pl-4">
              <img
              :src="$options.imageConfig.icons.errorFill"
              alt="Ícone de marcação negativa"
              title="Sem filas"
              class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
          </div>

          <div class="w-full flex py-3 ml-8 sm:ml-0">
            <h2
              class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center
              text-white text-xl font-semibold tracking-wider sm:font-normal sm:text-sm">
              Foco no cliente
            </h2>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
              <img
                :src="$options.imageConfig.icons.checkAqua"
                alt="Ícone de marcação positiva"
                title="Foco no cliente"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
            <div class="w-1/3 sm:w-1/4 mt-auto mb-auto sm:pl-4">
              <img
                :src="$options.imageConfig.icons.errorFill"
                alt="Ícone de marcação negativa"
                title="Foco no cliente"
                class="w-8 sm:w-7 h-auto mr-auto ml-auto"/>
            </div>
          </div>

        </div>
      </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ComparativeBoard',
})
</script>

<style></style>