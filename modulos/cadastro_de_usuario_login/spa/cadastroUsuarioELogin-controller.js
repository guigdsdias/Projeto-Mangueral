(function(){
  angular.module('cadastroUsuarioELoginModule', [])
  .controller('cadastroUsuarioELoginController',cadastroUsuarioELoginController);

  cadastroUsuarioELoginController.$inject = ['$scope', '$rootScope', '$http', 'UserService'];

  function cadastroUsuarioELoginController($scope, $rootScope, $http, UserService) {
    var vm = this;

    vm.abaEntrar = true;

    vm.nome = '';
    vm.ultimoNome = '';
    vm.email = '';
    vm.senha = '';

    vm.trocaAba = function (aba) {
      console.log(aba);
      vm.abaEntra = aba === 1 ? false : true;

    };

    vm.login = function () {

    };

    vm.cadastrar = function () {

    };

    vm.login = function () {

      var config = {};

      $http(config)
      .success(function (data, status, headers, config) {
        if(data.status){
          UserService.isLogged = true;
          UserService.userName = data.username;
        } else {
          UserService.isLogged = false;
          UserService.userName = '';
        }

      })
      .error(function (data, status, headers, config){
        UserService.isLogged = false;
        UserService.userName = '';
      });
    };

  }
})();
