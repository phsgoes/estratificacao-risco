<template>
  <v-main>
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
  //
</script>
<style lang="scss" scoped>
main.v-main {
  font-family: 'Monserrat', sans-serif;
  background: rgb(2,0,36);
  background: linear-gradient(60deg, rgba(2,0,36,.85) 0%, rgba(30, 75, 158, 1) 20%, rgba(8,66,120,1) 100%);
  // background-color: #2652A3;
  // background-color: #084278;
  color: white;
}
</style>
