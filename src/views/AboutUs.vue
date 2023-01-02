<template>
  <div class="text-textPrimary bg-bglight2Color">
    <div class="w-full  ">
      <div class="maxWidth p-0" >
        <topbarComponent class="p-4" position="top" />
        <div class="w-full flex pt-8 sm:pt-4 px-4">
          <div class="w-1/2 mb-0 mt-auto">
            <img :src="$options.imageConfig.aboutUs.photoCEO" alt="Foto Gaspar Motta Filho - CEO da SejaBest"  
              class="sm:w-full md:w-11/12 w-8/12  h-auto  "/>
          </div>
          <div class="w-1/2 text-right mt-auto mb-auto ">
            <div class=" text-xl md:text-sm sm:text-xs mr-auto ml-auto font-semibold ">
              Mais de 10 anos de experiência em <br/> crédito Imobiliario, temos uma missão clara:
            </div>
            <div class="text-primary text-6xl md:text-4xl sm:text-lg titleFontBold pt-6 pb-12 sm:pt-0 sm:pb-2">
              Transformar o acesso ao Crédito Imobiliário para 
              <span class="textDecoration">todos</span> os brasileiros.
            </div>
            <div class="border-r-4 border-primary px-4">
              <div class="font-semibold text-xl md:text-sm sm:text-xs">
                Gaspar Motta Filho
              </div>
              <div class="font-semibold text-xl md:text-sm sm:text-xs">
                CEO & Founder
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="w-full bg-primary pt-8">
        <div class="text-center maxWidth  text-4xl sm:text-2xl md:text-3xl pt-12 text-white">
          Por isso, a <span class="text-bold ">SejaBest</span> foi construída sobre 
          <span class="text-bold textDecoration">3 pilares:</span>
        </div>
        <div class="w-full sm:hidden md:hidden">
          <div class="maxWidth flex justify-evenly  pt-12 sm:pt-4">
            <div class="">
              <div class=" py-4" v-on:mouseover="isVisiblePillars.show1=true" v-on:mouseleave="isVisiblePillars.show1=false">
                <img v-if="isVisiblePillars.show1" :src="$options.imageConfig.aboutUs.pillars.color.education"
                class="w-64 h-90  rounded-xl cursor-pointer  "/>
                <img v-if="!isVisiblePillars.show1" :src="$options.imageConfig.aboutUs.pillars.pb.education"
                class="w-64 h-90  rounded-xl cursor-pointer  "/>
              </div>
              
            </div> 
            <div >
              <div class=" py-4" v-on:mouseover="isVisiblePillars.show2=true" v-on:mouseleave="isVisiblePillars.show2=false">
                <img v-if="isVisiblePillars.show2"  :src="$options.imageConfig.aboutUs.pillars.color.technology"
                class="w-64 h-90 rounded-xl cursor-pointer  "/>
                <img v-if="!isVisiblePillars.show2"  :src="$options.imageConfig.aboutUs.pillars.pb.technology"
                class="w-64 h-90 rounded-xl cursor-pointer  "/>
              </div>
              
            </div> 
            <div >
              <div class=" py-4" v-on:mouseover="isVisiblePillars.show3=true" v-on:mouseleave="isVisiblePillars.show3=false">
                <img v-if="isVisiblePillars.show3"  :src="$options.imageConfig.aboutUs.pillars.color.humanized"
                class="w-64 h-90 rounded-xl cursor-pointer "/>
                <img v-if="!isVisiblePillars.show3" :src="$options.imageConfig.aboutUs.pillars.pb.humanized"
                class="w-64 h-90  rounded-xl cursor-pointer  "/>
              </div>
              
            </div> 

          </div>
          <div class="w-full pb-84">
          <div class="relative maxWidth  ">
            <div v-if="isVisiblePillars.show1" class="z-40 absolute maxWidth rounded-xl shadow-xl p-4 bg-gray-100  ">
                <div class="pb-4 text-center text-xl sm:text-md">
                  Através de conteúdos gratuitos que produzimos para <span class="font-semibold">empoderar </span> 
                  o cliente na tomada da <span class="font-semibold">melhor decisão.</span>
                </div>
                <div  class="flex justify-center">
                    <div class="text-primary titleFontBold text-xl pr-4">Confira:</div>
                    <a :href="$options.information.socialMedia.youtube" style=" text-decoration: none;"
                      target="_blank">
                      <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                      
                    </a>
                    <a :href="$options.information.socialMedia.linkedin"  style=" text-decoration: none;"
                      target="_blank">
                      <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                    </a>
                    <a :href="$options.information.socialMedia.instagram" style=" text-decoration: none;"
                      target="_blank">
                      <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a :href="$options.information.socialMedia.facebook"  style=" text-decoration: none;"
                        target="_blank">
                      <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                    </a>
                    <a :href="$options.information.socialMedia.telegram"  style=" text-decoration: none;"
                        target="_blank">
                      <svg class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                        <path class="cls-1" d="M540,3.31C241.77,3.31,0,245.08,0,543.31s241.77,540,540,540,540-241.77,540-540S838.23,3.31,540,3.31Zm235.82,354.71c-7.78,83.91-41.46,287.53-58.6,381.52-7.25,39.76-21.52,53.09-35.34,54.41-30.04,2.84-52.84-20.37-81.94-39.94-45.52-30.6-71.24-49.69-115.43-79.55-51.07-34.53-17.96-53.5,11.14-84.52,7.61-8.1,139.96-131.59,142.52-142.82,.32-1.39,.62-6.6-2.41-9.37-3.03-2.75-7.49-1.81-10.71-1.05-4.56,1.05-77.29,50.37-218.16,147.94-20.64,14.54-39.34,21.63-56.09,21.25-18.46-.42-53.99-10.73-80.4-19.52-32.39-10.8-58.14-16.53-55.9-34.87,1.17-9.55,14-19.33,38.48-29.3,150.78-67.41,251.32-111.83,301.63-133.3,143.64-61.3,173.48-71.95,192.94-72.29,4.28-.09,13.85,1.01,20.05,6.15,5.23,4.36,6.67,10.26,7.36,14.4,.69,4.12,1.55,13.53,.87,20.87Z"/>
                      </svg>
                    </a>
                    
                  </div>
              
              </div>
              <div v-if="isVisiblePillars.show2" class="z-40 absolute maxWidth rounded-xl shadow-xl p-4 bg-gray-100  ">
                <div class="pb-4 text-center text-xl sm:text-md">
                  Onde através da nossa <span class="font-semibold">plataforma multibancos</span> , 
                  de forma simples e segura, conectamos você com <span class="font-semibold">todo o mercado.</span>
                </div>
                <div  class="flex justify-center">
                    <div class="text-primary titleFontBold text-xl pr-4">Confira:</div>
                    <a :href="$options.information.socialMedia.youtube" style=" text-decoration: none;"
                      target="_blank">
                      <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                      
                    </a>
                    <a :href="$options.information.socialMedia.linkedin"  style=" text-decoration: none;"
                      target="_blank">
                      <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                    </a>
                    <a :href="$options.information.socialMedia.instagram" style=" text-decoration: none;"
                      target="_blank">
                      <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a :href="$options.information.socialMedia.facebook"  style=" text-decoration: none;"
                        target="_blank">
                      <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                    </a>
                    <a :href="$options.information.socialMedia.telegram"  style=" text-decoration: none;"
                        target="_blank">
                      <svg class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                        <path class="cls-1" d="M540,3.31C241.77,3.31,0,245.08,0,543.31s241.77,540,540,540,540-241.77,540-540S838.23,3.31,540,3.31Zm235.82,354.71c-7.78,83.91-41.46,287.53-58.6,381.52-7.25,39.76-21.52,53.09-35.34,54.41-30.04,2.84-52.84-20.37-81.94-39.94-45.52-30.6-71.24-49.69-115.43-79.55-51.07-34.53-17.96-53.5,11.14-84.52,7.61-8.1,139.96-131.59,142.52-142.82,.32-1.39,.62-6.6-2.41-9.37-3.03-2.75-7.49-1.81-10.71-1.05-4.56,1.05-77.29,50.37-218.16,147.94-20.64,14.54-39.34,21.63-56.09,21.25-18.46-.42-53.99-10.73-80.4-19.52-32.39-10.8-58.14-16.53-55.9-34.87,1.17-9.55,14-19.33,38.48-29.3,150.78-67.41,251.32-111.83,301.63-133.3,143.64-61.3,173.48-71.95,192.94-72.29,4.28-.09,13.85,1.01,20.05,6.15,5.23,4.36,6.67,10.26,7.36,14.4,.69,4.12,1.55,13.53,.87,20.87Z"/>
                      </svg>
                    </a>
                    
                </div>
              
              </div>
              <div v-if="isVisiblePillars.show3"  class="z-40 absolute maxWidth rounded-xl rigth shadow-xl p-4 bg-gray-100  ">
                <div class="pb-4 text-center text-xl sm:text-md">
                  Com assessores especializados que vão te acompanhar <span class="font-semibold">do inicio ao fim.</span>
                </div>
                <div  class="flex justify-center">
                    <div class="text-primary titleFontBold text-xl pr-4">Confira:</div>
                    <a :href="$options.information.socialMedia.youtube" style=" text-decoration: none;"
                      target="_blank">
                      <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                      
                    </a>
                    <a :href="$options.information.socialMedia.linkedin"  style=" text-decoration: none;"
                      target="_blank">
                      <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                    </a>
                    <a :href="$options.information.socialMedia.instagram" style=" text-decoration: none;"
                      target="_blank">
                      <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a :href="$options.information.socialMedia.facebook"  style=" text-decoration: none;"
                        target="_blank">
                      <svg  class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                    </a>
                    <a :href="$options.information.socialMedia.telegram"  style=" text-decoration: none;"
                        target="_blank">
                      <svg class="w-8 h-8 sm:w-6 sm:h-6 mx-2 fill-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
                        <path class="cls-1" d="M540,3.31C241.77,3.31,0,245.08,0,543.31s241.77,540,540,540,540-241.77,540-540S838.23,3.31,540,3.31Zm235.82,354.71c-7.78,83.91-41.46,287.53-58.6,381.52-7.25,39.76-21.52,53.09-35.34,54.41-30.04,2.84-52.84-20.37-81.94-39.94-45.52-30.6-71.24-49.69-115.43-79.55-51.07-34.53-17.96-53.5,11.14-84.52,7.61-8.1,139.96-131.59,142.52-142.82,.32-1.39,.62-6.6-2.41-9.37-3.03-2.75-7.49-1.81-10.71-1.05-4.56,1.05-77.29,50.37-218.16,147.94-20.64,14.54-39.34,21.63-56.09,21.25-18.46-.42-53.99-10.73-80.4-19.52-32.39-10.8-58.14-16.53-55.9-34.87,1.17-9.55,14-19.33,38.48-29.3,150.78-67.41,251.32-111.83,301.63-133.3,143.64-61.3,173.48-71.95,192.94-72.29,4.28-.09,13.85,1.01,20.05,6.15,5.23,4.36,6.67,10.26,7.36,14.4,.69,4.12,1.55,13.53,.87,20.87Z"/>
                      </svg>
                    </a>
                    
                </div>
              
              </div>
          </div>
          </div>
        </div>
        <div class="maxWidth xl:hidden lg:hidden py-16 ">
          <div @click="showPillarsSM(1)" class="bg-bglight2Color cursor-pointer  shadow-xl border-1 rounded-xl ">
            <div class="flex w-full justify-between">
              <div class="w-5/12 "  >
                <img v-if="!PillarsSM.show1" :src="$options.imageConfig.aboutUs.pillars.sm.education" 
                class="w-full rounded-l-xl "  />
                <img v-if="PillarsSM.show1" :src="$options.imageConfig.aboutUs.pillars.smColor.education" 
                class="w-full  rounded-xl p-1 " />
              </div>
              <div class="text-primary w-5/12 text-center mt-auto mb-auto px-2 text-2xl font-semibold"> Educação</div>
              <div  class="w-2/12 mt-auto mb-auto text-xl pr-4 text-primary text-right">
                
                  <i v-if="!PillarsSM.show1" class="ti ti-angle-right" ></i>
                  <i v-if="PillarsSM.show1" class="ti ti-angle-down" ></i>
              </div>    
            </div>
            <div class=" p-4" v-if="PillarsSM.show1">
              <div class="pb-4  text-xl sm:text-md">
                  Através de conteúdos gratuitos que produzimos para <span class="font-semibold">empoderar </span> 
                  o cliente na tomada da <span class="font-semibold">melhor decisão.</span>
              </div>
            </div>
          </div>
          <div @click="showPillarsSM(2)" class="bg-bglight2Color cursor-pointer mt-4 shadow-xl border-1 rounded-xl ">
            <div class="flex w-full justify-between">
              <div class="w-5/12 "  >
                <img v-if="!PillarsSM.show2" :src="$options.imageConfig.aboutUs.pillars.sm.technology" 
                class="w-full rounded-l-xl "  />
                <img v-if="PillarsSM.show2" :src="$options.imageConfig.aboutUs.pillars.smColor.technology" 
                class="w-full  rounded-xl p-1 " />
              </div>
              <div class="text-primary w-5/12 text-center mt-auto mb-auto px-2 text-2xl font-semibold"> Tecnologia</div>
              <div  class="w-2/12 mt-auto mb-auto text-xl pr-4 text-primary text-right">
                
                  <i v-if="!PillarsSM.show2" class="ti ti-angle-right" ></i>
                  <i v-if="PillarsSM.show2" class="ti ti-angle-down" ></i>
              </div>    
            </div>
            <div class=" p-4" v-if="PillarsSM.show2">
              <div class="pb-4  text-xl sm:text-md">
                Onde através da nossa <span class="font-semibold">plataforma multibancos</span> , 
                  de forma simples e segura, conectamos você com <span class="font-semibold">todo o mercado.</span>
              </div>
            </div>
          </div>
          <div @click="showPillarsSM(3)" class="bg-bglight2Color cursor-pointer mt-4 shadow-xl border-1 rounded-xl ">
            <div class="flex w-full justify-between">
              <div class="w-5/12 "  >
                <img v-if="!PillarsSM.show3" :src="$options.imageConfig.aboutUs.pillars.sm.humanized" 
                class="w-full rounded-l-xl "  />
                <img v-if="PillarsSM.show3" :src="$options.imageConfig.aboutUs.pillars.smColor.humanized" 
                class="w-full  rounded-xl p-1 " />
              </div>
              <div class="text-primary w-5/12 text-center mt-auto mb-auto px-2 text-2xl font-semibold"> Experiência Humanizada</div>
              <div  class="w-2/12 mt-auto mb-auto text-xl pr-4 text-primary text-right">
                
                  <i v-if="!PillarsSM.show3" class="ti ti-angle-right" ></i>
                  <i v-if="PillarsSM.show3" class="ti ti-angle-down" ></i>
              </div>    
            </div>
            <div class=" p-4" v-if="PillarsSM.show3">
              <div class="pb-4  text-xl sm:text-md">
                Com assessores especializados que vão te acompanhar <span class="font-semibold">do inicio ao fim.</span>
              </div>
            </div>
          </div>
          <div class="pb-24"></div>
        </div>
      </div>
      <div class="maxWidth">
        <div class=" w-full  bg-bglight2Color border-1 rounded-xl shadow-lg -mt-32 lg:-mt-48 sm:mt-[-5rem] md:mt-[-5rem] flex">
          <div class="w-1/2  ">
          <img :src="$options.imageConfig.aboutUs.bestVersion" alt="Homem e mulher se abraçando felizes"  
            class="sm:w-full  h-auto rounded-l-xl "/>
          </div>
          <div class="w-1/2 mt-auto mb-auto">
            <div class="text-5xl px-8 sm:px-2 titleFont md:text-3xl sm:text-sm text-primary font-semibold">
              E fazemos isso pois acreditamos que o <span class="font-bold">acesso ao crédito</span> 
              pode levar as pessoas à sua <span class="font-bold textDecoration">melhor</span>
              <span class="font-bold"> versão.</span> 
            </div>
          </div>
        </div>
      </div>
      <div class="maxWidth">
        <div class="text-2xl  w-full xl:w-2/3 lg:w-2/3 xl:text-4xl py-16 sm:py-8 text-center mr-auto ml-auto">  
         Conheça o time de <span class="font-semibold">especialistas</span> responsável por tornar esta missão uma 
         <span class="font-semibold">realidade:</span>
         </div>
        <img :src="$options.imageConfig.aboutUs.team" alt="Time Best"  
          class="w-full  h-auto rounded-l-xl sm:hidden md:hidden"/>
        <img :src="$options.imageConfig.aboutUs.teamSM" alt="Time Best"  
          class="w-full  h-auto rounded-l-xl xl:hidden lg:hidden"/>
      </div>
      <div class="maxWidth">
        <div class="text-5xl titleFontBold text-primary text-center py-8">
          Veja <span class="textDecoration"> quem </span> está falando da gente:
        </div>
        <div class="w-full pt-16 sm:pt-8 md:pt-8 flex flex-wrap justify-center">
          <div class="w-1/5 md:w-1/3 sm:w-1/3 pb-12 sm:pb-8 md:pb-8 flex justify-center">
            <a href="https://valor.globo.com/brasil/coluna/bndes-se-une-a-fintechs-para-baratear-credito.ghtml" 
              style=" text-decoration: none;" target="_blank">
             <img :src="$options.imageConfig.logoMedia.gray.valorEconomico"  class="w-8/12 h-auto "/>
            </a>
          </div>
          <div class="w-1/5 md:w-1/3 sm:w-1/3 pb-12 sm:pb-8 md:pb-8 flex justify-center">
            <a href="https://revistapegn.globo.com/Startups/noticia/2019/03/programa-de-capacitacao-startup-sc-divulga-lista-de-selecionados.html" 
              style=" text-decoration: none;" target="_blank">
              <img :src="$options.imageConfig.logoMedia.gray.peqEmpresasGrandesNegocios"  class="w-8/12 h-auto "/>
            </a>
          </div>
          <div class="w-1/5 md:w-1/3 sm:w-1/3 pb-12 sm:pb-8 md:pb-8 flex justify-center">
            <a href="https://imobireport.com.br/fintechs-de-credito-imobiliario-apostam-na-tecnologia-agilidade-e-multidisciplinaridade-para-superar-momento-de-alta-da-selic/" 
              style=" text-decoration: none;" target="_blank">
              <img :src="$options.imageConfig.logoMedia.gray.imobileReport"  class="w-8/12 h-auto "/>
            </a>
          </div>
          <div class="w-1/5 md:w-1/3 sm:w-1/3 pb-12 sm:pb-8 md:pb-8 flex justify-center">
            <a href="https://economiasc.com/2021/08/06/fintech-aproxima-brasileiros-de-home-equity-modalidade-de-credito-imobiliario-com-melhores-taxas-no-mercado/?utm_source=seja.best" 
              style=" text-decoration: none;" target="_blank">
              <img :src="$options.imageConfig.logoMedia.gray.economiaSC"  class="w-8/12 h-auto "/>
            </a>
          </div>
          <div class="w-1/5 md:w-1/3 sm:w-1/3 pb-12 sm:pb-8 md:pb-8 flex justify-center">
            <a href="https://revistapegn.globo.com/Startups/noticia/2019/03/programa-de-capacitacao-startup-sc-divulga-lista-de-selecionados.html" 
              style=" text-decoration: none;" target="_blank">
              <img :src="$options.imageConfig.logoMedia.gray.agenciaOGlobo"  class="w-8/12 h-auto "/>
            </a>
          </div>
        </div>
      </div>
      <div class="maxWidth">
        <div class="w-full mr-auto ml-auto sm:w-full py-8">
          <Splide :options=" {type:'loop', perPage: 1, perMove: 1, padding: '1rem', drag   : 'free',
             rewind : true, focus  : 'center', pagination:true} " aria-label="Vantagens para você">
            <SplideSlide v-for="slide in $options.imageConfig.depositions">
              <div  class="">
                <img :src="slide.img" 
                class="px-4 w-8/12 mr-auto ml-auto sm:w-full" :alt="slide.alt">
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
      <div class="maxWidth">
        <div class="w-full flex pt-8 sm:pt-4">
          <div class="w-1/2 ">
            <img :src="$options.imageConfig.aboutUs.photoCOO" alt="Foto Gabrielle Motta  - COO da SejaBest"  
              class="sm:w-full md:w-11/12 w-8/12  h-auto "/>
          </div>
          <div class="w-1/2 text-right mt-auto mb-auto ">
            <div class="xl:w-2/3 lg:w-2/3 md:w-2/3 text-4xl md:text-2xl sm:text-xl w-full font-semibold text-right mr-0 ml-auto">
              Por isso nossa marca é um convite:
            </div>
            <div class="xl:w-2/3 lg:w-2/3 md:w-2/3 text-primary pb-8 text-6xl md:text-4xl sm:text-4xl titleFontBold text-right mr-0 ml-auto">
              Seja<span class="textDecoration">Best</span> você também.
            </div>
            <div class="sm:px-1 px-4">
              <button class="buttonComplementaryColor1 sm:py-1 md:p-2"><a class="sm:text-xs text-2xl "
                :href="$options.information.appSimulator"  style=" text-decoration: none;"
                target="_blank">Faça uma simulação</a> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import topbarComponent from '@/components/structure/topbar.component.vue';
export default defineComponent({
  name: 'PrivacyPolicy',
  components:{
    topbarComponent 
  },
  data() {
    return {
      isVisiblePillars:{
        show1:false,
        show2:false,
        show3:false,
      },
      PillarsSM:{ 
        show1:false,
        show2:false,
        show3:false,
        show4:false,
      }
    }
  },
  metaInfo () {
    return {
      title: "Sobre a SejaBest",
      meta: [
        { vmid: 'description', name: 'description', content: "A SejaBest é um fintech focada no mercado de crédito, atuando por meio de dois produtos: Financiamento imobiliário e empréstimo com garantia de imóvel (Home Equity). Mais de 10 anos de experiência em crédito Imobiliario, temos uma missão clara: Transformar o acesso ao Crédito Imobiliário para todos os brasileiros. " }
      ]
    }
  },
  methods: {
      showPillarsSM(item){
        if(item===1 && this.PillarsSM.show1==false){
          this.PillarsSM={
            show1:true,
            show2:false,
            show3:false,
            show4:false,
          }
        }else if(item===2 && this.PillarsSM.show2==false){
          this.PillarsSM={
            show1:false,
            show2:true,
            show3:false,
            show4:false,
          }
        }else if(item===3 && this.PillarsSM.show3==false){
          this.PillarsSM={
            show1:false,
            show2:false,
            show3:true,
            show4:false,
          }
        }else if(item===4 && this.PillarsSM.show4==false){
          this.PillarsSM={
            show1:false,
            show2:false,
            show3:false,
            show4:true,
          }
        }else if(item===1 && this.PillarsSM.show1){
          this.PillarsSM={
            show1:false,
            show2:false,
            show3:false,
            show4:false,
          }
        }else if(item===2 && this.PillarsSM.show2){
          this.PillarsSM={
            show1:false,
            show2:false,
            show3:false,
            show4:false,
          }
        }else if(item===3 && this.PillarsSM.show3){
          this.PillarsSM={
            show1:false,
            show2:false,
            show3:false,
            show4:false,
          }
        }else if(item===4 && this.PillarsSM.show4){
          this.PillarsSM={
            show1:false,
            show2:false,
            show3:false,
            show4:false,
          }
        }

      }
  },
})
</script>
