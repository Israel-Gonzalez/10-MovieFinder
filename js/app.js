(function() {
    'use strict';

    angular
        .module('movieApp', [
            'ui.router'
        ])
        .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
            .state('search', {
                url: '/search',
                templateUrl: 'templates/search.html',
                controller: 'movieController as vm'
            })
            .state('details', {
            	url: '/details',
            	templateUrl: 'templates/details.html',
            	controller: 'movieController as vm'
            })
        }])
})();
