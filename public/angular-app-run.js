
AngularAppRunConfiguration.$inject = ['$rootScope', '$location', '$routeParams','$route', '$cookies'];

angular.module('angularSPA').run(AngularAppRunConfiguration);
function AngularAppRunConfiguration($rootScope, $location, $routeParams, $route, $cookies) {
    $rootScope.$on('$routeChangeStart', function (scope, next, current) {
        if (next.$$route.authRequired) {
             if (!$cookies.get('access-token')){
                 $location.path('/login');
             }
        }
    });

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = $route.current.title;
    });
}
