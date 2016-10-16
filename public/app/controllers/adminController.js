angular.module('angularSPA').controller('adminController', AdminController);

AdminController.$inject = ['answerService', 'questionService', '$mdDialog'];
function AdminController(answerService, questionService, $mdDialog) {
    var vm = this;

    vm.answers = [];
    vm.questions = [];

    vm.setAnswerPublish = _setAnswerPublish;
    vm.setQuestionPublish = _setQuestionPublish;
    vm.addQuestionClicked = _addQuestionClicked;
    vm.addAnswerClicked = _addAnswerClicked;
    vm.deleteQuestion = _deleteQuestion;
    vm.deleteAnswer = _deleteAnswer;

    init();

    ////////////

    function _setAnswerPublish(answer, newValue) {
        answer.isPublished = newValue;
        answerService.post(answer);
    }

    function _setQuestionPublish(question, newValue) {
        question.isPublished = newValue;
        questionService.post(question);
    }

    function _addQuestionClicked() {
        var questionPrompt = $mdDialog.prompt()
        .title('Add A Question')
        .placeholder('Type Question Here')
        .ariaLabel('Type Question Here')
        .ok('Add Question')
        .cancel('Cancel');

        $mdDialog.show(questionPrompt).then(function (question) {
            questionService.put({question:question}).then(function () {
                init();
            });
        });
    }

        function _addAnswerClicked() {
        var answerPrompt = $mdDialog.prompt()
        .title('Add an Anwer')
        .placeholder('Type Answer Here')
        .ariaLabel('Type Answer Here')
        .ok('Add Answer')
        .cancel('Cancel');

        $mdDialog.show(answerPrompt).then(function (answer) {
            answerService.put({text:answer}).then(function () {
                init();
            });
        });
    }

function _deleteQuestion(_id){
    questionService.delete({id:_id}).then(function(success){
        init();
    });
}

function _deleteAnswer(_id){
    answerService.delete({id:_id}).then(function(success){
        init();
    });
}
    function init() {
        answerService.get().then(function (data) {
            vm.answers = data.data;
        });
        questionService.get().then(function (data) {
            vm.questions = data.data;
        });
    }
}

