const Hapi = require('hapi');
const romcoms = require('./routes/romcoms.routes.js');
const nobelprizes = require('./routes/nobelprize.routes.js');

const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.PORT ? '0.0.0.0' : 'localhost',
    routes: {
        cors: true
    }
});

const init = async () => {
    await server.register(require('inert'));
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    romcoms(server);
    nobelprizes(server);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();