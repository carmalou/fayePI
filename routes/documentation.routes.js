module.exports = function(server) {
    console.log('I AM HERE');

    // server.route({
    //     method: '*',
    //     path: '/{param*}',
    //     handler: function (request, h) {
    //         console.log(request.headers.referer);
    //     if(request.headers.referer.split(':')[0] == "http"){
    //         h.redirect('https://fayepi.herokuapp.com' + this.params.path);
    //     } else {
    //         h.continue();
    //     }
    //     }  
    // });

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public',
                index: ['index.html']
            }
        }
    });
}