<script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  import { useI18n } from '../i18n'
  const { t } = useI18n()
</script>

<template>
  <div class="bg-surface text-on-surface min-h-screen pb-2xl">
    <Navbar />
    <!-- Hero Section -->
    <section class="relative w-full h-[60vh] md:h-[80vh] bg-surface-container flex items-center justify-center overflow-hidden">
      <!-- Background Image Placeholder -->
      <img src="https://placehold.co/1920x1080/4a5b48/FFF?text=Pottery+Making" alt="Hero Background" class="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-overlay">
      <div class="absolute inset-0 bg-black/50"></div>
      
      <div class="relative z-10 flex flex-col items-center text-center px-margin-mobile md:px-gutter max-w-200 gap-md">
        <h1 class="text-white font-headline-lg text-4xl md:text-6xl font-bold tracking-tight">Kisah di Balik KIOS PURWA</h1>
        <p class="text-white/90 font-body-lg text-lg md:text-xl">Menjembatani warisan budaya dengan karya murni modern melalui kurasi produk UMKM terbaik.</p>
      </div>
    </section>

    <div class="px-margin-mobile md:px-gutter max-w-360 mx-auto pt-xl md:pt-2xl flex flex-col gap-2xl md:gap-30">
      
      <!-- Tentang Kami -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-xl md:gap-2xl items-center">
        <div class="flex flex-col gap-md md:gap-lg md:pr-xl">
          <span class="text-primary font-label-md tracking-widest uppercase">{{ t('aboutSectionTitle') }}</span>
          <h2 class="font-headline-lg text-3xl md:text-5xl text-on-surface font-bold leading-tight">{{ t('aboutUsHeading') }}</h2>
          <div class="font-body-md text-on-surface-variant flex flex-col gap-md text-base md:text-lg leading-relaxed mt-sm">
            <p>{{ t('aboutDescription1') }}</p>
            <p>{{ t('aboutDescription2') }}</p>
          </div>
        </div>
        <div class="rounded-3xl overflow-hidden aspect-4/3 md:aspect-square bg-surface-container">
          <img src="https://placehold.co/800x800/e6e4dc/5a6b58?text=Ceramics" alt="Ceramics" class="w-full h-full object-cover">
        </div>
      </section>

      <!-- Proses Kreatif Kami -->
      <section class="flex flex-col gap-xl bg-surface-bright rounded-[40px] p-lg md:p-2xl">
        <div class="text-center flex flex-col gap-sm">
          <h2 class="font-headline-lg text-3xl md:text-4xl text-on-surface font-bold">Proses Kreatif Kami</h2>
          <p class="font-body-md text-on-surface-variant text-lg">Dari bahan mentah hingga menjadi karya seni di rumah Anda.</p>
        </div>
        
        <!-- Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg md:h-150 mt-md">
          <!-- Left Large -->
          <div class="relative rounded-3xl overflow-hidden group h-75 md:h-full">
            <img src="https://placehold.co/600x800/d4d0c5/5a6b58?text=Seleksi+Bahan" alt="Seleksi Bahan Alam" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-xl">
              <span class="text-white font-label-lg text-lg font-medium">01. Seleksi Bahan Alam</span>
            </div>
          </div>
          
          <!-- Right Side Column -->
          <div class="flex flex-col gap-md md:gap-lg h-full">
            <!-- Top Right -->
            <div class="relative rounded-3xl overflow-hidden group flex-1 h-62.5 md:h-auto">
              <img src="https://placehold.co/800x400/c5c1b6/5a6b58?text=Sentuhan+Tangan" alt="Sentuhan Tangan Ahli" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-xl">
                <span class="text-white font-label-lg text-lg font-medium">02. Sentuhan Tangan Ahli</span>
              </div>
            </div>
            
            <!-- Bottom Right Row -->
            <div class="grid grid-cols-2 gap-md md:gap-lg flex-1 h-50 md:h-auto">
              <!-- Bottom Left -->
              <div class="relative rounded-3xl overflow-hidden group">
                <img src="https://placehold.co/400x400/b6b2a7/5a6b58?text=Kontrol+Kualitas" alt="Kontrol Kualitas" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-lg">
                  <span class="text-white font-label-md font-medium">03. Kontrol Kualitas</span>
                </div>
              </div>
              <!-- Bottom Right -->
              <div class="relative rounded-3xl overflow-hidden group">
                <img src="https://placehold.co/400x400/a7a398/5a6b58?text=Siap+Untuk+Anda" alt="Siap Untuk Anda" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-lg">
                  <span class="text-white font-label-md font-medium">04. Siap Untuk Anda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Dampak Nyata -->
      <section class="flex flex-col gap-xl">
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
            <div class="font-display-md text-5xl font-bold text-on-surface">1200+</div>
            <div class="font-label-md text-on-surface-variant">Produk Terkurasi Terjual</div>
          </div>
        </div>
      </section>

      <!-- Testimonial Quote -->
      <section class="bg-primary-container/20 border border-primary/10 rounded-4xl p-xl md:py-2xl md:px-3xl text-center max-w-4xl mx-auto flex flex-col gap-lg w-full">
        <p class="font-body-lg text-xl md:text-2xl text-on-surface italic leading-relaxed">
          "Melalui KIOS PURWA, saya tidak hanya menjual barang, tetapi saya menceritakan sejarah keluarga saya kepada dunia."
        </p>
        <span class="font-label-lg text-primary font-bold">- Pak Santosa, Pengrajin Kayu Jati</span>
      </section>

      <!-- CTA -->
      <section class="flex flex-col items-center justify-center text-center gap-lg py-xl">
        <h2 class="font-headline-md text-2xl font-bold text-on-surface">{{ t('wantToKnowMore') }}</h2>
        <div class="flex flex-col sm:flex-row gap-md">
          <button class="bg-[#25D366] text-white px-xl py-3.5 rounded-full font-label-lg flex items-center justify-center gap-2 hover:bg-[#1ebd5a] transition-colors shadow-sm">
            <span class="material-symbols-outlined">chat</span>
            {{ t('contactUsButton') }}
          </button>
          <router-link to="/catalog" class="border border-outline text-on-surface px-xl py-3.5 rounded-full font-label-lg flex items-center justify-center hover:bg-surface-container transition-colors">
            {{ t('viewCatalogButton') }}
          </router-link>
        </div>
      </section>

      <!-- Lokasi Kami -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-xl items-center bg-surface-bright rounded-[40px] overflow-hidden border border-surface-container-highest">
        <div class="h-75 md:h-125 w-full">
          <img src="https://placehold.co/800x600/e6e4dc/5a6b58?text=Lokasi+Kios+Purwa" alt="Lokasi KIOS PURWA" class="w-full h-full object-cover">
        </div>
        <div class="flex flex-col gap-lg p-xl md:p-2xl md:pr-3xl">
          <h2 class="font-headline-lg text-3xl font-bold text-on-surface">{{ t('ourLocation') }}</h2>
          <p class="font-body-md text-on-surface-variant text-lg">
            {{ t('ourLocationDescription') }}
          </p>
          
          <div class="flex flex-col gap-lg mt-sm">
            <div class="flex items-start gap-md">
              <span class="material-symbols-outlined text-primary text-[28px]">location_on</span>
              <div class="flex flex-col gap-1">
                <div class="font-label-lg font-bold text-on-surface">{{ t('address') }}</div>
                <div class="font-body-md text-on-surface-variant">{{ t('addressValue') }}</div>
              </div>
            </div>
            
            <div class="flex items-start gap-md">
              <span class="material-symbols-outlined text-primary text-[28px]">schedule</span>
              <div class="flex flex-col gap-1">
                <div class="font-label-lg font-bold text-on-surface">{{ t('operationalHours') }}</div>
                <div class="font-body-md text-on-surface-variant">{{ t('hoursValue') }}</div>
              </div>
            </div>
          </div>
          
          <div class="pt-md mt-sm border-t border-surface-container-highest">
            <button class="border border-outline text-on-surface px-lg py-2.5 rounded-full font-label-md flex items-center gap-2 hover:bg-surface-container transition-colors w-fit">
              <span class="material-symbols-outlined text-[20px]">directions</span>
              {{ t('directions') }}
            </button>
          </div>
        </div>
      </section>

    </div>
  </div>
  <Footer />
</template>
