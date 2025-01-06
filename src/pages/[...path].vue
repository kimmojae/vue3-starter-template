<template>
  <div>
    <h1 class="text-3xl font-bold">404 not found</h1>
    <br />
    <p>{{ decodedPath }} : does not exist.</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const decodedPath = computed(() => decodeURIComponent(route.path))
</script>

<style scoped></style>
