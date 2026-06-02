<script setup>
import Navbar from '@/components/shared/Navbar.vue'
import Footer from '@/components/shared/Footer.vue'
import BackToTop from '@/components/ui/BackToTop.vue'
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <Navbar />
        <main class="flex-1">
            <slot />
        </main>
        <Footer />
        <BackToTop />
    </div>
</template>
