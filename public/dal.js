DataAccessLayerService.$inject = ['$http', '$rootScope'];
angular.module('angularSPA').service('dal', DataAccessLayerService);

function DataAccessLayerService($http, $rootScope) {
    $rootScope.rootApiUrl = "/api/";

    function ajaxRequest(url, requestType, data) {
        return $http({
            method: requestType,
            url: $rootScope.rootApiUrl + url,
            headers: {
                'content-type': 'application/json'
            },
            data: data
        });
    }

    return {
        ajaxRequest: ajaxRequest
    };
}