<template>
<!--
    -header = define titulo do cabeçalho
    -headerStyle define estilo do cabeçalho cor do texto cor da borda e cor de fundo
    -show = responsavel por exibir o aviso
    -type = info, warning, danger, success
    -buttonColor = cor do botão
    -iconColor = cor do icone
    -text = texto do aviso
    -msg =mensagem formatada html
    v-if="$root.notification.showMessage"
-->
  <div v-if="$root.notification.showMessage" class=" z-50 fixed  px-4 pb-4  flex items-center justify-center inset-0">
    <div  class=" bg-white border-1 rounded-xl  shadow-xl transform transition-all  ml-auto mr-auto sm:w-full overflow-hidden" >
      <div  class=" lg:w-128 xl:w-128 md:w-128 sm:w-full  flex flex-wrap px-4 pt-8">
        <div  class="w-full mb-4 flex items-center justify-center text-2xl">
          <div  v-if=" $root.notification.type==='warning'" class="rounded-full flex h-16 w-16  items-center justify-center bg-orange-600 text-white" >
            <i  class="ti ti-info" ></i>
          </div>
          <div  v-if=" $root.notification.type==='danger'" class="rounded-full flex h-16 w-16  items-center justify-center bg-red-600 text-white" >
            <i  class="ti ti-close" ></i>
          </div>
          <div  v-if=" $root.notification.type==='success'" class="rounded-full flex h-16 w-16  items-center justify-center bg-green-700 text-white" >
            <i  class="ti ti-check" ></i>
          </div>
          <div  v-if=" $root.notification.type==='info'" class="rounded-full flex h-16 w-16  items-center justify-center bg-blue-700 text-white" >
            <i class="ti ti-info"></i>
          </div>
        </div>
        <div  class="w-full text-gray-600 text-center px-4 items-center justify-center pb-8 " >
          <p class="text-xl "><strong>{{$root.notification.title}}</strong> </p>
          <p>{{$root.notification.message}}</p>
        </div>
      </div>
      <div class="p-4 text-right " >
        <button  @click="close()" class="w-full p-2  rounded-xl  bg-primary text-white
          transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-105 hover:shadow-lg">
          {{$root.notification.buttonText}}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    close(){
      this.$root.notification.showMessage = false
    }
  },

})
</script>

<style scoped>

</style>
