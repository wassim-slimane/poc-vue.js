<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  connected: Boolean
})

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
    <ul>
        <li>
            <RouterLink to="/">Acceuil</RouterLink>
        </li>
        <li v-if="connected === false">
            <RouterLink to="/signUp">Inscription</RouterLink>
        </li>
        <li v-if="connected === false">
            <RouterLink to="/signIn">Connexion</RouterLink>
        </li>
        <li>
            <RouterLink to="/about">À propos de</RouterLink>
        </li>
        <li>
            <RouterLink to="/hasard">Au Hasard</RouterLink>
        </li>    
        <li v-if="connected === true">
            <RouterLink to="/crud">CRUD</RouterLink>
        </li>    
        <li v-if="connected === true">
            <button @click="logout">Se déconnecter</button>
        </li>    
    </ul>
</template>