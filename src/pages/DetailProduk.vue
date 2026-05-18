<template>
    <body class="bg-background text-on-background">
        <Navbar />
        <main class="max-w-[1440px] mx-auto px-margin-mobile md:px-gutter py-md md:py-xl">
            <div class="flex flex-col md:grid md:grid-cols-12 gap-lg items-start">
                <!-- Product Gallery (Left) -->
                <div class="md:col-span-7 w-full flex flex-col gap-sm">
                    <div class="aspect-square w-full rounded-xl overflow-hidden bg-surface-container-low">
                        <img alt="Premium Handwoven Bag" class="w-full h-full object-cover"
                            data-alt="A large, beautifully crafted Indonesian woven bag made from sustainable natural fibers. The bag sits against a clean, warm beige studio background with soft ambient lighting highlighting its intricate hand-stitched textures. The overall mood is artisanal, organic, and premium, reflecting the digital craftsmanship aesthetic of a modern local boutique."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaUsjrHkND7Jg4W68citmBp9roXZyUvseRQT--1Pr780YtoG3dpbyWr6wqoiXLRTBppkFLIRS5232plP9DejQwpr-pjXvQxpx3ovy45JFQLiTMRZJ6TBt0XSblghfsJgKOQ9368xUySqkOkmjvKnmt_FqnQjzgUlcH5ZwhNY2vesQ1r50okdeZsa5u_W1KaKHZsipVuC43FomiwqUTpck3Fhlbf7e5RRLOX0TnJu2Uqa_pJ5wXfIsMDHGys5GOYeirEGRpGplex_m3" />
                    </div>
                    <div class="grid grid-cols-4 gap-sm">
                        <div class="aspect-square rounded-lg overflow-hidden border-2 border-primary cursor-pointer">
                            <img alt="Detail View 1" class="w-full h-full object-cover"
                                data-alt="Close-up detail shot of the natural fiber weaving patterns on an Indonesian artisanal bag. The lighting is soft and warm, emphasizing the organic texture and the meticulous handcrafted quality."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJwbQ1n9jdsXl54yuiFDAj_d5BjMhZAmxTqrl2WNaMfcapdJ5t4yuyXBfFyjjF-KUWjve_Dw0upCfCqRwmBYXGm151pllrfY5QRemWvXXePMKnN1gIdOKTimdewRrZKnobSseYCIudzSa8MqQBKNLZm2PmLvQyYFOVhHS73DWslFVwyYKzSV6K1aqDJG_J0RFHTFYwk7sG9rqzvkkzmQb4stDOGeMtMGYbUkoXhzGzDjPgwhCSHi7gnNynnnTsd-LLjPlmkCGtDSnJ" />
                        </div>
                        <div
                            class="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
                            <img alt="Detail View 2" class="w-full h-full object-cover"
                                data-alt="A lifestyle shot of the artisan bag being held by a model wearing a soft linen outfit in a sunlit garden. The atmosphere is peaceful and natural, showcasing the product's practical use in a minimalist aesthetic."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqhaI4f_oo9rkP4UK4FwnDApnOUXKOzUXZVCJKrMMWPJpeeVPsSZ2i21vQeNAhGtvNXB_1DGv9zsSgduHz8tcoEVqo4VOojeaXD-ecGekcpx1HOFJEYIMgdyvmNMbPtGWmU6WyqlQbWSJ456r6vA4oEVqfamNiK-msXolw9EHuAnt6GrPG3_O4xT-u0CBSI5zndcYMIQCTP0JQg8Xb4O4ArW3lBYYTaY0wJo_Gq9v4qzU0a2RSs9ZHCrGQkfQ2z4RblJUCnDHR9k5s" />
                        </div>
                        <div
                            class="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
                            <img alt="Detail View 3" class="w-full h-full object-cover"
                                data-alt="Top view of the interior of the woven bag, showing a high-quality batik lining. The colors are muted blues and warm greys, fitting the soft minimalist theme of the design system."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxjlA_ccGGEn-KjpgLjSNkatf__zwCl2rMYagXB1Xohq7JPbOvTFjNXAWB0Ncq4JrVi7XFPUqTPKMw_3-6K4UA9JSN76rpZs2p2iCc3_JeVFrVD4naoMDsUuL2fkD1-3raq4zgJ8R8XiDrJ9h-kXQvZN-CQqHpqbvZCYLqcpP5Q93p_JKTIT-V6tnxrFTkncTlh3VrrXT0s0LnCP6ItufDA6xBFtcarBioBBhGgrAOGvQjJNPH45pIq6vHy4es_dLNuvM4fp25qN0f" />
                        </div>
                        <div
                            class="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity cursor-pointer bg-surface-container flex items-center justify-center">
                            <span class="material-symbols-outlined text-outline">more_horiz</span>
                        </div>
                    </div>
                </div>
                <!-- Product Details (Right) -->
                <div class="md:col-span-5 w-full flex flex-col gap-md">
                    <nav class="flex items-center gap-xs text-on-surface-variant mb-base">
                        <span class="font-label-sm text-label-sm">Catalog</span>
                        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                        <span class="font-label-sm text-label-sm">Handicraft</span>
                        <span class="material-symbols-outlined text-[16px]">chevron_right</span>
                        <span class="font-label-sm text-label-sm text-primary">Woven Collection</span>
                    </nav>
                    <div class="flex flex-col gap-xs">
                        <h1 class="font-headline-xl text-headline-xl text-on-surface">Tas Anyaman Pandan Klasik "Purwa"</h1>
                        <div class="flex items-center gap-sm mt-xs">
                            <span
                                class="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full font-label-sm text-label-sm">Karya
                                Lokal</span>
                            <div class="flex items-center gap-xs">
                                <span class="material-symbols-outlined text-surface-tint text-[18px]"
                                    style="font-variation-settings: 'FILL' 1;">star</span>
                                <span class="font-label-md text-label-md text-on-surface">4.9</span>
                                <span class="font-label-md text-label-md text-outline">(128 Ulasan)</span>
                            </div>
                        </div>
                    </div>
                    <div class="py-sm border-y border-outline-variant flex items-baseline gap-sm">
                        <span class="font-headline-md text-headline-md text-primary font-bold">Rp 345.000</span>
                        <span class="font-body-md text-body-md text-outline line-through">Rp 420.000</span>
                    </div>
                    <div class="flex flex-col gap-sm">
                        <h3 class="font-label-md text-label-md text-on-surface uppercase tracking-wider">Deskripsi Produk
                        </h3>
                        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Dibuat dengan tangan oleh perajin ahli dari desa Purwa, tas anyaman pandan ini menggabungkan
                            tradisi turun-temurun dengan sentuhan desain modern. Menggunakan serat pandan pilihan yang kuat
                            namun fleksibel, tas ini sangat cocok untuk menemani aktivitas harian Anda dengan gaya yang
                            santun dan natural.
                        </p>
                        <ul
                            class="flex flex-col gap-xs list-disc list-inside font-body-md text-body-md text-on-surface-variant">
                            <li>Bahan: 100% Pandan Hutan Organik</li>
                            <li>Dimensi: 35cm x 25cm x 12cm</li>
                            <li>Lapisan Dalam: Kain Batik Halus</li>
                            <li>Penutup: Kancing Kayu Kelapa</li>
                        </ul>
                    </div>
                    <!-- UMKM Info Card -->
                    <div class="bg-secondary-container dark:bg-secondary-fixed p-md rounded-xl flex items-center gap-md">
                        <div class="h-12 w-12 rounded-full overflow-hidden bg-primary-container shrink-0">
                            <img alt="UMKM Seller Profile" class="w-full h-full object-cover"
                                data-alt="A friendly portrait of a middle-aged Indonesian artisan in a workshop setting, wearing a simple traditional shirt. The background is softly blurred showing natural weaving materials, conveying warmth and local craftsmanship."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMCvsgGOUpP05seQFGHlqSFJOMgAmH3fYFJZtI7CtNEpHchyxAfI2HVR66SY61y3MSkbV2H8_d8pe0qoIqX4C4ljEsxtq-kvNF48YqN7hDK7GE1sO3hPwiNhAVoDhMsjNCfhv5at8M9a1zI1bKAr_BuZQtYJGxVDOA-I7XTH4V0uivMZ7tB2Ds9cZIla1zzzT7vKnm-8iu0FlgMQrmMU141QK0_a4D7-UcOM4QIIXkvAkBWbv0oqv0tTeJkoPlW64dcr2kOcKo4Hsu" />
                        </div>
                        <div>
                            <p class="font-label-md text-label-md text-on-secondary-fixed-variant">Dikirim dari</p>
                            <p class="font-headline-md text-headline-md text-on-secondary-fixed">Rumah Anyam Lestari</p>
                            <p class="font-body-md text-body-md text-on-secondary-fixed-variant opacity-80">UMKM Binaan Kios
                                Purwa sejak 2021</p>
                        </div>
                    </div>
                    <!-- CTA Button -->
                    <div class="flex flex-col gap-sm mt-sm">
                        <button
                            class="bg-primary text-on-primary w-full py-4 rounded-xl flex items-center justify-center gap-sm font-headline-md transition-all active:scale-95 hover:shadow-lg">
                            <span class="material-symbols-outlined">chat</span>
                            Pesan via WhatsApp
                        </button>
                        <p class="font-label-sm text-label-sm text-outline text-center">
                            *Klik tombol di atas untuk terhubung langsung dengan penjual.
                        </p>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </body>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>