(function() {
        'use strict';

        angular
            .module('movieApp')
            .service('movieService', movieService);

        movieService.$inject = ['$http', '$q'];

        /* @ngInject */
        function movieService($http, $q) {

            var service = {
                getMovies: getMovies
            };

            return service;
            ////////////////

            function getMovies(searchMovie) {
                var defer = $q.defer();

                // Get request from Movie API
                $http({
                    url: 'http://www.omdbapi.com/?t=' + searchMovie + '',
                    method: 'GET',
                    //dataType: 'json',
                
              

                }).then(function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);
                            console.log(response);
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
    
})();
