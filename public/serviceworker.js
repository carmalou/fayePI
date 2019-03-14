self.oninstall = function() {
    caches.open('fayeFrontEndV1').then(function(cache) {
        cache.addAll([
            '/',
            'index.html',
            "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
            "https://code.jquery.com/jquery-3.3.1.slim.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
            "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        ])
        .then(function() {
            // .add() doesn't return a response
            console.log('added file');
        })
        .catch(function(err) {
            console.log(err);
        });
    })
    .catch(function(err) {
        console.log('err ', err);
    })
}

self.onactivate = function(event) {
    console.log('sw is up and running!');
}

self.onfetch = function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(cachedFiles) {
            if(cachedFiles) {
                return cachedFiles;
            } else {
                return fetch(event.request);
            }
        })
    );
}
