const _ = require('lodash');

module.exports = function romcomroutes(server) {
    server.route({
        method: 'GET',
        path: '/romcoms',
        handler: function(request, h) {
            var romcoms = require('./../data/rom-coms.movies.json');
            return romcoms
        }
    });

    server.route({
        method: 'GET',
        path: '/romcoms/year/{year}',
        handler: function(request, h) {
            var romcoms = require('./../data/rom-coms.movies.json');
            var year = request.params.year;

            var returnYears = _.filter(romcoms, function(e) {
                return e.year_released == year;
            });

            if(returnYears.length <= 0) {
                return [ ];
            }

            return returnYears;
        }
    });

    server.route({
        method: 'GET',
        path: '/romcoms/rating/{rating}',
        handler: function(request, h) {
            var romcoms = require('./../data/rom-coms.movies.json');
            var rating = request.params.rating.toUpperCase();

            var returnRatings = _.filter(romcoms, function(e) {
                return e.rating == rating;
            });

            if(returnRatings.length <= 0) {
                if(rating == 'G' || rating == 'PG' || rating == 'PG-13' || rating == 'R') {
                    return [ ];
                }
                return { error: "The rating must be in the correct format: G, PG, PG-13, R" };
            }

            return returnRatings;
        }
    });

    server.route({
        method: 'GET',
        path: '/romcoms/title/{title}',
        handler: function(request, h) {
            var romcoms = require('./../data/rom-coms.movies.json');
            var movieTitle = request.params.movieTitle;

            var returnTitles = _.filter(romcoms, function(e) {
                return e.movie_title == movieTitle;
            });

            if(returnTitles.length <= 0) {
                return [ ];
            }
            
            return returnTitles;
        }
    });

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