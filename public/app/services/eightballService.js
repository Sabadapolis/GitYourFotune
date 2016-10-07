angular.module('angularSPA').service('eightballService', EightballService);

AnswerService.$inject = ['dal'];
function EightballService(dal) {
    var self = this;
    
    self.post = _post;

    ////////////

    function _post(data) {
        return dal.ajaxRequest('answer', 'POST', data);
    }
}