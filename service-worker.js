self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('static-v1').then(cache => {
      return cache.addAll([
        '/',
        '/random-number-test.html',
        '/styles.css',
        '/script.js',
        '/manifest.json',
        '/random-number-generator-testing.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
