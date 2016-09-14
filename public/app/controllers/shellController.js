angular.module('angularSPA').controller('shellController', ShellController);

ShellController.$inject = ['$rootScope', '$route'];
function ShellController($rootScope, $route) {
    angular.element(document).ready(function () {
        $route.reload();
    });
}