<script setup>
import { ref, onMounted } from 'vue';
import { createWhatsAppLink } from '@/utils/whatsapp.js';

const currentLang = ref('id');

onMounted(() => {
    const goog = document.cookie.match(/(^| )googtrans=([^;]+)/);
    if (goog) {
        const parts = goog[2].split('/');
        const lang = parts[2];
        currentLang.value = ['id', 'en'].includes(lang) ? lang : 'id';
    }
});

const waLink = () => createWhatsAppLink({ type: 'general', lang: currentLang.value });
</script>

<template>
    <footer class="bg-secondary-container dark:bg-secondary-fixed w-full mt-xl">
        <div
            class="w-full py-xl px-margin-mobile md:px-gutter max-w-360 mx-auto flex flex-col lg:flex-row justify-between items-start gap-lg md:gap-xl">
            <!-- Kolom 1: Keterangan Singkat -->
            <div class="space-y-sm w-full lg:w-1/3 pr-0 lg:pr-8">
                <div class="notranslate font-headline-md text-headline-md font-bold text-primary">KIOS PURWA</div>
                <p class="text-body-md text-on-secondary-container leading-relaxed">
                    “Kios Purwa adalah UMKM yang berlokasi di Pasar Sukawati, Bali, yang menyediakan berbagai produk khas Bali seperti tas handmade, pakaian tradisional maupun modern, serta aneka pernak-pernik dan kerajinan seni Bali dengan kualitas baik dan harga terjangkau.”
                </p>
                <p class="text-xs text-on-secondary-container/80 pt-base">
                    © 2024 KIOS PURWA.<br />Crafted for UMKM Excellence.
                </p>
            </div>
            
            <!-- Kolom 2: Link Navigasi -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-lg md:gap-xl w-full lg:w-1/3">
                <div class="space-y-sm">
                    <h5
                        class="text-body-md text-on-secondary-container font-bold uppercase tracking-wider">
                        Layanan</h5>
                    <ul class="space-y-xs">
                        <li><router-link to="/catalog" class="text-on-secondary-container text-body-md hover:text-primary transition-colors inline-block py-1">Katalog Produk</router-link></li>
                        <li><router-link to="/how-to-order" class="text-on-secondary-container text-body-md hover:text-primary transition-colors inline-block py-1">Cara Pesan</router-link></li>
                        <li><router-link to="/about-us" class="text-on-secondary-container text-body-md hover:text-primary transition-colors inline-block py-1">Tentang Kami</router-link></li>
                    </ul>
                </div>
                <div class="space-y-sm">
                    <h5
                        class="text-body-md text-on-secondary-container font-bold uppercase tracking-wider">
                        Tentang</h5>
                    <ul class="space-y-xs">
                        <li><router-link to="/about-us" class="text-on-secondary-container text-body-md hover:text-primary transition-colors inline-block py-1">Tentang Kami</router-link></li>
                        <li><router-link to="/contact" class="text-on-secondary-container text-body-md hover:text-primary transition-colors inline-block py-1">Hubungi Kami</router-link></li>
                    </ul>
                </div>
            </div>
            
            <!-- Kolom 3: Kontak & Sosial -->
            <div class="space-y-sm w-full lg:w-1/4">
                <h5 class="text-body-md text-on-secondary-container font-bold uppercase tracking-wider">
                    Hubungi Kami</h5>
                <div class="flex items-center gap-sm">
                    <a class="flex items-center gap-5" :href="waLink()" target="_blank" rel="noopener noreferrer" title="Hubungi Kami via WhatsApp">
                        <div class="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                            >
                            <span class="material-symbols-outlined text-[20px]">call</span>
                        </div>
                        <p>+62 895-3306-33174</p>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>