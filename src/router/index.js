import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SearchByName from "../views/SearchByName.vue";
import SearchByLetter from "../views/SearchByLetter.vue";
import SearchByIngredients from "../views/SearchByIngredients.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: SearchByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: SearchByLetter,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredients",
        component: SearchByIngredients,
      },
      {
        path: "/meal/:id?",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
    //для гостей будет доступен только ниже перечисленные роуты
    children: [
      // {
      //   path: "/by-name/:name?",
      //   name: "byName",
      //   component: SearchByName,
      // },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
