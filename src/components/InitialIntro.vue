<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/store/app'
import timeout from '@/composables/UseTimeout'

defineProps<{
  total: number,
  paciente: string,
}>()

const appStore = useAppStore()
const nextLoading = ref(false)
const start = async() => {
  nextLoading.value = true
  await timeout(1000)
  appStore.startFillingOutTheForm()
  nextLoading.value = false
}
</script>

<template>
  <section class="intro">
    <svg viewBox="0 0 658 279">
      <path style="fill:#ffffff;stroke:none" d="M 19,80 H 0 v 36 H 19 V 279 H 67 V 116 h 36 v 99 h 48 V 80 H 67 C 67,72.5493 66.0372,64.3494 67.3287,57 71.5014,33.2557 100.56,39.8669 115,48.4529 119.714,51.256 123.937,54.8703 129,57 134.293,44.7163 141.841,33.3909 147,21 115.713,0.297607 66.2756,-12.8575 36.2894,18.1705 32.1441,22.4598 28.4772,27.6659 25.8102,33 18.4436,47.7331 19,63.9979 19,80 Z" />
      <path style="fill:#ffffff;stroke:none" d="M 417.06641 -0.72070312 C 403.21785 -0.76408096 389.37805 1.0515844 380.18555 11.041016 C 370.28055 21.804916 372 35.4926 372 49 L 372 130 L 452 130 L 452 142 L 372 142 L 372 233 C 372 249.894 372.124 265.7877 389 275.0957 C 397.396 279.7267 406.759 279 416 279 L 459 279 L 571 279 C 589.597 279 608.427 279.86494 627 278.96094 C 628.65347 278.88048 630.2687 278.62173 631.85547 278.27148 C 631.57713 278.17238 631.26784 278.11239 631 278 C 643.81 274.957 655.008 264.289 657 251 C 657.12481 251.2974 657.19191 251.6409 657.30078 251.95117 C 657.64013 250.32203 657.885 248.67119 657.96094 247 C 658.81894 228.082 658 208.939 658 190 L 658 76 L 658 45 C 658 32.5164 658.04225 20.710072 648.90625 11.013672 C 634.20225 -4.5900681 609.41 -2.3684758e-15 590 0 L 441 0 C 433.68825 0 425.37554 -0.69467643 417.06641 -0.72070312 z M 572.93359 64.732422 C 575.40222 64.736009 577.921 65 580 65 C 576.295 72.2582 570.32961 78.5645 565.34961 85 C 556.57661 96.3398 547.859 107.726 539 119 C 535.36 123.632 531.81094 128.337 528.21094 133 C 526.69394 134.965 524.4328 137.336 524.4668 140 C 524.5008 142.676 526.83556 145.01 528.35156 147 C 531.92956 151.696 535.55794 156.361 539.21094 161 C 552.82294 178.288 568.367 195.32 580 214 C 575.777 214 569.20184 215.23866 565.46484 212.97266 C 558.97784 209.03866 553.71114 198.963 549.11914 193 C 538.33114 178.992 523.887 164.834 516 149 L 514 149 C 510.67 155.999 505.16683 161.913 500.42383 168 L 479.57617 195 C 475.39517 200.374 470.63822 209.50966 464.69922 212.97266 C 460.85322 215.21566 454.311 214 450 214 C 461.892 194.968 477.91239 177.757 491.65039 160 C 495.01439 155.652 498.39878 151.318 501.80078 147 C 503.33278 145.055 505.82127 142.666 505.82227 140 C 505.82227 137.362 503.36986 134.956 501.88086 133 C 498.30286 128.299 494.651 123.645 491 119 C 481.882 107.398 472.88386 95.6918 463.88086 84 C 459.15586 77.8636 453.528 71.9105 450 65 C 454.211 65 460.08916 63.966144 463.91016 66.027344 C 470.02616 69.327544 474.767 78.6133 479 84 C 486.045 92.9646 492.955 102.035 500 111 C 504.982 117.34 510.75 123.565 514 131 L 516 131 C 518.99 124.707 523.68614 119.523 527.86914 114 C 535.25414 104.25 542.86561 94.6734 550.34961 85 C 554.74961 79.3137 559.79987 69.566744 566.17188 66.027344 C 568.04737 64.985194 570.46497 64.728834 572.93359 64.732422 z " />
      <path style="fill:#ffffff;stroke:none" d="m 231,85 c -2.115,-7.1552 -1,-15.5668 -1,-23 h -43 v 153 h 47 v -62 c 0,-9.623 -1.902,-21.278 2.905,-30 6.78,-12.301 25.675,-28.438 40.091,-18.348 C 288.04,112.382 287,125.089 287,137 v 78 h 48 v -83 c 0,-17.172 1.079,-36.351 -7.324,-52 C 313.471,53.5463 273.201,55.0932 250,67.865 242.513,71.9863 235.005,77.2789 231,85 Z" />
    </svg>
    <p class="welcome">Olá, {{ paciente }}. Seja bem-vindo(a) ao nosso formulário de avaliação anestésica digital. Aqui buscamos informações sobre sua saúde para garantir o melhor atendimento possível. Suas respostas nos ajudam a personalizar protocolos de anestesia de acordo com suas necessidades. Asseguramos que a privacidade e a confidencialidade dos seus dados são nossa prioridade e serão usadas apenas para oferecer a melhor assistência anestésica. Agradecemos a sua colaboração. Seu cuidado começa aqui.</p>
    <p class="questions">{{ total }} questões</p>
    <div class="d-flex align-center flex-column pa-0">
      <v-btn-toggle
        divided
        variant="outlined"
        theme="dark"
        style="min-width: 100%"
      >
        <v-btn
          @click="start"
          :loading="nextLoading"
          append-icon="mdi-chevron-right"
          class="flex-grow-1"
          height="48"
          variant="outlined"
          style="min-width: 100%"
        >
          Prosseguir
        </v-btn>
      </v-btn-toggle>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  display: flex;
  flex-direction: column;

  svg {
    width: 50%;
    max-width: 300px;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    align-self: center;
    margin-bottom: 1em;
  }

  p {
    font-size: .95rem;
    font-weight: 400;
    margin-bottom: 1em;
  }

  .questions {
    text-align: center;
    font-size: .85rem;
    font-weight: 500;
  }
}
</style>
