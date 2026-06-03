const CACHE_VERSION = 'kios-purwa-v1';
const CACHE_NAME = `kios-purwa-cache-${CACHE_VERSION}`;
const IMAGE_CACHE = `kios-purwa-images-${CACHE_VERSION}`;

const SAFE_ASSETS = [
  '/',
  '/index.html',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SAFE_ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== IMAGE_CACHE)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

const cacheFirst = (request, cacheName) =>
  caches.open(cacheName).then((cache) =>
    cache.match(request).then((cached) =>
      cached || fetch(request).then((response) => {
        if (response && response.status === 200) {
          cache.put(request, response.clone());
        }
        return response;
      })
    )
  );

const networkFirst = (request, cacheName) =>
  caches.open(cacheName).then((cache) =>
    fetch(request).then((response) => {
      if (response && response.status === 200) {
        cache.put(request, response.clone());
      }
      return response;
    }).catch(() => cache.match(request))
  );

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  if (event.request.destination === 'image' || url.pathname.startsWith('/images/')) {
    event.respondWith(cacheFirst(event.request, IMAGE_CACHE));
    return;
  }

  if (
    event.request.destination === 'script' ||
    event.request.destination === 'style' ||
    event.request.destination === 'document' ||
    event.request.destination === ''
  ) {
    event.respondWith(networkFirst(event.request, CACHE_NAME));
    return;
  }
});
