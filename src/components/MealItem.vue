<template>
  <div class="bg-white shadow rounded">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-semibold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
        voluptas suscipit. Aut facere, ea ipsum quod iusto quos neque
      </p>
      <div class="flex items-center justify-between">
        <YouTubeBTN :href="meal.strYoutube" />
        <router-link
          to="/"
          class="px-3 py-2 rounded border border-purple-500 hover:bg-purple-300 hover:text-yellow-50"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeBTN from "./YouTubeBTN.vue";
const { meal } = defineProps({
  meal: Object,
});
</script>
