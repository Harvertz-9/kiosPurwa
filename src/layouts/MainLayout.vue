<template>
  <Navbar />

  <main>
    <slot />
  </main>

  <Footer />
</template>

<script setup>
import Navbar from '@/components/shared/Navbar.vue'
import Footer from '@/components/shared/Footer.vue'
</script>
