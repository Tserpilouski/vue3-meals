<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <div class="m-4">
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="search for meals"
        @change="searchMeals"
      />
    </div>
    <router-link
      :to="{
        name: 'byIngredients',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      class="bg-white rounded p-3 mb-3 shadow block"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import axiosClient from "../axiosClient";

const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  return ingredients.value.filter(
    (i) =>
      (i.strDescription || "")
        .toLowerCase()
        .includes(keyword.value.toLowerCase()) ||
      i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
