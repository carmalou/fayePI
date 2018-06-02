const _ = require('lodash');

module.exports = function romcomroutes(server) {
    server.route({
        method: 'GET',
        path: '/nobelprize',
        handler: function(request, h) {
            var romcoms = require('./../data/nobelprize.json');
            return romcoms
        }
    });

    server.route({
        method: 'GET',
        path: '/nobelprize/year/{year}',
        handler: function(request, h) {
            var prizes = require('./../data/nobelprize.json');
            var year = request.params.year;

            var returnYears = _.filter(prizes, function(e) {
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
        path: '/nobelprize/category/{category}',
        handler: function(request, h) {
            var prizes = require('./../data/nobelprize.json');
            var category = request.params.category;

            var returnCategories = _.filter(prizes, function(e) {
                return e.category == category;
            });

            if(returnCategories.length <= 0) {
                return [ ];
            }

            return returnCategories;
        }
    });

    server.route({
        method: 'GET',
        path: '/nobelprize/laureateLastName/{laureateLastName}',
        handler: function(request, h) {
            var prizes = require('./../data/nobelprize.json');
            var name = request.params.laureateLastName;

            var returnNames = _.filter(prizes, function(e) {
                var tmp = e.laureates.filter(function(f) {
                    return f.surname == name;
                });

                return tmp.length > 0;
            });

            if(returnNames.length <= 0) {
                return [ ];
            }

            return returnNames;
        }
    });

    server.route({
        method: 'GET',
        path: '/nobelprize/laureateFirstName/{laureateFirstName}',
        handler: function(request, h) {
            var prizes = require('./../data/nobelprize.json');
            var name = request.params.laureateFirstName;

            var returnNames = _.filter(prizes, function(e) {
                var tmp = e.laureates.filter(function(f) {
                    return f.firstname == name;
                });

                return tmp.length > 0;
            });

            if(returnNames.length <= 0) {
                return [ ];
            }

            return returnNames;
        }
    });

    
}