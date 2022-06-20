<script setup>
import { onMounted, ref } from "vue";

let count = 0;
const todoList = ref([]);
const chaine = ref(null);

onMounted(() => {
  if(localStorage.todoList) {
    todoList.value = JSON.parse(localStorage.todoList);
  }
})

function addItem() {
    todoList.value.push({id: count++, title: chaine.value, done: false});
    localStorage.setItem('todoList', JSON.stringify(todoList.value));
}
</script>

<template>
    <h1>App CRUD</h1>
    <div>
        <h2>Chaînes sauvegardées</h2>
        <ul>
            <li v-for="todo in todoList" :key="todo.id">{{todo.title}}</li>
        </ul>
    </div>
    <div>
        <form @submit.prevent="addItem">
            <div>
                <label for="chaine">Ajouter une chaine : </label>
                <input type="text" name="chaine" id="chaine" v-model="chaine">
            </div>
            <button type="submit">Ajouter !</button>
        </form>
    </div>
</template>