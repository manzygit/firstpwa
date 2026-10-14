const CACHE_NAME = 'pwa-cache-v1';
const ASSETS = [
    './',
    './index.html',
    './app.js',
    './manifest.json'
];

// Install Event: Cache essential assets
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Fetch Event: Serve cached assets when offline
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            return cachedResponse || fetch(e.request);
        })
    );
});
