self.oninstall = function() {
    console.log('install!');
    caches.open('fayeFrontEnd').then(function(cache) {
        console.log('opened cache');
        cache.add('index.html')
        .then(function() {
            // .add() doesn't return a response
            console.log('added file');
        })
        .catch(function(err) {
            console.log(err);
        });
    })
}

self.onfetch = function(request) {
    // we aren't fetching anything from the cache, just logging
    console.log('hello from line 18!');
    console.log(request);

    return fetch(request);
}