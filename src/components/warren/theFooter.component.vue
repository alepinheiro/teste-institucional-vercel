<template>
  <footer class="bg-warren-darkCharcoal px-5 py-12">
    <div class="flex flex-col gap-12 md:max-w-3xl lg:max-w-5xl md:mx-auto lg:mx-auto">
      <div class="flex flex-col gap-6 items-center">
        <p class="text-warren-stormGray text-xs text-justify font-bold">
          A Warren Corretora de Títulos e Valores Mobiliários e Câmbio
          Ltda('Warren'), inscrita sob o CNPJ: 92.875.780/0001-31 é uma
          instituição devidamente habilitada e autorizada pelo Banco Central do
          Brasil e pela Comissão de Valores Mobiliários.
          <br />
          <br />
          Toda comunicação através da rede mundial de computadores está sujeita
          a interrupções ou atrasos, podendo impedir ou prejudicar o envio ou a
          recepção de informações atualizadas.
          <br />
          <br />
          A Warren não presta serviço de consultoria de valores mobiliários. O
          serviço de Assessoria de Investimentos oferecido tem como objetivo
          esclarecer eventuais dúvidas dos clientes quanto aos produtos
          disponibilizados, de forma a auxiliar na escolha daqueles que melhor
          se adequem ao perfil de investimento. A tomada da decisão deve ser
          sempre do cliente.
          <br />
          <br />
          Alguns investimentos no mercado financeiro são considerados de risco e
          podem resultar em perdas patrimoniais. A Warren não se responsabiliza
          por eventuais prejuízos que o cliente venha a sofrer em virtudade da
          realização de operações. Consulte os riscos das operações e a
          compatibilidade com o seu perfil antes de investir.
        </p>
        <div class="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6 items-center w-full md:justify-between lg:justify-between xl:justify-between">
          <LogoWarrenSVG class="h-10 text-white" />
          <a
            href="https://www.warren.com.br"
            class="text-xs text-white font-bold"
          >
            www.warren.com.br
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
          A SejaBest é uma plataforma digital que atua como correspondente
          Bancário para facilitar o processo de contratação de empréstimos. Como
          Correspondente Bancário, seguimos as diretrizes da Resolução nº 3.954,
          de 24 de fevereiro de 2011. Somos correspondentes bancários das
          seguintes instituições: banco Daycoval S. A cnpj sob o no
          62.232.889/0001-90. banco Santander s.a. cnpj sob o no
          90.400.888/0001-42 Cashme soluções financeiras Ltda. cnpj sob o no
          34.175.529/0001-68. Itaú Unibanco s.a. cnpj sob o no
          60.701.190/0001-04. companhia promotora Uci cnpj sob o no
          14.010.548/0001-27. Pontte soluções financeiras Ltda. cnpj sob o no
          33.296.599/0001-01. banco Bari de investimentos e financiamentos S.A.
          cnpj sob o no 00.556.603/0001-74. companhia hipotecaria piratini –
          CHP. cnpj sob o no 18.282.093/0001-50. B.V. financeira S.A cnpj sob o
          no 01.149.953/0001-89.
          <br />
          <br />
          Exemplo de empréstimo com Garantia de Imóvel: mínimo 60 meses e máximo
          240 meses. Exemplo com Garantia de Imóvel – Empréstimo de R$
          100.000,00 para pagar em 15 anos (180 meses) – Prestação inicial de R$
          1.488,08, com uma taxa de juros de 1,09% ao mês + IPCA, Sistema de
          Amortização Price. CET de 16,38% ao ano.
          <br />
          <br />
          Seja.best pertence à Sejabest Fintech de Credito Imobiliario LTDA,
          CNPJ 26.915.796/0001-04, com sede na Rua Miguel Matte, 687, sala 801,
          Ed. Evolution – CEP 88331-030, Pioneiros, Balneário Camboriú – SC.
        </p>
        <div class="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6 items-center w-full md:justify-between lg:justify-between xl:justify-between">
          <LogoSejaBestSVG class="h-10 text-white" />
          <a href="https://seja.best" class="text-xs text-white font-bold">
            www.seja.best
          </a>
          <ul class="flex flex-row gap-4 text-white">
            <li v-for="{ icon, link, title } of socials.sejaBest" :key="icon">
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
import LogoWarrenSVG from '@/components/warren/icons/logoWarrenSVG.component.vue'
import LogoSejaBestSVG from '@/components/base/logos/logoSejaBestSVG.component.vue'

export default defineComponent({
  name: 'TheFooter',
  components: { LogoWarrenSVG, LogoSejaBestSVG },
  data() {
    const socials = {
      warren: [
        {
          icon: 'fa-brands fa-facebook-f',
          title: 'Acesse nosso Facebook',
          link: 'https://www.facebook.com/warrenbrasil',
        },
        {
          icon: 'fa-brands fa-instagram',
          title: 'Acesse nosso Instagram',
          link: 'https://www.instagram.com/warrenbrasil/',
        },
        {
          icon: 'fa-brands fa-linkedin',
          title: 'Acesse nosso LinkedIn',
          link: 'https://www.linkedin.com/company/warrenbrasil/',
        },
        {
          icon: 'fa-brands fa-youtube',
          title: 'Acesse nosso Youtube',
          link: 'https://www.youtube.com/channel/UCqIO5twa50iGz2wT5cGS-XQ',
        },
      ],
      sejaBest: [
        {
          icon: 'fa-brands fa-facebook-f',
          title: 'Acesse nosso Facebook',
          link: 'https://www.facebook.com/seja.best',
        },
        {
          icon: 'fa-brands fa-instagram',
          title: 'Acesse nosso Instagram',
          link: 'https://www.instagram.com/seja.best/',
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
