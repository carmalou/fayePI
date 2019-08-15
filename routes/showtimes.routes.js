const _ = require('lodash');

module.exports = function showtimes(server) {
    server.route({
        method: 'GET',
        path: '/showtimes',
        handler: function(request, h) {
            var romcoms = require('./../data/showtimes.json');
            return romcoms;
        }
    })

    server.route({
        method: 'GET',
        path: '/showtimes/currentweek',
        handler: function(request, h) {
            var romcoms = require('./../data/showtimes.json');
            return romcoms;
        }
    })

    server.route({
        method: 'GET',
        path: '/showtimes/getdescription/{id}',
        handler: function(request, h) {
            var romcoms = require('./../data/showtimes.json');
            var responseobj = {
                id: 0,
                movie_title: "",
                movie_description: "",
                rating: "",
                movie_pic: "",
                showtimes: ""
            };

            var returnMovie = _.find(romcoms, function(movie) {
                return movie.id == request.params.id;
            });

            return _.pick(returnMovie, Object.keys(responseobj));


        }  
    })

    server.route({
        method: 'GET',
        path: '/showtimes/getbytime',
        handler: function(request, h) {
            var romcoms = require('./../data/showtimes.json');
            

            return _.sortBy(romcoms, []);
        }
    })
}