<template>
<button
      v-if="modelValue"
      title="Overlay"
      aria-label="Fechar vídeo"
      class="fixed text-white inset-0 bg-black/80 content-[''] w-full"
      @click="modelValue = !modelValue"
    ></button>
    <dialog
      :open="modelValue"
      class="fixed inset-0 z-[200] bg-black bestHubDialogBox rounded-2xl"
    >
      <div class="relative shadow-lg flex justify-center items-center">
        <button
          title="Fechar vídeo"
          aria-label="Fechar vídeo"
          class="absolute -top-4 -right-4 text-white/30 hover:text-white transition-all"
          @click="modelValue = !modelValue"
        >
          <i class="fa-regular fa-circle-xmark"></i>
        </button>
        <iframe
          :key="`${modelValue}`"
          class="bh-videoPlayer rounded-2xl overflow-hidden bg-transparent"
          :src="`https://www.youtube.com/embed/${videoId}`"
          title="Financiamento imobiliário: Vale a pena fazer agora?"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </dialog>
</template>
<script setup lang="ts">
const { modelValue } = defineModels<{ modelValue: Element }>();
defineProps<{ videoId: string }>();
</script>