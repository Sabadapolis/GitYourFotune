angular.module('angularSPA').service('questionService', QuestionService);

QuestionService.$inject = ['dal'];
function QuestionService(dal) {
    var self = this;

    self.get = _get;
    self.getOne = _getOne;
    self.put = _put;
    self.post = _post;
    self.delete = _delete;

    ////////////

    function _get() {
        return dal.ajaxRequest('question', 'GET');
    }
    function _getOne(id) {
        return dal.ajaxRequest('question/' + id, 'GET');
    }
    function _post(data) {
        return dal.ajaxRequest('question', 'POST', data);
    }
    function _put(data) {
        return dal.ajaxRequest('question', 'PUT', data);
    }
    function _delete(data) {
        return dal.ajaxRequest('question', 'DELETE', data);
    }
}