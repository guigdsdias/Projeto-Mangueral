(function(){
  'user strict';

  angular.module('PortalMangueiralFactory',[])
  .factory('UserService', [function () {
    return {
      isLogged: false,
      userName: ''
    };
  }]);
})();
