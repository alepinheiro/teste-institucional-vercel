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
        <div class="w-1/2 sm:w-full flex flex-col gap-4 sm:text-center px-5">
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
            class="flex flex-col sm:justify-center justify-start gap-4 bgGradientToBottom w-fit p-5 max-w-[22rem] sm:max-w-sm lg:max-w-sm text-center sm:mx-auto"
          >
            <p class="text-base w-fit sm:mx-auto ">
              Se você deseja se destacar e transformar a sua vida, essa é a
              chance que você esperava.
            </p>
            <button
              class="px-6 py-4 rounded text-xl font-bold font-Public-Sans bg-[#D0FE42] text-black hover:border-white w-fit mx-auto"
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
        class="flex flex-col gap-8 contentBg text-center py-10 md:max-w-2xl max-w-5xl mx-auto px-5"
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
        class="flex flex-col gap-4 w-full text-center px-5 max-w-5xl md:max-w-2xl mx-auto"
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
            :space-between="30"
            :loop="true"
            :pagination="true"
            :breakpoints="{
              320: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1.5,
                loop: true,
                spaceBetween: 30,
              },
              1279: {
                slidesPerView: 1.5,
                loop: true,
                spaceBetween: 30,
              },
            }"
            class="w-full"
          >
            <swiper-slide class="relative z-0 mb-6 ">
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
          class="px-6 w-fit mx-auto py-4 border-2 border-[#D0FE42] rounded-xl font-bold hover:bg-[#D0FE42] transition-all hover:border-white hover:text-black"
        >
          Quero ser um Corretor 360°
        </button>
      </div>
    </section>

    <section class="w-full">
      <div class="pt-10 ">
        <h2 class="text-3xl sm:text-center py-5 max-w-5xl mx-auto text-center px-5">
          Faça como eles e descubra como o
          <b
            >conhecimento da
            <span class="text-[#D0FE42]">SejaBest</span>
          </b>

          pode transformar a sua carreira.
        </h2>
        <div class="w-full py-5">
          <swiper-container
            :slides-per-view="4"
            :autoplay="{
              delay: 4700,
              disableOnInteraction: false,
            }"
            :space-between="30"
            :initial-slide="1"
            :centered-slides="true"
            :loop="true"
            :breakpoints="{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }"
          >
            <swiper-slide
              v-for="index of [1, 2, 3]"
              :key="index"
              class="h-auto mt-auto"
            >
              <img
                :src="`/images/getOutRent/testimonials/${index}.png`"
                alt=""
                srcset=""
              />
            </swiper-slide>
          </swiper-container>
          <div class="w-full py-5">
            <swiper-container
              :slides-per-view="3"
              :autoplay="{
                delay: 6200,
                disableOnInteraction: false,
              }"
              :space-between="30"
              :initial-slide="1"
              :centered-slides="true"
              :loop="true"
              :breakpoints="{
                320: {
                  slidesPerView: 1.1,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
              }"
            >
              <swiper-slide
                v-for="index in [4, 5, 6]"
                :key="index"
                class="h-auto mb-auto"
              >
                <img
                  :src="`/images/getOutRent/testimonials/${index}.png`"
                  alt=""
                  srcset=""
                />
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-10">
      <div
        class="px-5 flex flex-col lg:flex-row-reverse z-0 md:max-w-2xl max-w-5xl mx-auto"
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

    <section>
      <div class="flex flex-wrap justify-around items-center py-24">

        <div class="flex flex-row gap-5 sm:w-full items-center justify-center sm:pb-6">
          <img
            src="/images/logoBest/logoGray.svg"
            class="h-12 w-auto"
          />
          <img src="/images/bestBroker/logoBestHubGray.svg" class="h-14 w-auto" />
        </div>

        <div class="text-zinc-600 text-sm text-center sm:hidden md:hidden">
          <div>
            © {{ new Date().getFullYear() }} SejaBest Fintech de Crédito
          </div>
          <div><a href="www.seja.best">www.seja.best</a></div>
        </div>
        <div class="flex sm:w-full justify-center sm:pb-6 fill-zinc-600">
          <a
            :href="$options.information.socialMedia.youtube"
            aria-label="Acesse nosso Youtube"
            style="text-decoration: none"
            target="_blank"
          >
            <svg
              class="w-8 h-8 sm:w-6 sm:h-6 mx-2 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
              />
            </svg>
          </a>
          <a
            :href="$options.information.socialMedia.linkedin"
            style="text-decoration: none"
            aria-label="Acesse nosso LinkedIn"
            target="_blank"
          >
            <svg
              class="w-8 h-8 sm:w-6 sm:h-6 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
            </svg>
          </a>
          <a
            :href="$options.information.socialMedia.instagram"
            aria-label="Acesse nosso Instagram"
            style="text-decoration: none"
            target="_blank"
          >
            <svg
              class="w-8 h-8 sm:w-6 sm:h-6 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
          <a
            :href="$options.information.socialMedia.facebook"
            aria-label="Acesse nosso Facebook"
            style="text-decoration: none"
            target="_blank"
          >
            <svg
              class="w-8 h-8 sm:w-6 sm:h-6 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              />
            </svg>
          </a>
          <a
            :href="$options.information.socialMedia.telegram"
            aria-label="Acesse nosso Telegram"
            style="text-decoration: none"
            target="_blank"
          >
            <svg
              class="w-8 h-8 sm:w-6 sm:h-6 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1080 1080"
            >
              <path
                class="cls-1"
                d="M540,3.31C241.77,3.31,0,245.08,0,543.31s241.77,540,540,540,540-241.77,540-540S838.23,3.31,540,3.31Zm235.82,354.71c-7.78,83.91-41.46,287.53-58.6,381.52-7.25,39.76-21.52,53.09-35.34,54.41-30.04,2.84-52.84-20.37-81.94-39.94-45.52-30.6-71.24-49.69-115.43-79.55-51.07-34.53-17.96-53.5,11.14-84.52,7.61-8.1,139.96-131.59,142.52-142.82,.32-1.39,.62-6.6-2.41-9.37-3.03-2.75-7.49-1.81-10.71-1.05-4.56,1.05-77.29,50.37-218.16,147.94-20.64,14.54-39.34,21.63-56.09,21.25-18.46-.42-53.99-10.73-80.4-19.52-32.39-10.8-58.14-16.53-55.9-34.87,1.17-9.55,14-19.33,38.48-29.3,150.78-67.41,251.32-111.83,301.63-133.3,143.64-61.3,173.48-71.95,192.94-72.29,4.28-.09,13.85,1.01,20.05,6.15,5.23,4.36,6.67,10.26,7.36,14.4,.69,4.12,1.55,13.53,.87,20.87Z"
              />
            </svg>
          </a>
        </div>
        <div
          class="sm:w-full md:w-full md:pt-12 text-zinc-600 text-sm text-center xl:hidden lg:hidden"
        >
          <div>
            © {{ new Date().getFullYear() }} SejaBest Fintech de Crédito
          </div>
          <div><a href="www.seja.best">www.seja.best</a></div>
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
    background-position: left top;
    background-size: 22rem 10rem;
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
  }
}
</style>
