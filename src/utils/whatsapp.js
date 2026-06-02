const WA_NUMBER = '62895330633174';

/**
 * Mendapatkan salam berdasarkan waktu saat ini (WIB/WITA/WIT)
 * @param {'id'|'en'} lang
 * @returns {string}
 */
function getGreeting(lang = 'id') {
    const now = new Date();
    // Gunakan jam lokal perangkat pengguna
    const hour = now.getHours();

    if (lang === 'en') {
        if (hour >= 5 && hour < 12) return 'Good morning';
        if (hour >= 12 && hour < 18) return 'Good afternoon';
        return 'Good evening';
    } else {
        if (hour >= 5 && hour < 12) return 'Selamat pagi';
        if (hour >= 12 && hour < 18) return 'Selamat siang';
        return 'Selamat malam';
    }
}

/**
 * Buat link WhatsApp dengan pesan otomatis.
 * @param {object} options
 * @param {string} [options.productName] - Nama produk
 * @param {string} [options.lang]        - 'id' (default) | 'en'
 * @param {'product'|'general'} [options.type] - Jenis pesan
 */
export function createWhatsAppLink({ productName = '', lang = 'id', type = 'general' } = {}) {
    let message = '';
    const greeting = getGreeting(lang);

    if (type === 'product' && productName) {
        if (lang === 'en') {
            message = `${greeting}, I'm interested in *${productName}* from Kios Purwa. Could I get more information regarding the details and price of this product? 😊`;
        } else {
            message = `${greeting}, saya tertarik dengan produk *${productName}* dari Kios Purwa. Boleh saya tahu informasi lebih lanjut mengenai detail dan harga produk ini? 😊`;
        }
    } else {
        if (lang === 'en') {
            message = `${greeting}, I'd like to know more about the products at Kios Purwa. Could you help me? 😊`;
        } else {
            message = `${greeting}, saya ingin mengetahui lebih lanjut tentang produk-produk di Kios Purwa. Bisa bantu saya? 😊`;
        }
    }

    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
