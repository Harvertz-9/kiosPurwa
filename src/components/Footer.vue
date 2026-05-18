<template>
    <footer class="bg-secondary-container dark:bg-secondary-fixed w-full mt-xl">
        <div
            class="w-full py-xl px-margin-mobile md:px-gutter max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-lg md:gap-xl">
            <!-- Kolom 1: Keterangan Singkat -->
            <div class="space-y-sm w-full lg:w-1/3 pr-0 lg:pr-8">
                <div class="font-headline-md text-headline-md font-bold text-primary">KIOS PURWA</div>
                <p class="text-body-md text-on-secondary-container leading-relaxed">
                    Kios Purwa adalah platform digital terkurasi untuk produk unggulan UMKM Sleman, Yogyakarta, menghadirkan kerajinan tradisional, busana lokal, dan cita rasa kuliner nusantara langsung ke genggaman Anda.
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
                        <li><router-link to="/catalog" class="text-on-secondary-container text-body-md hover:text-primary transition-colors inline-block py-1">Product Catalog</router-link></li>
                        <li><router-link to="/how-to-order" class="text-on-secondary-container text-body-md hover:text-primary transition-colors inline-block py-1">How to Order</router-link></li>
                        <li><router-link to="/about-us" class="text-on-secondary-container text-body-md hover:text-primary transition-colors inline-block py-1">About Us</router-link></li>
                    </ul>
                </div>
                <div class="space-y-sm">
                    <h5
                        class="text-body-md text-on-secondary-container font-bold uppercase tracking-wider">
                        Tentang</h5>
                    <ul class="space-y-xs">
                        <li><router-link to="/about-us" class="text-on-secondary-container text-body-md hover:text-primary transition-colors inline-block py-1">About Us</router-link></li>
                        <li><router-link to="/contact" class="text-on-secondary-container text-body-md hover:text-primary transition-colors inline-block py-1">Contact</router-link></li>
                    </ul>
                </div>
            </div>
            
            <!-- Kolom 3: Kontak & Sosial -->
            <div class="space-y-sm w-full lg:w-1/4">
                <h5 class="text-body-md text-on-secondary-container font-bold uppercase tracking-wider">
                    Hubungi Kami</h5>
                <div class="flex items-center gap-sm">
                    <a class="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                        href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" title="Hubungi Kami via WhatsApp">
                        <span class="material-symbols-outlined text-[20px]">call</span>
                    </a>
                    <p>+62 812-3456-7890</p>
                </div>
            </div>
        </div>
    </footer>
</template>