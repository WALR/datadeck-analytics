(function() {
    'use strict';

    function Datagoogle($stateProvider) {
        $stateProvider.state('datagoogle index', {
            url: '/google-search/',
            templateUrl: 'datagoogle/views/index.html'
        }).state('datagoogle circles example', {
            url: '/datagoogle/example/:circle',
            templateUrl: 'datagoogle/views/example.html'
        });
    }

    angular
        .module('mean.datagoogle')
        .config(Datagoogle);

    Datagoogle.$inject = ['$stateProvider'];

})();
