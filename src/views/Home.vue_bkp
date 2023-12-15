<template>
  <div
    class="w-full bg-bglightColor overflow-x-hidden overflow-y-hidden scroll-smooth"
  >
    <div class="text-textPrimary gradienteSBHome">
      <div class="bgManWithPhone sm:hidden md:hidden">
        <div class="maxWidth xl:h-screen lg:h-screen">
          <TopbarComponent position="relative" />

          <section
            class="w-full px-24 sm:px-0 flex flex-wrap justify-between mt-12 md:mt-4 sm:mt-4"
          >
            <div class="w-1/2 text-white md:pr-4 sm:hidden mt-auto mb-0">
              <div class="flex justify-center">
                <img
                  :src="$options.imageConfig.awards.chashmeIcon"
                  width="210"
                  height="419"
                  alt="Campeão de vendas CashMe 2022"
                  title="Campeão de vendas CashMe 2022"
                  class="w-12 mr-2 h-auto"
                />
                <img
                  :src="$options.imageConfig.awards.DaycovalIcon"
                  width="242"
                  height="462"
                  alt="Campeão de vendas Daycoval 2022"
                  title="Campeão de vendas Daycoval 2022"
                  class="w-12 h-auto"
                />
                <p class="text-white mt-auto mb-auto p-4 text-xl">
                  <span class="font-semibold">Campeões de vendas de 2022</span
                  ><br />
                  pelos bancos <span class="font-semibold">CashMe</span> e
                  <span class="font-semibold">Daycoval</span>
                </p>
              </div>
            </div>
            <div
              class="md:pt-4 sm:py-8 max-w-[400px] w-full md:mr-auto md:ml-auto sm:mr-auto sm:ml-auto"
            >
              <div
                class="bg-WhiteTransparency rounded-xl w-full shadow-2xl p-12"
              >
                <h1 class="text-6xl titleFontBold text-primary">
                  <div>Conseguir Crédito nunca foi</div>
                  <div class="flex">
                    <div>tão</div>
                    <div class="pb-1 textDecoration">&nbsp;fácil</div>
                  </div>
                </h1>

                <h2 class="text-sm py-4">
                  Pré-aprove o seu crédito em até 20 minutos.
                </h2>

                <div
                  class="flex w-full items-center border-b-1 border-textSecondary pb-2"
                >
                  <div class="w-2/12 pr-6 mt-auto mb-auto">
                    <img
                      :src="$options.imageConfig.iconSejaBest"
                      width="303"
                      height="720"
                      alt="Logo SejaBest"
                      title="SejaBest"
                      class="w-full h-auto"
                    />
                  </div>
                  <p class="w-10/12 text-xl text-textPrimary">
                    Sem Filas. Sem gerentes. Sem complexidade
                  </p>
                </div>
                <h1 class="w-10/12 text-xl pt-2 font-semibold text-textPrimary">
                  De quanto você precisa?
                </h1>
                <div class="w-full flex items-end justify-between">
                  <div class="w-9/12 pr-1">
                    <inputMoney
                      id="heroInputDesktop"
                      v-model="value"
                      class="w-full"
                      label=""
                      placeholder=""
                    />
                  </div>
                  <div class="w-3/12">
                    <div
                      class="p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center"
                    >
                      <a
                        :href="
                          $options.information.appSimulator +
                          ($root as IRootExtension).utms
                        "
                        aria-label="Simular"
                        style="text-decoration: none"
                        target="_blank"
                        >Simular</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="maxWidth xl:hidden lg:hidden">
        <TopbarComponent position="relative" />
        <section class="w-full gradienteSBHome mt-4 rounded-2xl text-white">
          <img
            :src="$options.imageConfig.bg.manWithPhone"
            width="1910"
            height="932"
            alt="Um homem olhando seu celular na cidade a noite"
            class="w-full rounded-t-2xl h-auto mr-auto ml-auto"
          />
          <div class="w-full rounded-t-xl">
            <div class="p-4">
              <div class="text-5xl md:text-6xl titleFontBold mt-[-3.8rem]">
                <h1 class="text-center">
                  Conseguir Crédito nunca foi tão
                  <span class="textDecoration">fácil</span>
                </h1>
              </div>

              <h2 class="text-sm py-6 md:text-lg text-center">
                Pré-aprove o seu crédito em até 20 minutos.
              </h2>

              <div
                class="flex w-full items-center border-b-1 border-complementaryColor3 pb-4"
              >
                <div class="w-2/12 pr-6 mt-auto mb-auto">
                  <img
                    :src="$options.imageConfig.iconSejaBestWhite"
                    alt="Logo SejaBest"
                    title="SejaBest"
                    class="w-12 h-auto"
                  />
                </div>

                <p class="w-10/12 text-lg text-white">
                  Sem <span class="text-complementaryColor3">Filas.</span> Sem
                  <span class="text-complementaryColor3">gerentes.</span> Sem
                  <span class="text-complementaryColor3">complexidade</span>
                </p>
              </div>

              <h1 class="w-10/12 text-xl pt-2 font-semibold">
                De quanto você precisa?
              </h1>
              <div
                class="w-full flex text-textPrimary items-end justify-between"
              >
                <div class="w-9/12 pr-1">
                  <inputMoney
                    id="heroInputMobile"
                    v-model="value"
                    class="w-full"
                    label=""
                    placeholder=""
                  />
                </div>
                <div class="w-3/12">
                  <div
                    class="p-2 w-full bg-complementaryColor1 rounded-xl text-white text-center"
                  >
                    <a
                      :href="
                        $options.information.appSimulator +
                        ($root as IRootExtension).utms
                      "
                      aria-label="Simular"
                      style="text-decoration: none"
                      target="_blank"
                      >Simular</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="maxWidth pt-24 sm:pt-8">
        <h1
          id="SaibaMaisAbaixo"
          class="text-6xl lg:text-5xl md:text-4xl sm:px-8 sm:text-4xl titleFontBold text-white text-center md:pt-12 lg:pt-24"
        >
          Como a SejaBest pode te ajudar hoje?
        </h1>
        <h2
          class="text-3xl sm:text-2xl titleFontBold text-white text-center pt-4 pb-20 sm:pb-8"
        >
          Conheça as melhores soluções em Crédito do mercado:
        </h2>
        <!--carousel animado -->
        <div class="md:hidden sm:hidden">
          <carouselHome />
        </div>
        <div class="xl:hidden md:hidden lg:hidden">
          <carouselHomeMobile />
        </div>
        <div class="xl:hidden sm:hidden lg:hidden">
          <carouselHomeTablet />
        </div>
      </section>

      <section
        class="w-full pt-36 pb-36 md:pt-16 md:pb-16 sm:pt-8 sm:pb-8 flex justify-center flex-col items-center"
      >
        <h1
          class="defaultFontBold text-5xl md:text-3xl sm:text-2xl text-white sm:text-center"
        >
          Reconhecida pelo mercado nacional
        </h1>

        <h2 class="mt-1 text-2xl md:text-xl sm:text-lg text-white">
          Conheça nossos últimos destaques
        </h2>

        <div class="maxWidth flex flex-row justify-between mt-6 align-center">
          <div class="w-1/3 sm:w-2/4 sm:pl-4 mb-auto mt-4">
            <img
              :src="$options.imageConfig.awards.newCashme"
              width="823"
              height="437"
              alt="Campeão de vendas CashMe 2022"
              title="Campeão de vendas CashMe 2022"
              class="w-36 sm:w-30 h-auto mr-auto ml-auto"
            />
          </div>
          <div class="w-1/3 sm:w-2/4 sm:pl-4 mt-auto mb-auto">
            <img
              :src="$options.imageConfig.awards.seloDaycoval"
              width="1231"
              height="462"
              alt="Campeão de vendas Banco Daycoval"
              title="Campeão de vendas Banco Daycoval"
              class="w-44 sm:w-40 mt-2 h-auto mr-auto ml-auto sm:ml-auto sm:mr-0"
            />
          </div>
          <div
            class="w-1/3 sm:w-2/4 sm:flex sm:justify-center sm:pl-4 mt-auto mb-auto"
          >
            <img
              :src="$options.imageConfig.awards.seloC6"
              width="1398"
              height="227"
              alt="Conexão C6"
              title="Parceiros C6 Bank"
              class="w-44 sm:w-36 sm:self-center mt-3 h-auto mr-auto ml-auto"
            />
          </div>
        </div>
      </section>

      <section
        class="maxWidth bg-secondary rounded-xl mt-14 mb-14 amr-auto ml-auto"
      >
        <div class="w-full text-center">
          <h1
            class="text-4xl pt-24 sm:pt-8 md:pt-8 sm:text-2xl text-white font-bold"
          >
            A melhor plataforma multibancos
          </h1>
          <h2 class="text-white text-xl">
            Conheça os parceiros que estão decolando com a
            <span class="font-semibold">SejaBest</span>.
          </h2>
        </div>

        <div class="w-full pt-16 sm:pt-8 md:pt-8 flex flex-wrap justify-center">
          <div
            class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"
          >
            <img
              :src="$options.imageConfig.logoPartners.white.cashMe"
              alt="Logo CashMe"
              title="CashMe"
              class="w-44 sm:w-36 md:w-36 h-auto"
            />
          </div>

          <div
            class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"
          >
            <img
              :src="$options.imageConfig.logoPartners.white.inter"
              alt="Logo inter"
              title="inter"
              class="w-44 sm:w-32 md:w-36 h-auto"
            />
          </div>

          <div
            class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"
          >
            <img
              :src="$options.imageConfig.logoPartners.white.rodobens"
              alt="Logo Rodobens"
              title="Rodobens"
              class="w-44 sm:w-36 md:w-36 h-auto"
            />
          </div>

          <div
            class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"
          >
            <img
              :src="$options.imageConfig.logoPartners.white.piratini"
              alt="Logo Piratini"
              title="Piratini"
              class="w-44 sm:w-36 md:w-36 h-auto"
            />
          </div>

          <div
            class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"
          >
            <img
              :src="$options.imageConfig.logoPartners.white.santander"
              alt="Logo Santander"
              title="Santander"
              class="w-44 sm:w-36 md:w-36 h-auto"
            />
          </div>

          <div
            class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"
          >
            <img
              :src="$options.imageConfig.logoPartners.white.daycoval"
              alt="Logo Daycoval"
              title="Daycoval"
              class="w-44 sm:w-36 md:w-36 h-auto"
            />
          </div>

          <div
            class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"
          >
            <img
              :src="$options.imageConfig.logoPartners.white.pontte"
              alt="Logo Pontte"
              title="Pontte"
              class="w-44 sm:w-36 md:w-36 h-auto"
            />
          </div>

          <div
            class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"
          >
            <img
              :src="$options.imageConfig.logoPartners.white.creditas"
              alt="Logo creditas"
              title="creditas"
              class="w-44 sm:w-36 md:w-36 h-auto"
            />
          </div>

          <div
            class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"
          >
            <img
              :src="$options.imageConfig.logoPartners.white.itau"
              alt="Logo Itaú"
              title="Itaú"
              class="w-44 sm:w-32 md:w-36 h-auto"
            />
          </div>

          <div
            class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"
          >
            <img
              :src="$options.imageConfig.logoPartners.white.libra"
              alt="Logo Libra"
              title="Libra"
              class="w-44 sm:w-32 md:w-36 h-auto"
            />
          </div>
          <div
            class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"
          >
            <img
              :src="$options.imageConfig.logoPartners.white.wimo"
              alt="Logo Wimo"
              title="Wimo"
              class="w-44 sm:w-32 md:w-36 h-auto"
            />
          </div>
          <div
            class="w-1/4 md:w-1/3 sm:w-1/2 pb-12 sm:pb-4 md:pb-8 flex justify-center"
          >
            <img
              :src="$options.imageConfig.logoPartners.white.bari"
              alt="Logo Bari"
              title="Bari"
              class="w-44 sm:w-32 md:w-36 h-auto"
            />
          </div>
        </div>
        <div class="p-6 w-9/12 mr-auto ml-auto sm:p-2 md:p-2"></div>
      </section>

      <section
        class="w-full maxWidth pt-24 sm:pt-8 md:py-12 sm:bg-bglightColor"
      >
        <div
          class="w-full px-4 bg-bglightColor rounded-2xl sm:hidden flex justify-center"
        >
          <div class="pt-12 pr-12">
            <img
              :src="$options.imageConfig.home.phoneProposal"
              alt="Mais de 2000 propostas todo mês"
              title="Mais de 2000 propostas todo mês"
              class="w-80 h-auto mr-auto ml-auto"
            />
          </div>
          <div class="pr-12">
            <img
              :src="$options.imageConfig.home.phoneLend"
              alt="Mais de R$ 500 milhões emprestados"
              title="Mais de R$ 500 milhões emprestados"
              class="w-80 h-auto mr-auto ml-auto"
            />
          </div>
          <div class="pt-12">
            <img
              :src="$options.imageConfig.home.phoneRequested"
              alt="Mais de R$ 2.5 bilhões em solicitações"
              title="Mais de R$ 2.5 bilhões em solicitações"
              class="w-80 h-auto mr-auto ml-auto"
            />
          </div>
        </div>

        <div class="bg-primary xl:hidden lg:hidden md:hidden rounded-2xl">
          <Splide
            :options="{
              type: 'loop',
              perPage: 1,
              perMove: 1,
              drag: 'free',
              pagination: false,
            }"
            aria-label="Vantagens para você"
          >
            <SplideSlide>
              <div class="w-8/12 mr-auto ml-auto">
                <img
                  :src="$options.imageConfig.home.phoneProposal"
                  class="px-4"
                  alt="Mais de 2000 propostas todo mês"
                  title="Mais de 2000 propostas todo mês"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="w-8/12 mr-auto ml-auto">
                <img
                  :src="$options.imageConfig.home.phoneLend"
                  class="px-4"
                  alt="Mais de R$ 500 milhões emprestados"
                  title="Mais de R$ 500 milhões emprestados"
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div class="w-8/12 mr-auto ml-auto">
                <img
                  :src="$options.imageConfig.home.phoneRequested"
                  class="px-4"
                  alt="Mais de R$ 2.5 bilhões em solicitações"
                  title="Mais de R$ 2.5 bilhões em solicitações"
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </div>

    <section class="w-full bgMeioAzul p-4 sm:hidden md:hidden pt-24 sm:pt-8">
      <div
        class="maxWidth p-0 shadow-lg bg-bglightColor rounded-2xl flex flex-wrap"
      >
        <div class="w-6/12 mb-auto">
          <div class="pl-24 lg:pl-12 py-16">
            <h1
              class="text-6xl xl:text-7xl titleFontBold text-primary xl:leading-[3.5rem] lg:leading-[3rem]"
            >
              <div class="titleFontBold">Você está</div>
              <div class="flex titleFontBold">
                <div>no</div>
                &nbsp;
                <div class="pb-1 textDecoration">centro</div>
                <div>&nbsp;das</div>
              </div>
              <div class="titleFontBold">nossas decisões</div>
            </h1>

            <p class="pt-6 lg:pt-6 text-xl lg:text-lg text-textSecondary">
              Você merece uma experiência completa, que soma o atendimento
              humanizado e personalizado dos nossos especialistas com a
              tecnologia. O que vai simplificar e agilizar todo o seu processo
              de negociação.
            </p>

            <router-link :to="'/sobre' + ($root as IRootExtension).utms">
              <div
                class="p-2 w-6/12 buttonComplementaryColor1 text-center sm:mb-1 mt-14"
              >
                Conheça a SejaBest
              </div>
            </router-link>
          </div>
        </div>

        <div class="w-6/12">
          <img
            :src="$options.imageConfig.home.phoneMan"
            alt="um homem sentado em um sofá olhando para um telefone celular"
            class="w-full h-auto rounded-r-2xl"
          />
        </div>
      </div>
    </section>

    <section class="maxWidth xl:hidden lg:hidden">
      <div class="bg-white rounded-2xl w-full">
        <div class="rounded-t-2xl bg-primary pb-4"></div>
        <img
          :src="$options.imageConfig.home.phoneManSM"
          width="1200"
          height="795"
          alt="um homem sentado em um sofá olhando para um telefone celular"
          class="w-full h-auto"
        />
        <div class="p-8">
          <h1
            class="text-6xl sm:text-4xl titleFontBold text-center text-primary"
          >
            Você está no <span class="textDecoration">centro</span>
            das nossas decisões.
          </h1>

          <p class="text-textSecondary md:text-xl pt-8 text-justify">
            Acreditamos que você merece uma experiência completa, que soma o
            melhor do nosso atendimento humanizado e personalizado dos nossos
            especialistas com a tecnologia, simplificando e agilizando todos os
            processos.
          </p>

          <router-link :to="'/sobre' + ($root as IRootExtension).utms">
            <div class="mt-4 buttonComplementaryColor1 text-center">
              <a aria-label="Conheça a SejaBest">Conheça a SejaBest</a>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <section class="w-full pt-24 md:pt-8 sm:pt-8 sm:bg-bglightColor">
      <div
        class="maxWidth md:w-full flex sm:h-full mr-auto ml-auto sm:ml-0S shadow-xl rounded-xl border-1"
      >
        <div
          class="mt-auto mb-auto w-full bg-bglightColor rounded-2xl flex-wrap p-6 sm:p-2 flex justify-center"
        >
          <div class="w-10/12 sm:w-11/12">
            <div class="w-full flex ml-8 sm:ml-0 py-4">
              <h1
                class="w-1/3 sm:w-2/4 mt-auto mb-0 text-3xl sm:text-xl text-primary titleFontBold text-center"
              >
                Por que ser Best?
              </h1>

              <div class="w-1/3 sm:w-1/4 mt-auto mb-0">
                <img
                  :src="$options.imageConfig.logoVertical"
                  alt="Logo SejaBest"
                  title="SejaBest"
                  class="w-24 sm:w-24 h-auto mr-auto ml-auto sm:ml-2"
                />
              </div>

              <div class="w-1/3 sm:w-1/4 mt-auto mb-0 text-center">
                <h2
                  class="text-textSecondary text-3xl sm:text-xl mt-auto mb-auto px-4 sm:px-0 sm:ml-4"
                >
                  Bancos
                </h2>
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h3
                class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base"
              >
                As menores taxas do mercado
              </h3>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Menores taxas do mercado"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Menores taxas do mercado"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h3
                class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base"
              >
                Múltiplas opções de banco
              </h3>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Múltiplas opções de banco"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Múltiplas opções de banco"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h3
                class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base"
              >
                Plataforma multiprodutos
              </h3>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Plataforma multiprodutos"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Plataforma multiprodutos"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h3
                class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base"
              >
                Transparência
              </h3>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Transparência"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Transparência"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h3
                class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base"
              >
                Processo agilizado
              </h3>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Processo agilizado"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Processo agilizado"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h3
                class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base"
              >
                Atendimento 7 dias por semana
              </h3>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Atendimento 7 dias por semana"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Atendimento 7 dias por semana"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h3
                class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base"
              >
                Assessoria personalizada
              </h3>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Assessoria personalizada"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Assessoria personalizada"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h3
                class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base"
              >
                Totalmente Digital
              </h3>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Totalmente Digital"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Totalmente Digital"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h3
                class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base"
              >
                Sem burocracias
              </h3>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Sem burocracias"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Sem burocracias"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
            </div>

            <div class="w-full flex border-b py-3 ml-8 sm:ml-0">
              <h3
                class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base"
              >
                Sem filas
              </h3>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Sem filas"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Sem filas"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
            </div>

            <div class="w-full flex py-3 ml-8 sm:ml-0">
              <h3
                class="w-1/3 sm:w-2/4 mt-auto mb-auto text-center text-textSecondary text-xl sm:text-base"
              >
                Foco no cliente
              </h3>
              <div class="w-1/3 sm:w-1/4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.checkFill"
                  alt="Ícone de marcação positiva"
                  title="Foco no cliente"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
              <div class="w-1/3 sm:w-1/4 sm:pl-4 mt-auto mb-auto">
                <img
                  :src="$options.imageConfig.icons.errorFill"
                  alt="Ícone de marcação negativa"
                  title="Foco no cliente"
                  class="w-8 sm:w-6 h-auto mr-auto ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full pt-10 sm:pt-4 md:pt-4 mr-auto ml-auto flex">
      <div class="w-7/12 sm:w-9/12 flex justify-center mt-auto mb-auto">
        <div
          class="w-7/12 md:w-full lg:w-8/12 sm:w-full p-4 sm:p-0 sm:pl-6 md:pl-8 marginl-15R marginl-24R marginl-40R marginl-50R z-10"
        >
          <h1
            class="text-5xl sm:text-2xl md:text-4xl titleFontBold text-primary"
          >
            Quem não é visto não é <span class="textDecoration">lembrado</span>
          </h1>

          <p
            class="text-xl sm:text-sm md:text-sm sm:pt-4 md:pt-4 lg:pt-8 text-textSecondary pt-10"
          >
            Siga a <span class="font-semibold">SejaBest</span> em todos os
            nossos canais pra ficar por dentro de
            <span class="font-semibold"
              >notícias, novidades e oportunidades</span
            >
            do mercado financeiro.
          </p>

          <p
            class="text-xl md:text-sm md:pt-2 sm:text-sm sm:pt-2 lg:pt-4 text-textSecondary pt-8"
          >
            Conheça nosso
            <a
              :href="$options.information.socialMedia.youtube"
              style="text-decoration: none"
              aria-label="Conheça nosso canal no Youtube"
              target="_blank"
              class="text-primary font-semibold"
            >
              canal no YouTube.
            </a>
            Conteúdos educativos
            <span class="font-semibold"> gratuitos </span>
            sobre tudo do mercado de Financiamento Imobiliário.
          </p>

          <div class="flex pt-10 sm:pt-4 md:pt-4 pb-[6rem] sm:pb-13 xl:pb-36">
            <a
              :href="$options.information.socialMedia.youtube"
              style="text-decoration: none"
              target="_blank"
              aria-label="Conheça nosso canal no Youtube"
              class="p-1 pr-2 sm:pr-0 text-white bg-primary sm:text-2xs flex rounded-lg"
            >
              <svg
                class="w-6 h-6 sm:w-5 sm:h-4 mx-2 sm:mx-1 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                />
              </svg>
              <span class="sm:pt-[0.15rem] sm:pr-2">Inscreva-se </span>
            </a>
            <a
              :href="$options.information.socialMedia.linkedin"
              style="text-decoration: none"
              target="_blank"
              aria-label="Conheça nosso Linkedin"
            >
              <svg
                class="w-8 h-8 sm:w-6 sm:h-6 mx-1 fill-primary"
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
              style="text-decoration: none"
              target="_blank"
              aria-label="Conheça nosso Instagram"
            >
              <svg
                class="w-8 h-8 sm:w-6 sm:h-6 mx-1 fill-primary"
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
              style="text-decoration: none"
              target="_blank"
              aria-label="Conheça nosso Facebook"
            >
              <svg
                class="w-8 h-8 sm:w-6 sm:h-6 mx-1 fill-primary"
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
              style="text-decoration: none"
              target="_blank"
              aria-label="Conheça nosso Telegram"
            >
              <svg
                class="w-8 h-8 sm:w-6 sm:h-6 mx-1 fill-primary"
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
        </div>
      </div>
      <div class="w-5/12 flex justify-end">
        <img
          :src="$options.imageConfig.home.mockupPhonesDesktopCrop"
          alt="SejaBest nas Mídias Sociais"
          class="w-[48rem] lg:w-full imgPhonesW xl:mt-[6.5em] xl:absolute mr-0 ml-auto xl:hidden sm:hidden md:hidden h-auto"
        />
        <img
          :src="$options.imageConfig.home.mockupPhonesDesktopCrop"
          alt="SejaBest nas Mídias Sociais"
          class="w-[48rem] lg:w-full imgPhonesW xl:mt-[6.2em] xl:absolute mr-0 ml-auto lg:hidden sm:hidden md:hidden h-auto"
        />
        <img
          :src="$options.imageConfig.home.mockupPhonesSM"
          alt="SejaBest nas Mídias Sociais"
          title="SejaBest nas redes sociais"
          width="500"
          height="1175"
          class="w-full md:w-8/12 mr-0 ml-auto xl:hidden lg:hidden h-auto sm:h-[80%] sm:self-end"
        />
      </div>
    </section>
  </div>
  <Rodape />
  <FooterComponent />
</template>

<script lang="ts">
import Rodape from '@/components/base/bannerBottomPage.vue'
import TopbarComponent from '@/components/structure/topbar.component.vue'
import carouselHome from '@/components/base/carouselHome.vue'
import carouselHomeMobile from '@/components/base/carouselHomeMobile.vue'
import carouselHomeTablet from '@/components/base/carouselHomeTablet.vue'
import { SplideSlide } from '@splidejs/vue-splide'
import { defineComponent, ComponentPublicInstance } from 'vue'

type IRootExtension = ComponentPublicInstance & { [key: string]: string }

export default defineComponent({
  name: 'Home',
  components: {
    TopbarComponent,
    Rodape,
    carouselHome,
    SplideSlide,
    carouselHomeTablet,
    carouselHomeMobile,
  },
  data() {
    return {
      isVisible: false,
      value: 250000,
    }
  },
  mounted() {
    let fullUrl = this.$route.fullPath.split('?')
    if (this.$route.fullPath.includes('?')) {
      ;(this.$root as IRootExtension).utms = '?' + fullUrl[1]
    }
    /* Função para aparecer somente se é a primeira visita, creio que pode ser reutilizado
    if (!localStorage.getItem('isVisited')) {
      localStorage.setItem('isVisited', true);
      this.showCookies= true;
    } else {
      this.showCookies= false;
    } */
  },
  methods: {
    scrollToElement(elementId: string) {
      const element = document.querySelector(elementId) as HTMLElement
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        })
      }
    },
  },
  metaInfo() {
    return {
      title: 'SejaBest',
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content:
            'Crédito Imobiliário nunca foi tão fácil. Conheça as melhores soluções em Crédito Imobiliário do mercado: Conheça o Crédito com Garantia de Imóvel e o Financiamento Imobiliário',
        },
      ],
    }
  },
})
</script>

<style>
.splide__arrow svg {
  fill: #d1d1d1;
}

@media (max-width: 667px) {
  .splide__arrow--next {
    right: -1em;
  }

  .splide__arrow--prev {
    left: -1em;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}

@media (min-width: 668px) and (max-width: 1023px) {
  .splide__arrow--next {
    right: -1em;
  }

  .splide__arrow--prev {
    left: -1em;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .splide__arrow--next {
    right: 2em;
  }

  .splide__arrow--prev {
    left: 2em;
  }
}

@media (min-width: 1850px) {
  .imgPhonesW {
    width: 55rem;
    margin-top: -1.5rem;
  }
}
</style>
