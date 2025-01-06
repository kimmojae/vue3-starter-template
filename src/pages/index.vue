<template>
  <div>
    <h1 class="text-3xl font-bold">Home</h1>
    <div>
      {{ $route.name }}
      <br />
      {{ $route.meta }}
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<route lang="yaml">
name: home-page
meta:
  requiresAuth: true
</route>
