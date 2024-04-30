<template>
  <section>
    <div class="w-full pt-16 sm:pt-8 md:pt-8 flex flex-wrap justify-center">
      <div
        class="w-1/5 md:w-1/3 sm:w-1/3 pb-12 sm:pb-8 md:pb-8 flex justify-center"
      >
        <a
          href="https://valor.globo.com/brasil/coluna/bndes-se-une-a-fintechs-para-baratear-credito.ghtml"
          style="text-decoration: none"
          aria-label="Acesse a matéria em valor.globo.com"
          target="_blank"
          class="justify-center items-center flex"
        >
          <img
            :src="$options.imageConfig.logoMedia.gray.valorEconomico"
            alt="Link para matéria no portal Valor economico"
            class="w-8/12 h-auto transition ease-in-out duration-500 hover:scale-110 hover:translate-y-1"
          />
        </a>
      </div>

      <div
        class="w-1/5 md:w-1/3 sm:w-1/3 pb-12 sm:pb-8 md:pb-8 flex justify-center"
      >
        <a
          href="https://revistapegn.globo.com/Startups/noticia/2019/03/programa-de-capacitacao-startup-sc-divulga-lista-de-selecionados.html"
          style="text-decoration: none"
          aria-label="Acesse a matéria em revistapegn.globo.com"
          target="_blank"
          class="justify-center items-center flex"
        >
          <img
            :src="
              $options.imageConfig.logoMedia.gray.peqEmpresasGrandesNegocios
            "
            alt="Link para matéria no portal Pequenas empresas grandes negócios"
            title="Pequenas empresas grandes negócios"
            class="w-8/12 h-auto transition ease-in-out duration-500 hover:scale-110 hover:translate-y-1"
          />
        </a>
      </div>

      <div
        class="w-1/5 md:w-1/3 sm:w-1/3 pb-12 sm:pb-8 md:pb-8 flex justify-center"
      >
        <a
          href="https://imobireport.com.br/fintechs-de-credito-imobiliario-apostam-na-tecnologia-agilidade-e-multidisciplinaridade-para-superar-momento-de-alta-da-selic/"
          style="text-decoration: none"
          target="_blank"
          aria-label="Acesse a matéria no portal revistapegn.globo.com"
          class="justify-center items-center flex"
        >
          <img
            :src="$options.imageConfig.logoMedia.gray.imobileReport"
            alt="Link para matéria no portal Imobi Report"
            title="Imobi Report"
            class="w-8/12 h-auto transition ease-in-out duration-500 hover:scale-110 hover:translate-y-1"
          />
        </a>
      </div>

      <div
        class="w-1/5 md:w-1/3 sm:w-1/3 pb-12 sm:pb-8 md:pb-8 flex justify-center"
      >
        <a
          href="https://economiasc.com/2021/08/06/fintech-aproxima-brasileiros-de-home-equity-modalidade-de-credito-imobiliario-com-melhores-taxas-no-mercado/?utm_source=bext.vc"
          style="text-decoration: none"
          target="_blank"
          aria-label="Acesse a matéria no portal economiasc.com"
          class="justify-center items-center flex"
        >
          <img
            :src="$options.imageConfig.logoMedia.gray.economiaSC"
            alt="Link para matéria no portal Economia SC"
            title="Economia SC"
            class="w-8/12 h-auto transition ease-in-out duration-500 hover:scale-110 hover:translate-y-1"
          />
        </a>
      </div>

      <div
        class="w-1/5 md:w-1/3 sm:w-1/3 pb-12 sm:pb-8 md:pb-8 flex justify-center"
      >
        <a
          href="https://revistapegn.globo.com/Startups/noticia/2019/03/programa-de-capacitacao-startup-sc-divulga-lista-de-selecionados.html"
          style="text-decoration: none"
          target="_blank"
          aria-label="Acesse a matéria no portal revistapegn.globo.com"
          class="justify-center items-center flex"
        >
          <img
            :src="$options.imageConfig.logoMedia.gray.agenciaOGlobo"
            alt="Link para matéria no portal Agência O Globo"
            title="Agência O Globo"
            class="w-8/12 h-auto transition ease-in-out duration-500 hover:scale-110 hover:translate-y-1"
          />
        </a>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BestEditorial',
  data() {
    return {}
  },
})
</script>
