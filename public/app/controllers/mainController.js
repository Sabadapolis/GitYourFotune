angular.module('angularSPA').controller('mainController', MainController);

MainController.$inject = ['eightballService', '$mdDialog'];
function MainController(eightballService, $mdDialog) {
    var vm = this;

    vm.askEightBall = _askEightBall;

    init();

    ////////////

    function _askEightBall() {
        var eightBallPrompt = $mdDialog.prompt()
            .title('Ask your question, Child.')
            .placeholder('Ask Question')
            .ariaLabel('Ask Question')
            .ok('I am ready Oh Great 8 Ball')
            .cancel('No... I am not ready..');
    }
}
