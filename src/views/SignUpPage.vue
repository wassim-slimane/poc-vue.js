<script setup>
import { ref } from "vue";
import axios from "axios"
import { stringify } from "postcss";

const email = ref(null);
const password = ref(null);

const onSubmit = async() => {
    console.log("Sending post request...");
    const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    })
    if (response.ok) {
        const data = await response.json();
        console.log(data);
    }
    console.log("End request.");
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