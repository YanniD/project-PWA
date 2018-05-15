const staticAssets = [
    '/',
    'js/jquery-3.1.0.min.js',
    'js/materialize.js',
    'js/script.js',
    'css/custom.css',
    'css/materialize.css',
    '/css/materialize.min.css',
    'index.html',
    'result.php'
];

self.addEventListener('install',async event =>{
    const cache = await caches.open("tdee-static");
    return cache.addAll(staticAssets);
});

self.addEventListener('fetch', function(event) {
   const req = event.request;
    const url = new URL(req.url);

    if(url.origin === location.origin){
        event.respondWith(cacheFirst(req));
    }
});
/*
self.addEventListener('activate',function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(cacheNames.map(function (thisCacheName){
                if(thisCacheName !== 'tdee-static'){
                    console.log("cache not similar , going to delte ");
                    return caches.delete(thisCacheName)
                }
            }

            ))
            
        })
    )
});
*/

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}
