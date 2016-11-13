(function() {
    'use strict';

    /* jshint -W098 */

    function DatafaceController($scope, Global, Dataface, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'dataface'
        };

        $scope.checkCircle = function() {
            Dataface.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.dataface')
        .controller('DatafaceController', DatafaceController);

    DatafaceController.$inject = ['$scope', 'Global', 'Dataface', '$stateParams'];

})();
