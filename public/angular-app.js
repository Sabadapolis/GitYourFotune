angular.module('angularSPA', ['ngRoute', 'ngMaterial']);

AngularAppConfiguration.$inject = ['$routeProvider', '$locationProvider'];
angular.module('angularSPA').config(AngularAppConfiguration);

function AngularAppConfiguration($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/app/views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        });

    //Remove the need for the '#' in the URL.
    $locationProvider.html5Mode(true);
}