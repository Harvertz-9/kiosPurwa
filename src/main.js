import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

createApp(App)
  .use(router)
  .mount('#app')

// Force Indonesian as default language unless user has explicitly chosen another language
try {
  const userChoseLang = localStorage.getItem('kiosPurwa_lang')
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  const hostname = location.hostname;
  const isLocalhost = hostname === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname);

  if (!userChoseLang) {
    // No explicit user preference: always default to Indonesian
    const cookieBase = `googtrans=/id/id; path=/; expires=${expires.toUTCString()}`
    document.cookie = isLocalhost ? cookieBase : cookieBase + `; domain=${hostname}`
    console.log('Set default googtrans cookie to /id/id (Indonesian default)')
  } else {
    // User previously chose a language explicitly, honor their choice
    const target = userChoseLang === 'en' ? '/id/en' : '/id/id'
    const cookieBase = `googtrans=${target}; path=/; expires=${expires.toUTCString()}`
    document.cookie = isLocalhost ? cookieBase : cookieBase + `; domain=${hostname}`
    console.log('Restored user lang preference:', userChoseLang)
  }
} catch (e) {
  console.warn('Failed to set googtrans cookie', e)
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