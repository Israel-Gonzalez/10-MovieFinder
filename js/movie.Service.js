(function() {
        'use strict';

        angular
            .module('movieApp')
            .service('movieService', movieService);

        movieService.$inject = ['$http', '$q'];

        /* @ngInject */
        function Service($http, $q) {

            var service = {
                getMovies: getMovies
            };

            return service;
            ////////////////

            function getMovies() {
                var defer = $q.defer();

                $http.get({ 'http://www.omdbapi.com/?', data })
                    .then(function(response) {
                            if (typeof response.data === 'object') {
                                defer.resolve(response);
                                console.log(response.data);
                            } else {
                                defer.reject(response);
                            }

                        },

                        // failure of getting response 
                        function(error) {
                            defer.reject(error);
                        }
                    )
                return defer.promise;
            }
        }
    }
})();
