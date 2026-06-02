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
  <div class="bg-surface text-on-surface min-h-screen pb-2xl">
    <section class="relative w-full h-[60vh] md:h-[80vh] bg-surface-container flex items-center justify-center overflow-hidden">
      <img src="/images/about/about_hero.jpg" alt="Hero Background" class="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-overlay">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative z-10 flex flex-col items-center text-center px-margin-mobile md:px-gutter max-w-200 gap-md">
        <h1 class="text-white font-headline-lg text-4xl md:text-6xl font-bold tracking-tight">Kisah di Balik KIOS PURWA</h1>
        <p class="text-white/90 font-body-lg text-lg md:text-xl">Menjembatani warisan budaya dengan karya murni modern melalui kurasi produk UMKM terbaik.</p>
      </div>
    </section>
    <div class="px-margin-mobile md:px-gutter max-w-360 mx-auto pt-xl md:pt-2xl flex flex-col gap-2xl md:gap-30">
      <section class="grid grid-cols-1 md:grid-cols-2 gap-xl md:gap-2xl items-center">
        <div class="flex flex-col gap-md md:gap-lg md:pr-xl">
          <span class="text-primary font-label-md tracking-widest uppercase">TENTANG KAMI</span>
          <h2 class="font-headline-lg text-3xl md:text-5xl text-on-surface font-bold leading-tight">Kesenian yang Berakar pada Komunitas</h2>
          <div class="font-body-md text-on-surface-variant flex flex-col gap-md text-base md:text-lg leading-relaxed mt-sm">
            <p>Kios Purwa merupakan UMKM lokal yang berlokasi di Pasar Seni Sukawati yang menghadirkan berbagai produk khas Bali dengan sentuhan seni dan budaya tradisional. Kami menyediakan beragam pilihan tas handmade, pakaian khas Bali, hingga pernak-pernik dan kerajinan unik yang cocok digunakan sehari-hari maupun sebagai oleh-oleh khas Bali.</p>
            <p>Dengan mengutamakan kualitas produk, harga yang terjangkau, serta pelayanan yang ramah, Kios Purwa berkomitmen untuk membantu melestarikan karya seni lokal sekaligus memperkenalkan keindahan budaya Bali kepada masyarakat dan wisatawan. Kami percaya bahwa setiap produk memiliki nilai seni dan cerita yang mencerminkan kekayaan budaya Pulau Dewata.</p>
          </div>
        </div>
        
        <div class="rounded-3xl overflow-hidden aspect-4/3 md:aspect-square bg-surface-container" data-aos="fade-left" data-aos-delay="150">
          <img src="/images/about/about_story.jpg" alt="Tas dan Kerajinan Bali" class="w-full h-full object-cover">
        </div>
      </section>
      <section class="flex flex-col gap-xl bg-surface-bright rounded-[40px] p-lg md:p-2xl">
        <div class="text-center flex flex-col gap-sm">
          <h2 class="font-headline-lg text-3xl md:text-4xl text-on-surface font-bold">Proses Kreatif Kami</h2>
          <p class="font-body-md text-on-surface-variant text-lg">Dari bahan mentah hingga menjadi karya seni di rumah Anda.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-md md:h-150 mt-md">
          <div class="relative rounded-3xl overflow-hidden group aspect-16/10 sm:aspect-video md:h-full md:aspect-auto bg-surface-container">
            <img src="/images/catalog/web/web/IMG_8613.jpg" alt="Bahan Alam Pilihan" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            <div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
              <span class="text-white font-label-lg text-lg md:text-2xl font-bold">01. Bahan Alam Pilihan</span>
            </div>
          </div>
          <div class="flex flex-col gap-md md:gap-lg h-full">
            <div class="relative rounded-3xl overflow-hidden group aspect-16/10 sm:aspect-video md:h-auto md:flex-1 md:aspect-auto bg-surface-container">
              <img src="/images/catalog/web/web/IMG_8569.jpg" alt="Sentuhan Ukiran Manual" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 sm:p-6">
                <span class="text-white font-label-lg text-lg md:text-2xl font-bold">02. Sentuhan Ukiran Manual</span>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-md flex-1">
              <div class="relative rounded-3xl overflow-hidden group aspect-square md:aspect-auto bg-surface-container">
                <img src="/images/catalog/web/web/IMG_8637.jpg" alt="Inlay Kerang" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-3.5 sm:p-5">
                  <span class="text-white font-label-md font-bold text-md md:text-xl">03. Inlay Kerang</span>
                </div>
              </div>
              <div class="relative rounded-3xl overflow-hidden group aspect-square md:aspect-auto bg-surface-container">
                <img src="/images/catalog/web/web/IMG_8641.jpg" alt="Siap Untuk Anda" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-3.5 sm:p-5">
                  <span class="text-white font-label-md font-bold text-md md:text-xl">04. Siap Untuk Anda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col gap-xl mt-lg md:mt-90">
        <h2 class="font-headline-lg text-3xl md:text-4xl text-on-surface font-bold text-center mb-md">Dampak Nyata Bersama Anda</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-md md:gap-xl">
          <div class="bg-surface-container rounded-3xl p-xl flex flex-col items-center justify-center text-center gap-sm aspect-video md:aspect-square">
            <span class="material-symbols-outlined text-[48px] text-primary">group</span>
            <div class="font-display-md text-5xl font-bold text-on-surface">50+</div>
            <div class="font-label-md text-on-surface-variant">Pengrajin Lokal Didukung</div>
          </div>
          <div class="bg-surface-container rounded-3xl p-xl flex flex-col items-center justify-center text-center gap-sm aspect-video md:aspect-square">
            <span class="material-symbols-outlined text-[48px] text-primary">eco</span>
            <div class="font-display-md text-5xl font-bold text-on-surface">100%</div>
            <div class="font-label-md text-on-surface-variant">Bahan Ramah Lingkungan</div>
          </div>
          <div class="bg-surface-container rounded-3xl p-xl flex flex-col items-center justify-center text-center gap-sm aspect-video md:aspect-square">
            <span class="material-symbols-outlined text-[48px] text-primary">local_mall</span>
            <div class="font-display-md text-5xl font-bold text-on-surface">100+</div>
            <div class="font-label-md text-on-surface-variant">Produk Terkurasi Terjual</div>
          </div>
        </div>
      </section>
      <section class="bg-primary-container/20 border border-primary/10 rounded-4xl p-xl md:py-2xl md:px-3xl text-center max-w-4xl mx-auto flex flex-col gap-lg w-full">
        <p class="font-body-lg text-xl md:text-2xl text-on-surface italic leading-relaxed">
          "Melalui KIOS PURWA, saya tidak hanya menjual barang, tetapi saya menceritakan sejarah keluarga saya kepada dunia."
        </p>
        <span class="font-label-lg text-primary font-bold">- Bu Agung, Owner Kios Purwa</span>
      </section>
      <section class="flex flex-col items-center justify-center text-center gap-lg py-xl">
        <h2 class="font-headline-md text-2xl font-bold text-on-surface">Ingin tahu lebih banyak?</h2>
        <div class="flex flex-col sm:flex-row gap-md">
          <a class="bg-[#25D366] text-white px-xl py-3.5 rounded-full font-label-lg flex items-center justify-center gap-2 hover:bg-[#1ebd5a] transition-colors shadow-sm" :href="waLink()" target="_blank" rel="noopener noreferrer" title="Hubungi Kami via WhatsApp">
            <span class="material-symbols-outlined">chat</span>
            Chat with Seller on WhatsApp
          </a>
          <router-link to="/catalog" class="border border-outline text-on-surface px-xl py-3.5 rounded-full font-label-lg flex items-center justify-center hover:bg-surface-container transition-colors">
            Lihat Katalog Produk
          </router-link>
        </div>
      </section>
      <section class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-xl items-center bg-surface-bright rounded-[40px] overflow-hidden border border-surface-container-highest">
        <div class="h-75 md:h-125 w-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.6502950541812!2d115.27941577449255!3d-8.596217387283335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23e28417884dd%3A0x4feba4be973223b2!2sKios%20Purwa!5e1!3m2!1sid!2sid!4v1779674629572!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full object-cover">
          </iframe>
        </div>
        <div class="flex flex-col gap-lg p-xl md:p-2xl md:pr-3xl">
          <h2 class="font-headline-lg text-3xl font-bold text-on-surface">Lokasi Kami</h2>
          <p class="font-body-md text-on-surface-variant text-lg">
            Kunjungi pusat kreasi kami untuk melihat langsung proses pembuatan dan koleksi lengkap produk UMKM terbaik.
          </p>
          <div class="flex flex-col gap-lg mt-sm">
            <div class="flex items-start gap-md">
              <span class="material-symbols-outlined text-primary text-[28px]">location_on</span>
              <div class="flex flex-col gap-1">
                <div class="font-label-lg font-bold text-on-surface">Alamat</div>
                <div class="font-body-md text-on-surface-variant">Jl. Lettu Wayan Suta, Sukawati, Gianyar, Bali, Indonesia</div>
              </div>
            </div>
            <div class="flex items-start gap-md">
              <span class="material-symbols-outlined text-primary text-[28px]">schedule</span>
              <div class="flex flex-col gap-1">
                <div class="font-label-lg font-bold text-on-surface">Jam Operasional</div>
                <div class="font-body-md text-on-surface-variant">Senin - Sabtu: 09.00 - 18.00 WIB</div>
              </div>
            </div>
          </div>
          <div class="pt-md mt-sm border-t border-surface-container-highest">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Kios+Purwa,+Jl.+Lettu+Wayan+Suta,+Sukawati,+Gianyar,+Bali"
              target="_blank"
              rel="noopener noreferrer"
              class="border border-outline text-on-surface px-lg py-2.5 rounded-full font-label-md flex items-center gap-2 hover:bg-surface-container transition-colors w-fit"
            >
              <span class="material-symbols-outlined text-[20px]">directions</span>
              Petunjuk Arah
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
