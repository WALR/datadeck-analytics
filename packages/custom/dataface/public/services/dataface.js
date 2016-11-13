(function() {
    'use strict';

    function Dataface($http, $q) {
        return {
            name: 'dataface',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/dataface/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.dataface')
        .factory('Dataface', Dataface);

    Dataface.$inject = ['$http', '$q'];

})();
