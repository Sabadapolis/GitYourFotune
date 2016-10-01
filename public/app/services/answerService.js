angular.module('angularSPA').service('answerService', AnswerService);

AnswerService.$inject = ['dal'];
function AnswerService(dal) {
    var self = this;

    self.get = _get;
    self.getOne = _getOne;
    self.put = _put;
    self.post = _post;
    self.delete = _delete;

    ////////////

    function _get() {
        return dal.ajaxRequest('answer', 'GET');
    }
    function _getOne(id) {
        return dal.ajaxRequest('answer/' + id, 'GET');
    }
    function _post(data) {
        return dal.ajaxRequest('answer', 'POST', data);
    }
    function _put(data) {
        return dal.ajaxRequest('answer', 'PUT', data);
    }
    function _delete(data) {
        return dal.ajaxRequest('answer', 'DELETE', data);
    }
}