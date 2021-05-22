self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('asset-store').then((cache) => cache.addAll([
            '/',
            '/index.html',
            '/styles/style.css',
            '/images/sphere.png'
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});