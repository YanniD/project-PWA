
const staticAssets = [
    "index.html",
    "result.html",
    "manifest.json",
    "css/materialize.min.css",
    "css/custom.css",
    "js/materialize.js",
    "js/script.js",
    "js/scriptResults.js",
    "jquery-3.1.0.min.js",
    "images/icons/favicon.ico",
];
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('tdee-static-v2').then(function(cache) {
            console.log("service worker install");
            return cache.addAll(staticAssets);
        }).catch(err => console.log(err))
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(resp) {
            return resp || fetch(event.request).then(function(response) {
                return caches.open('tdee-static-v2').then(function(cache) {

                    cache.put(event.request, response.clone());
                    console.log("service worker fetch");
                    return response;
                }).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }).catch(err => console.log(err))
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

        }).catch(err => console.log(err))
    )
});
