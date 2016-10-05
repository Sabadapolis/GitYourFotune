angular.module('angularSPA').service('eightballService', EightballService);

AnswerService.$inject = ['dal'];
function EightballService(dal) {
    var self = this;

    self.get = _get;
    self.getOne = _getOne;
    self.put = _put;
    self.post = _post;
    self.delete = _delete;

    ////////////

    function _post(data) {
        return dal.ajaxRequest('answer', 'POST', data);
    }
}