module.exports = function stale(server) {
    var d = new Date();
    d.setMinutes(d.getMinutes() - 10);

    var s = 600 // 10 minutes, expressed in seconds

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

            return rez;
        },
        options: {
            cache: {
                expiresAt: 600
            }
        }
    })
}