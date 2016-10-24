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

function _lastFive(_id){
            questionService.get({id:_id}).then(function (success) {
            vm.questions = data.text;
        }
);}

    function init() {

    }
}
