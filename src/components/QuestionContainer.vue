<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
import timeout from '@/composables/UseTimeout'
import { Question } from '@/types/_'

defineProps<{
  questions: Question[],
}>()

const appStore = useAppStore()

const { step } = storeToRefs(appStore)
const nextLoading = ref(false)
const prevLoading = ref(false)

const loadAction = async (action: 'next' | 'prev') => {
  nextLoading.value = action === 'next'
  prevLoading.value = action === 'prev'
  
  await timeout(1000)
  if (nextLoading.value) nextLoading.value = false
  if (prevLoading.value) prevLoading.value = false

  if (action === 'next') appStore.nextStep()
  if (action === 'prev') appStore.prevStep()

  console.log(appStore.questions)  
}
</script>

<template>
  <v-slide-y-transition group>
    <div
      v-for="(question, index) in questions"
      :key="question.id"
      class="form-question"
    >
      <div class="wrapper" v-if="index === step">
        <h3 class="text-subtitle-1 font-weight-normal mb-6">{{ question.pergunta }}</h3>
        <h4 v-if="question.complemento" class="text-caption font-weight-light mb-6">{{ question.complemento }}</h4>
        <div class="mb-6">
          <template v-if="['Texto', 'Numero'].includes(question.tipo)">
            <div v-for="resposta in question.respostas" :key="resposta.id">
              <v-text-field
                v-model="resposta.resposta"
                :type="question.tipo === 'Numero' ? 'number' : 'text'"
                variant="outlined"
                theme="dark"
                autofocus
              />
            </div>
          </template>
          <template v-if="question.tipo === 'Unica'">
            <v-radio-group class="mb-6">
              <v-radio
                v-for="resposta in question.respostas"
                :key="resposta.id"
                :label="resposta.resposta"
                :value="resposta.id"
                theme="dark"
              />
            </v-radio-group>
          </template>
          <template v-if="question.tipo === 'Multipla'">
            <v-checkbox
              v-for="resposta in question.respostas"
              :key="resposta.id"
              :label="resposta.resposta"
              v-model="resposta.selected"
              hide-details
              theme="dark"
            />
          </template>
        </div>
        <div class="bottom-buttons d-flex align-center flex-column pa-0">
          <v-btn-toggle
            divided
            variant="outlined"
            theme="dark"
            style="min-width: 100%"
          >
            <v-btn
              v-if="step >= 1"
              @click="loadAction('prev')"
              :loading="prevLoading"
              prepend-icon="mdi-chevron-left"
              class="flex-grow-1"
              height="48"
              variant="outlined"
            >
              Anterior
            </v-btn>
            <v-btn
              @click="loadAction('next')"
              :loading="nextLoading"
              append-icon="mdi-chevron-right"
              class="flex-grow-1"
              height="48"
              variant="outlined"
              :style="{ 'min-width': (step < 1) ? '100%' : 'auto' }"
            >
              Próximo
            </v-btn>
          </v-btn-toggle>
        </div>
      </div>
    </div>
  </v-slide-y-transition>
</template>

<style lang="scss" scoped>
</style>