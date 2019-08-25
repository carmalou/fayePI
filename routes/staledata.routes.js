module.exports = function stale(server) {
    var d = new Date();
    d.setMinutes(d.getMinutes() - 10);

    var expires = new Date();
    expires.setSeconds(expires.getSeconds() - 10);

    server.route({
        method: 'GET',
        path: '/expired/data',
        handler: function(request, h) {
            var rez = h.response({ a: 1 * Math.random(), b: 2 * Math.random(), c: 3 * Math.random() });
            rez.type('application/json');
            rez.header('Date', d);
            rez.header('Expires', expires);
            rez.header('Cache-Control', 'max-age=600');

            return rez;
        }
    })
}