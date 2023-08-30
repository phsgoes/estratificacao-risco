<script setup lang="ts">
defineProps<{
  paciente: string,
}>()
</script>

<template>
  <section class="outro">
    <svg viewBox="0 0 98.5 98.5">
      <path class="checkmark" fill="none" stroke-width="8" stroke-miterlimit="10" d="M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"/>
    </svg>
    <h3 class="text-subtitle-1 font-weight-normal">Avaliação finalizada com sucesso, {{ paciente }}!</h3>
    <p class="text-caption font-weight-normal">
      Obrigado por preencher o nosso formulário. Nossa equipe médica irá revisar suas informações e, se necessário, entrará em contato para maiores esclarecimentos. Agradecemos a sua colaboração e confiança. Estamos sempre à disposição para auxiliá-lo.  
    </p>
    <h3 class="text-subtitle-1 font-weight-normal">Forma de atendimento</h3>
    <p class="text-caption font-weight-normal">
      Conforme o risco do seu procedimento e as respostas que você nos forneceu sobre seu atual estado de saúde, poderemos prosseguir com a orientação via <u>telemedicina</u>.
    </p>
    <div class="bottom-buttons d-flex align-center flex-column pa-0">
      <v-btn-toggle
        divided
        variant="outlined"
        theme="dark"
        style="min-width: 100%"
      >
        <v-btn
          @click="() => false"
          prepend-icon="mdi-download-outline"
          class="flex-grow-1"
          height="48"
          variant="outlined"
        >
          Baixar respostas
        </v-btn>
      </v-btn-toggle>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.outro {
  display: flex;
  flex-direction: column;

  svg {
    width: 50%;
    max-width: 300px;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    align-self: center;
    margin-bottom: 1em;

    .checkmark {
      stroke: white;
      stroke-dashoffset: 745.74853515625;
      stroke-dasharray: 745.74853515625;
      animation: dash 2s ease-out forwards;
    }

    @keyframes dash {
      0% {
        stroke-dashoffset: 745.74853515625;
      }
      100% {
        stroke-dashoffset: 0;
      }
    }
  }

  h3, h4, .bottom-buttons {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
