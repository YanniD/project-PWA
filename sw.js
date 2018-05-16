const staticAssets = [
    "index.html",
    "result.html",
    "manifest.json",
];

self.addEventListener('install',async event =>{
    const cache = await caches.open("tdee-static-v2");
    return cache.addAll(staticAssets);
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(resp) {
            return resp || fetch(event.request).then(function(response) {
                return caches.open('tdee-static-v2').then(function(cache) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});

self.addEventListener('activate',function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(cacheNames.map(function (thisCacheName){
                    if(thisCacheName !== 'tdee-static-v2'){
                        console.log("cache not similar , going to delte ");
                        return caches.delete(thisCacheName)
                    }
                }

            ))

        })
    )
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}