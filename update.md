# Kios Purwa — Stable Vue UI Architecture

## Project Type

Project ini menggunakan:

```txt
Vue 3 + Vite
```

Dan berfungsi sebagai:

```txt
Static UI Catalog Website
```

Fitur utama:

- Menampilkan katalog produk
- Redirect pembelian ke WhatsApp
- Tidak menggunakan backend
- Tidak menggunakan database
- Data produk sedikit dan static

---

# Tujuan Architecture

Structure dibuat agar:

```txt
✅ Ringan
✅ Cepat
✅ Mudah di-maintain
✅ Smooth navigation
✅ Tidak full reload
✅ Mudah scale jika fitur bertambah
```

---

# Struktur Project yang Direkomendasikan

```txt
src/
│
├── assets/
│
├── components/
│   ├── shared/
│   │   ├── Navbar.vue
│   │   └── Footer.vue
│   │
│   ├── ui/
│   │   ├── Button.vue
│   │   ├── Card.vue
│   │   └── Badge.vue
│   │
│   └── sections/
│       ├── HeroSection.vue
│       ├── ProductSection.vue
│       ├── CTASection.vue
│       └── ContactSection.vue
│
├── data/
│   └── products.js
│
├── layouts/
│   └── MainLayout.vue
│
├── pages/
│   ├── Home.vue
│   ├── Catalog.vue
│   ├── AboutUs.vue
│   └── HowToOrder.vue
│
├── router/
│   └── index.js
│
├── composables/
│
├── utils/
│   └── whatsapp.js
│
├── App.vue
├── main.js
└── style.css
```

---

# Kenapa Data Tetap di `data/products.js`

Karena project ini:

```txt
Bukan ecommerce besar
Bukan dashboard
Tidak realtime
Tidak membutuhkan database
```

Maka:

```txt
src/data/products.js
```

adalah pilihan yang benar.

---

# Contoh Product Data

## src/data/products.js

```js
export const products = [
  {
    id: 1,
    name: 'Keripik Pisang',
    price: '25.000',
    image: '/images/keripik.jpg',
    description: 'Keripik pisang renyah khas Bali'
  }
]
```

---

# Dynamic WhatsApp Link

## src/utils/whatsapp.js

```js
export function createWhatsAppLink(productName) {
  return `https://wa.me/628123456789?text=Saya ingin membeli ${productName}`
}
```

---

# Jangan Gunakan Full Reload

Website harus menggunakan:

```txt
Vue Router
```

agar perpindahan halaman:

```txt
Cepat
Smooth
Tanpa reload total
```

---

# Router Configuration

## src/router/index.js

```js
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/pages/Home.vue')
const Catalog = () => import('@/pages/Catalog.vue')
const AboutUs = () => import('@/pages/AboutUs.vue')
const HowToOrder = () => import('@/pages/HowToOrder.vue')

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/catalog',
    component: Catalog
  },
  {
    path: '/about',
    component: AboutUs
  },
  {
    path: '/how-to-order',
    component: HowToOrder
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

---

# Gunakan Lazy Loading

Gunakan:

```js
const Home = () => import('@/pages/Home.vue')
```

Jangan:

```js
import Home from '@/pages/Home.vue'
```

Karena lazy loading membuat:

```txt
Initial loading lebih cepat
```

---

# Gunakan Layout System

## src/layouts/MainLayout.vue

```vue
<template>
  <Navbar />

  <main>
    <slot />
  </main>

  <Footer />
</template>
```

---

# Kenapa Layout Penting?

Agar:

```txt
Navbar tidak reload
Footer tidak reload
UX lebih smooth
```

---

# Gunakan KeepAlive

## src/App.vue

```vue
<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>
```

---

# Keuntungan KeepAlive

```txt
Scroll tidak reset
Page tidak render ulang
Navigasi lebih cepat
```

---

# Pisahkan Component Berdasarkan Fungsi

## Jangan

```txt
Catalog.vue
 ├── Card
 ├── Filter
 ├── Search
 ├── Pagination
```

Semua dalam satu file.

---

# Gunakan

```txt
components/
├── ui/
├── sections/
└── shared/
```

---

# Contoh Component Structure

```txt
components/
├── shared/
│   ├── Navbar.vue
│   └── Footer.vue
│
├── ui/
│   ├── Button.vue
│   ├── Card.vue
│   └── Badge.vue
│
└── sections/
    ├── HeroSection.vue
    ├── ProductSection.vue
    └── CTASection.vue
```

---

# Gunakan Alias Path

## vite.config.js

```js
import path from 'path'

export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
```

---

# Keuntungan

Import menjadi:

```js
import Navbar from '@/components/shared/Navbar.vue'
```

Bukan:

```js
../../../components
```

---

# Optimasi Gambar

WAJIB menggunakan:

```txt
webp
compressed image
lazy loading
```

---

# Contoh

```html
<img
  src="/images/product.webp"
  loading="lazy"
  alt="product"
/>
```

---

# Gunakan Transition

## src/App.vue

```vue
<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
```

---

# Keuntungan

```txt
Navigasi lebih halus
UI terasa premium
```

---

# Hindari Ini

```txt
❌ Full page reload
❌ Semua logic di satu component
❌ Import page tanpa lazy loading
❌ Semua CSS di satu file besar
❌ Duplicate component
❌ Render ulang tidak perlu
```

---

# Yang Direkomendasikan

```txt
✅ Component reusable
✅ KeepAlive
✅ Lazy route
✅ Layout system
✅ Optimized images
✅ Section-based component
✅ Smooth transition
```

---

# Future Upgrade (Optional)

Jika nanti project berkembang:

```txt
Cart system
Favorite product
Admin panel
Backend API
```

baru tambahkan:

```txt
Pinia
Axios
Vue Query
Backend
```

---

# Kesimpulan

Architecture ini dibuat khusus untuk:

```txt
Vue Static Catalog Website
```

dengan fokus:

```txt
Fast UI
Smooth navigation
Simple maintenance
Clean structure
Stable rendering
```

Karena project hanya:

```txt
Catalog + Redirect WhatsApp
```

maka:

```txt
Static data di products.js
```

sudah menjadi solusi yang:

```txt
Efisien
Cepat
Mudah dirawat
