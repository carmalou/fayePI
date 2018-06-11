const _ = require('lodash');

module.exports = function population1950Routes(server) {
    server.route({
        method: 'GET',
        path: '/population/decade/1950',
        handler: function(request, h) {
            var population = require('./../data/population-1950.json');
            return population
        }
    });

    server.route({
        method: 'GET',
        path: '/population/decade/1950/year/{year}',
        handler: function(request, h) {
            var population = require('./../data/population-1950.json');
            var year = request.params.year;

            var returnYears = _.filter(population, function(e) {
                return e.year == year;
            });

            if(returnYears.length <= 0) {
                return [ ];
            }

            return returnYears;
        }
    });

    server.route({
        method: 'GET',
        path: '/population/decade/1950/age/{age}',
        handler: function(request, h) {
            var population = require('./../data/population-1950.json');
            var age = request.params.age;

            var returnAge = _.filter(population, function(e) {
                return e.age == age;
            });

            if(returnAge.length <= 0) {
                return [ ];
            }

            return returnAge;
        }
    });
}