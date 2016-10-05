angular.module('angularSPA').controller('loginController', LoginController);

LoginController.$inject = ['authService', '$mdToast', '$location'];
function LoginController(authService, $mdToast, $location){
    var vm = this;

    vm.userName = '';
    vm.password = '';

    vm.authenticate = _authenticate;

    init();

    ////////////

    function _authenticate() {
        authService.authenticate(vm.userName, vm.password).then(function(success){
            $mdToast.showSimple('Authentication Success!');
            $location.path('/');
        }, function(error){
            $mdToast.showSimple('Authentication Error!');
        });
    }

    function init(){
        
    }
}