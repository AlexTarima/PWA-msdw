var urlList = [
    '/',
    '/css/fishcreek.css',
    '/images/askthevet.gif',
    '/images/fishcreeklogo.gif',
    '/images/home.gif',
    '/images/services.gif',
    '/askvet.html',
    '/favicon.ico',
    '/index.html',
    '/services.html'
]

self.addEventListener('install', event => {
    console.log(`SW: ${event.type} even fired`)
    event.waitUntil(
        caches.open('pwa-learn-cache')
        .then(cache => {
            console.log('SW: Cache Opened')
            return cache.addAll(urlList)
        })
        .catch(error => {
            console.error(error)
        })

    )
})

self.addEventListener('fetch', event => {
    console.log(`SW: ${event.type} ${event.request.url}`)
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    console.log(`SW: Return Cache ${event.request.url}`)
                    return response
                }
                console.log(`SW: Return Network ${event.request.url}`)
                return fetch(event.request)
            })
    )
})