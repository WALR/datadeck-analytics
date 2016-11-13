(function() {
    'use strict';

    function Datagoogle($http, $q) {
        return {
            name: 'datagoogle',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/datagoogle/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.datagoogle')
        .factory('Datagoogle', Datagoogle);

    Datagoogle.$inject = ['$http', '$q'];

})();
