<template>
    <div v-if="visible" class="h-40 sm:h-36 justify-center flex rounded-2xl cookiesPopUP bottom-0 float-right fixed maxWidth"  >
        <div class="flex items-center">
            <div class="flex flex-col p-10 sm:p-6 ">
                <h1 class="text-2xl sm:text-lg font-bold text-primary">Nós usamos cookies</h1>
                <span class="text-sm sm:text-xs text-textPrimary xl:mt-2">
                    Este site utiliza cookies de análise de dados e de desempenho para ver o tráfego, a atividade e outros dados do site.
                    somente quando você reconhece nosso banner de cookie.
                </span>
            <div class="flex flex-wrap gap-6 xl:mt-6 md:mt-2 lg:mt-4 sm:mt-2">
                <button class="bg-secondary text-white p-1 rounded-2xl w-2/12 sm:w-3/12 text-sm sm:text-xs" @click="visible=false">
                    Aceitar
                </button>
                <button class="bg-complementaryColor1 text-white p-1 rounded-2xl w-2/12 sm:w-3/12 text-sm sm:text-xs" @click="visible=false">
                    Rejeitar
                </button>
            </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent} from 'vue';
export default defineComponent({
    name: "cookiesPopUp",
    data(){
    return {
        visible:true
    }}

})
</script>
