const Hapi = require('hapi');
const _ = require('lodash');

const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.PORT ? '0.0.0.0' : 'localhost'
});

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, h) {
        return 'Welcome to FayePI! ';
    }
});

server.route({
    method: 'GET',
    path: '/romcoms',
    handler: function(request, h) {
        var romcoms = require('./data/rom-coms.movies.json');
        return romcoms
    }
});

server.route({
    method: 'GET',
    path: '/romcoms/year/{year}',
    handler: function(request, h) {
        var romcoms = require('./data/rom-coms.movies.json');
        var year = request.params.year;

        var returnYears = _.filter(romcoms, function(e) {
            return e.year_released == year;
        });

        return returnYears;
    }
});