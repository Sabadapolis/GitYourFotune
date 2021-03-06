angular.module('angularSPA', ['ngRoute', 'ngMaterial']);

AngularAppConfiguration.$inject = ['$routeProvider', '$locationProvider'];
angular.module('angularSPA').config(AngularAppConfiguration);

function AngularAppConfiguration($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/app/views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: '/app/views/login.html',
            controller: 'loginController',
            controllerAs: 'vm', 
            title: "Log In"
        })
        .when('/admin', {
            templateUrl: '/app/views/admin.html', 
            controller: 'adminController', 
            controllerAs: 'vm'
        });

    //Remove the need for the '#' in the URL.
    $locationProvider.html5Mode(true);
}