<template>
  <div
    id="bestBrokerLP"
    class="bg-[#0d0d0d] w-full text-white overflow-x-hidden font-Sizmo-Pro subpixel-antialiased"
  >
    <div
      class="fixed bottom-0 inset-x-0 bg-red-300 text-red-500 font-bold w-full z-50"
    >
      <div class="hidden sm:block">SM</div>
      <div class="hidden md:block">MD</div>
      <div class="hidden lg:block">LG</div>
      <div class="hidden xl:block">XL</div>
    </div>

    <section class="sm:pt-40 pt-12 py-10 w-full bestBrokerHeroBg">
      <div class="max-w-5xl md:max-w-2xl mx-auto">
        <div class="w-1/2 sm:w-full flex flex-col gap-4 sm:text-center sm:px-5">
          <img
            src="/images/bestBroker/logoBestBrokerWhite.png"
            class="sm:mx-auto ml-0 w-3/5"
            alt=""
          />

          <h1 class="text-4xl">
            O <b>curso definitivo</b> para se tornar expert em
            <span class="text-[#D0FE42] font-bold">Crédito Imobiliário</span>
          </h1>

          <p class="text-2xl text-[#D4D4D4] leading-relaxed sm:w-4/5 mx-auto">
            Pare de perder vendas e aumente os seus lucros mensais através do
            financiamento imobiliário e do Home Equity.
          </p>

          <div
            class="flex flex-col sm:justify-center justify-start gap-4 bgGradientToBottom w-full p-5"
          >
            <p class="text-base w-5/6 sm:mx-auto">
              Se você deseja se destacar e transformar a sua vida, essa é a
              chance que você esperava.
            </p>
            <button
              class="px-6 py-4 rounded text-xl font-bold font-Public-Sans bg-[#D0FE42] text-black hover:border-white w-fit sm:mx-auto"
            >
              Descubra o Best Broker
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full">
      <div
        class="flex sm:flex-col md:flex-col flex-row-reverse gap-5 items-center max-w-5xl mx-auto"
      >
        <div>
          <img
            src="/images/bestBroker/productBox.png"
            class="w-auto h-fit mx-auto md:max-w-2xl"
            alt=""
          />
        </div>

        <div class="flex flex-col gap-5 sm:px-5 md:max-w-2xl">
          <p class="text-3xl text-center">
            Uma preparação completa para o Corretor que quer
            <span class="text-[#D0FE42] font-bold"> aumentar seus lucros </span>
            através das Ferramentas Financeiras
          </p>

          <ul class="flex flex-row flex-wrap gap-4 items-center justify-center">
            <li
              v-for="{ icon, id, text } of includedTools"
              :key="id"
              class="border-2 border-[#D0FE42] rounded px-8 py-3 shadow-md shadow-[#D0FE4260] flex flex-row items-center gap-4"
            >
              <i :class="icon"></i>
              <span>
                {{ text }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="w-full">
      <div
        class="flex flex-col lg:flex-row xl:flex-row w-full py-10 md:max-w-2xl mx-auto max-w-5xl z-0"
      >
        <div
          class="relative flex-1 flex-grow w-full h-full sm:pt-96 md:pt-96 z-0"
        >
          <img
            src="/images/bestBroker/gasparMottaProfile.png"
            alt=""
            srcset=""
            class="absolute inset-0 mx-auto"
          />
        </div>
        <div class="flex-1 flex flex-col w-full gap-4 text-center px-5 z-10">
          <p class="text-3xl">
            Ministrado por <b>Gaspar Motta</b>, o maior
            <span class="text-[#D0FE42]">
              especialista em crédito imobiliário
            </span>
            da atualidade e <b>CEO da SejaBest</b>
          </p>
          <p class="text-2xl">
            Tendo em sua carreira já estruturado mais de
            <span class="text-[#D0FE42] font-bold">
              R$1 bilhão em créditos.
            </span>
          </p>
          <div class="relative h-fit w-full py-5">
            <img
              src="/images/bestBroker/bgGradientToBottom.svg"
              class="absolute inset-0"
              alt=""
            />
            <div class="flex flex-col gap-4 px-5">
              <p>
                Com mais de 10 anos de experiência com produtos financeiros, tem
                conhecimento dos processos de todos os maiores bancos e
                instituições do país, incluindo:
              </p>
              <img src="/images/bestBroker/banks.png" class="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full">
      <div
        class="flex flex-col gap-8 contentBg text-center py-10 md:max-w-2xl max-w-5xl mx-auto sm:px-5"
      >
        <h2 class="text-3xl py-10">
          <span class="text-[#D0FE42] font-bold"> Mais de 10 horas </span>
          de conteúdos com dicas, exemplos, casos e tudo o que você quer e
          precisa saber
        </h2>
        <ul
          class="flex flex-col lg:flex-row xl:flex-row lg:items-stretch lg:flex-wrap xl:flex-wrap items-center gap-5"
        >
          <li
            v-for="{ id, title, text } of contentCards"
            :key="id"
            class="flex flex-col gap-4 border-2 border-[#D0FE42] p-5 rounded-lg lg:w-1/3 xl:w-1/3 xl:flex-grow lg:flex-grow"
          >
            <div class="flex flex-row items-center gap-2 text-xl">
              <span class="text-[#D0FE42] text-3xl">
                {{ id }}
              </span>
              <h3 class="flex-grow" v-html="title"></h3>
            </div>
            <div>
              {{ text }}
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="w-full bg-gradient-to-b from-black to-transparent">
      <div
        class="flex flex-col gap-4 w-full text-center sm:px-5 max-w-5xl md:max-w-2xl mx-auto"
      >
        <h2 class="text-3xl py-10">
          Aprenda tudo sobre as
          <span class="text-[#D0FE42] font-bold">
            Ferramentas Financeiras
          </span>
          que estão transformando o jeito de monetizar operações
        </h2>

        <div class="w-full">
          <swiper-container
            :slides-per-view="1"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :space-between="20"
            :loop="true"
            :pagination="true"
            :breakpoints="{
              320: {
                slidesPerView: 1,
              },
              1279: {
                slidesPerView: 1.5,
                loop: true,
                spaceBetween: 20,
              },
            }"
            class="w-full"
          >
            <swiper-slide class="relative z-0 mb-6">
              <img
                src="/images/bestBroker/financialTools1.png"
                class="absolute inset-0 object-cover -z-10 w-full"
                alt=""
                srcset=""
              />

              <div
                class="flex flex-col gap-2 text-left py-4 px-8 mx-auto z-10 pt-48"
              >
                <h3 class="text-3xl text-[#D0FE42] font-bold">
                  Financiamento Imobiliário
                </h3>
                <p class="w-full">
                  Nos últimos anos o financiamento imobiliário tem crescido cada
                  vez mais. Só em 2022 foram financiados 715 mil imóveis,
                  levantando o valor total de R$179 bilhões de reais. Esses
                  financiamentos correspondem a 70% das vendas de imóveis no
                  Brasil.
                </p>
              </div>
            </swiper-slide>

            <swiper-slide class="relative z-0 mb-6">
              <img
                src="/images/bestBroker/financialTools2.png"
                class="absolute inset-0 object-cover -z-10 w-full"
                alt=""
                srcset=""
              />

              <div
                class="flex flex-col gap-2 text-left py-4 px-8 mx-auto z-10 pt-48"
              >
                <h3 class="text-3xl text-[#D0FE42] font-bold">Home Equity</h3>
                <p class="w-full">
                  Permite utilizar um imóvel para obter parte do valor dele como
                  crédito sem finalidade específica: quitar dívidas, investir ou
                  para capital de giro, por exemplo. Possui as menores taxas do
                  mercado e o melhor retorno financeiro.
                </p>
              </div>
            </swiper-slide>
          </swiper-container>
        </div>

        <button
          class="px-6 w-full py-4 border-2 border-[#D0FE42] rounded-xl font-bold hover:bg-[#D0FE42] transition-all hover:border-white hover:text-black"
        >
          Quero ser um Corretor 360°
        </button>
      </div>
    </section>

    <section class="w-full py-10">
      <div
        class="sm:px-5 flex flex-col lg:flex-row-reverse z-0 md:max-w-2xl max-w-5xl mx-auto"
      >
        <div
          class="flex flex-row sm:flex-col-reverse items-center bg-gradient-to-b from-[#D0FE4260] to-transparent rounded-xl px-5 w-full"
        >
          <div class="w-full sm:hidden md:hidden flex-1">
            <ul class="list-disc list-inside mx-auto w-fit">
              <li>+10h de videoaulas</li>
              <li>Planilhas e Checklists</li>
              <li>Materiais de apoio</li>
              <li>Suporte constante</li>
              <li>Parceria garantida</li>
            </ul>
          </div>

          <div
            class="flex flex-col w-fit lg:w-full lg:h-fit lg:my-auto items-center gap-5 p-5 text-center mx-auto flex-1"
          >
            <p class="text-2xl">
              Tudo isso de
              <span
                class="text-red-500 relative font-bold after:absolute after:content[''] after:h-0.5 after:w-5/6 after:bg-white after:inset-y-[55%] after:left-2 after:rotate-3"
              >
                R$2499,90
              </span>
              por apenas
            </p>

            <div class="flex flex-row items-baseline gap-2 text-6xl">
              <span class="text-4xl">12x</span>
              <span class="font-bold">143,00</span>
            </div>

            <div>
              <p>Ou <b>R$1499,90</b> à vista no PIX</p>
            </div>

            <button
              class="w-fit px-6 py-4 flex flex-row gap-2 border-4 rounded-xl font-bold bg-[#D0FE42] hover:bg-[#0063F2] transition-all border-white text-black uppercase"
            >
              <i class="fa-solid fa-cart-shopping"></i>
              <span class=""> Compre agora </span>
            </button>
          </div>

          <img
            src="/images/bestBroker/productBox2.png"
            alt=""
            class="sm:hidden max-h-[400px] md:max-h-[300px] object-contain mx-auto -mb-8 lg:mb-0 lg:-ml-8 z-0 flex-1"
          />
        </div>
      </div>
    </section>

    <section class="w-full py-10 bg-gradient-to-b from-black to-transparent">
      <div class="max-w-2xl mx-auto">
        <img
          src="/images/bestBroker/bestHubNotebook.png"
          class="max-w-[700px] mx-auto sm:max-w-auto w-full"
          alt=""
          srcset=""
        />
        <div class="mx-auto w-full sm:-mt-10 px-5">
          <div
            class="flex sm:flex-col sm:gap-5 md:gap-5 items-center md:flex-row md:max-w-2xl max-w-5xl"
          >
            <img
              src="/images/bestBroker/logoBestHub.svg"
              class="mx-auto"
              alt=""
            />

            <h2 class="text-center text-xl py-5">
              Potencialize seus conhecimentos em um
              <span class="text-[#D0FE42]">CRM de crédito</span>
              completo para o seu negócio.
            </h2>
          </div>

          <div class="flex flex-row flex-wrap gap-4 py-5">
            <div
              v-for="{ description, icon, id, title } of bestHubCards"
              :key="id"
              class="border-1 border-[#D9D9D9] w-1/3 sm:w-full flex-grow p-4 rounded-xl my-0 flex flex-col justify-around gap-4"
            >
              <div class="flex flex-row gap-2 items-center w-fit mx-auto">
                <i :class="icon"></i>
                <h3 class="text-xl">{{ title }}</h3>
              </div>
              <p class="sm:text-center">{{ description }}</p>
            </div>
          </div>

          <div class="w-full text-center py-4">
            <button
              class="py-4 px-6 bg-[#C7C7C7] text-black text-xl font-bold rounded"
            >
              Conheça o BestHub
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { register } from 'swiper/element/bundle'
register()

export default defineComponent({
  name: 'BestBrokerLP',
  data() {
    return {
      includedTools: [
        {
          id: 1,
          icon: 'fa-solid fa-video',
          text: 'Videoaulas',
        },
        {
          id: 2,
          icon: 'fa-solid fa-star',
          text: 'Cases de sucesso',
        },
        {
          id: 3,
          icon: 'fa-solid fa-lightbulb',
          text: 'Dicas rápidas',
        },
        {
          id: 4,
          icon: 'fa-solid fa-table',
          text: 'Parceria garantida',
        },
        {
          id: 5,
          icon: 'fa-solid fa-table',
          text: 'Planilhas e Checklists',
        },
        {
          id: 6,
          icon: 'fa-solid fa-square-pen',
          text: 'Tutoriais',
        },
      ],
      contentCards: [
        {
          id: 1,
          title: 'Por que você deve aprender sobre <b>Crédito Imobiliário?</b>',
          text: 'Fique situado sobre o estado atual do mercado de crédito imobiliário e como você, corretor, está deixando de ganhar dinheiro com as ferramentas financeiras.',
        },
        {
          id: 2,
          title: 'O <b>mercado financeiro</b> e suas divisões',
          text: 'Entenda como funciona o mercado financeiro hoje no brasil. Quais órgãos e instituições existem assim como suas funções e atribuições.',
        },
        {
          id: 3,
          title:
            'O que você precisa saber sobre o <b>Financiamento Imobiliário</b>',
          text: 'O guia completo para o Financiamento Imobiliário. Confira os tipos de financiamentos, métodos de entrada, regras gerais, cenários específicos e casos reais para você entender tudo sobre a modalidade.',
        },
        {
          id: 4,
          title: 'O que você precisa saber sobre o <b>Home Equity</b>',
          text: 'Home Equity de A-Z. Aprenda o passo-a-passo completo para o Empréstimo de Garantia de Imóvel: a modalidade que vêm transformando o jeito de fazer dinheiro do corretor moderno.',
        },
        {
          id: 5,
          title: '<b>FinanBest:</b> o Cliente Ideal',
          text: 'Aprenda a guiar seu cliente para o seu primeiro financiamento Imobiliário. O guia completo para contornar objeções, dicas de venda e o que você precisa saber sobre o cliente perfeito.',
        },
        {
          id: 6,
          title: '<b>CashBest:</b> o Cliente Ideal',
          text: 'O guia definitivo sobre identificação e aproveitamento de oportunidades. Descubra o que busca o cliente de Home Equity e confira dicas exclusivas sobre como identificar o cenário perfeito.',
        },
        {
          id: 7,
          title: '<b>Complementos</b> das Operações',
          text: 'Entenda como funcionam os juros, tabelas de amortização, indexadores, impostos. Além disso, veja como funcionam os cartórios e como é o processo de registro de todas as operações.',
        },
        {
          id: 8,
          title: 'O guia de vendas para o <b>Corretor 360°</b>',
          text: 'Uma preparação completa para se tornar um profissional do futuro. Entenda como as ferramentas financeiras podem transformar sua carreira e como se preparar para oportunidades.',
        },
        {
          id: 9,
          title: 'Fintequize a sua marca - <b>A SejaBest</b>',
          text: 'Veja o CEO Gaspar Motta e o case de sucesso da SejaBest. Entenda como a fintech de crédito se tornou referência no mercado financeiro e como você pode transformar a sua marca também.',
        },
      ],
      bestHubCards: [
        {
          id: 1,
          icon: 'fa-solid fa-pen-to-square',
          title: 'Plataforma white label',
          description:
            'Tanto a plataforma como os materiais saem com a cara e a cor da sua marca.',
        },
        {
          id: 2,
          icon: 'fa-solid fa-shapes',
          title: 'Acompanhe os negócios',
          description:
            'Uma área no estilo kanban para facilitar seu dia a dia.',
        },
        {
          id: 3,
          icon: 'fa-solid fa-percent',
          title: 'Simulações em tempo real',
          description: 'Mais agilidade para a sua rotina.',
        },
        {
          id: 3,
          icon: 'fa-solid fa-building-columns',
          title: '+ de 15 bancos parceiros',
          description:
            'Uma plataforma multibancos com as maiores e melhores instituições ao seu dispor.',
        },
      ],
    }
  },
})
</script>
<style lang="scss">
#bestBrokerLP > * {
  margin: 0 !important;
}

.bgGradientToBottom {
  background-image: url('/images/bestBroker/bgGradientToBottom.svg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;

  @screen sm {
    background-size: cover;
  }

  @screen lg {
    background-size: cover;
  }

  @screen xl {
    background-size: cover;
  }
}

.contentBg {
  background-image: url('/images/bestBroker/contentBg.png');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 100%;
}

.bestBrokerHeroBg {
  background-image: url('/images/bestBroker/heroImageMd.png');
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: right top;
  background-size: contain;

  @screen sm {
    background-image: url('/images/bestBroker/heroImageMobile.webp');
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @screen xl {
    background-image: url('/images/bestBroker/heroImageDesktop.png');
    background-position: 80% top;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
