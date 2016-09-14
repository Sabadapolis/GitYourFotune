angular.module('angularSPA').controller('mainController', MainController);

MainController.$inject = ['testDataService'];
function MainController(testDataService){
    var vm = this;

    vm.currentTime = '';

    init();

    ////////////

    function init(){
        testDataService.getTime().then(function(data){
            vm.currentTime = data.data;
        });
    }
}