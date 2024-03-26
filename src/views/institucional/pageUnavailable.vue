<template>
  <div class="gradienteSBHome h-screen flex justify-center xl:overflow-y-hidden lg:overflow-y-hidden">
    <topbarComponent position="relative" />
    <div class="w-full relative z-10 flex justify-center items-center ">
      <div class="flex flex-wrap items-center ">
        <div class="p-4 sm:w-full">
          <img :src="$options.imageConfig.imagePageUnavailable" class="w-116 sm:w-80 h-auto mr-auto ml-auto" />
        </div>
        <div>
          <div class="p-4 sm:w-full text-white font-semibold mt-auto mb-auto">
            <div class="text-5xl sm:text-4xl">Estamos em manutenção</div>
            <div class="text-xl pt-12">O portal está temporariamente indisponível,<br> estamos trabalhando para melhor
              atendê-los. </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ComponentPublicInstance } from 'vue';
// import userModel from '@/models/user.model';

type IRootExtension = ComponentPublicInstance & { [key: string]: string }

export default defineComponent({
  name: 'PageUnavailable',
  data() {
    return {
      isVisible:  false
    };
  },
})
</script>
