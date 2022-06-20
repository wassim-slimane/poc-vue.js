import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "@/views/AboutPage.vue";
import HomePage from "@/views/HomePage.vue";
import SignInPage from "@/views/SignInPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import TodoListsPage from "@/views/TodoListsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/signIn",
      name: "signIn",
      component: SignInPage,
    },
    {
      path: "/signUp",
      name: "signUp",
      component: SignUpPage,
    },
    {
      path: "/todolists",
      name: "todolists",
      component: TodoListsPage,
    },
  ],
});

export default router;
