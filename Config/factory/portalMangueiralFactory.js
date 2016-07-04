(function(){
  'user strict';

  angular.module('portalMangueiralFactory',[])
  .factory('UserService', [function () {
    return {
      isLogged: false,
      userName: ''
    };
  }]);
})();
