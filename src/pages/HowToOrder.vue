<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>

    <body class="font-body-md text-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />
        <main class="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-xl">
            <section class="mb-xl text-center">
                <h1 class="font-headline-xl text-headline-xl text-on-surface mb-md">Langkah Mudah Berbelanja</h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                    Nikmati kemudahan berbelanja produk lokal pilihan dengan sentuhan personal melalui layanan WhatsApp kami.
                </p>
            </section>
            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
                <div
                    class="bg-secondary-container p-md rounded-xl flex flex-col items-center text-center group transition-transform duration-200 active:scale-95">
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
                    class="bg-surface-container-high p-md rounded-xl flex flex-col items-center text-center group transition-transform duration-200 active:scale-95">
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
                    class="bg-secondary-container p-md rounded-xl flex flex-col items-center text-center group transition-transform duration-200 active:scale-95">
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
                    class="bg-surface-container-high p-md rounded-xl flex flex-col items-center text-center group transition-transform duration-200 active:scale-95">
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
            <section class="mb-xl">
                <div class="relative w-full h-100 rounded-xl overflow-hidden shadow-sm">
                    <img class="w-full h-full object-cover"
                        data-alt="A warm and inviting customer service scene where a local artisan is smiling while interacting with a smartphone. The background shows a cozy, minimalist Indonesian craft workshop with soft natural lighting and warm beige tones. The atmosphere conveys trust, digital craftsmanship, and professional approachability, reflecting a premium boutique service aesthetic."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCvfapEKVcL_nx9A3XKGChRrXgQs0ETG0w6yTHEmA35pt7B8G655i3X5-d5BUCUtYfzufAVje5hUSB7ZNKHglxMDcvRAz-VrjUgLE-rTA0E0J7JFr4vz3-o4mkq__EDV_Xow7Qz-TL4ZRbthk8_WrBnUEADwboErRGRSfWmPEQZ7THXrWFcM3jNQWMdT0qgLfHNNGxC5UhhqgCRNmv5iBKF4TBspDoZvb-L2KzgCp7YVhLb_SrLdqf3cAY6CdsGvnfW4JfxfoG-pFj" />
                    <div
                        class="absolute inset-0 bg-linear-to-r from-primary/40 to-transparent flex items-center px-lg">
                        <div class="max-w-2xl bg-surface/90 backdrop-blur-sm p-md rounded-lg">
                            <h2 class="font-headline-lg text-headline-lg text-primary mb-sm">Pendekatan Personal</h2>
                            <p class="font-body-md text-body-md text-on-surface-variant">Kami percaya setiap pesanan adalah awal dari silaturahmi. Chat with Seller on WhatsApp untuk pengalaman belanja yang lebih hangat.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-surface-container-low rounded-xl p-lg">
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
                        <p class="font-body-md text-body-md text-on-surface-variant">Kami menerima transfer bank antar bank lokal serta dompet digital utama seperti GoPay dan OVO untuk kenyamanan Anda.</p>
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
        <Footer />
    </body>
</template>