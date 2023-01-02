<template>
<div>
  <div class="">

    <div class="maxWidth " >
      <topbarComponent position="top" />

      <h1 class="text-textPrimary text-2xl font-semibold py-4">
        Termos de Uso do Site 
      </h1>
      <div class="text-textPrimary ">
        <div class="text-primary  font-semibold pt-4 pb-2">1. Termos</div>
        <div class="pl-3 pb-3">Ao acessar ao site SejaBest Fintech de Crédito Imobiliário, concorda em cumprir estes termos de serviço, 
          todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais 
          aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais 
          contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</div>
        
        
        <div class="text-primary  font-semibold pt-4 pb-2">2. Uso de Licença</div>
        <div class="pl-3 pb-3">É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no
          site SejaBest Fintech de Crédito Imobiliário , apenas para visualização transitória pessoal e não comercial. Esta é a concessão 
          de uma licença, não uma transferência de título e, sob esta licença, você não pode: </div>
        <ul class="pl-6 pb-3">
            <li>1. modificar ou copiar os materiais; </li>  
            <li>2. usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); </li>  
            <li>3. tentar descompilar ou fazer engenharia reversa de qualquer software contido no site SejaBest Fintech de Crédito Imobiliário; </li>    
            <li>4. remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; </li>  
            <li>5. ou transferir os materiais para outra pessoa ou 'espalhe' os materiais em qualquer outro servidor.</li>  
        </ul>
        <div class="pl-3 pb-3">Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por SejaBest Fintech de Crédito Imobiliário a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</div>
        
        
        <div class="text-primary  font-semibold pt-4 pb-2">3. Isenção de responsabilidade</div>
        <div class="pl-3 pb-3">1. Os materiais no site da SejaBest Fintech de Crédito Imobiliário são fornecidos 'como estão'. SejaBest Fintech de Crédito Imobiliário não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</div>
        <div class="pl-3 pb-3">2. Além disso, a SejaBest Fintech de Crédito Imobiliário não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</div>
        
        <div class="text-primary  font-semibold pt-4 pb-2">4. Limitações</div>
        <div class="pl-3 pb-3">Em nenhum caso a SejaBest Fintech de Crédito Imobiliário ou seus fornecedores serão responsáveis 
          por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) 
          decorrentes do uso ou da incapacidade de usar os materiais em SejaBest Fintech de Crédito Imobiliário, mesmo que SejaBest Fintech 
          de Crédito Imobiliário ou um representante autorizado da SejaBest Fintech de Crédito Imobiliário tenha sido notificado oralmente
          ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas,
          ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</div>
    
        <div class="text-primary  font-semibold pt-4 pb-2">5. Precisão dos materiais</div>
        <div class="pl-3 pb-3">Os materiais exibidos no site da SejaBest Fintech de Crédito Imobiliário podem incluir erros técnicos, 
          tipográficos ou fotográficos. SejaBest Fintech de Crédito Imobiliário não garante que qualquer material em seu site seja preciso, 
          completo ou atual. SejaBest Fintech de Crédito Imobiliário pode fazer alterações nos materiais contidos em seu site a qualquer momento, 
          sem aviso prévio. No entanto, SejaBest Fintech de Crédito Imobiliário não se compromete a atualizar os materiais.</div>

        <div class="text-primary  font-semibold pt-4 pb-2">6. Links</div>
        <div class="pl-3 pb-3">A SejaBest Fintech de Crédito Imobiliário não analisou todos os sites vinculados ao seu 
        site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso 
        por SejaBest Fintech de Crédito Imobiliário do site. O uso de qualquer site vinculado é por conta e risco do usuário.</div>

        <div class="text-primary  font-semibold pt-4 pb-2">7. Modificações</div>
        <div class="pl-3 pb-3">A SejaBest Fintech de Crédito Imobiliário pode revisar estes termos de serviço do site a qualquer momento, 
          sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</div>
        
        <div class="text-primary  font-semibold pt-4 pb-2">8. Lei aplicável</div>
        <div class="pl-3 pb-3">Estes termos e condições são regidos e interpretados de acordo com as leis da SejaBest Fintech de Crédito 
        Imobiliário e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</div>
       </div>
    </div>
    
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import topbarComponent from '@/components/structure/topbar.component.vue';
export default defineComponent({
  name: 'TermsOfUse',
  components:{
    topbarComponent 
  },
  data() {
    return {
      isVisible:false,
    }
  },
})
</script>
