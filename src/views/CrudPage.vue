<script setup>
import { ref } from "@vue/reactivity";

const todoList = ref([
    {
        id: 1,
        title: "title 1",
        done: false
    },
    {
        id: 2,
        title: "title 2",
        done: false
    },
    {
        id: 3,
        title: "title 3",
        done: false
    },
]);
</script>

<template>
    <h1>App CRUD</h1>
    <div>
        <h2>Chaînes sauvegardées</h2>
        <ul>
            <li v-for="todo in todoList" :key="todo.id">{{todo.title}}</li>
        </ul>
    </div>
</template>