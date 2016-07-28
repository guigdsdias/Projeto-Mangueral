(function(){
  angular.module('cadastroUsuarioELoginModule', [])
  .controller('cadastroUsuarioELoginController',cadastroUsuarioELoginController);

  cadastroUsuarioELoginController.$inject = ['$scope', '$rootScope', '$http', 'UserService'];

  function cadastroUsuarioELoginController($scope, $rootScope, $http, UserService) {
    var vm = this;

    vm.usuario  = {nome: '', sobreNome: '', email: '', senha: ''};

    vm.endereco = {quadra: '', rua: '', complemento: ''};

    vm.telefone = {residencial: '', celular: ''};

    vm.quadras  = [];
    vm.ruas     = [];
    vm.numeros  = [];

    (function () {
      numeroEndereco();
    })();

    function numeroEndereco() {

      //Configura quantidade de quadras
      for (var q = 0; q < 10; q++) {
        vm.quadras.push(q);
      }

      // Configura quantidade de ruas
      for (var r = 0; r < 10; r++) {
        vm.ruas.push(r);
      }
      // Configura quantidade de numeros
      for (var n = 0; n < 50; n++) {
        vm.numeros.push(n);
      }
    }

    vm.cadastrar = function () {
      buscarUsuario();
  };

function buscarUsuario(){
  var param = {usuario: vm.usuario, telefone: vm.telefone, endereco: vm.endereco};

  $http.post('/apirest/admin/categoria/cadastrar_usuario', param)
  .then(function(response){
    console.log('-------------------------');
    console.log(response);
  });

}


}
})();
