angular.module('angularSPA').controller('adminController', AdminController);

AdminController.$inject = ['answerService'];
function AdminController(answerService){
    var vm = this;

    vm.answers = [];

    vm.setAnswerPublish = _setAnswerPublish;

    init();

    ////////////

    function _setAnswerPublish(answer, newValue)
    {
        answer.isPublished = newValue;
        answerService.post(answer);
    }

    function init(){
        answerService.get().then(function(data){
            vm.answers = data.data;
        });
    }
}