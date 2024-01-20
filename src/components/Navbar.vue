<template>
  <header class="bg-white shadow h-16 flex justify-between items-center">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <div class="flex justify-center gap-6">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-block px-2 h-full hover:bg-purple-400"
        >Search meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-block px-2 h-full hover:bg-purple-400"
        >Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-block px-2 h-full hover:bg-purple-400"
        >Meals By Ingrediets</router-link
      >
    </div>
  </header>
</template>
