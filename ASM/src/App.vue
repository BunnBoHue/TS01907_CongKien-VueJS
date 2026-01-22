<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppAside from './components/AppAside.vue'
</script>

<template>
  <AppNavbar />

  <div class="container mt-4">
    <div class="row g-4">
      <!-- CHỈ 1 lần ở đây -->
      <aside class="col-lg-4">
        <AppAside />
      </aside>

      <main class="col-lg-8">
        <router-view />
      </main>
    </div>
  </div>
</template>
