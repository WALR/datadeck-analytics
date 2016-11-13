(function() {
    'use strict';

    function Dataface($stateProvider) {
        $stateProvider.state('dataface index', {
            url: '/facebook/',
            templateUrl: 'dataface/views/index.html'
        }).state('dataface circles example', {
            url: '/dataface/example/:circle',
            templateUrl: 'dataface/views/example.html'
        });
    }

    angular
        .module('mean.dataface')
        .config(Dataface);

    Dataface.$inject = ['$stateProvider'];

})();
