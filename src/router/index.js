import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import AboutUs from '../pages/AboutUs.vue'
import HowToOrder from '../pages/HowToOrder.vue'
import DetailProduk from '../pages/DetailProduk.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/catalog',
    component: Catalog,
  },
  {
    path: '/about-us',
    component: AboutUs,
  },
  {
    path: '/how-to-order',
    component: HowToOrder,
  },
  {
    path: '/detail-produk',
    component: DetailProduk,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router