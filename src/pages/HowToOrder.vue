<script setup lang="ts">
</script>

<template>

    <div class="font-body-md text-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">

        <main class="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-xl">
            <section class="mb-xl text-center" data-aos="fade-up">
                <h1 class="font-headline-xl text-headline-xl text-on-surface mb-md">Langkah Mudah Berbelanja</h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                    Nikmati kemudahan berbelanja produk lokal pilihan dengan sentuhan personal melalui layanan WhatsApp kami.
                </p>
            </section>
            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
                <div
                    class="bg-secondary-container p-md rounded-xl flex flex-col items-center text-center group transition-transform duration-200 active:scale-95" data-aos="fade-up" data-aos-delay="100">
                    <div
                        class="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center mb-md shadow-sm">
                        <span class="material-symbols-outlined text-primary text-3xl" data-icon="search">search</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md text-primary mb-sm">1. Pilih Produk</h3>
                    <p class="font-body-md text-body-md text-on-secondary-container">
                        Jelajahi katalog kami dan tentukan produk kerajinan atau kuliner favorit Anda.
                    </p>
                </div>
                <div
                    class="bg-surface-container-high p-md rounded-xl flex flex-col items-center text-center group transition-transform duration-200 active:scale-95" data-aos="fade-up" data-aos-delay="200">
                    <div
                        class="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center mb-md shadow-sm">
                        <span class="material-symbols-outlined text-primary text-3xl" data-icon="chat">chat</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md text-primary mb-sm">2. Klik WhatsApp</h3>
                    <p class="font-body-md text-body-md text-on-secondary-container">
                        Klik tombol "Chat with Seller" untuk terhubung langsung dengan tim kami.
                    </p>
                </div>
                <div
                    class="bg-secondary-container p-md rounded-xl flex flex-col items-center text-center group transition-transform duration-200 active:scale-95" data-aos="fade-up" data-aos-delay="300">
                    <div
                        class="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center mb-md shadow-sm">
                        <span class="material-symbols-outlined text-primary text-3xl"
                            data-icon="support_agent">support_agent</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md text-primary mb-sm">3. Konsultasi & Stok</h3>
                    <p class="font-body-md text-body-md text-on-secondary-container">
                        Kami akan memastikan ketersediaan stok dan menjawab detail pertanyaan Anda.
                    </p>
                </div>
                <!-- Step 4 -->
                <div
                    class="bg-surface-container-high p-md rounded-xl flex flex-col items-center text-center group transition-transform duration-200 active:scale-95" data-aos="fade-up" data-aos-delay="400">
                    <div
                        class="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center mb-md shadow-sm">
                        <span class="material-symbols-outlined text-primary text-3xl"
                            data-icon="local_shipping">local_shipping</span>
                    </div>
                    <h3 class="font-headline-md text-headline-md text-primary mb-sm">4. Pembayaran</h3>
                    <p class="font-body-md text-body-md text-on-secondary-container">
                        Selesaikan pembayaran aman dan pesanan akan segera kami kirim ke alamat Anda.
                    </p>
                </div>
            </section>
            <section class="mb-xl" data-aos="fade-up">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/30 p-md md:p-lg">
                    <!-- Image Card -->
                    <div class="w-full aspect-square md:aspect-4/3 lg:aspect-square rounded-2xl overflow-hidden bg-surface-container-high shadow-sm">
                        <img class="w-full h-full object-cover"
                            data-alt="A warm and inviting customer service scene where a local artisan is smiling while interacting with a smartphone."
                            src="/images/about/personal_contact.png" />
                    </div>
                    <!-- Text Card -->
                    <div class="flex flex-col justify-center gap-sm p-sm md:p-md lg:pr-lg">
                        <span class="text-primary font-label-md tracking-widest uppercase">LAYANAN KAMI</span>
                        <h2 class="font-headline-lg text-headline-lg text-primary">Pendekatan Personal</h2>
                        <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Kami percaya setiap pesanan adalah awal dari silaturahmi. Chat dengan kami di WhatsApp untuk mendapatkan rekomendasi produk terbaik dan pengalaman belanja yang lebih hangat.
                        </p>
                    </div>
                </div>
            </section>
            <section class="bg-surface-container-low rounded-xl p-lg" data-aos="fade-up">
                <h2 class="font-headline-lg text-headline-lg text-on-surface mb-lg text-center">Pertanyaan yang Sering Diajukan</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div
                        class="bg-surface-container-lowest p-md rounded-lg shadow-[0_2px_10px_rgba(81,99,78,0.03)] border border-outline-variant/20">
                        <h4 class="font-headline-md text-headline-md text-primary text-[18px] mb-base">Berapa lama waktu pengiriman?</h4>
                        <p class="font-body-md text-body-md text-on-surface-variant">Pengiriman reguler biasanya memakan waktu 2-4 hari kerja tergantung lokasi Anda. Kami akan memberikan nomor resi segera setelah barang dikirim.</p>
                    </div>
                    <div
                        class="bg-surface-container-lowest p-md rounded-lg shadow-[0_2px_10px_rgba(81,99,78,0.03)] border border-outline-variant/20">
                        <h4 class="font-headline-md text-headline-md text-primary text-[18px] mb-base">Metode pembayaran apa yang tersedia?</h4>
                        <p class="font-body-md text-body-md text-on-surface-variant">Kami menerima transfer bank antar bank lokal serta dompet digital untuk kenyamanan Anda.</p>
                    </div>
                    <div
                        class="bg-surface-container-lowest p-md rounded-lg shadow-[0_2px_10px_rgba(81,99,78,0.03)] border border-outline-variant/20">
                        <h4 class="font-headline-md text-headline-md text-primary text-[18px] mb-base">Apakah bisa retur jika barang rusak?</h4>
                        <p class="font-body-md text-body-md text-on-surface-variant">Ya, kami menjamin kualitas produk kami. Silakan sertakan video unboxing dan hubungi admin WhatsApp kami dalam 1x24 jam setelah barang diterima.</p>
                    </div>
                    <div
                        class="bg-surface-container-lowest p-md rounded-lg shadow-[0_2px_10px_rgba(81,99,78,0.03)] border border-outline-variant/20">
                        <h4 class="font-headline-md text-headline-md text-primary text-[18px] mb-base">Dapatkan konsultasi produk gratis?</h4>
                        <p class="font-body-md text-body-md text-on-surface-variant">Tentu! Tim kami siap membantu memberikan rekomendasi produk yang sesuai dengan kebutuhan atau dekorasi rumah Anda melalui WhatsApp.</p>
                    </div>
                </div>
            </section>
        </main>

    </div>
</template>