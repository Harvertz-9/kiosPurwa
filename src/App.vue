<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const route = useRoute()

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    anchorPlacement: 'top-bottom',
  })
})

watch(() => route.path, () => {
  setTimeout(() => {
    AOS.refresh()
  }, 100)
})
</script>

<template>
  <MainLayout>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </Transition>
    </RouterView>
  </MainLayout>
</template>