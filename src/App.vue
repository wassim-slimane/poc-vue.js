<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue"

</script>

<template>
  <div class="navbar">
    <HeaderComponent />
  </div>
  <RouterView />
</template>

<style></style>
