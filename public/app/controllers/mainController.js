angular.module('angularSPA').controller('mainController', MainController);
MainController.$inject = ['questionService', '$mdDialog'];
function MainController(questionService, $mdDialog) {
    var vm = this;

    vm.askEightBall = _askEightBall;
    vm.lastFive = _lastFive;
    vm.answer = null;
    vm.questions = [];


    init();

    ////////////

    function _askEightBall() {
        if (vm.question) {
            questionService.put({ text: vm.question }).then(function (success) {
                vm.answer = success.data;
            });
        }
        else {
            vm.answer = { answer: "Ask a question" };
        }
    }

    function _lastFive() {
        questionService.get().then(function (success) {
            vm.questions = success.data.slice(0, 4);
        });
    }

    function init() {
        _lastFive();
    }
}
