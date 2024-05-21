<template>
  <footer class="w-full flex justify-center bg-bgLight2Color xl:h-screen lg:h-screen">
    <div data-nosnippet class="mt-auto mb-auto">
      <div class="maxWidth flex sm:flex-wrap justify-between pt-8 sm:pt-8 md:pt-8">
        <div class="sm:w-1/2">
          <h2 class="text-xl font-semibold text-textPrimary py-4">Sobre</h2>

          <div class="sm:text-sm text-textPrimary pb-6">
            <RouterLink :to="{ path: '/sobre', query: $route.query }" class="hover:text-textPrimary"
              aria-label="Sobre a Bext">
              Sobre a Bext
            </RouterLink>
          </div>

          <div class="sm:text-sm text-textPrimary pb-6">
            <a :href="'https://portal.seja.best/' +
              useObjectToQueryString($route.query)
              " aria-label="Acesse nosso Portal" class="hover:text-textPrimary" style="text-decoration: none"
              target="_blank">
              Portal
            </a>
          </div>

          <div class="sm:text-sm text-textPrimary pb-6">
            <RouterLink :to="{ path: '/bestHub', query: $route.query }" class="hover:text-textPrimary"
              aria-label="Seja um Parceiro">
              Seja um Parceiro
            </RouterLink>
          </div>

          <div class="sm:text-sm text-textPrimary pb-6">
            <a :href="$options.information.appPartner +
              useObjectToQueryString($route.query)
              " class="hover:text-textPrimary" style="text-decoration: none" aria-label="Acesse a área do Parceiro"
              target="_blank">
              Acesse a área do Parceiro
            </a>
          </div>

          <div class="sm:text-sm text-textPrimary pb-6">
            <a :href="$options.information.jobs + useObjectToQueryString($route.query)
              " class="hover:text-textPrimary" style="text-decoration: none" aria-label="Trabalhe Conosco"
              target="_blank">
              Trabalhe Conosco
            </a>
          </div>

          <div class="sm:text-sm text-textPrimary pb-6">
            <RouterLink :to="{ path: '/faq', query: $route.query }" class="hover:text-textPrimary"
              aria-label="Dúvidas Frequentes">
              Dúvidas Frequentes
            </RouterLink>
          </div>

          <div class="md:hidden xl:hidden lg:hidden">
            <h2 class="text-xl font-semibold text-textPrimary pt-4">Fale Conosco</h2>

            <div class="text-textPrimary pb-2">
              <a :href="$options.information.socialMedia.whatsapp +
              useObjectToQueryString($route.query)
              " aria-label="Fale conosco pelo WhatsApp" class="hover:text-textPrimary" style="text-decoration: none"
                target="_blank">
                <p class="flex text-sm">
                  (47) 3311-0180
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-3 mx-1 mt-1 fill-textPrimary"
                    viewBox="0 0 448 512">
                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </p>
              </a>
            </div>

            <h2 class="text-xl font-semibold text-textPrimary pt-6">Dúvidas?</h2>

            <div class="text-sm text-textPrimary pb-2">
              <RouterLink :to="{ path: '/faq', query: $route.query }" class="hover:text-textPrimary"
                aria-label="Acesse nosso FAQ">
                Acesse nosso FAQ
              </RouterLink>
            </div>
          </div>
        </div>

        <div class="  ">
          <h2 class="text-xl font-semibold text-textPrimary py-4">Produtos</h2>

          <div class="sm:text-sm text-textPrimary pb-6">
            <RouterLink :to="{ path: '/financiamento-imobiliario', query: $route.query }" aria-label="Financiamento"
              class="hover:text-textPrimary">
              Financiamento Imobiliário
            </RouterLink>
          </div>

          <div class="sm:text-sm text-textPrimary pb-6">
            <RouterLink :to="{ path: '/home-equity', query: $route.query }" aria-label="Crédito com Garantia de Imóvel "
              class="hover:text-textPrimary">
              Crédito com Garantia de Imóvel
            </RouterLink>
          </div>

          <div class="sm:text-sm text-textPrimary pb-6">
            <a :href="$options.information.appSimulator +
              useObjectToQueryString($route.query)
              " class="hover:text-textPrimary" style="text-decoration: none" aria-label="Simule seu crédito"
              target="_blank">
              Simule seu crédito
            </a>
          </div>

          <div class="sm:text-sm text-textPrimary pb-6">
            <a :href="$options.information.appClient +
              useObjectToQueryString($route.query)
              " class="hover:text-textPrimary" style="text-decoration: none" aria-label="Acesse sua conta"
              target="_blank">
              Acesse sua conta
            </a>
          </div>

          <div class="sm:text-sm text-textPrimary pb-6">
            <RouterLink :to="{ path: '/termos-de-uso', query: $route.query }" aria-label="Termos de uso"
              class="hover:text-textPrimary">
              Termos de uso
            </RouterLink>
          </div>

          <div class="sm:text-sm text-textPrimary pb-6">
            <RouterLink :to="{ path: '/politica-de-privacidade', query: $route.query }"
              aria-label="Política de Privacidade" class="hover:text-textPrimary">
              Política de Privacidade
            </RouterLink>
          </div>

          <div class="md:hidden xl:hidden lg:hidden">
            <h2 class="text-xl font-semibold text-textPrimary pt-4">
              Precisa de ajuda?
            </h2>

            <h2 class="text-sm text-textPrimary pb-2">contato@bext.vc</h2>

            <div class="text-xl font-semibold text-textPrimary py-4">
              <a :href="$options.information.location +
              useObjectToQueryString($route.query)
              " class="hover:text-textPrimary" style="text-decoration: none" aria-label="Veja no Google"
                target="_blank">
                Escritório
                <i class="ti ti-arrow-top-right"></i>
              </a>
            </div>

            <div id="ra-verified-seal">
              <a href="https://www.reclameaqui.com.br/empresa/best-fintech-de-credito-imobiliario/?utm_source=referral&utm_medium=embbed&utm_campaign=ra_verificada&utm_term=horizontal"
                class="hover:text-textPrimary" style="text-decoration: none" aria-label="Reclame Aqui" target="_blank">
                <img :src="$options.imageConfig.home.reclameaqui" alt="Empresa verificada Reclame Aqui "
                  title="Empresa verificada Reclame Aqui" class="w-auto h-12 rounded-xl" />
              </a>
            </div>
          </div>
        </div>

        <div class="sm:hidden">
          <h2 class="text-xl font-semibold text-textPrimary pt-4">Fale Conosco</h2>

          <div class="text-textPrimary pb-2">
            <a :href="$options.information.socialMedia.whatsapp +
              useObjectToQueryString($route.query)
              " class="hover:text-textPrimary" style="text-decoration: none" aria-label="Fale conosco pelo WhatsApp"
              target="_blank">
              <p class="flex sm:justify-center">
                (47) 3311-0180
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 mt-1 fill-textPrimary"
                  viewBox="0 0 448 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </p>
            </a>
          </div>

          <h2 class="text-xl font-semibold text-textPrimary pt-4">
            Precisa de ajuda?
          </h2>
          <p class="text-textPrimary pb-2">contato@bext.vc</p>

          <h2 class="text-xl font-semibold text-textPrimary pt-4">Dúvidas?</h2>
          <div class="text-textPrimary pb-2">
            <RouterLink :to="{ path: '/faq', query: $route.query }" class="hover:text-textPrimary"
              aria-label="Acesse nosso FAQ">
              Acesse nosso FAQ
            </RouterLink>
          </div>
          <div class="text-xl font-semibold text-textPrimary py-4">
            <a :href="$options.information.location +
              useObjectToQueryString($route.query)
              " class="hover:text-textPrimary" style="text-decoration: none" aria-label="Veja no Google"
              target="_blank">
              Escritório <i class="ti ti-arrow-top-right"></i>
            </a>
          </div>

          <div id="ra-verified-seal">
            <a href="https://www.reclameaqui.com.br/empresa/best-fintech-de-credito-imobiliario/?utm_source=referral&utm_medium=embbed&utm_campaign=ra_verificada&utm_term=horizontal"
              class="hover:text-textPrimary" style="text-decoration: none"
              aria-label="Empresa verificada no Reclame Aqui" target="_blank">
              <img :src="$options.imageConfig.home.reclameaqui" alt="Empresa verificada Reclame Aqui "
                title="Empresa verificada Reclame Aqui " class="w-auto h-12 rounded-xl" />
            </a>
          </div>
        </div>
      </div>
      <div class="maxWidth xl:mt-20  ">
        <div class="w-full flex sm:flex-wrap justify-between py-2 sm:px-2 ">
          <div class="sm:w-5/12">
            <img :src="$options.imageConfig.brand.grayLogo.image" :alt="$options.imageConfig.brand.grayLogo.alt"
              :title="$options.imageConfig.brand.grayLogo.alt" class="w-40 sm:w-11/12 h-auto" />
          </div>
          <div class="sm:w-7/12 flex justify-end sm:mr-0 sm:ml-auto mt-auto mb-auto">
            <a :href="$options.information.socialMedia.youtube +
              useObjectToQueryString($route.query)
              " aria-label="Acesse nosso Youtube" style="text-decoration: none" target="_blank">
              <svg class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-textPrimary" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
            <a :href="$options.information.socialMedia.linkedin +
              useObjectToQueryString($route.query)
              " style="text-decoration: none" aria-label="Acesse nosso LinkedIn" target="_blank">
              <svg class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-textPrimary" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
            <a :href="$options.information.socialMedia.instagram +
              useObjectToQueryString($route.query)
              " aria-label="Acesse nosso Instagram" style="text-decoration: none" target="_blank">
              <svg class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-textPrimary" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a :href="$options.information.socialMedia.facebook +
              useObjectToQueryString($route.query)
              " aria-label="Acesse nosso Facebook" style="text-decoration: none" target="_blank">
              <svg class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-textPrimary" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>
            <a :href="$options.information.socialMedia.telegram +
              useObjectToQueryString($route.query)
              " aria-label="Acesse nosso Telegram" style="text-decoration: none" target="_blank">
              <svg class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-textPrimary" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1080 1080">
                <path class="cls-1"
                  d="M540,3.31C241.77,3.31,0,245.08,0,543.31s241.77,540,540,540,540-241.77,540-540S838.23,3.31,540,3.31Zm235.82,354.71c-7.78,83.91-41.46,287.53-58.6,381.52-7.25,39.76-21.52,53.09-35.34,54.41-30.04,2.84-52.84-20.37-81.94-39.94-45.52-30.6-71.24-49.69-115.43-79.55-51.07-34.53-17.96-53.5,11.14-84.52,7.61-8.1,139.96-131.59,142.52-142.82,.32-1.39,.62-6.6-2.41-9.37-3.03-2.75-7.49-1.81-10.71-1.05-4.56,1.05-77.29,50.37-218.16,147.94-20.64,14.54-39.34,21.63-56.09,21.25-18.46-.42-53.99-10.73-80.4-19.52-32.39-10.8-58.14-16.53-55.9-34.87,1.17-9.55,14-19.33,38.48-29.3,150.78-67.41,251.32-111.83,301.63-133.3,143.64-61.3,173.48-71.95,192.94-72.29,4.28-.09,13.85,1.01,20.05,6.15,5.23,4.36,6.67,10.26,7.36,14.4,.69,4.12,1.55,13.53,.87,20.87Z" />
              </svg>
            </a>
          </div>
        </div>
        <div class="sm:px-2 sm:py-6 py-8">
          <p class="text-xs text-textPrimary">
            A <strong>Bext</strong> é uma plataforma digital que atua como correspondente Bancário para facilitar o processo de
            contratação de empréstimos. Como Correspondente Bancário, seguimos as diretrizes da Resolução nº 3.954, de
            24 de fevereiro de 2011. Somos correspondentes bancários das seguintes instituições: BANCO BARI DE
            INVESTIMENTO E FINANCIAMENTOS S.A. 00.556.603/0001-74, BANCO BRADESCO S.A. 60.746.948.0001-12, BANCO DE
            BRASÍLIA S.A. 00.000.208/0001-00, BANCO C6 S.A. 31.872.495/0001-72, CASHME SOLUÇÕES FINANCEIRAS LTDA.
            34.175.529/0001-68, CREDIBLUE SOLUCOES FINANCEIRAS E IMOBILIARIAS LTDA. 36.750.257/0001-08, CREDITAS
            SOLUCOES FINANCEIRAS LTDA. 17.770.708/0001-24, BANCO DAYCOVAL S.A. 62.232.889/0001-90, GALLERIA SOCIEDADE DE
            CREDITO DIRETO S.A. 51.604.356/0001-75, BANCO INTER S.A. 00.416.968/0001-0, ITAU UNIBANCO S.A.
            60.701.190/0001-04, LIBRA CRÉDITO SOLUÇÕES FINANCEIRAS LTDA. 34.308.576/0001-32, MONETARE SOLUÇÕES
            FINANCEIRAS S.A. 32.295.379/0001-09, PONTTE SOLUCÕES FINANCEIRAS LTDA. 33.296.599/0001-01, SANTANDER - SANB
            PROMOTORA DE VENDAS E COBRANCA S.A. 02.254.093/0001-06, SANTANDER - COMPANHIA PROMOTORA UCI
            14.010.548/0001-27, TRISUL S.A. 08.811.643/0001-27, WP2 CORRETORA DE SEGUROS LTDA. 40.631.755/0001-09, ALL
            IN CRED SOCIEDADE DE CREDITO DIRETO S.A. 51.414.521/0001-26.
          </p>

          <p class="text-xs text-textPrimary py-4">
            Exemplo de empréstimo com Garantia de Imóvel: mínimo 60 meses e máximo 240 meses. Exemplo com Garantia de
            Imóvel – Empréstimo de R$ 100.000,00 para pagar em 15 anos (180 meses) – Prestação inicial de R$ 1.488,08,
            com uma taxa de juros de 1,09% ao mês + IPCA, Sistema de Amortização Price. CET de 16,38% ao ano.
          </p>

          <p class="text-xs text-textPrimary font-bold">
            Bext.vc pertence à Bext Fintech LTDA, CNPJ 26.915.796/0001-04, com sede na Rua Miguel Matte, 687,
            sala 801, Ed. Evolution – CEP 88331-030, Pioneiros, Balneário Camboriú – SC.
          </p>

          <div class="sm:py-6 xl:py-8 ">
            <BacenImage class="w-40 h-auto" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BacenImage from '@/components/imagesSVG/partnersLogo/bacen.image.vue'
import { useObjectToQueryString } from '@/composables/useObjectToQueryString'
export default defineComponent({
  name: 'FooterComponent',
  components: { BacenImage },
  
  data() {
    return {
      isVisible: false,
      useObjectToQueryString,
    }
  },
})
</script>
