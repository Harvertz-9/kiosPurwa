import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/pages/Home.vue')
const Catalog = () => import('@/pages/Catalog.vue')
const AboutUs = () => import('@/pages/AboutUs.vue')
const HowToOrder = () => import('@/pages/HowToOrder.vue')

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
  history: createWebHashHistory(),
  routes,
  // Setiap navigasi selalu scroll ke atas halaman
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router