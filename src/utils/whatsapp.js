const WA_NUMBER = '62895330633174';

/**
 * Buat link WhatsApp dengan pesan otomatis.
 * @param {object} options
 * @param {string} [options.productName]  - Nama produk (untuk halaman katalog)
 * @param {string} [options.productPrice] - Harga produk
 * @param {string} [options.lang]         - 'id' (default) | 'en'
 * @param {'product'|'general'} [options.type] - Jenis pesan
 */
export function createWhatsAppLink({ productName = '', productPrice = '', lang = 'id', type = 'general' } = {}) {
    let message = '';

    if (type === 'product' && productName) {
        if (lang === 'en') {
            message = `Hello, I'm interested in *${productName}*${productPrice ? ` (${productPrice})` : ''} from Kios Purwa. Could I get more information about this product? 😊`;
        } else {
            message = `Halo, saya tertarik dengan produk *${productName}*${productPrice ? ` (${productPrice})` : ''} dari Kios Purwa. Boleh saya tahu informasi lebih lanjut? 😊`;
        }
    } else {
        if (lang === 'en') {
            message = `Hello, I'd like to know more about the products at Kios Purwa. Could you help me? 😊`;
        } else {
            message = `Halo, saya ingin mengetahui lebih lanjut tentang produk-produk di Kios Purwa. Bisa bantu saya? 😊`;
        }
    }

    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
