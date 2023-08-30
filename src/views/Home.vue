<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <InitialIntro v-if="!formFilling && !formDone" :paciente="paciente" :total="questions.length" />
      <QuestionCounter v-if="formFilling && !formDone" />
      <QuestionContainer v-if="formFilling && !formDone" :questions="questions" />
      <FinalOutro v-if="!formFilling && formDone" :paciente="paciente" />
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/store/app'
  import InitialIntro from '@/components/InitialIntro.vue'
  import FinalOutro from '@/components/FinalOutro.vue'
  import QuestionContainer from '@/components/QuestionContainer.vue'
  import QuestionCounter from '@/components/QuestionCounter.vue'

  const appStore = useAppStore()
  const { formDone, paciente, questions, formFilling } = storeToRefs(appStore)

  onMounted(async () => await appStore.getAllQuestions())
</script>

