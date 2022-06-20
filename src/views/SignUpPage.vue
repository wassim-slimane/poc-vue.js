<script setup>
import { ref } from "vue";
import { axios } from "axios"

const email = ref(null);
const password = ref(null);

function onSubmit() {
    
    console.log(email.value);
    console.log(password.value);
}

</script>

<template>
    <h1>Formulaire d'inscription</h1>
    <form @submit.prevent="onSubmit">
        <div>
            <label for="email">Email :</label>
            <input type="text" name="email" id="email" v-model="email">
        </div>
        <div>
            <label for="password">Mot de passe :</label>
            <input type="password" name="password" id="password" v-model="password">
        </div>
        <button type="submit">Valider !</button>
    </form>
</template>