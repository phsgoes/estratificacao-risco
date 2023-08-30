<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const { step, questions, completed } = storeToRefs(appStore)
</script>
<template>
  <v-row class="my-6 px-6 top-counter">
    <v-spacer />
    <span class="counter">
      {{ step + 1 }} de {{ questions.length }} questões
    </span>
    <v-progress-circular
      v-model="completed"
      class="me-2"
    />
</v-row>
</template>

<style lang="scss" scoped>
.top-counter {
  position: absolute;
  top: 0;
  right: 0;
}

.counter {
  margin-right: 24px;
  display: inline-flex;
  align-items: center;
}
</style>