import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

createApp(App)
  .use(router)
  .mount('#app')

// Ensure default language cookie is set to Indonesian if not present
try {
  const hasGoog = document.cookie.match(new RegExp('(^| )googtrans=([^;]+)'))
  if (!hasGoog) {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    // Do not set domain on localhost or numeric hostnames
    const hostname = location.hostname;
    const isLocalhost = hostname === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname);
    const cookieBase = `googtrans=/id/id; path=/; expires=${expires.toUTCString()}`
    document.cookie = isLocalhost ? cookieBase : cookieBase + `; domain=${hostname}`
    console.log('Set default googtrans cookie to /id/id')
  }
} catch (e) {
  console.warn('Failed to set default googtrans cookie', e)
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service worker registered:', registration.scope)
      })
      .catch((error) => {
        console.warn('Service worker registration failed:', error)
      })
  })
}

// Re-initialize Google Translate widget after SPA navigation
try {
  router.afterEach(() => {
    try {
      if (window.google && window.google.translate && typeof window.googleTranslateElementInit === 'function') {
        window.googleTranslateElementInit()
        console.log('Reinitialized Google Translate after route change')
      }
    } catch (err) {
      // ignore
    }
  })
} catch (e) {
  // router might not support afterEach in some environments
}