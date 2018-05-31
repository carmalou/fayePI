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

server.route({
    method: 'GET',
    path: '/romcoms/rating/{rating}',
    handler: function(request, h) {
        var romcoms = require('./data/rom-coms.movies.json');
        var rating = request.params.rating.toUpperCase();

        var returnRatings = _.filter(romcoms, function(e) {
            return e.rating == rating;
        });

        if(returnRatings.length <= 0) {
            return "The rating must be in the correct format: G, PG, PG-13, R";
        }

        return returnRatings;
    }
});

server.route({
    method: 'GET',
    path: '/romcoms/title/{title}',
    handler: function(request, h) {
        var romcoms = require('./data/rom-coms.movies.json');
        var movieTitle = request.params.movieTitle;

        var returnTitles = _.filter(romcoms, function(e) {
            return e.movie_title == movieTitle;
        });
        
        return returnTitles;
    }
});