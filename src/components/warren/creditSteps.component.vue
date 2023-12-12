<template>
  <section class="flex flex-col gap-10 ">
    <h2 class="text-3xl md:text-4xl lg:text-4xl text-warren-gold text-center md:max-w-[707px] lg:max-w-5xl lg:w-5/6 mx-auto">
      São apenas
      <b> 4 passos simples </b>
      até a
      <b> liberação do crédito </b>
    </h2>
    <ul class="flex flex-col md:flex-row lg:flex-row xl:flex-row md:flex-wrap lg:flex-wrap gap-5 md:max-w-[707px] lg:max-w-5xl lg:w-5/6 lg:mx-auto xl:max-w-6xl xl:mx-auto">
      <li
        v-for="{ description, id, title } of steps"
        :key="id"
        class="bg-white rounded-3xl p-8 lg:p-16 flex flex-col gap-4 md:w-1/3 lg:w-1/3 md:flex-grow lg:flex-grow"
      >
        <h3 class="text-2xl text-warren-darkCharcoal">
          {{ id }}
          <b>
            {{ title }}
          </b>
        </h3>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="text-warren-grey" v-html="description"></p>
      </li>
    </ul>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CreditSteps',
  data() {
    const steps = [
      {
        id: 1,
        title: 'Simulação',
        description:
          '<b>Simule nas mais de 20 instituições parcerias</b> e obtenha resultados em tempo real.',
      },
      {
        id: 2,
        title: 'Aprovação',
        description:
          '<b>Agora é com a SejaBest:</b> a equipe entrará em contato com os bancos e cartórios.',
      },
      {
        id: 3,
        title: 'Assinatura',
        description:
          'Aqui é feito o envio dos documentos, <b>assinaturas dos contratos</b> e trâmites.',
      },
      {
        id: 4,
        title: 'Liberação',
        description:
          'Com tudo aprovado, o crédito é liberado e depositado na conta do cliente.',
      },
    ]
    return {
      steps,
    }
  },
})
</script>
