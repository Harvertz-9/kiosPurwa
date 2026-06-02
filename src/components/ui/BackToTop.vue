<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
    isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-4"
    >
        <button
            v-if="isVisible"
            @click="scrollToTop"
            aria-label="Kembali ke atas"
            class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-on-primary shadow-lg flex items-center justify-center hover:opacity-90 active:scale-95 transition-all"
        >
            <span class="material-symbols-outlined text-[22px]">keyboard_arrow_up</span>
        </button>
    </Transition>
</template>
