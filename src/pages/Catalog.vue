<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { createWhatsAppLink } from '@/utils/whatsapp.js';

// ── Language detection ──────────────────────────────────────────────────────
const currentLang = ref('id');
const categories = ref([]);
const catalogReady = ref(false);

const detectLang = () => {
    const goog = document.cookie.match(/(^| )googtrans=([^;]+)/);
    if (goog) {
        const parts = goog[2].split('/');
        const lang = parts[2];
        currentLang.value = ['id', 'en'].includes(lang) ? lang : 'id';
    }
};

// ── Translations ────────────────────────────────────────────────────────────
const isEn = computed(() => currentLang.value === 'en');

const t = computed(() => ({
    categoryLabel: isEn.value ? 'Category'  : 'Kategori',
    priceLabel:    isEn.value ? 'Price'     : 'Harga',
    emptyState:    isEn.value ? 'No products found in this category.' : 'Tidak ada produk dalam kategori ini.',
    contactBtn:    isEn.value ? 'Contact Us' : 'Hubungi kami',
    priceRanges: isEn.value
        ? [
            { value: '0-50000',       label: 'IDR 0 – 50,000'       },
            { value: '50000-150000',  label: 'IDR 50,000 – 150,000'  },
            { value: '150000-300000', label: 'IDR 150,000 – 300,000' },
            { value: '300000-500000', label: 'IDR 300,000 – 500,000' },
        ]
        : [
            { value: '0-50000',       label: 'Rp0 – 50rb'    },
            { value: '50000-150000',  label: '50rb – 150rb'  },
            { value: '150000-300000', label: '150rb – 300rb' },
            { value: '300000-500000', label: '300rb – 500rb' },
        ],
}));

// ── Category name mapping ───────────────────────────────────────────────────
const categoryNameMap = {
    Semua:     'All',
    Kerajinan: 'Handicrafts',
    Fashion:   'Fashion',
    Aksesoris: 'Accessories',
};

const translatedCategories = computed(() =>
    categories.value.map(cat => ({
        ...cat,
        displayName: isEn.value ? (categoryNameMap[cat.name] ?? cat.name) : cat.name,
    }))
);

// ── Currency formatter ──────────────────────────────────────────────────────
const formatPrice = (rawPrice) => {
    const num = parseInt(rawPrice.replace(/\D/g, ''), 10);
    if (isNaN(num)) return rawPrice;
    if (isEn.value) {
        return 'IDR ' + num.toLocaleString('en-US');
    }
    return 'Rp ' + num.toLocaleString('id-ID');
};

// ── Category badge translation ──────────────────────────────────────────────
const translateCategory = (name) =>
    isEn.value ? (categoryNameMap[name] ?? name) : name;

const loadPublicData = () => {
    if (typeof window !== 'undefined' && window.catalogApi) {
        categories.value = window.catalogApi.getCategories();
        catalogReady.value = true;
    } else {
        catalogReady.value = false;
    }
};

// ── Filter state ────────────────────────────────────────────────────────────
const selectedCategory = ref('Semua');
const selectedPrices   = ref([]);

// Pagination
const currentPage  = ref(1);
const itemsPerPage = 12;

// Category Dropdown (Mobile)
const isCategoryDropdownOpen = ref(false);
const categoryDropdownRef    = ref(null);

// Price Dropdown (Mobile)
const isPriceDropdownOpen = ref(false);
const priceDropdownRef    = ref(null);

const activeCategoryIcon = computed(() => {
    const cat = categories.value.find(c => c.name === selectedCategory.value);
    return cat ? cat.icon : 'apps';
});

const activeDisplayName = computed(() => {
    const cat = translatedCategories.value.find(c => c.name === selectedCategory.value);
    return cat ? cat.displayName : selectedCategory.value;
});

const activePriceLabel = computed(() => {
    if (selectedPrices.value.length === 0) {
        return isEn.value ? 'All Prices' : 'Semua Harga';
    }
    if (selectedPrices.value.length === 1) {
        const range = t.value.priceRanges.find(r => r.value === selectedPrices.value[0]);
        return range ? range.label : selectedPrices.value[0];
    }
    return isEn.value
        ? `${selectedPrices.value.length} Prices Selected`
        : `${selectedPrices.value.length} Harga Terpilih`;
});

const selectCategory = (name) => {
    selectedCategory.value = name;
    isCategoryDropdownOpen.value = false;
};

// Tutup dropdown saat klik di luar
const closeDropdown = (e) => {
    if (categoryDropdownRef.value && !categoryDropdownRef.value.contains(e.target)) {
        isCategoryDropdownOpen.value = false;
    }
    if (priceDropdownRef.value && !priceDropdownRef.value.contains(e.target)) {
        isPriceDropdownOpen.value = false;
    }
};

// Tutup dropdown saat scroll
const closeDropdownOnScroll = () => {
    isCategoryDropdownOpen.value = false;
    isPriceDropdownOpen.value = false;
};

onMounted(() => {
    document.addEventListener('click', closeDropdown);
    window.addEventListener('scroll', closeDropdownOnScroll, { passive: true });
    detectLang();
    loadPublicData();
});

onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
    window.removeEventListener('scroll', closeDropdownOnScroll);
});

// ── Filtered & paginated products ───────────────────────────────────────────
const filteredProducts = computed(() => {
    if (!catalogReady.value || typeof window === 'undefined' || !window.catalogApi) {
        return [];
    }

    return window.catalogApi.getFilteredProducts({
        category: selectedCategory.value,
        priceRanges: selectedPrices.value
    });
});

const totalPages = computed(() => Math.min(Math.ceil(filteredProducts.value.length / itemsPerPage), 6));

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredProducts.value.slice(start, start + itemsPerPage);
});

// Halaman pagination yang ditampilkan (maks 6 dengan elipsis)
const visiblePages = computed(() => {
    const total = totalPages.value;
    const current = currentPage.value;
    const pages = [];

    if (total <= 3) {
        for (let i = 1; i <= total; i++) pages.push(i);
    } else {
        if (current <= 2) {
            pages.push(1, 2, 3);
            pages.push('...');
        } else if (current >= total - 1) {
            pages.push(total - 2, total - 1, total);
        } else {
            pages.push(current - 1, current, current + 1);
            pages.push('...');
        }
    }
    return pages;
});

watch([selectedCategory, selectedPrices], () => { currentPage.value = 1; });
watch(selectedPrices, () => {
    isPriceDropdownOpen.value = false;
}, { deep: true });
watch(currentPage, () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
</script>

<template>

    <div class="bg-background text-on-background font-body-md overflow-x-hidden">

        <main class="mx-auto px-margin-mobile md:px-gutter py-md max-w-360 pt-16">
            <div class="flex flex-col lg:flex-row gap-lg">
                <aside class="w-full lg:w-64 shrink-0">
                    <div class="lg:sticky lg:top-24 space-y-md">
                        <div class="flex flex-col gap-md">

                            <!-- Kategori Filter: Mobile Dropdown -->
                            <div ref="categoryDropdownRef" class="relative lg:hidden w-full">
                                <h3 class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-xs">
                                    {{ t.categoryLabel }}
                                </h3>
                                <button
                                    @click.stop="isCategoryDropdownOpen = !isCategoryDropdownOpen; isPriceDropdownOpen = false"
                                    class="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface hover:border-primary transition-all font-label-md text-left active:scale-[0.99]"
                                >
                                    <div class="flex items-center gap-sm">
                                        <span class="material-symbols-outlined text-[20px] text-primary">{{ activeCategoryIcon }}</span>
                                        <span>{{ activeDisplayName }}</span>
                                    </div>
                                    <span
                                        class="material-symbols-outlined text-[20px] transition-transform duration-300"
                                        :class="{ 'rotate-180': isCategoryDropdownOpen }"
                                    >
                                        keyboard_arrow_down
                                    </span>
                                </button>

                                <!-- Dropdown Menu -->
                                <Transition
                                    enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0"
                                >
                                    <div
                                        v-if="isCategoryDropdownOpen"
                                        class="absolute z-30 mt-xs w-full rounded-xl bg-surface-bright border border-outline-variant shadow-lg py-1 overflow-hidden"
                                    >
                                        <button
                                            v-for="cat in translatedCategories"
                                            :key="cat.name"
                                            @click="selectCategory(cat.name)"
                                            class="w-full flex items-center gap-sm px-4 py-3 text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors text-left font-label-md"
                                            :class="{ 'bg-primary/5 text-primary font-semibold': selectedCategory === cat.name }"
                                        >
                                            <span class="material-symbols-outlined text-[20px]">{{ cat.icon }}</span>
                                            {{ cat.displayName }}
                                        </button>
                                    </div>
                                </Transition>
                            </div>

                            <!-- Kategori Filter: Desktop List -->
                            <div class="hidden lg:block">
                                <h3 class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-sm">
                                    {{ t.categoryLabel }}
                                </h3>
                                <div class="flex flex-col gap-xs">
                                    <button
                                        v-for="cat in translatedCategories" :key="cat.name"
                                        @click="selectedCategory = cat.name"
                                        :class="selectedCategory === cat.name
                                            ? 'flex items-center gap-sm px-4 py-2 rounded-md bg-primary text-on-primary font-label-md shrink-0 transition-all border border-transparent'
                                            : 'flex items-center gap-sm px-4 py-2 rounded-md text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors font-label-md shrink-0 border border-outline-variant'">
                                        <span class="material-symbols-outlined text-[20px]">{{ cat.icon }}</span>
                                        {{ cat.displayName }}
                                    </button>
                                </div>
                            </div>

                            <!-- Harga / Price Filter: Mobile Dropdown -->
                            <div ref="priceDropdownRef" class="relative lg:hidden w-full pt-md border-t border-outline-variant">
                                <h3 class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-xs">
                                    {{ t.priceLabel }}
                                </h3>
                                <button
                                    @click.stop="isPriceDropdownOpen = !isPriceDropdownOpen; isCategoryDropdownOpen = false"
                                    class="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface hover:border-primary transition-all font-label-md text-left active:scale-[0.99]"
                                >
                                    <div class="flex items-center gap-sm">
                                        <span class="material-symbols-outlined text-[20px] text-primary">payments</span>
                                        <span>{{ activePriceLabel }}</span>
                                    </div>
                                    <span
                                        class="material-symbols-outlined text-[20px] transition-transform duration-300"
                                        :class="{ 'rotate-180': isPriceDropdownOpen }"
                                    >
                                        keyboard_arrow_down
                                    </span>
                                </button>

                                <!-- Price Dropdown Menu -->
                                <Transition
                                    enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0"
                                >
                                    <div
                                        v-if="isPriceDropdownOpen"
                                        class="absolute z-30 mt-xs w-full rounded-xl bg-surface-bright border border-outline-variant shadow-lg py-1 overflow-hidden"
                                    >
                                        <div class="flex flex-col gap-xs p-2">
                                            <label
                                                v-for="range in t.priceRanges"
                                                :key="range.value"
                                                class="flex items-center gap-sm font-body-md cursor-pointer group bg-transparent hover:bg-surface-container px-3 py-2.5 rounded-lg transition-colors"
                                            >
                                                <input
                                                    class="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5 cursor-pointer"
                                                    type="checkbox"
                                                    v-model="selectedPrices"
                                                    :value="range.value"
                                                />
                                                <span class="group-hover:text-primary transition-colors text-on-surface-variant font-label-md select-none">{{ range.label }}</span>
                                            </label>
                                        </div>
                                    </div>
                                </Transition>
                            </div>

                            <!-- Harga / Price Filter: Desktop List -->
                            <div class="hidden lg:block pt-md border-t border-outline-variant">
                                <h3 class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-sm">
                                    {{ t.priceLabel }}
                                </h3>
                                <div class="flex flex-col gap-sm">
                                    <label
                                        v-for="range in t.priceRanges"
                                        :key="range.value"
                                        class="flex items-center gap-sm font-body-md cursor-pointer group p-0"
                                    >
                                        <input
                                            class="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5"
                                            type="checkbox"
                                            v-model="selectedPrices"
                                            :value="range.value"
                                        />
                                        <span class="group-hover:text-primary transition-colors text-on-surface-variant">{{ range.label }}</span>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </aside>

                <div class="grow min-w-0">
                    <div v-if="filteredProducts.length === 0" class="flex flex-col items-center justify-center text-on-surface-variant py-2xl font-body-lg gap-4 bg-surface-container-low rounded-xl border border-dashed border-outline-variant">
                        <span class="material-symbols-outlined text-4xl text-outline">inventory_2</span>
                        {{ t.emptyState }}
                    </div>
                    <div v-else class="space-y-lg">
                        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-sm sm:gap-md md:gap-gutter">
                            <div v-for="product in paginatedProducts" :key="product.id"
                                class="group bg-surface-container-low rounded-xl overflow-hidden transition-all hover:shadow-lg border border-transparent hover:border-outline-variant flex flex-col h-full">
                                <div class="aspect-square relative overflow-hidden bg-surface-container-highest">
                                    <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        :src="product.image" :alt="product.title" loading="lazy" decoding="async" />
                                    <span
                                        class="absolute top-2 left-2 bg-primary backdrop-blur-sm text-white text-[10px] sm:text-label-sm font-label-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                                        {{ translateCategory(product.category) }}
                                    </span>
                                </div>
                                <div class="p-sm sm:p-md flex flex-col grow">
                                    <h2 class="font-bold text-body-md text-on-surface mb-xs group-hover:text-primary transition-colors">
                                        {{ product.title }}
                                    </h2>
                                    <p class="font-body-md text-secondary mb-sm sm:mb-md line-clamp-2 text-sm">{{ product.description }}</p>
                                    <div class="mt-auto space-y-sm sm:space-y-md">
                                        <a :href="createWhatsAppLink({ type: 'product', productName: product.title, lang: currentLang })"
                                            target="_blank" rel="noopener noreferrer"
                                            class="w-full bg-primary text-on-primary text-xs sm:text-label-md py-2 sm:py-3 rounded-xl flex items-center justify-center gap-xs sm:gap-sm hover:opacity-90 active:scale-[0.98] transition-all">
                                            <span class="material-symbols-outlined text-[16px] sm:text-[20px]" data-icon="chat">chat</span>
                                            {{ t.contactBtn }}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Pagination (maks 3 halaman tampil) -->
                        <div v-if="totalPages > 1" class="flex flex-wrap items-center justify-center gap-xs pt-md border-t border-outline-variant">
                            <button
                                @click="currentPage > 1 && currentPage--"
                                :disabled="currentPage === 1"
                                class="flex items-center gap-xs px-4 py-2 rounded-md font-label-md border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-on-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
                            >
                                <span class="material-symbols-outlined text-[20px]">chevron_left</span>
                            </button>

                            <template v-for="page in visiblePages" :key="page">
                                <span
                                    v-if="page === '...'"
                                    class="w-10 h-10 flex items-center justify-center text-on-surface-variant font-label-md select-none"
                                >
                                    ...
                                </span>
                                <button
                                    v-else
                                    @click="currentPage = page"
                                    :class="currentPage === page
                                        ? 'w-10 h-10 flex items-center justify-center rounded-md bg-primary text-on-primary font-label-md border border-transparent transition-all cursor-pointer'
                                        : 'w-10 h-10 flex items-center justify-center rounded-md border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-on-primary font-label-md transition-colors cursor-pointer'"
                                >
                                    {{ page }}
                                </button>
                            </template>

                            <button
                                @click="currentPage < totalPages && currentPage++"
                                :disabled="currentPage === totalPages"
                                class="flex items-center gap-xs px-4 py-2 rounded-md font-label-md border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-on-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
                            >
                                <span class="material-symbols-outlined text-[20px]">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </div>
</template>