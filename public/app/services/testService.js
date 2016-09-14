TestDataService.$inject = ['dal'];
angular.module('angularSPA').service('testDataService', TestDataService);

function TestDataService(dal) {
    var self = this;

    self.getTime = _getTime;

    ////////////

    function _getTime() {
        return dal.ajaxRequest('test', 'GET');
    }
}