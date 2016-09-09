(function(){
  angular.module('cadastroUsuarioELoginModule', [])
  .controller('cadastroUsuarioELoginController',cadastroUsuarioELoginController);

  cadastroUsuarioELoginController.$inject = ['$scope', '$rootScope', '$http', 'usuarioService', '$location'];

  function cadastroUsuarioELoginController($scope, $rootScope, $http, usuarioService, $location) {
    var vm = this;

    vm.nome = '';
    vm.sobreNome = '';
    vm.email = '';
    vm.senha = '';
    vm.tipoCadastro = 0;

    vm.cdSenha = true;

    vm.cadastrar = function () {

      usuarioService.getUsuarioEmail(vm.email)
      .success(function (response){
        console.log(response);

        if(response === 'false'){ // Se usuario não estiver cadastrado

          usuarioService.cadastrar(vm.nome, vm.sobreNome, vm.email, vm.senha, vm.tipoCadastro)
          .success(function(response){
            console.log('-------------------------');
            console.log(response);

          });

          // Se usuário estiver cadastrado pelo facebook ou google e não foi cdastrado pelo app
        } else if(response.usr_cdt_app != 1 && (response.usr_cdt_face == 1 || response.usr_cdt_google == 1) ){

          usuarioService.alterar(vm.nome, vm.sobreNome, vm.email, vm.senha, response.usr_cdt_face, response.usr_cdt_google, response.id_usr)
          .success(function (response){
            console.log('-------------------------');
            console.log(response);

          });

        }else {
          console.log('Usuario já cadastrado.');
        }

      });

    };

  }

})();
