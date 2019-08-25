const Hapi = require('hapi');
const documentation = require('./routes/documentation.routes.js');
const romcoms = require('./routes/romcoms.routes.js');
const nobelprizes = require('./routes/nobelprize.routes.js');
const population1950 = require('./routes/population-1950.routes.js');
const showtimes = require('./routes/showtimes.routes.js');
const staledata = require('./routes/staledata.routes.js');

const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.PORT ? '0.0.0.0' : 'localhost',
    routes: {
        cors: true
    }
});

const init = async () => {
    await server.register(require('inert'));
    await server.register(require('hapi-require-https'));
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);

    documentation(server);
    romcoms(server);
    nobelprizes(server);
    population1950(server);
    showtimes(server);
    staledata(server);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});



init();