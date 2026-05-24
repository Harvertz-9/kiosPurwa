<script setup>
</script>

<template>

    <body class="font-body-md text-body-md selection:bg-primary-fixed selection:text-on-primary-fixed pb-20 md:pb-0">

        <main>
            <section class="w-full pt-lg pb-xl px-margin-mobile md:px-gutter max-w-360 mx-auto">
                <div class="flex flex-col lg:flex-row items-center gap-lg">
                    <div class="w-full lg:w-1/2 space-y-md text-center lg:text-left order-2 lg:order-1">
                        <span
                            class="inline-block px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">Pendukung Produk Lokal</span>
                        <h1
                            class="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface leading-tight">
                            Mendekatkan Karya UMKM ke Genggaman Anda.</h1>
                        <p
                            class="text-body-md md:text-body-lg text-on-surface-variant max-w-5xl">
                            Kios Purwa hadir sebagai jembatan digital bagi pengrajin dan produsen lokal Indonesia untuk menghadirkan produk berkualitas dengan sentuhan personal.</p>
                        <div class="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-sm pt-base">
                            <router-link to="/catalog">
                            <button
                                class="bg-primary text-on-primary px-lg py-3 rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all w-full sm:w-auto">
                                Lihat Katalog Produk
                            </button>
                            </router-link>
                            <router-link to="/about-us">
                            <button
                                class="border border-outline-variant text-on-surface-variant px-lg py-3 rounded-xl font-label-md text-label-md hover:bg-surface-container-low transition-colors w-full sm:w-auto">
                                Tentang Kami
                            </button>
                            </router-link>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 relative order-1 lg:order-2">
                        <div
                            class="aspect-4/3 md:aspect-square rounded-3xl overflow-hidden bg-surface-container-high shadow-lg">
                            <img alt="Digital Craftsmanship Hero" class="w-full h-full object-cover"
                                data-alt="A warm and inviting workspace of a traditional Indonesian artisan. The scene features handcrafted wooden products and woven textiles arranged beautifully on a rustic table. Soft afternoon sunlight streams through a window, highlighting the rich textures and natural tones of Sage and Warm Beige. The atmosphere is peaceful, artistic, and emphasizes high-quality digital craftsmanship."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4urKJ1NfGGCKETaiYQFWWHWxH86M9Ya60Kya3xtRZgPIHUefRPi0187YiPg7y1sX5NX_YRtlcaxRROMXTl1_VuO27M1C5f2vTcHZWvfs7anqWiRs_PlfPW4hX8hCawy5jspGNND5O2s20Bt-s7bucrHjGY1Z0ngDmoyM-SyEiJDlqpchcmVL1VfC7q5jWttH8rzmD6Dvg1Ef8NMt0REMra35LDQ8CJFmHwfyIHzXmQ1cdmJLdiYv4IEnnGMon74VvH8VT3jJfLxct" />
                        </div>
                        <div
                            class="absolute -bottom-6 right-4 sm:-left-6 bg-surface-bright p-sm rounded-xl shadow-xl border border-surface-container-highest max-w-45 md:max-w-50">
                            <div class="flex items-center gap-xs mb-xs text-primary">
                                <span class="material-symbols-outlined"
                                    style="font-variation-settings: 'FILL' 1;">star</span>
                                <span class="font-label-md text-label-md">Terpercaya</span>
                            </div>
                            <p class="font-label-sm text-label-sm text-on-surface-variant">Mendukung lebih dari 500+
                                UMKM di seluruh Nusantara.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-surface-container-low py-xl">
                <div class="px-margin-mobile md:px-gutter max-w-360 mx-auto">
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-lg gap-sm">
                        <div class="space-y-xs">
                            <h2 class="font-headline-lg text-headline-lg text-on-surface">Kategori Unggulan</h2>
                            <p class="text-on-surface-variant font-body-md text-body-md">Temukan produk terbaik hasil kurasi teliti.</p>
                        </div>
                        <router-link to="/catalog">
                        <button class="text-primary font-label-md text-label-md cursor-pointer flex items-center gap-1"
                            href="#">
                            Lihat Semua
                        </button>
                        </router-link>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md md:gap-lg">
                        <div
                            class="group relative aspect-4/5 rounded-3xl overflow-hidden bg-surface-container cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                            <img alt="Kerajinan"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                data-alt="A close-up of beautiful traditional Indonesian ceramics and pottery. The items are displayed on a minimalist shelf with a clean, soft background. The lighting is diffused and professional, creating an elegant and high-end feel. Colors are dominated by muted earth tones, soft blues, and whites, reflecting a minimalist and calm aesthetic for a craft category."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjvNCb2WuyjPbp3NTPjlQLsDrkQOg_JEeJB4hy81unm9IVbGrpawhAptuBb9-qVKrjhyIcl0200PSQFSEdtvcX51nn5W801ZtHuHJvhfG44PV-XlS-W0-OU7ROfZ-WsGxaL1lm_jYseq6E9NEDTVd8cESYX5Q0L2xU6fQWSKvbKcyM-rYpovf-Nhn8gshPi6sDJW0q4O8b805rlXJ65f2oNp1uII1hLUD96cHjz9iB76w-9YtbH6ji7O6BskCvW0pownqSR1acioip" />
                            <div
                                class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-md">
                                <div class="text-white">
                                    <h3 class="font-headline-md text-headline-md">Kerajinan</h3>
                                    <p class="font-label-md text-label-md opacity-90">Produk tangan eksklusif</p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="group relative aspect-4/5 rounded-3xl overflow-hidden bg-surface-container cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                            <img alt="Makanan"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                data-alt="High-quality food presentation of Indonesian snacks and traditional delicacies. The food is styled on simple wooden platters with green leaf garnishes in a clean, modern kitchen environment. The lighting is bright and cheerful, highlighting the fresh textures. The image uses a soft palette with warm beige surfaces to create a sense of trust and local warmth."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOTfy7EJpEIfddYvZbIoyUQU2tKNLQ6eaRoDUTlebmIHSJM37wJh-m6WbL2g-7YwWHx9HZSmgderIG6HEx6EQ35ZPlFd63z9lIRxdue11x7qynDISI3-ZiR_XcYxB1yNtQipMeq1TYLMkGcQR6d2tEHt3yrm58Cey0AFAOGyg7affzmgARp869pcQdSjwVkytNFzjYLXb_96LljUie6X0iKd-6hZsRO6eG4nPugtj7B5_te7sdb-Bi2bmgqaZsNW6ulT_0FNg9JOie" />
                            <div
                                class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-md">
                                <div class="text-white">
                                    <h3 class="font-headline-md text-headline-md">Makanan</h3>
                                    <p class="font-label-md text-label-md opacity-90">Cita rasa asli Nusantara</p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="group relative aspect-4/5 rounded-3xl overflow-hidden bg-surface-container cursor-pointer transition-transform duration-300 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
                            <img alt="Pakaian"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                data-alt="Modern Indonesian fashion items like batik-inspired clothing or linen wear hung on a minimalist rack. The setting is a bright, airy boutique with white walls and soft ambient lighting. The clothing exhibits high-quality stitching and elegant patterns. The overall aesthetic is minimalist, clean, and professional, blending traditional patterns with modern design silhouettes."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJjgKdZITh6fCG9QcA9EKZ4aJBvnMLoQXRTrVghdedfAU5EAVTRfpbBitXL1PEoLFPuhNF1p0TNPHhM0BZsQNtFj8ixdxTwS9i0equooS2R9qpcPk2r2DJdp69ORNHKj09i36N1Lj1cJaITVmnfIMqIYvBKpM68RPVQk6i2THoyfKx1sCIQ_BQEhDWlX37jKdr_nHxgPwmWl82eZEmsuf-7DcJ8AqiugwAT4Djpih5K7URcacChTe-ZKOd-VpPh-q2aeCVyYzr4gxB" />
                            <div
                                class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-md">
                                <div class="text-white">
                                    <h3 class="font-headline-md text-headline-md">Pakaian</h3>
                                    <p class="font-label-md text-label-md opacity-90">Gaya modern budaya lokal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-xl">
                <div class="px-margin-mobile md:px-gutter max-w-360 mx-auto">
                    <div
                        class="bg-primary-container/10 md:bg-primary-container/20 rounded-4xl md:rounded-[40px] p-md md:p-xl flex flex-col lg:flex-row items-center gap-lg">
                        <div class="w-full lg:w-1/2">
                            <h2 class="font-headline-lg text-headline-lg text-primary mb-md text-center lg:text-left">
                                Belanja Lebih Mudah & Personal</h2>
                            <div class="space-y-md">
                                <div
                                    class="flex flex-col sm:flex-row items-center sm:items-start gap-md text-center sm:text-left">
                                    <div
                                        class="bg-primary-container text-on-primary-container p-3 rounded-full shrink-0 flex items-center justify-center">
                                        <span class="material-symbols-outlined">chat</span>
                                    </div>
                                    <div>
                                        <h4 class="font-label-md text-label-md text-on-surface">Pesan Langsung lewat WA
                                        </h4>
                                        <p class="font-body-md text-body-md text-on-surface-variant">Tidak perlu ribet daftar akun. Hubungi penjual langsung dan konsultasikan pesanan Anda secara personal.</p>
                                    </div>
                                </div>
                                <div
                                    class="flex flex-col sm:flex-row items-center sm:items-start gap-md text-center sm:text-left">
                                    <div
                                        class="bg-primary-container text-on-primary-container p-3 rounded-full shrink-0 flex items-center justify-center">
                                        <span class="material-symbols-outlined">verified_user</span>
                                    </div>
                                    <div>
                                        <h4 class="font-label-md text-label-md text-on-surface">UMKM Terverifikasi</h4>
                                        <p class="font-body-md text-body-md text-on-surface-variant">Seluruh mitra di platform kami telah melalui proses kurasi untuk memastikan kualitas produk terbaik.</p>
                                    </div>
                                </div>
                                <div
                                    class="flex flex-col sm:flex-row items-center sm:items-start gap-md text-center sm:text-left">
                                    <div
                                        class="bg-primary-container text-on-primary-container p-3 rounded-full shrink-0 flex items-center justify-center">
                                        <span class="material-symbols-outlined">local_shipping</span>
                                    </div>
                                    <div>
                                        <h4 class="font-label-md text-label-md text-on-surface">Pengiriman Seluruh Indonesia</h4>
                                        <p class="font-body-md text-body-md text-on-surface-variant">Pilihan ekspedisi yang fleksibel dan aman hingga ke depan pintu rumah Anda.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-lg flex justify-center lg:justify-start">
                                <a class="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-lg py-4 rounded-xl font-label-md text-label-md shadow-md hover:shadow-lg active:scale-95 transition-all w-full sm:w-auto"
                                    href="#">
                                    <span class="material-symbols-outlined">add_shopping_cart</span>
                                    Mulai Belanja Sekarang
                                </a>
                            </div>
                        </div>
                        <div class="w-full lg:w-1/2">
                            <div class="relative">
                                <div
                                    class="aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-surface shadow-lg border-4 md:border-8 border-surface-container">
                                    <img alt="WhatsApp Feature Illustration" class="w-full h-full object-cover"
                                        data-alt="A smartphone screen displaying a friendly WhatsApp chat interface with a local seller. The phone is held by a hand in a bright, minimalist setting with a warm wooden table in the background. The scene feels approachable and trustworthy, highlighting the ease of communication between buyers and UMKM sellers in a clean, modern digital ecosystem."
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz5JWqq3YK_Ytk1kiKXDFKjvIcSCixc3mH1p6Ssfe8FUqFuETJYFw4zqQzL5MevlfN_k7JC3TaFzSIT8GIiU6-tHIJEHrt2iooG8GYs_-pBFUDTgQvMw8xclAgKoLnBnr1Adhe9GznSjdj2BsLkJ4agVfJsbI4lbgER6O9VFKnJhpg77IyKtbWi0xMy4qq-KlP-AGfHARRjTBXaeH1rhloxr-XtwOmOMQ1AXLoYDs7kk9ue9xjwflFpnfwfoIEzVDyrpNnCT8u-bnK" />
                                </div>
                                <div
                                    class="absolute -top-4 right-2 sm:-right-4 bg-tertiary text-on-tertiary px-4 md:px-lg py-2 rounded-full font-label-sm text-label-sm shadow-lg">
                                    Chat with Seller on WhatsApp
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-xl">
                <div class="px-margin-mobile md:px-gutter max-w-360 mx-auto">
                    <div class="flex flex-col lg:flex-row gap-lg items-stretch">
                        <div class="w-full lg:w-1/2 space-y-md flex flex-col justify-center order-2 lg:order-1">
                            <div class="space-y-xs text-center lg:text-left">
                                <h2 class="font-headline-lg text-headline-lg text-on-surface">Lokasi Kami</h2>
                                <p class="text-on-surface-variant font-body-md text-body-md">Kunjungi pusat kreasi kami untuk melihat langsung proses pembuatan dan koleksi lengkap produk UMKM terbaik.</p>
                            </div>
                            <div class="space-y-sm pt-md">
                                <div
                                    class="flex flex-col sm:flex-row items-center sm:items-start gap-md text-center sm:text-left">
                                    <span
                                        class="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full">location_on</span>
                                    <div>
                                        <h4 class="font-label-md text-label-md text-on-surface">Alamat</h4>
                                        <p class="font-body-md text-body-md text-on-surface-variant">Jl. Lettu Wayan Suta, Sukawati, Gianyar, Bali, Indonesia</p>
                                    </div>
                                </div>
                                <div
                                    class="flex flex-col sm:flex-row items-center sm:items-start gap-md text-center sm:text-left">
                                    <span
                                        class="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full">schedule</span>
                                    <div>
                                        <h4 class="font-label-md text-label-md text-on-surface">Jam Operasional</h4>
                                        <p class="font-body-md text-body-md text-on-surface-variant">Senin - Sabtu: 09.00 - 18.00 WIB</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pt-md flex justify-center lg:justify-start">
                                <a class="inline-flex items-center gap-2 border border-primary text-primary px-lg py-3 rounded-xl font-label-md text-label-md hover:bg-primary-fixed transition-colors w-full sm:w-auto justify-center"
                                    href="https://www.google.com/maps/dir/?api=1&destination=Pasar+Seni+Sukawati+Bali" target="_blank" rel="noopener noreferrer">
                                    <span class="material-symbols-outlined">directions</span>
                                    Petunjuk Arah
                                </a>
                            </div>
                        </div>
                        <div
                            class="w-full lg:w-1/2 h-75 md:h-100 lg:h-auto rounded-3xl overflow-hidden shadow-md border border-surface-container-highest bg-surface-container order-1 lg:order-2">
                            <img alt="Location Map Placeholder"
                                class="w-full h-full object-cover grayscale opacity-60 contrast-125"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4urKJ1NfGGCKETaiYQFWWHWxH86M9Ya60Kya3xtRZgPIHUefRPi0187YiPg7y1sX5NX_YRtlcaxRROMXTl1_VuO27M1C5f2vTcHZWvfs7anqWiRs_PlfPW4hX8hCawy5jspGNND5O2s20Bt-s7bucrHjGY1Z0ngDmoyM-SyEiJDlqpchcmVL1VfC7q5jWttH8rzmD6Dvg1Ef8NMt0REMra35LDQ8CJFmHwfyIHzXmQ1cdmJLdiYv4IEnnGMon74VvH8VT3jJfLxct" />
                        </div>
                    </div>
                </div>
            </section>
        </main>

    </body>
</template>