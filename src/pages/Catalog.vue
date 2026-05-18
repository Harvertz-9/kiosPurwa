<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>

    <body class="bg-background text-on-background font-body-md overflow-x-hidden">
        <!-- TopAppBar -->
        <Navbar />
        <main class="mx-auto px-margin-mobile md:px-gutter py-md max-w-[1440px]">
            <!-- Hero Section / Title -->
            <!-- <section class="mb-lg">
                <h1 class="font-headline-xl text-headline-xl text-primary mb-xs">Katalog Produk</h1>
                <p class="font-body-lg text-body-lg text-secondary max-w-2xl">Temukan kurasi produk kerajinan dan
                    kebutuhan lokal terbaik dengan sentuhan Digital Craftsmanship.</p>
            </section> -->
            <!-- Layout Container -->
            <div class="flex flex-col lg:flex-row gap-lg">
                <!-- Filter Sidebar / Horizontal Mobile Scroll -->
                <aside class="w-full lg:w-64 shrink-0">
                    <div class="lg:sticky lg:top-24 space-y-md">
                        <div class="flex flex-col gap-md">
                            <div
                                class="overflow-x-auto no-scrollbar -mx-margin-mobile px-margin-mobile lg:mx-0 lg:px-0">
                                <h3
                                    class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-sm hidden lg:block">
                                    Kategori</h3>
                                <div
                                    class="flex flex-row lg:flex-col gap-sm lg:gap-xs pb-sm lg:pb-0 whitespace-nowrap lg:whitespace-normal">
                                    <button
                                        class="flex items-center gap-sm px-4 py-2 rounded-md bg-primary text-on-primary font-label-md shrink-0 transition-all">
                                        <span class="material-symbols-outlined text-[20px]" data-icon="apps">apps</span>
                                        Semua
                                    </button>
                                    <button
                                        class="flex items-center gap-sm px-4 py-2 rounded-md text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors font-label-md shrink-0 border border-outline-variant">
                                        <span class="material-symbols-outlined text-[20px]"
                                            data-icon="restaurant">restaurant</span> Makanan
                                    </button>
                                    <button
                                        class="flex items-center gap-sm px-4 py-2 rounded-md text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors font-label-md shrink-0 border border-outline-variant">
                                        <span class="material-symbols-outlined text-[20px]"
                                            data-icon="brush">brush</span> Kerajinan
                                    </button>
                                    <button
                                        class="flex items-center gap-sm px-4 py-2 rounded-md text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors font-label-md shrink-0 border border-outline-variant">
                                        <span class="material-symbols-outlined text-[20px]"
                                            data-icon="styler">styler</span> Fashion
                                    </button>
                                </div>
                            </div>
                            <div
                                class="pt-md lg:pt-md border-t border-outline-variant overflow-x-auto no-scrollbar -mx-margin-mobile px-margin-mobile lg:mx-0 lg:px-0">
                                <h3
                                    class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-sm hidden lg:block">
                                    Harga</h3>
                                <div
                                    class="flex flex-row lg:flex-col gap-sm lg:gap-sm pb-sm lg:pb-0 whitespace-nowrap lg:whitespace-normal">
                                    <label
                                        class="flex items-center gap-sm font-body-md cursor-pointer group bg-surface-container-low lg:bg-transparent px-4 py-2 lg:p-0 rounded-full lg:rounded-none border border-outline-variant lg:border-none shrink-0">
                                        <input
                                            class="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5"
                                            type="checkbox" />
                                        <span class="group-hover:text-primary transition-colors">Rp0 - 50rb</span>
                                    </label>
                                    <label
                                        class="flex items-center gap-sm font-body-md cursor-pointer group bg-surface-container-low lg:bg-transparent px-4 py-2 lg:p-0 rounded-full lg:rounded-none border border-outline-variant lg:border-none shrink-0">
                                        <input
                                            class="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5"
                                            type="checkbox" />
                                        <span class="group-hover:text-primary transition-colors">50rb - 200rb</span>
                                    </label>
                                    <label
                                        class="flex items-center gap-sm font-body-md cursor-pointer group bg-surface-container-low lg:bg-transparent px-4 py-2 lg:p-0 rounded-full lg:rounded-none border border-outline-variant lg:border-none shrink-0">
                                        <input
                                            class="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5"
                                            type="checkbox" />
                                        <span class="group-hover:text-primary transition-colors">&gt; 200rb</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <!-- Product Grid -->
                <div class="grow">
                    <div
                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-gutter">
                        <!-- Product Card 1 -->
                        <div
                            class="group bg-surface-container-low rounded-xl overflow-hidden transition-all hover:shadow-lg border border-transparent hover:border-outline-variant flex flex-col h-full">
                            <div class="aspect-square relative overflow-hidden bg-surface-container-highest">
                                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="A beautifully handcrafted organic ceramic bowl with a soft beige glaze sitting on a rustic wooden table. The lighting is warm and natural, coming from a nearby window, highlighting the subtle textures of the clay. The overall aesthetic is minimalist and serene, emphasizing Indonesian craftsmanship and high-quality local materials in a light-mode setting."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAijpTpEAyDiUTSivr1tG0erOZ8SO0ymXHACU5UMwdVaco1BS0hne7-rvKtZ3j6yg2cSLoVO1Jj-3Pjk6OggrXQTOOUB91kZsVjzOGh54Q4t5A2L8D2EfvAI1t-xknG8mlljfbt136XR8DmCnHFcjq9OYERXw0FpktNbwVa_Fxkf8rjnFZql7SG3Cy2NlhcJ51oEgeraMsknv2IaB2vQo6XzYmSUtadHERgyUrqZiTWPcy8U_Qm6LLcjgp8HERPFNzYfMYBK39gnx_3" />
                                <span
                                    class="absolute top-3 left-3 bg-tertiary-container/90 backdrop-blur-sm text-on-tertiary-container text-label-sm font-label-sm px-3 py-1 rounded-full">Kerajinan</span>
                            </div>
                            <div class="p-md flex flex-col grow">
                                <h2
                                    class="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors">
                                    Mangkuk Keramik Bumi</h2>
                                <p class="font-body-md text-secondary mb-md line-clamp-2">Mangkuk buatan tangan dengan
                                    bahan tanah liat pilihan, aman untuk makanan.</p>
                                <div class="mt-auto space-y-md">
                                    <div class="font-headline-md text-primary font-bold">Rp 125.000</div>
                                    <button
                                        class="w-full bg-primary text-on-primary font-label-md py-3 rounded-xl flex items-center justify-center gap-sm hover:opacity-90 active:scale-[0.98] transition-all">
                                        <span class="material-symbols-outlined text-[20px]"
                                            data-icon="visibility">visibility</span> Lihat Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Product Card 2 -->
                        <div
                            class="group bg-surface-container-low rounded-xl overflow-hidden transition-all hover:shadow-lg border border-transparent hover:border-outline-variant flex flex-col h-full">
                            <div class="aspect-square relative overflow-hidden bg-surface-container-highest">
                                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="A selection of artisanal coffee beans in a modern, minimalist paper packaging with elegant typography. The scene is bright and airy, staged on a clean white surface with a few green coffee leaves in the background. The mood is sophisticated and fresh, using a palette of soft greens and warm neutrals to represent premium Indonesian coffee culture."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRVEsXzHyC7uoZoX2aOY-Z1hcmkKIZeAFYoqFd6JlFXaGsMPaXGEdqsl9HmBUdD4ERrh5CwfeG_vGszktMUqGfGlgliBW-0FbE5se4K2TbHYoXi7ZihR_ACxsuRnx3DGqFnf4jBkZAFciAaSQoZCOoepD51qB30WXCligrvhWvdWSzwHn7G_p0OLKCncyIQ7tMIcEfPqzv9EhmdPaWcUtQ97gvRUYZJtCvkjaFH46V1KPjvP6gZ5xA8Pq714WPsFwMIbObUmk11pc" />
                                <span
                                    class="absolute top-3 left-3 bg-tertiary-container/90 backdrop-blur-sm text-on-tertiary-container text-label-sm font-label-sm px-3 py-1 rounded-full">Makanan</span>
                            </div>
                            <div class="p-md flex flex-col grow">
                                <h2
                                    class="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors">
                                    Kopi Robusta Purwa</h2>
                                <p class="font-body-md text-secondary mb-md line-clamp-2">Biji kopi pilihan dari dataran
                                    tinggi, diproses dengan metode tradisional.</p>
                                <div class="mt-auto space-y-md">
                                    <div class="font-headline-md text-primary font-bold">Rp 65.000</div>
                                    <button
                                        class="w-full bg-primary text-on-primary font-label-md py-3 rounded-xl flex items-center justify-center gap-sm hover:opacity-90 active:scale-[0.98] transition-all">
                                        <span class="material-symbols-outlined text-[20px]"
                                            data-icon="visibility">visibility</span> Lihat Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Product Card 3 -->
                        <div
                            class="group bg-surface-container-low rounded-xl overflow-hidden transition-all hover:shadow-lg border border-transparent hover:border-outline-variant flex flex-col h-full">
                            <div class="aspect-square relative overflow-hidden bg-surface-container-highest">
                                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="A high-quality linen tote bag featuring a subtle, modern batik pattern in muted blue and soft charcoal tones. The bag is shown in a professional lifestyle shot, hanging from a minimalist hook against a warm beige wall. The lighting is soft and diffuse, creating a high-end boutique feel that highlights the fabric texture and meticulous stitching."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy6HfYwDcFcfn2EzqJSDWewEBmxD2CFSg7OblzjAzWCqNGFiKr_ZdmbY3Cye9CRhnR_2gejbGDqAqXfZ9afu7omp3S1mChUkdc75GmjY9gdlmrbgaeKp_rvhbaP5HkQIHJQFYqFrsWVQZy8v43Y87nQpcCrwjugW7PYliJOg3GO8CBPjZwvCB1Dq1rxkkjG6NWIfKmYH3kG7hqiwApiEUUwjib0sxSVaoaBvVB6mLhzBXk3tA5BXSh63Ajkr52BVvb_NcpDbE3nSuK" />
                                <span
                                    class="absolute top-3 left-3 bg-tertiary-container/90 backdrop-blur-sm text-on-tertiary-container text-label-sm font-label-sm px-3 py-1 rounded-full">Fashion</span>
                            </div>
                            <div class="p-md flex flex-col grow">
                                <h2
                                    class="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors">
                                    Tas Linen Batik Modern</h2>
                                <p class="font-body-md text-secondary mb-md line-clamp-2">Tas belanja ramah lingkungan
                                    dengan motif batik kontemporer yang elegan.</p>
                                <div class="mt-auto space-y-md">
                                    <div class="font-headline-md text-primary font-bold">Rp 89.000</div>
                                    <button
                                        class="w-full bg-primary text-on-primary font-label-md py-3 rounded-xl flex items-center justify-center gap-sm hover:opacity-90 active:scale-[0.98] transition-all">
                                        <span class="material-symbols-outlined text-[20px]"
                                            data-icon="visibility">visibility</span> Lihat Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Product Card 4 -->
                        <div
                            class="group bg-surface-container-low rounded-xl overflow-hidden transition-all hover:shadow-lg border border-transparent hover:border-outline-variant flex flex-col h-full">
                            <div class="aspect-square relative overflow-hidden bg-surface-container-highest">
                                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="A collection of handmade scented candles in simple glass jars with cork lids. Each candle has a minimalist label with Indonesian botanical names. The photo uses a shallow depth of field, focused on one candle while others are softly blurred in the background. The atmosphere is cozy and tranquil, lit by the warm glow of evening light."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7G8hlC3mKt79KLoBJO5jA_BYXa4XLKmSvGt7DlcWQbHZeHIuqxyNRIN3xD6ghPtI6FA9G0pe4ZhGv0FPuvtTGzaSxYtMPSjP9Tw-UVMhmNFGwnXJy1JZO3hseTM5Bm6GK-mubly2s7kt6EBshfotW86H7qP7raZMafQe_DCbMWck32KQL49x9wlO9KxEqfAuMpA0dJrZ8BzjwEDx6YgZ6NH1VQneY0c_nTLSNE6YBKphskxjGQ1KVzUhgUuzKxQSAN1Z70UMpudda" />
                                <span
                                    class="absolute top-3 left-3 bg-tertiary-container/90 backdrop-blur-sm text-on-tertiary-container text-label-sm font-label-sm px-3 py-1 rounded-full">Kerajinan</span>
                            </div>
                            <div class="p-md flex flex-col grow">
                                <h2
                                    class="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors">
                                    Lilin Aroma Melati</h2>
                                <p class="font-body-md text-secondary mb-md line-clamp-2">Lilin aromaterapi dari bahan
                                    kedelai alami dengan wangi melati yang menenangkan.</p>
                                <div class="mt-auto space-y-md">
                                    <div class="font-headline-md text-primary font-bold">Rp 45.000</div>
                                    <button
                                        class="w-full bg-primary text-on-primary font-label-md py-3 rounded-xl flex items-center justify-center gap-sm hover:opacity-90 active:scale-[0.98] transition-all">
                                        <span class="material-symbols-outlined text-[20px]"
                                            data-icon="visibility">visibility</span> Lihat Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Product Card 5 -->
                        <div
                            class="group bg-surface-container-low rounded-xl overflow-hidden transition-all hover:shadow-lg border border-transparent hover:border-outline-variant flex flex-col h-full">
                            <div class="aspect-square relative overflow-hidden bg-surface-container-highest">
                                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="A close-up shot of a set of polished bamboo straws and a cleaning brush inside a custom fabric pouch. The image is bright and crisp, highlighting the natural grain and smooth finish of the bamboo. The background is a clean sage green surface, creating a fresh and eco-friendly visual narrative consistent with modern Indonesian sustainable living."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuChfYDYoAevdF4GBBvpoNo1hks7SypODc7I3bZT6vVn6UF0FcVbmU2a0vCtQ0K4NwgR1jCYHAteR2LiOXf_81k1eqGDMNUsnrajWQ4SNS0GGCCkJxoFZoFsDZL0QY3zblOS7EYfSb9vvzeGCa2eD6DqtZnPPGdfbCL2B6vmdiNxTRicBkAGrhHXKoW1Kh7T1ZZ7dlR4u92Pyb4XdOtdKKBCYTjJ2f1mVIyG_vCsm87ws5L2J53ULy1hCBhfTarKZbJCNu7gtAQFjALs" />
                                <span
                                    class="absolute top-3 left-3 bg-tertiary-container/90 backdrop-blur-sm text-on-tertiary-container text-label-sm font-label-sm px-3 py-1 rounded-full">Aksesoris</span>
                            </div>
                            <div class="p-md flex flex-col grow">
                                <h2
                                    class="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors">
                                    Set Sedotan Bambu</h2>
                                <p class="font-body-md text-secondary mb-md line-clamp-2">Sedotan bambu alami isi 5 pcs
                                    lengkap dengan pembersih dan kantong kain.</p>
                                <div class="mt-auto space-y-md">
                                    <div class="font-headline-md text-primary font-bold">Rp 25.000</div>
                                    <button
                                        class="w-full bg-primary text-on-primary font-label-md py-3 rounded-xl flex items-center justify-center gap-sm hover:opacity-90 active:scale-[0.98] transition-all">
                                        <span class="material-symbols-outlined text-[20px]"
                                            data-icon="visibility">visibility</span> Lihat Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Product Card 6 -->
                        <div
                            class="group bg-surface-container-low rounded-xl overflow-hidden transition-all hover:shadow-lg border border-transparent hover:border-outline-variant flex flex-col h-full">
                            <div class="aspect-square relative overflow-hidden bg-surface-container-highest">
                                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="A minimalist presentation of premium loose leaf tea in a clear glass container. Beside it lies a small wooden spoon filled with dried jasmine and tea leaves. The setting is a bright, airy kitchen with soft morning sunlight casting gentle shadows. The color palette is dominated by clean whites, soft greens, and natural wood tones."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAco5H0UyApME7C92ad0YGiSTKg9AWYWDF_CPQmFk42FpDcLCxC-B2LRKCxCHjMx7VY4trMQj63B2CKBDWivIVqcItZ7HNVXtcEedGtnBm04Q6AUHN7iNTsO7TmZGNdSi0LIavIPpfO5IEH33aXNv-JhoXfiqyHBx7VU7z4LGpAPg_nX9WwcO1JVEGe0_BbwGfNXfS5Ns4rcwHAGzJG93kB7f7-9jeFJoGrUEQkvHuz5HVMqj9762dIjN8EBPAu4P7O54oJccKTbriN" />
                                <span
                                    class="absolute top-3 left-3 bg-tertiary-container/90 backdrop-blur-sm text-on-tertiary-container text-label-sm font-label-sm px-3 py-1 rounded-full">Makanan</span>
                            </div>
                            <div class="p-md flex flex-col grow">
                                <h2
                                    class="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors">
                                    Teh Melati Premium</h2>
                                <p class="font-body-md text-secondary mb-md line-clamp-2">Teh hijau kualitas ekspor
                                    dengan campuran bunga melati asli yang harum.</p>
                                <div class="mt-auto space-y-md">
                                    <div class="font-headline-md text-primary font-bold">Rp 55.000</div>
                                    <button
                                        class="w-full bg-primary text-on-primary font-label-md py-3 rounded-xl flex items-center justify-center gap-sm hover:opacity-90 active:scale-[0.98] transition-all">
                                        <span class="material-symbols-outlined text-[20px]"
                                            data-icon="visibility">visibility</span> Lihat Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </body>
</template>