AuthService.$inject = ['dal'];
angular.module('angularSPA').service('authService', AuthService);

function AuthService(dal) {
    var self = this;

    self.authenticate = _authenticate;
    self.getUserInfo = _getUserInfo;

    ////////////

    function _getUserInfo(){
        return dal.ajaxRequest('auth', 'GET');
    }

    function _authenticate(userName, password) {
        return dal.ajaxRequest('auth', 'POST', { userName: userName, password: password });
    }
}