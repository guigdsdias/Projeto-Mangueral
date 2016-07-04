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

    vm.cadastrar = function () {
      console.log('teste');
      FB.login(function(response){
          // Handle the response object, like in statusChangeCallback() in our demo
          // code.
      });
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
