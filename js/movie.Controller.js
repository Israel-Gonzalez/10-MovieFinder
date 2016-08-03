(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('movieController', movieController);

    movieController.$inject = ['movieService'];

    /* @ngInject */
    function movieController(movieService) {
        var vm = this;

        vm.searchMovie = '';


        ////////////////

        vm.getMovies = function() {
            movieService.getMovies(vm.searchMovie).then(
                function(response) {
                    vm.movies = response.data;
                    console.log(response);
                },
                function(error) {
                    console.log(error);
                }
            );
        }






    };
})();
