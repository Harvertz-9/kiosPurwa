<template>
    <header class="bg-surface docked full-width top-0 sticky z-40 shadow-sm border-b border-surface-container-highest">
        <div
            class="flex justify-between items-center w-full px-margin-mobile md:px-gutter max-w-360 mx-auto h-16 relative z-50 bg-surface">
            <div class="notranslate font-headline-md text-headline-md font-bold text-primary tracking-tight">KIOS PURWA</div>

            <div class="flex items-center gap-md lg:gap-lg">
                <nav class="hidden md:flex gap-md items-center">
                    <router-link to="/" @click="closeAll" :class="['font-label-md text-label-md py-1 px-3 transition-colors border-b-2', $route.path === '/' ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:bg-surface-container rounded-lg']">Beranda</router-link>
                    <router-link to="/catalog" @click="closeAll" :class="['font-label-md text-label-md py-1 px-3 transition-colors border-b-2', $route.path.startsWith('/catalog') ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:bg-surface-container rounded-lg']">Katalog</router-link>
                    <router-link to="/about-us" @click="closeAll" :class="['font-label-md text-label-md py-1 px-3 transition-colors border-b-2', $route.path.startsWith('/about-us') ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:bg-surface-container rounded-lg']">Tentang Kami</router-link>
                    <router-link to="/how-to-order" @click="closeAll" :class="['font-label-md text-label-md py-1 px-3 transition-colors border-b-2', $route.path.startsWith('/how-to-order') ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:bg-surface-container rounded-lg']">Cara Pesan</router-link>
                </nav>

                <div class="flex items-center gap-xs relative">
                    <!-- Translate Dropdown -->
                    <div class="relative" ref="langDropdownRef">
                        <button
                            @click.stop="isLangMenuOpen = !isLangMenuOpen; isMobileMenuOpen = false"
                            class="flex items-center gap-1.5 text-primary p-2 rounded-full hover:bg-surface-container transition-colors font-label-md text-label-md cursor-pointer"
                            aria-label="Select Language"
                        >
                            <span class="material-symbols-outlined text-[24px]">translate</span>
                            <span class="text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary px-1.5 py-0.5 rounded select-none">{{ currentLanguage }}</span>
                        </button>

                        <!-- Dropdown Options -->
                        <div
                            v-if="isLangMenuOpen"
                            class="absolute right-0 mt-2 w-44 bg-surface-bright rounded-xl shadow-xl border border-surface-container-highest py-2 z-50"
                        >
                            <button
                                @click="selectLanguage('id')"
                                class="w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer"
                                :class="currentLanguage === 'id' ? 'text-primary font-bold bg-primary/5' : 'text-on-surface-variant'"
                            >
                                <span>Bahasa Indonesia</span>
                                <span v-if="currentLanguage === 'id'" class="material-symbols-outlined text-sm font-bold text-primary">check</span>
                            </button>
                            <button
                                @click="selectLanguage('en')"
                                class="w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer"
                                :class="currentLanguage === 'en' ? 'text-primary font-bold bg-primary/5' : 'text-on-surface-variant'"
                            >
                                <span>English</span>
                                <span v-if="currentLanguage === 'en'" class="material-symbols-outlined text-sm font-bold text-primary">check</span>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu Hamburger -->
                    <button
                        @click.stop="isMobileMenuOpen = !isMobileMenuOpen; isLangMenuOpen = false"
                        class="md:hidden text-primary p-2 rounded-full hover:bg-surface-container transition-colors cursor-pointer flex items-center justify-center"
                    >
                        <span class="material-symbols-outlined">{{ isMobileMenuOpen ? 'close' : 'menu' }}</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div class="fixed top-16 left-0 w-full bg-surface-bright shadow-lg z-30 md:hidden border-b border-surface-container-highest"
            :class="{ active: isMobileMenuOpen }"
            id="mobile-menu">
            <div class="flex flex-col p-margin-mobile gap-base">
                <router-link to="/" @click="closeAll" :class="['flex items-center gap-md p-md rounded-xl font-label-md', $route.path === '/' ? 'bg-primary-container/10 text-primary' : 'hover:bg-surface-container text-on-surface-variant']">
                    <span class="material-symbols-outlined">home</span> Beranda
                </router-link>
                <router-link to="/catalog" @click="closeAll" :class="['flex items-center gap-md p-md rounded-xl font-label-md', $route.path.startsWith('/catalog') ? 'bg-primary-container/10 text-primary' : 'hover:bg-surface-container text-on-surface-variant']">
                    <span class="material-symbols-outlined">grid_view</span> Katalog
                </router-link>
                <router-link to="/about-us" @click="closeAll" :class="['flex items-center gap-md p-md rounded-xl font-label-md', $route.path.startsWith('/about-us') ? 'bg-primary-container/10 text-primary' : 'hover:bg-surface-container text-on-surface-variant']">
                    <span class="material-symbols-outlined">info</span> Tentang Kami
                </router-link>
                <router-link to="/how-to-order" @click="closeAll" :class="['flex items-center gap-md p-md rounded-xl font-label-md', $route.path.startsWith('/how-to-order') ? 'bg-primary-container/10 text-primary' : 'hover:bg-surface-container text-on-surface-variant']">
                    <span class="material-symbols-outlined">help_outline</span> Cara Pesan
                </router-link>

                <!-- Mobile Language Selector Section -->
                <!-- <div class="border-t border-surface-container-highest pt-md mt-sm">
                    <span class="text-xs font-bold text-on-surface-variant uppercase tracking-wider block px-md mb-xs">Pilih Bahasa / Language</span>
                    <div class="flex gap-sm p-sm">
                        <button
                            @click="selectLanguage('id')"
                            class="flex-1 py-2 px-md rounded-xl text-center font-label-md text-label-md transition-all cursor-pointer"
                            :class="currentLanguage === 'id' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface-variant'"
                        >
                            Bahasa Indonesia
                        </button>
                        <button
                            @click="selectLanguage('en')"
                            class="flex-1 py-2 px-md rounded-xl text-center font-label-md text-label-md transition-all cursor-pointer"
                            :class="currentLanguage === 'en' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface-variant'"
                        >
                            English
                        </button>
                    </div>
                </div> -->
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const isLangMenuOpen = ref(false)
const langDropdownRef = ref(null)

// Simpan state bahasa yang aktif (default: 'id')
const currentLanguage = ref('id')

onMounted(() => {
    // Ambil preferensi bahasa dari cookie Google Translate ('googtrans')
    const match = document.cookie.match(new RegExp('(^| )googtrans=([^;]+)'))
    if (match) {
        const parts = match[2].split('/')
        if (parts.length > 2) {
            currentLanguage.value = parts[2]
        }
    }

    // Tutup semua dropdown saat klik di luar
    document.addEventListener('click', handleOutsideClick)
    // Tutup semua dropdown saat scroll
    window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick)
    window.removeEventListener('scroll', handleScroll)
})

const handleOutsideClick = (e) => {
    if (langDropdownRef.value && !langDropdownRef.value.contains(e.target)) {
        isLangMenuOpen.value = false
    }
}

const handleScroll = () => {
    isLangMenuOpen.value = false
    isMobileMenuOpen.value = false
}

const closeAll = () => {
    isMobileMenuOpen.value = false
    isLangMenuOpen.value = false
}

const selectLanguage = (lang) => {
    // Terapkan bahasa default 'id' ke bahasa tujuan
    const target = lang === 'id' ? '/id/id' : `/id/${lang}`
    document.cookie = `googtrans=${target}; path=/`

    // Update state bahasa menu
    currentLanguage.value = lang

    isLangMenuOpen.value = false
    isMobileMenuOpen.value = false

    // Refresh otomatis untuk memicu terjemahan Google
    window.location.reload()
}
</script>

<style>
/* Menyembunyikan banner Google Translate tanpa memengaruhi desain web */
.skiptranslate, .goog-te-banner-frame {
    display: none !important;
}
body {
    top: 0px !important;
}
</style>