(function() {
    'use strict';

    /* jshint -W098 */

    function DatagoogleController($scope, Global, Datagoogle, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'datagoogle'
        };

        $scope.checkCircle = function() {
            Datagoogle.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.datagoogle')
        .controller('DatagoogleController', DatagoogleController);

    DatagoogleController.$inject = ['$scope', 'Global', 'Datagoogle', '$stateParams'];

})();
