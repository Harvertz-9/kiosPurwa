<script setup>
import { ref, computed } from 'vue';
import { categories, products } from '@/data/products.js';

const selectedCategory = ref('Semua');
const selectedPrices = ref([]);

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
</script>

<template>

    <body class="bg-background text-on-background font-body-md overflow-x-hidden">

        <main class="mx-auto px-margin-mobile md:px-gutter py-md max-w-360 pt-16">
            <div class="flex flex-col lg:flex-row gap-lg">
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
                                            type="checkbox" v-model="selectedPrices" value="50000-200000" />
                                        <span class="group-hover:text-primary transition-colors">50rb - 200rb</span>
                                    </label>
                                    <label
                                        class="flex items-center gap-sm font-body-md cursor-pointer group bg-surface-container-low lg:bg-transparent px-4 py-2 lg:p-0 rounded-full lg:rounded-none border border-outline-variant lg:border-none shrink-0">
                                        <input
                                            class="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5"
                                            type="checkbox" v-model="selectedPrices" value="200000-Infinity" />
                                        <span class="group-hover:text-primary transition-colors">> 200rb</span>
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
                    <div v-else
                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-gutter">
                        <div v-for="product in filteredProducts" :key="product.id"
                            class="group bg-surface-container-low rounded-xl overflow-hidden transition-all hover:shadow-lg border border-transparent hover:border-outline-variant flex flex-col h-full">
                            <div class="aspect-square relative overflow-hidden bg-surface-container-highest">
                                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    :src="product.image" :alt="product.title" />
                                <span
                                    class="absolute top-3 left-3 bg-primary backdrop-blur-sm text-white text-label-sm font-label-sm px-3 py-1 rounded-full">{{ product.category }}</span>
                            </div>
                            <div class="p-md flex flex-col grow">
                                <h2
                                    class="font-headline-md text-headline-md text-on-surface mb-xs group-hover:text-primary transition-colors">
                                    {{ product.title }}</h2>
                                <p class="font-body-md text-secondary mb-md line-clamp-2">{{ product.description }}</p>
                                <div class="mt-auto space-y-md">
                                    <div class="font-headline-md text-primary font-bold">{{ product.price }}</div>
                                    <button
                                        class="w-full bg-primary text-on-primary font-label-md py-3 rounded-xl flex items-center justify-center gap-sm hover:opacity-90 active:scale-[0.98] transition-all">
                                        <span class="material-symbols-outlined text-[20px]"
                                            data-icon="visibility">visibility</span> Hubungi kami
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </body>
</template>