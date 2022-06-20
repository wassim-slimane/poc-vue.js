<script setup>
import { RouterView } from "vue-router";
import { onMounted, ref } from 'vue'
import HomePage from './views/HomePage.vue'

const connected = ref(false);

onMounted(() => {
  if(localStorage.user) {
    connected.value = true;
  }
})

function logout() {
  connected.value = false;
  if (localStorage.user) {
    localStorage.removeItem('user');
  }
}
</script>

<template>
  <button v-if="connected === true" @click="logout">Se déconnecter</button>
  <RouterView>
  </RouterView>
</template>

<style></style>
