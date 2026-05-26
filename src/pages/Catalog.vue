<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { categories, products } from '@/data/products.js';

const selectedCategory = ref('Semua');
const selectedPrices = ref([]);

// Pagination
const currentPage = ref(1);
const itemsPerPage = 12;

// Category Dropdown (Mobile)
const isCategoryDropdownOpen = ref(false);
const categoryDropdownRef = ref(null);

const activeCategoryIcon = computed(() => {
    const cat = categories.find(c => c.name === selectedCategory.value);
    return cat ? cat.icon : 'apps';
});

const selectCategory = (name) => {
    selectedCategory.value = name;
    isCategoryDropdownOpen.value = false;
};

const closeDropdown = (e) => {
    if (categoryDropdownRef.value && !categoryDropdownRef.value.contains(e.target)) {
        isCategoryDropdownOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
});

const filteredProducts = computed(() => {
    let result = products;

    if (selectedCategory.value !== 'Semua') {
        result = result.filter(p => p.category === selectedCategory.value);
    }
    
    if (selectedPrices.value.length > 0) {
        result = result.filter(p => {
            const priceNum = parseInt(p.price.replace(/\D/g, ''));
            return selectedPrices.value.some(range => {
                const parts = range.split('-');
                const min = parseInt(parts[0]);
                const max = parts[1] === 'Infinity' ? Infinity : parseInt(parts[1]);
                return priceNum >= min && priceNum <= max;
            });
        });
    }
    
    return result;
});

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredProducts.value.slice(start, end);
});

// Reset page when filter changes
watch([selectedCategory, selectedPrices], () => {
    currentPage.value = 1;
});

// Scroll to top when page changes
watch(currentPage, () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>

<template>

    <body class="bg-background text-on-background font-body-md overflow-x-hidden">

        <main class="mx-auto px-margin-mobile md:px-gutter py-md max-w-360 pt-16">
            <div class="flex flex-col lg:flex-row gap-lg">
                <aside class="w-full lg:w-64 shrink-0">
                    <div class="lg:sticky lg:top-24 space-y-md">
                        <div class="flex flex-col gap-md">
                            <!-- Kategori Filter: Mobile Dropdown -->
                            <div ref="categoryDropdownRef" class="relative lg:hidden w-full">
                                <h3 class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-xs">
                                    Kategori
                                </h3>
                                <button
                                    @click="isCategoryDropdownOpen = !isCategoryDropdownOpen"
                                    class="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface hover:border-primary transition-all font-label-md text-left active:scale-[0.99]"
                                >
                                    <div class="flex items-center gap-sm">
                                        <span class="material-symbols-outlined text-[20px] text-primary">{{ activeCategoryIcon }}</span>
                                        <span>{{ selectedCategory }}</span>
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
                                            v-for="cat in categories"
                                            :key="cat.name"
                                            @click="selectCategory(cat.name)"
                                            class="w-full flex items-center gap-sm px-4 py-3 text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors text-left font-label-md"
                                            :class="{ 'bg-primary/5 text-primary font-semibold': selectedCategory === cat.name }"
                                        >
                                            <span class="material-symbols-outlined text-[20px]">{{ cat.icon }}</span>
                                            {{ cat.name }}
                                        </button>
                                    </div>
                                </Transition>
                            </div>

                            <!-- Kategori Filter: Desktop List -->
                            <div class="hidden lg:block">
                                <h3 class="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-sm">
                                    Kategori
                                </h3>
                                <div class="flex flex-col gap-xs">
                                    <button
                                        v-for="cat in categories" :key="cat.name"
                                        @click="selectedCategory = cat.name"
                                        :class="selectedCategory === cat.name 
                                            ? 'flex items-center gap-sm px-4 py-2 rounded-md bg-primary text-on-primary font-label-md shrink-0 transition-all border border-transparent'
                                            : 'flex items-center gap-sm px-4 py-2 rounded-md text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors font-label-md shrink-0 border border-outline-variant'">
                                        <span class="material-symbols-outlined text-[20px]">{{ cat.icon }}</span>
                                        {{ cat.name }}
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
                                            type="checkbox" v-model="selectedPrices" value="0-50000" />
                                        <span class="group-hover:text-primary transition-colors">Rp0 - 50rb</span>
                                    </label>
                                    <label
                                        class="flex items-center gap-sm font-body-md cursor-pointer group bg-surface-container-low lg:bg-transparent px-4 py-2 lg:p-0 rounded-full lg:rounded-none border border-outline-variant lg:border-none shrink-0">
                                        <input
                                            class="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5"
                                            type="checkbox" v-model="selectedPrices" value="50000-150000" />
                                        <span class="group-hover:text-primary transition-colors">50rb - 150rb</span>
                                    </label>
                                    <label
                                        class="flex items-center gap-sm font-body-md cursor-pointer group bg-surface-container-low lg:bg-transparent px-4 py-2 lg:p-0 rounded-full lg:rounded-none border border-outline-variant lg:border-none shrink-0">
                                        <input
                                            class="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5"
                                            type="checkbox" v-model="selectedPrices" value="150000-300000" />
                                        <span class="group-hover:text-primary transition-colors">150rb - 300rb</span>
                                    </label>
                                    <label
                                        class="flex items-center gap-sm font-body-md cursor-pointer group bg-surface-container-low lg:bg-transparent px-4 py-2 lg:p-0 rounded-full lg:rounded-none border border-outline-variant lg:border-none shrink-0">
                                        <input
                                            class="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5"
                                            type="checkbox" v-model="selectedPrices" value="300000-500000" />
                                        <span class="group-hover:text-primary transition-colors">300rb - 500rb</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <div class="grow">
                    <div v-if="filteredProducts.length === 0" class="flex flex-col items-center justify-center text-on-surface-variant py-2xl font-body-lg gap-4 bg-surface-container-low rounded-xl border border-dashed border-outline-variant">
                        <span class="material-symbols-outlined text-4xl text-outline">inventory_2</span>
                        Tidak ada produk dalam kategori ini.
                    </div>
                    <div v-else class="space-y-lg">
                        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-sm sm:gap-md md:gap-gutter">
                            <div v-for="product in paginatedProducts" :key="product.id"
                                class="group bg-surface-container-low rounded-xl overflow-hidden transition-all hover:shadow-lg border border-transparent hover:border-outline-variant flex flex-col h-full">
                                <div class="aspect-square relative overflow-hidden bg-surface-container-highest">
                                    <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        :src="product.image" :alt="product.title" />
                                    <span
                                        class="absolute top-2 left-2 bg-primary backdrop-blur-sm text-white text-[10px] sm:text-label-sm font-label-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">{{ product.category }}</span>
                                </div>
                                <div class="p-sm sm:p-md flex flex-col grow">
                                    <h2
                                        class="font-bold text-body-md text-on-surface mb-xs group-hover:text-primary transition-colors ">
                                        {{ product.title }}</h2>
                                    <p class="font-body-md text-secondary mb-sm sm:mb-md line-clamp-2 text-sm">{{ product.description }}</p>
                                    <div class="mt-auto space-y-sm sm:space-y-md">
                                        <div class="text-body-lg text-primary font-bold">{{ product.price }}</div>
                                        <a href="https://wa.me/62895330633174"
                                            class="w-full bg-primary text-on-primary text-xs sm:text-label-md py-2 sm:py-3 rounded-xl flex items-center justify-center gap-xs sm:gap-sm hover:opacity-90 active:scale-[0.98] transition-all">
                                            <span class="material-symbols-outlined text-[16px] sm:text-[20px]"
                                                data-icon="visibility">visibility</span> Hubungi kami
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Pagination -->
                        <div v-if="totalPages > 1" class="flex flex-wrap items-center justify-center gap-xs pt-md border-t border-outline-variant">
                            <button
                                @click="currentPage > 1 && currentPage--"
                                :disabled="currentPage === 1"
                                class="flex items-center gap-xs px-4 py-2 rounded-md font-label-md border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-on-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
                            >
                                <span class="material-symbols-outlined text-[20px]">chevron_left</span>
                                
                            </button>

                            <button
                                v-for="page in totalPages"
                                :key="page"
                                @click="currentPage = page"
                                :class="currentPage === page
                                    ? 'w-10 h-10 flex items-center justify-center rounded-md bg-primary text-on-primary font-label-md border border-transparent transition-all'
                                    : 'w-10 h-10 flex items-center justify-center rounded-md border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-on-primary font-label-md transition-colors'"
                            >
                                {{ page }}
                            </button>

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

    </body>
</template>