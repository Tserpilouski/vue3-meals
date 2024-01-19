<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border border-red-500 hover:bg-red-300 hover:text-yellow-50 mr-4"
    >YouTube</a
  >
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
