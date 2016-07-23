(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('movieController', movieController);

    movieController.$inject = ['movieService'];

    /* @ngInject */
    function movieController(movieService) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() {
        }
    }
})();