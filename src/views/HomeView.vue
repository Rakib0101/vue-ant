<script setup>
  import Navbar from "../components/Navbar.vue";
  import MidNav from "../components/MidNav.vue";
  import BreadCrumb from "../components/BreadCrumb.vue";
  import Tab from "../components/Tab.vue";
  import Card from "../components/Card.vue"
</script>

<template>
  <main>
    <Navbar />
    <MidNav />
    <BreadCrumb />
    <div class="max-w-[1320px] mx-auto">
      <div class="flex justify-end py-6">
        <Tab />
      </div>
      <div class="grid grid-cols-4 gap-6">
        <div></div>
        <div class="col-span-3">
          <Card />
        </div>
      </div>
    </div>
  </main>
</template>
