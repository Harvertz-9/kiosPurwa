import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import AboutUs from '../pages/AboutUs.vue'
import HowToOrder from '../pages/HowToOrder.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router