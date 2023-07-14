<template>
    <section class="relative border-b border-[#D0FE42]">
        <div class="relative">
            <img class="static min-h-[40rem] object-cover" src="/images/bestPro/heroBackground.png" alt="" srcset="">
            <div class="h-fit w-full absolute bottom-0 pb-56 sm:pb-12 bg-gradient-to-b from-transparent to-black">
                <div class="flex flex-col max-w-3xl sm:px-5 items-center mx-auto text-center">
                    <h2>
                        Para ser Best, tem que ser Pro
                    </h2>
                    <h1 class="!font-medium !text-3xl">
                        BestPro, a plataforma que vai fintechizar o seu negócio
                    </h1>
                    <a href="#" class="text-black px-6 py-2 rounded-xl font-hover transition-all bg-[#D0FE42] mt-5">Quero ser Pro</a>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto relative sm:hidden md:hidden">
            <img class="static" src="/images/bestPro/discoverBestPro.png" alt="" srcset="">
            <div class="absolute top-[19%] left-[20%] cursor-pointer">
                <div class="relative group">
                    <div class="static h-4 w-4 p-2 rounded-full bg-[#D0FE42] "></div>
                    <div class="absolute h-8 w-8 rounded-full bg-[#D0FE4260] -top-2 -left-2 animate-ping"></div>
                    <div class="group-hover:block hidden bg-red-500 w-24 h-6"></div>
                </div>
            </div>
            <div class="absolute bottom-[32%] left-[14%] cursor-pointer">
                <div class="relative">
                    <div class="static h-4 w-4 p-2 rounded-full bg-[#D0FE42] "></div>
                    <div class="absolute h-8 w-8 rounded-full bg-[#D0FE4260] -top-2 -left-2 animate-ping"></div>
                </div>
            </div>
            <div class="absolute top-[55%] left-[55%] cursor-pointer">
                <div class="relative">
                    <div class="static h-4 w-4 p-2 rounded-full bg-[#D0FE42] "></div>
                    <div class="absolute h-8 w-8 rounded-full bg-[#D0FE4260] -top-2 -left-2 animate-ping"></div>
                </div>
            </div>
            <div class="absolute bottom-[13%] right-[20%] cursor-pointer">
                <div class="relative">
                    <div class="static h-4 w-4 p-2 rounded-full bg-[#D0FE42] "></div>
                    <div class="absolute h-8 w-8 rounded-full bg-[#D0FE4260] -top-2 -left-2 animate-ping"></div>
                </div>
            </div>

        </div>
    </section>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
name: 'HeroSection',
data(){
return {}
}
})
</script>