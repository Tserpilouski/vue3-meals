<template>
  <div class="max-w-[800px] mx-auto">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" class="max-w-full" />
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <span
        ><strong class="font-bold">Category:</strong>
        {{ meal.strCategory }}</span
      >
      <span><strong class="font-bold">Area:</strong> {{ meal.strArea }}</span>
      <span><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</span>
    </div>
    <div class="my-3 max-w-full">
      <p>{{ meal.strInstructions }}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold-3">Ingredients</h2>
        <ul>
          <template v-for="(elm, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold-3">Measures:</h2>
        <ul>
          <template v-for="(elm, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4 flex-row">
        <YouTubeBTN :href="meal.strYoutube" />
        <a
          :href="meal.strSource"
          target="_blank"
          class="px-3 py-2 rounded border border-purple-500 hover:bg-purple-300 hover:text-yellow-50"
          >View</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeBTN from "../components/YouTubeBTN.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
