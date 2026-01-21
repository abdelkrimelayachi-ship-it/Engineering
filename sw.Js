self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("engineering-cache").then(cache => {
      return cache.addAll(["./"]);
    })
  );
});
