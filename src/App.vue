<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MidNav from './components/MidNav.vue';
import BreadCrumb from './components/BreadCrumb.vue'
</script>

<template>
  <MidNav />
  <BreadCrumb />
  <RouterView />
</template>

<style scoped></style>
