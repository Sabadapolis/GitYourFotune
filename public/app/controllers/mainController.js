angular.module('angularSPA').controller('mainController', MainController);
MainController.$inject = ['questionService', '$mdDialog'];
function MainController(questionService, $mdDialog) {
    var vm = this;

    vm.askEightBall = _askEightBall;
    vm.answer = null;

    init();

    ////////////

    function _askEightBall() {
        questionService.put({text: vm.question}).then(function(success){
            vm.answer = success.data;

            $scope.$watch('vm.question', function(newValue, oldValue){
                if(newValue === "")
                return("!vm.questionService");
            });
        });
    }

    function init(){
        
    }
}
