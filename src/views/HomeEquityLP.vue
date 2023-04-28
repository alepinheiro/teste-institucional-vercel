<template>
  <div class="w-full bg-bglight2Color overflow-x-hidden overflow-y-hidden">
    <div class="text-textPrimary gradienteSBLight">

      <section class="bgCashBest sm:hidden md:hidden">
        <div class="maxWidth xl:h-screen lg:h-screen">
          <div class="w-full flex mt-6 xl:mt-28 lg:mt-24 md:mt-4 sm:mt-4 mt-0rem">
            <div class="md:pt-4 sm:py-8 max-w-[600px] w-full">
              <div class="bg-primary rounded-xl w-full shadow-2xl mt-12 p-12">

                <div class="text-6xl titleFontBold  text-white  pb-6">
                  <div>
                    <h1>
                      Conheça o
                      <span class="textDecoration text-complementaryColor3">
                        CashBest,</span>
                    </h1>
                    <h1 class="text-6xl titleFontBold pt-2 text-white  ">
                      O Home Equity da SejaBest
                    </h1>
                  </div>
                </div>

                <p class=" pt-0 text-white pb-6">
                  As menores taxas do mercado, a partir de
                  <span class="font-semibold">0,88% a.m + IPCA ou fixa 1,49% a.m.</span>
                  Pegando até
                  <span class="font-semibold">60% do valor</span>
                  do seu imóvel como capital para usar como
                  quiser, você tem até 20 anos para pagar.
                  <span class="text-complementaryColor3"> Assista ao lado e saiba como.</span>
                </p>

                <div class="flex w-full items-center border-b-1 border-complementaryColor3 pb-4">
                  <div class="w-2/12 pr-6 mt-auto mb-auto">
                    <img :src="$options.imageConfig.iconSejaBestWhite" alt="Logo SejaBest" class="w-12 h-auto ">
                  </div>
                  <p class="w-10/12 text-lg text-white">
                    Sem <span class="text-complementaryColor3">Filas.</span>
                    Sem <span class="text-complementaryColor3">gerentes.</span>
                    Sem <span class="text-complementaryColor3">complexidade</span>
                  </p>
                </div>
                <h2 class="w-10/12 text-xl text-white pt-2 font-semibold text-textPrimary">
                  De quanto você precisa?
                </h2>
                <div class="w-full flex  items-end justify-between">
                  <div class="w-9/12 pr-1">
                    <inputMoney id="value" v-model="value" class="w-full" label="" placeholder="" />
                  </div>
                  <div class="w-3/12 ">
                    <div class="p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center">
                      <a
                        :href="$options.information.appRealEstateSimulator + ($root as IRootExtension).utms"
                        style="text-decoration: none;"
                        aria-label="Clique aqui para simular seu financiamento"
                        target="_blank">
                        Simular
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="h-[500px] p-16 w-[600px]  md:w-7/12 text-white md:pr-4 sm:hidden " @click="showVideo = true"> </div>
          </div>

        </div>

      </section>

      <section class=" xl:hidden lg:hidden md:hidden">
        <div class="maxWidth ">
          <div class="w-full ">
            <div class="w-full mt-4" @click="showVideo = true">
              <img
                :src="$options.imageConfig.cashBest.phoneVideo" alt="Video Crédito com Garantia de Imóvel"
                class="w-full h-auto " />
            </div>
            <div class="py-8 sm:py-4  w-full">
              <div class=" rounded-xl w-full ">
                <div class="text-4xl titleFontBold  text-white  pb-2">
                  <div>
                    <h1>
                      Conheça o
                      <span class="textDecoration text-complementaryColor3">CashBest,</span>
                    </h1>
                    <h1 class="text-4xl titleFontBold pt-2 text-white  ">
                      O Home Equity da SejaBest
                    </h1>
                  </div>
                </div>

                <p class=" py-4 text-white pb-6">
                  As menores taxas do mercado, a partir de
                  <span class="font-semibold">0,88% a.m + IPCA ou fixa 1,49% a.m.</span>
                  Pegando até
                  <span class="font-semibold">60% do valor</span>
                  do seu imóvel como capital para usar como quiser, você tem até 20 anos para pagar.
                  <span class="text-complementaryColor3"> Assista acima e saiba como.</span>
                </p>

                <div class="bg-bglight2Color p-4 rounded-xl">

                  <div class="flex w-full items-center border-b-1 border-primary pb-4">
                    <div class="w-2/12 pr-6 mt-auto mb-auto">
                      <img :src="$options.imageConfig.iconSejaBest" alt="SejaBest" class="w-6 h-auto ">
                    </div>
                    <p class="w-10/12 text-lg ">
                      Sem <span class="text-primary">Filas.</span>
                      Sem <span class=" text-primary">gerentes.</span>
                      Sem <span class=" text-primary">complexidade</span>
                    </p>
                  </div>

                  <h2 class="w-10/12 text-xl pt-2 font-semibold text-textPrimary">
                    De quanto você precisa?
                  </h2>
                  <div class="w-full flex  items-end justify-between">
                    <div class="w-9/12 pr-1">
                      <inputMoney id="value" v-model="value" class="w-full" label="" placeholder="" />
                    </div>
                    <div class="w-3/12 ">
                      <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center">
                        <a
                          :href="$options.information.appRealEstateSimulator + ($root as IRootExtension).utms"
                          style="text-decoration: none;"
                          aria-label="Clique aqui para simular seu financiamento"
                          target="_blank">
                          Simular
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      <section class=" sm:hidden xl:hidden lg:hidden">
        <div class="maxWidth ">
          <div class="w-full flex">

            <div class="w-1/2 pt-4 mt-auto mb-auto ">
              <div class="">

                <div class="text-5xl titleFontBold  text-white  pb-6">
                  <h1>
                    Conheça o
                    <span class="textDecoration text-complementaryColor3">CashBest,</span>
                  </h1>
                  <h1 class="text-5xl titleFontBold pt-2 text-white  ">
                    O Home Equity da SejaBest
                  </h1>
                </div>

                <p class=" py-4 text-white pb-6">
                  As menores taxas do mercado, a partir de
                  <span class="font-semibold">0,88% a.m + IPCA ou fixa 1,49% a.m.</span>
                  Pegando até <span class="font-semibold">60% do valor</span>
                  do seu imóvel como capital para usar como quiser, você tem até 20 anos para pagar.
                  <span class="text-complementaryColor3"> Assista ao lado e saiba como.</span>
                </p>
                <div class="flex w-full items-center border-b-1 border-complementaryColor3 pb-4">
                  <div class="w-2/12 pr-6 mt-auto mb-auto">
                    <img :src="$options.imageConfig.iconSejaBestWhite" alt="SejaBest" class="w-12 h-auto ">
                  </div>
                  <p class="w-10/12 text-lg text-white">
                    Sem <span class="text-complementaryColor3">Filas.</span>
                    Sem <span class="text-complementaryColor3">gerentes.</span>
                    Sem <span class="text-complementaryColor3">complexidade</span>
                  </p>
                </div>
                <h2 class="w-10/12 text-xl text-white pt-2 font-semibold text-textPrimary">
                  De quanto você precisa?
                </h2>

                <div class="w-full flex  items-end justify-between">
                  <div class="w-9/12 pr-1">
                    <inputMoney id="value" v-model="value" class="w-full" label="" placeholder="" />
                  </div>
                  <div class="w-3/12 ">
                    <div class="  p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center">
                      <a
                        :href="$options.information.appRealEstateSimulator + ($root as IRootExtension).utms"
                        style=" text-decoration: none;"
                        aria-label="Clique aqui para simular seu financiamento"
                        target="_blank">
                        Simular
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="w-1/2 text-white md:pr-4 sm:hidden mt-auto mb-auto" @click="showVideo = true">
              <img
                :src="$options.imageConfig.cashBest.phoneVideoMd" alt="Video Crédito com Garantia de Imóvel"
                class="w-8/12 h-auto mr-auto ml-auto " />
            </div>
          </div>

        </div>

      </section>

      <section class="md:hidden xl:hidden lg:hidden maxWidth">
        <h1 class="text-7xl lg:text-5xl text-center pb-8 sm:text-5xl md:text-6xl titleFontBold text-white">
          E o que é <br/> Home
          <span class="textDecoration">Equity?</span>
        </h1>
        <p class="text-white text-sm text-center pb-6">
          É o Crédito com Garantia de Imóvel, também conhecido como Empréstimo,
          ideal para quem quer as menores taxas de juros do
          mercado e um longo prazo para pagamento. Nessa modalidade, você
          utiliza sua casa, apartamento ou sala comercial como garantia de
          crédito e desfruta das melhores condições disponíveis no mercado.
        </p>
        <div class="border-1  rounded-xl w-full text-white mr-4">

          <div class=" rounded-t-xl bg-primary p-4 text-center border-b-4 border-complementaryColor1">
            <h1 class="text-4xl titleFont">
              Cash<span class="font-semibold">Best</span>
            </h1>
            <h2 class="text-xl titleFont">
              Conheça o Crédito com <br> Garantia de Imóvel
            </h2>
          </div>

          <div class="w-full p-6 bg-secondary rounded-b-xl">
            <div class="w-full flex  items-center">
              <div class="pr-6 ">
                <img :src="$options.imageConfig.icons.percentageFill" alt="Taxa" class="w-9 h-8  " />
              </div>
              <h3 class="text-xl w-full">
                As menores taxas do mercado, a partir de 0,88% a.m. + IPCA ou 1,49% a.m. Fixa
              </h3>
            </div>
            <div class="w-full flex pt-6 items-center">
              <div class="pr-6 ">
                <img :src="$options.imageConfig.icons.calendarFill" alt="Prazo" class="w-9 h-8  " />
              </div>
              <h3 class="text-xl w-full">
                Prazos de até 20 anos
              </h3>
            </div>
            <div class="w-full flex pt-6 items-center">
              <div class="pr-6 ">
                <img :src="$options.imageConfig.icons.moneyFill" alt="Valor" class="w-9 h-8  " />
              </div>
              <h3 class="text-xl w-full">
                Até 60% do valor do imóvel como capital
              </h3>
            </div>
            <div class="buttonComplementaryColor1 mt-6 text-center">
              <a
                :href="$options.information.appRealEstateSimulator + ($root as IRootExtension).utms"
                style="text-decoration: none;"
                aria-label="Clique aqui para simular seu financiamento"
                target="_blank">
                Faça uma simulação
              </a>
            </div>
          </div>
        </div>

      </section>

      <section class="maxWidth sm:hidden flex md:mt-12 mb-26">
        <div class="w-6/12 sm:w-4/12 mt-auto mb-auto">
          <img
            :src="$options.imageConfig.cashBest.photoMan"
            alt="Home Equity"
            class="w-full h-auto xl:absolute lg:absolute
             xl:w-116 lg:w-[28rem] xl:bottom-[-34rem] lg:bottom-[-31rem] mb-0rem" />
        </div>
        <div class="w-6/12 sm:w-8/12 mt-auto mb-auto xl:mt-12 lg:mt-6">
          <h1 class="text-7xl lg:text-5xl sm:text-5xl md:text-6xl titleFontBold text-right text-white">
            E o que é <br/> Home
            <span class="textDecoration">Equity?</span>
          </h1>
          <p class="text-white text-xl  sm:text-xs md:text-sm text-right w-11/12 mr-0 ml-auto mt-12 sm:mt-6">
            É o Crédito com Garantia de Imóvel, também conhecido como Home Equity,
            ideal para quem quer as menores taxas de juros do
            mercado e um longo prazo para pagamento. Nessa modalidade, você
            utiliza sua casa, apartamento ou sala comercial como garantia de
            crédito e desfruta das melhores condições disponíveis no mercado.
          </p>
          <div class="pt-6 sm:pt-4 text-right">
            <button class="buttonComplementaryColor1">
              <a
                class="sm:text-sm text-2xl"
                :href="$options.information.appRealEstateSimulator + ($root as IRootExtension).utms"
                style="text-decoration: none;"
                aria-label="Clique aqui para simular seu financiamento"
                target="_blank">
                Faça uma simulação
              </a>
            </button>
          </div>
        </div>
      </section>

      <section class="maxWidth flex py-24 sm:py-12">

        <div class="w-1/4 sm:w-1/2 text-white mt-auto mb-auto pr-4">
          <h1 class="text-4xl sm:text-2xl md:text-2xl title-font font-bold">
            Apenas vantagens<br /> para você
          </h1>
          <p class="py-6 text-lg sm:text-sm sm:py-2 ">
            Descubra porque o <span class="text-complementaryColor3">CashBest</span>
            pode ser a sua melhor opção de crédito.
          </p>
        </div>

        <div class="w-3/4 sm:w-1/2 mt-auto mb-auto">
          <div class="bg-bglightColor sm:hidden md:hidden rounded-2xl ">
            <Splide
              :options="{
                type: 'loop',
                perPage: 2,
                perMove: 1,
                padding: '6rem',
                drag: 'free',
                rewind: true,
                focus: 'center',
                pagination: true
              }" aria-label="Vantagens para você">
              <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderPhones" :key="slide.img">
                <article>
                  <img :src="slide.img" class="px-4 " :alt="slide.alt">
                </article>
              </SplideSlide>
            </Splide>
          </div>
          <div class="bg-bglightColor xl:hidden lg:hidden sm:hidden  rounded-2xl ">
            <Splide
              :options="{
                type: 'loop',
                perPage: 2,
                perMove: 1,
                drag: 'free',
              }" aria-label="Vantagens para você">
              <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderPhones" :key="slide.img">
                <div class="w-full">

                  <img :src="slide.img" class="px-4" :alt="slide.alt">
                </div>
              </SplideSlide>

            </Splide>
          </div>
          <div class="bg-bglightColor xl:hidden lg:hidden md:hidden  rounded-2xl ">
            <Splide
              :options="{
                type: 'loop',
                perPage: 1,
                perMove: 1,
                drag: 'free',
              }" aria-label="Vantagens para você">
              <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderPhones" :key="slide.img">
                <div class="w-full">

                  <img :src="slide.img" class="px-4" :alt="slide.alt">
                </div>
              </SplideSlide>

            </Splide>
          </div>

        </div>

      </section>

      <section class="maxWidth flex pt-32 sm:pt-8 pb-56 md:pb-4 sm:pb-4">

        <div class="w-3/4 md:w-2/3 sm:w-1/2 flex mt-auto mb-auto">
          <div class="w-full xl:hidden lg:hidden md:hidden rounded-2xl ">
            <Splide
              :options="{
                type: 'loop',
                perPage: 1,
                perMove: 1,
                drag: 'free',
                height: '23.5rem',
                rewind: true,
                pagination: false,
                direction: 'ttb',
              }" aria-label="Você pode obter o recurso para:">
              <SplideSlide
                v-for="slide in $options.imageConfig.cashBest.sliderMoney1"
                :key="slide.img">
                <article class="pt-[2.5rem]">
                  <img :src="slide.img" class="px-4 w-[20rem]" :alt="slide.alt">
                </article>
              </SplideSlide>
            </Splide>
          </div>
          <div class="w-full xl:hidden lg:hidden sm:hidden rounded-2xl ">
            <Splide
              :options="{
                type: 'loop',
                perPage: 1,
                perMove: 1,
                drag: 'free',
                height: '26.5rem',
                rewind: true,
                pagination: false,
                direction: 'ttb',
              }" aria-label="Você pode obter o recurso para:">
              <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderMoney1" :key="slide.img">
                <div class="pt-[2.5rem]">

                  <img :src="slide.img" class="px-4 w-[20rem]" :alt="slide.alt">
                </div>
              </SplideSlide>
            </Splide>
          </div>
          <div class="w-full xl:hidden lg:hidden sm:hidden rounded-2xl mt-10">
            <Splide
              :options="{
                type: 'loop',
                perPage: 1,
                perMove: 1,
                drag: 'free',
                height: '26.5rem',
                rewind: true,
                pagination: false,
                direction: 'ttb',
              }" aria-label="Você pode obter o recurso para:">
              <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderMoney2" :key="slide.img">
                <div class="pt-[2.5rem]">

                  <img :src="slide.img" class="px-4 w-[20rem]" :alt="slide.alt">
                </div>
              </SplideSlide>
            </Splide>
          </div>
          <div class="w-1/3 sm:hidden md:hidden rounded-2xl ">
            <Splide
              :options="{
                type: 'loop',
                perPage: 1,
                perMove: 1,
                drag: 'free',
                height: '32.5rem',
                rewind: true,
                pagination: false,
                direction: 'ttb',
              }" aria-label="Você pode obter o recurso para:">
              <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderMoney1" :key="slide.img">
                <div class="pt-[2.5rem]">

                  <img :src="slide.img" class="px-4 w-[20rem]" :alt="slide.alt">
                </div>
              </SplideSlide>
            </Splide>
          </div>
          <div class="w-1/3 sm:hidden md:hidden rounded-2xl mt-16">
            <Splide
                :options="{
                type: 'loop',
                perPage: 1,
                perMove: 1,
                drag: 'free',
                height: '32.5rem',
                rewind: true,
                pagination: false,
                direction: 'ttb'
              }" aria-label="Você pode obter o recurso para:">
              <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderMoney2" :key="slide.img">
                <div class="pt-[2.5rem]">

                  <img :src="slide.img" class="px-4 w-[20rem]" :alt="slide.alt">
                </div>
              </SplideSlide>
            </Splide>
          </div>
          <div class="w-1/3 sm:hidden md:hidden rounded-2xl ">
            <Splide
              :options="{
                type: 'loop',
                perPage: 1,
                perMove: 1,
                drag: 'free',
                height: '32.5rem',
                rewind: true,
                pagination: false,
                direction: 'ttb',
              }" aria-label="Você pode obter o recurso para:">
              <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderMoney3" :key="slide.img">
                <div class="pt-[2.5rem]">

                  <img :src="slide.img" class="px-4 w-[20rem]" :alt="slide.alt">
                </div>
              </SplideSlide>
            </Splide>
          </div>

        </div>

        <div class="w-1/4 md:w-1/3 sm:w-1/2 text-right text-white mt-auto mb-auto pr-4">
          <h1 class="text-4xl md:text-2xl sm:text-2xl titleFontBold">
            Faça o que você quiser com <br />
            <span class="text-complementaryColor3">seu dinheiro</span>
          </h1>
          <p class="py-6 xl:text-lg">
            Depois que os recursos forem liberados na sua conta, você pode usar do jeito que quiser.
          </p>
        </div>
      </section>

    </div>

    <section class=" w-full xl:mt-[-10rem] sm:mt-[-8rem] flex justify-center sm:hidden md:hidden">
      <div class="ml-auto  mr-auto maxWidth">
        <Splide
          :options="{
            type: 'loop',
            perPage: 1,
            perMove: 1,
            drag: 'free',
            height: '25rem',
            trimSpace: 'move',
            rewind: true,
            pagination: true,
            arrows: true
          }" aria-label="Você pode obter o recurso para:" class="blueSplide">
          <SplideSlide v-for="slide in $options.imageConfig.cashBest.sliderTutorial" :key="slide.img" ref="splide">
            <article>
              <img :src="slide.img" class="px-4 lg:pt-12" :alt="slide.alt">
            </article>
          </SplideSlide>
        </Splide>
      </div>
    </section>

    <section class="maxWidth xl:hidden lg:hidden">

      <h1 class="titleFontBold text-5xl sm:text-4xl text-primary text-center py-12">
        É tão simples que você só precisa de
        <span class="text-complementaryColor1 ">4 etapas</span>
      </h1>

      <div class="bg-bglight2Color shadow-xl border-1 rounded-xl p-4">
        <div class="flex w-full ">
          <div class="mt-auto mb-auto text-xl pr-4 text-primary" @click="showTutorial(1)">
            <i v-if="!tutorial.show1" class="ti ti-angle-right"></i>
            <i v-if="tutorial.show1" class="ti ti-angle-down"></i>
          </div>
          <h2 class="text-primary text-2xl titleFontBold pr-2">
            <span class="text-complementaryColor1">#1</span> Simule e solicite
          </h2>

        </div>
        <div v-if="tutorial.show1" class="p-4">
          A simulação é feita através do nosso
          <a
            :href="$options.information.appRealEstateSimulator + ($root as IRootExtension).utms" class="text-primary"
            style=" text-decoration: none;" target="_blank">simulador.
          </a>
          Em até minutos você tem o resultado, porque seu tempo é valioso.
        </div>
      </div>

      <div class="bg-bglight2Color mt-4 shadow-xl border-1 rounded-xl p-4">

        <div class="flex w-full ">
          <div class="mt-auto mb-auto text-xl pr-4 text-primary" @click="showTutorial(2)">
            <i v-if="!tutorial.show2" class="ti ti-angle-right"></i>
            <i v-if="tutorial.show2" class="ti ti-angle-down"></i>
          </div>
          <h2 class="text-primary text-2xl titleFontBold pr-2">
            <span class="text-complementaryColor1">#2</span> Envie seus documentos
          </h2>
        </div>

        <p v-if="tutorial.show2" class="p-4">
          Para uma análise de crédito mais detalhada, envie os documentos solicitados.
          Após o envio, seus documentos serão analisados e será enviada uma proposta concreta.
        </p>
      </div>

      <div class="bg-bglight2Color mt-4 shadow-xl border-1 rounded-xl p-4">
        <div class="flex w-full ">
          <div class="mt-auto mb-auto text-xl pr-4 text-primary" @click="showTutorial(3)">
            <i v-if="!tutorial.show3" class="ti ti-angle-right"></i>
            <i v-if="tutorial.show3" class="ti ti-angle-down"></i>
          </div>
          <h2 class="text-primary text-2xl titleFontBold pr-2">
            <span class="text-complementaryColor1">#3</span>
            Avaliação do Imóvel
          </h2>
        </div>
        <p v-if="tutorial.show3" class="p-4">
          Nesta etapa, o imóvel passará por uma avaliação que irá certificar que o mesmo está apto para ser a garantia do
          processo.
        </p>
      </div>

      <div class="bg-bglight2Color mt-4 shadow-xl border-1 rounded-xl p-4">
        <div class="flex w-full ">
          <div class="mt-auto mb-auto text-xl pr-4 text-primary" @click="showTutorial(4)">
            <i v-if="!tutorial.show4" class="ti ti-angle-right"></i>
            <i v-if="tutorial.show4" class="ti ti-angle-down"></i>
          </div>
          <h2 class="text-primary text-2xl titleFontBold pr-2">
            <span class="text-complementaryColor1">#4</span> Liberação do recurso
          </h2>

        </div>
        <p v-if="tutorial.show4" class="p-4">
          Depois de passar por todas as etapas e a documentação estiver concluída,
          seu recurso será liberado! Aqui encerramos a operaçãocom êxito,
          sempre entregando a melhor experiência ao cliente!
        </p>
      </div>
    </section>

    <section class="w-full py-12 lg:pb-16 md:pb-30 md:pt-12 sm:pb-26">
      <div class="maxWidth md:w-full flex sm:h-full mr-auto ml-auto">
        <div
          class="mt-auto mb-auto w-full bg-bglight2Color shadow-xl border-1 rounded-2xl flex-wrap
          flex justify-center p-6 sm:p-2">
          <div class="w-10/12 sm:w-11/12">
            <div class="w-full flex ml-8 sm:ml-0 py-4 ">

              <h1 class="w-1/3 sm:w-2/4 mt-auto mb-0 text-3xl sm:text-xl text-primary text-center font-bold">
                Por que ser Best?
              </h1>

              <div class="w-1/3  sm:w-1/4  mt-auto mb-0">
                <img
                  :src="$options.imageConfig.logoVertical" alt="Logo SejaBest"
                  class="w-24 sm:w-18 h-auto mr-auto ml-auto" />
              </div>
              <div class="w-1/3  sm:w-1/4  mt-auto mb-0 text-center">
                <div class="text-textSecondary text-3xl sm:text-xl mt-auto mb-auto px-4">
                  Bancos
                </div>
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h2 class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">
                As menores taxas do mercado
              </h2>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="As menores taxas do mercado"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="As menores taxas do mercado"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
                </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h2 class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">
                Múltiplas opções de banco
              </h2>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Múltiplas opções de banco"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Múltiplas opções de banco"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h2 class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">
                Plataforma multiprodutos
              </h2>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Plataforma multiprodutos"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Plataforma multiprodutos"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h2 class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">
                Transparência
              </h2>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Transparência"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
                </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Transparência"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h2 class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">
                Processo agilizado
              </h2>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Processo agilizado"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Processo agilizado"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
                </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h2 class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">
                Atendimento 7 dias por semana
              </h2>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Atendimento 7 dias por semana"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Atendimento 7 dias por semana"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h2 class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">
                Assessoria personalizada
              </h2>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Assessoria personalizada"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Assessoria personalizada"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h2 class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">
                Totalmente Digital
              </h2>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Totalmente Digital"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Totalmente Digital"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
                </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h2 class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">
                Sem burocracias
              </h2>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Sem burocracias"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Sem burocracias"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h2 class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">
                Sem filas
              </h2>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Sem filas"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Sem filas"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
            </div>

            <div class="w-full flex py-3 ml-8 sm:ml-0">
              <h2 class="w-1/3 sm:w-2/4  mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base">
                Foco no cliente
              </h2>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Foco no cliente"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Foco no cliente"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <Rodape />

    <PopUpVideo
      v-if="showVideo"
      :video-url="videoUrl"
      :video-style="videoStyle"
      @close-pop-up="showVideo = false" />

  </div>
</template>

<script lang="ts">

import { defineComponent, ComponentPublicInstance } from 'vue'
import PopUpVideo from "@/components/base/popUpVideo.component.vue"
import Rodape from '@/components/base/bannerBottomPage.vue'

type IRootExtension = ComponentPublicInstance & { [key: string]: string }

export default defineComponent({
  name: 'HomeEquity',
  components: {
    PopUpVideo,
    Rodape
  },
  metaInfo() {
    return {
      title: "Conheça o CashBest O Home Equity da SejaBest ",
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: "E o que é Home Equity? É o Crédito com Garantia de Imóvel, também conhecido como Home Equity, ideal para quem quer as menores taxas de juros do mercado e um longo prazo para pagamento. Nessa modalidade, você utiliza sua casa, apartamento ou sala comercial como garantia de crédito e desfruta das melhores condições disponíveis no mercado."
        }
      ]
    }
  },
  data() {
    return {
      isVisible: false,
      value: 250000,
      showVideo: false,
      videoStyle: "w-full h-[36rem] mr-auto ml-auto rounded-2xl ",
      videoUrl: "https://www.youtube.com/embed/eDWFe4Wrb2A",
      tutorial: {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      }
    }
  },
  mounted() {
    let fullUrl = this.$route.fullPath.split("?")
    if (this.$route.fullPath.includes("?")) {
      (this.$root as IRootExtension).utms = "?" + (fullUrl[1])
    }
  },
  methods: {
    showTutorial(item: number) {
      if (item === 1 && this.tutorial.show1 == false) {
        this.tutorial = {
          show1: true,
          show2: false,
          show3: false,
          show4: false,
        }
      } else if (item === 2 && this.tutorial.show2 == false) {
        this.tutorial = {
          show1: false,
          show2: true,
          show3: false,
          show4: false,
        }
      } else if (item === 3 && this.tutorial.show3 == false) {
        this.tutorial = {
          show1: false,
          show2: false,
          show3: true,
          show4: false,
        }
      } else if (item === 4 && this.tutorial.show4 == false) {
        this.tutorial = {
          show1: false,
          show2: false,
          show3: false,
          show4: true,
        }
      } else if (item === 1 && this.tutorial.show1) {
        this.tutorial = {
          show1: false,
          show2: false,
          show3: false,
          show4: false,
        }
      } else if (item === 2 && this.tutorial.show2) {
        this.tutorial = {
          show1: false,
          show2: false,
          show3: false,
          show4: false,
        }
      } else if (item === 3 && this.tutorial.show3) {
        this.tutorial = {
          show1: false,
          show2: false,
          show3: false,
          show4: false,
        }
      } else if (item === 4 && this.tutorial.show4) {
        this.tutorial = {
          show1: false,
          show2: false,
          show3: false,
          show4: false,
        }
      }

    }
  },


})
</script>


<style>

.splide__arrow svg {
  fill: #7c7979;
}

.splide__arrow--prev {
  left: -1.5em;
}

.splide__arrow--next {
  right: -1.5em;
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .splide__arrow--prev {
    left: -1em;
  }

  .splide__arrow--next {
    right: -1em;
  }
}
</style>
