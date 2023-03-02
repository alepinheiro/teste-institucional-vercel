<template lang="">
  <div class= "border-1  rounded-xl w-[32%] md:w-5/12 lg:w-5/12 text-white mr-4">
    <div class="rounded-t-xl bg-primary p-4 text-center border-b-4 border-complementaryColor ">
              <div class="text-4xl titleFont">{{titlePart1}}<span class="font-semibold">{{titlePart2}}</span></div>
              <div class="text-xl defaultFontt">{{subtitle1}}</div>
              <div class="text-xl defaultFontt">{{subtitle2}}</div>
            </div>
            <div class="w-full p-6 bg-secondary rounded-b-xl  xl:h-[341px] ">
              <div class="w-full flex  items-center">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.percentageFill" alt="Taxa"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  {{topic1}}
                </div>
              </div>
              <div class="w-full flex items-center" :class="internCard">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.calendarFill" alt="Prazo"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  {{topic2}}
                </div>
              </div>
              <div class="w-full flex items-center" :class="internCard">
                <div class="pr-6 ">
                  <img :src="$options.imageConfig.icons.moneyFill" alt="Valor"  class="w-9 h-8  "/>
                </div>
                <div class="text-xl w-full">
                  {{topic3}}
                </div>
              </div>
              <div class="buttonComplementaryColor1 text-center" :class="btnMt">
                <a :href="$options.information.appSimulator+this.$root.utms"  style=" text-decoration: none;"
                  target="_blank">Faça uma simulação</a>
              </div>
            </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "carousel",
  props: {
    titlePart1: String,
    titlePart2: String,
    subtitle1: String,
    subtitle2: String,
    topic1: String,
    topic2: String,
    topic3: String,
    btnMt: String,
    internCard: String,
    activeIndex: Number,
  },
})

</script>
<style>


</style>