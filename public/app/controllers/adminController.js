angular.module('angularSPA').controller('adminController', AdminController);

AdminController.$inject = ['answerService', 'questionService'];
function AdminController(answerService, questionService){
    var vm = this;

    vm.answers = [];

    vm.setAnswerPublish = _setAnswerPublish;

        vm.questions = [];

    vm.setQuestionPublish = _setQuestionPublish;

    init();

    ////////////

    function _setAnswerPublish(answer, newValue)
    {
        answer.isPublished = newValue;
        answerService.post(answer);
    }

        function _setQuestionPublish(question, newValue)
    {
        question.isPublished = newValue;
        questionService.post(question);
    }

    function init(){
        answerService.get().then(function(data){
            vm.answers = data.data;
        });
        questionService.get().then(function(data){
            vm.questions = data.data;
        });
    }
}

