<template>
  <div class="flex">
    <div
      class="w-16 h-16 sm:w-10 sm:h-10 bg-white/30 rounded-full absolute m-auto inset-0 animate-ping"
    ></div>
    <button
      title="Reproduzir vídeo"
      aria-label="Reproduzir vídeo"
      class="h-16 w-16 sm:w-10 sm:h-10 absolute inset-0 m-auto"
      @click="$emit('click')"
    >
      <img
        class="w-16"
        src="/images/bestHub/icons/playButton.svg"
        alt="Um triângulo preto indicando a reprodução de vídeo"
      />
    </button>
  </div>
</template>
