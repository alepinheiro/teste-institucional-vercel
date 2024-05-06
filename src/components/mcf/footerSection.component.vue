<template>
  <footer class="bg-warren-darkCharcoal px-5 py-12">
    <div data-nosnippet
      class="flex flex-col gap-12 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:mx-auto lg:mx-auto xl:mx-auto">
      <div class="flex flex-col gap-6 items-center">
        <p class="text-warren-stormGray text-xs text-justify font-bold">
          A VMX PARTICIPACOES E EMPREENDIMENTOS LTDA, sociedade empresária
          limitada, inscrita no CNPJ sob o nº 39662160/0001-31, Minha Casa
          Financiada e MCF INCO, são uma plataforma digital que atua como
          correspondente bancária de instituições financeiras para a realização
          de operações de crédito nos termos da Resolução CMN nº. 4.935 de 29 de
          julho de 2021 do Banco Central do Brasil.
          <br />
          <br />
          Sendo assim, o Minha Casa Financiada e MCF INCO não são uma
          instituição financeira e não realiza operações de financiamento,
          investimentos ou quaisquer outras operações privativas de instituições
          financeiras diretamente, de modo que quem realiza as operações de
          crédito é a SOCINAL S.A. - CREDITO, FINANCIAMENTO E INVESTIMENTO,
          inscrita no CNPJ sob nº 03.881.423/0001-56, com sede na Avenida
          Brasil, nº 10/4º andar, Centro, Araruama/RJ, CEP 28970-000,
        </p>
        <div
          class="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6 items-center w-full md:justify-between lg:justify-between xl:justify-between">
          <Logo class="h-10 text-white w-44" />
          <a href="https://minhacasafinanciada.com" class="text-xs text-white font-bold">
            minhacasafinanciada.com
          </a>
          <ul class="flex flex-row gap-4 text-white">
            <li v-for="{ icon, link, title } of socials.warren" :key="icon">
              <a :href="link" :title="title" :aria-label="title">
                <i :class="icon" class="w-5 h-5"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="border border-white" />
      <div class="flex flex-col gap-6 items-center">
        <p class="text-warren-stormGray text-xs text-justify font-bold">
          A Bext é uma plataforma digital que atua como correspondente Bancário para facilitar o processo de contratação
          de empréstimos. Como Correspondente Bancário, seguimos as diretrizes da Resolução nº 3.954, de 24 de fevereiro
          de 2011. Somos correspondentes bancários das seguintes instituições: banco Daycoval S. A cnpj sob o no
          62.232.889/0001-90. banco Santander s.a. cnpj sob o no 90.400.888/0001-42 Cashme soluções financeiras Ltda.
          cnpj sob o no 34.175.529/0001-68. Itaú Unibanco s.a. cnpj sob o no 60.701.190/0001-04. companhia promotora Uci
          cnpj sob o no 14.010.548/0001-27. Pontte soluções financeiras Ltda. cnpj sob o no 33.296.599/0001-01. banco
          Bari de investimentos e financiamentos S.A. cnpj sob o no 00.556.603/0001-74. companhia hipotecaria piratini –
          CHP. cnpj sob o no 18.282.093/0001-50. B.V. financeira S.A cnpj sob o no 01.149.953/0001-89. BANCO BARI DE
          INVESTIMENTO E FINANCIAMENTOS S.A. cnpj sob o no 00.556.603/0001-74. BANCO BRADESCO S.A. cnpj sob o no
          60.746.948.0001-12. BANCO DE BRASÍLIA S.A. cnpj sob o no 00.000.208/0001-00 cnpj sob o no. BANCO C6 S.A.
          31.872.495/0001-72. CASHME SOLUÇÕES FINANCEIRAS LTDA. cnpj sob o no 34.175.529/0001-68. CREDIBLUE SOLUCOES
          FINANCEIRAS E IMOBILIARIAS LTDA. cnpj sob o no 36.750.257/0001-08. CREDITAS SOLUCOES FINANCEIRAS LTDA. cnpj
          sob o no 17.770.708/0001-24. BANCO DAYCOVAL S.A. cnpj sob o no 62.232.889/0001-90. GALLERIA SOCIEDADE DE
          CREDITO DIRETO S.A. cnpj sob o no 51.604.356/0001-75. BANCO INTER S.A. cnpj sob o no 00.416.968/0001-01. ITAU
          UNIBANCO S.A. cnpj sob o no 60.701.190/0001-04. LIBRA CRÉDITO SOLUÇÕES FINANCEIRAS LTDA. cnpj sob o no
          34.308.576/0001-32. MONETARE SOLUÇÕES FINANCEIRAS S.A. cnpj sob o no 32.295.379/0001-09. PONTTE SOLUCÕES
          FINANCEIRAS LTDA. cnpj sob o no 33.296.599/0001-01
          SANTANDER - SANB PROMOTORA DE VENDAS E COBRANCA S.A. 02.254.093/0001-06. SANTANDER - COMPANHIA PROMOTORA UCI
          cnpj sob o no 14.010.548/0001-27. TRISUL S.A. cnpj sob o no 08.811.643/0001-27. WP2 CORRETORA DES SEGUROS
          LTDA. cnpj sob o no 40.631.755/0001-09. ALL IN CRED SOCIEDADE DE CREDITO DIRETO S.A. cnpj sob o no
          51.414.521/0001-26.
          <br />
          <br />
          Exemplo de empréstimo com Garantia de Imóvel: mínimo 60 meses e máximo 240 meses. Exemplo com Garantia de
          Imóvel – Empréstimo de R$ 100.000,00 para pagar em 15 anos (180 meses) – Prestação inicial de R$ 1.488,08, com
          uma taxa de juros de 1,09% ao mês + IPCA, Sistema de Amortização Price. CET de 16,38% ao ano.
          <br />
          <br />
          Bext.vc pertence à Bext Fintech LTDA, CNPJ 26.915.796/0001-04, com sede na Rua Miguel Matte, 687, sala 801, Ed. Evolution – CEP 88331-030, Pioneiros, Balneário Camboriú – SC.
        </p>
        <div
          class="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6 items-center w-full md:justify-between lg:justify-between xl:justify-between">
          <img class="h-8 w-auto" :src="$options.imageConfig.brand.whiteLogo.image" :alt="$options.imageConfig.brand.whiteLogo.alt" />
          <a :href="$options.information.site.url" class="text-xs text-white font-bold">
            {{$options.information.site.name}}
          </a>
          <ul class="flex flex-row gap-4 text-white">
            <li v-for="{ icon, link, title } of socials.bext" :key="icon">
              <a :href="link" :title="title" :aria-label="title">
                <i :class="icon" class="w-5 h-5"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/mcf/icons/logoMcfSVG.component.vue'
/**
 * # Visão Geral
 * O componente `FooterSection` é um componente Vue.js projetado para
 * exibir o rodapé de uma página da web. Ele inclui informações importantes
 * sobre as empresas envolvidas. Além disso, o componente fornece links
 * para as páginas web das empresas e suas redes sociais.
 *
 * # Props
 * Este componente não aceita nenhuma propriedade.
 */
export default defineComponent({
  name: 'FooterSection',
  components: { Logo },
  data() {
    const socials = {
      warren: [
        {
          icon: 'fa-brands fa-instagram',
          title: 'Acesse nosso Instagram',
          link: 'https://www.instagram.com/minha.casafinanciada/',
        },
        {
          icon: 'fa-brands fa-linkedin',
          title: 'Acesse nosso LinkedIn',
          link: 'https://www.linkedin.com/company/minhacasafinanciada/',
        },
        {
          icon: 'fa-brands fa-youtube',
          title: 'Acesse nosso Youtube',
          link: 'https://www.youtube.com/@minhacasafinanciada20',
        },
      ],
      bext: [
        {
          icon: 'fa-brands fa-facebook-f',
          title: 'Acesse nosso Facebook',
          link: 'https://www.facebook.com/bext.vc',
        },
        {
          icon: 'fa-brands fa-instagram',
          title: 'Acesse nosso Instagram',
          link: 'https://www.instagram.com/bext.vc/',
        },
        {
          icon: 'fa-brands fa-linkedin',
          title: 'Acesse nosso LinkedIn',
          link: 'https://www.linkedin.com/company/bestsf/',
        },
        {
          icon: 'fa-brands fa-youtube',
          title: 'Acesse nosso Youtube',
          link: 'https://www.youtube.com/c/SejaBest/videos?sub_confirmation=1',
        },
      ],
    }
    return {
      socials,
    }
  },
})
</script>
