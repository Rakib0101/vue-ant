<script setup>
import Navbar from "./components/Navbar.vue";
import CategoryCard from "./components/CategoryCard.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
  <Navbar></Navbar>
  <CategoryCard></CategoryCard>
</template>
