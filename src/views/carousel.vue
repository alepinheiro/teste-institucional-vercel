<template lang="">
  <div class="w-screen h-screen">
    <div class="container">
  <input type="radio" name="slider" id="item-1" checked>
  <input type="radio" name="slider" id="item-2">
  <input type="radio" name="slider" id="item-3">
  <div class="cards">
    <label class="card w-4/12" for="item-1" id="song-1">
      <div class="border-1  rounded-xl text-white mr-4">
            <div class=" rounded-t-xl bg-primary p-4  text-center border-b-4 border-complementaryColor1">
              <div class="text-4xl titleFont">Cash<span class="font-semibold">Best</span></div>
              <div class="text-xl defaultFontt">Conheça o Crédito com </div>
              <div class="text-xl defaultFontt">garantia de imóvel</div>
            </div>
            <div class="w-full p-6 bg-secondary rounded-b-xl">
              <div class="w-full flex  items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.percentageFill" alt="Taxa"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  As menores taxas do mercado, a partir de 0,88% a.m. + IPCA ou 1,49% a.m. Fixa
                </div>
              </div>
              <div class="w-full flex pt-6 items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.calendarFill" alt="Prazo"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  Prazos de até 20 anos
                </div>
              </div>
              <div class="w-full flex pt-6 items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.moneyFill" alt="Valor"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  Até 60% do valor do imóvel como capital
                </div>
              </div>
              <div class="buttonComplementaryColor1 mt-6 text-center">
                <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                  target="_blank">Faça uma simulação</a>
              </div>
            </div>
          </div>
          <!--Card-->
    </label>
    <label class="card w-4/12" for="item-2" id="song-2">
      <div class="border-1  rounded-xl text-white mr-4">
            <div class=" rounded-t-xl bg-primary p-4  text-center border-b-4 border-complementaryColor1">
              <div class="text-4xl titleFont">Cash<span class="font-semibold">Best</span></div>
              <div class="text-xl defaultFontt">Conheça o Crédito com </div>
              <div class="text-xl defaultFontt">garantia de imóvel</div>
            </div>
            <div class="w-full p-6 bg-secondary rounded-b-xl">
              <div class="w-full flex  items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.percentageFill" alt="Taxa"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  As menores taxas do mercado, a partir de 0,88% a.m. + IPCA ou 1,49% a.m. Fixa
                </div>
              </div>
              <div class="w-full flex pt-6 items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.calendarFill" alt="Prazo"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  Prazos de até 20 anos
                </div>
              </div>
              <div class="w-full flex pt-6 items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.moneyFill" alt="Valor"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  Até 60% do valor do imóvel como capital
                </div>
              </div>
              <div class="buttonComplementaryColor1 mt-6 text-center">
                <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                  target="_blank">Faça uma simulação</a>
              </div>
            </div>
          </div>
         <!--Card--> 
    </label>
    <label class="card w-4/12" for="item-3" id="song-3">
      <div class="border-1  rounded-xl text-white mr-4">
            <div class=" rounded-t-xl bg-primary p-4  text-center border-b-4 border-complementaryColor1">
              <div class="text-4xl titleFont">Cash<span class="font-semibold">Best</span></div>
              <div class="text-xl defaultFontt">Conheça o Crédito com </div>
              <div class="text-xl defaultFontt">garantia de imóvel</div>
            </div>
            <div class="w-full p-6 bg-secondary rounded-b-xl">
              <div class="w-full flex  items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.percentageFill" alt="Taxa"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  As menores taxas do mercado, a partir de 0,88% a.m. + IPCA ou 1,49% a.m. Fixa
                </div>
              </div>
              <div class="w-full flex pt-6 items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.calendarFill" alt="Prazo"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  Prazos de até 20 anos
                </div>
              </div>
              <div class="w-full flex pt-6 items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.moneyFill" alt="Valor"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  Até 60% do valor do imóvel como capital
                </div>
              </div>
              <div class="buttonComplementaryColor1 mt-6 text-center">
                <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                  target="_blank">Faça uma simulação</a>
              </div>
            </div>
          </div>
    </label>
  </div>
</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s ease-in;
}
input[type=radio] {
  display: none;
}
.card {
  position: absolute;
  height: 100%;
  right: 0;
  margin: auto;
  transition: transform 0.4s ease;
  cursor: pointer;
}
.container {
  height: 100%;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.cards {
  right: 0;
  width: 50%;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}
#item-1:checked ~ .cards #song-3, #item-2:checked ~ .cards #song-1, #item-3:checked ~ .cards #song-2 {
  transform: translatex(-40%) scale(0.8);
  opacity: 0.4;
  z-index: 0;
}
#item-1:checked ~ .cards #song-2, #item-2:checked ~ .cards #song-3, #item-3:checked ~ .cards #song-1 {
  transform: translatex(40%) scale(0.8);
  opacity: 0.4;
  z-index: 0;
}
#item-1:checked ~ .cards #song-1, #item-2:checked ~ .cards #song-2, #item-3:checked ~ .cards #song-3 {
  transform: translatex(0) scale(1);
  opacity: 1;
  z-index: 1;
}
#item-1:checked ~ .cards #song-1 img, #item-2:checked ~ .cards #song-2 img, #item-3:checked ~ .cards #song-3 img {
  box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
}


</style>