(function (){
  "use strict";

  angular.module('cadastroUsuarioELoginModule')

  .service('usuarioService', usuarioService)
  .service('autenticacaoService', autenticacaoService)
  .service('telefoneService', telefoneService)
  .service('enderecoService', enderecoService);

  usuarioService.$inject = ['$http'];
  autenticacaoService.$inject = ['$http'];
  telefoneService.$inject = ['$http'];
  enderecoService.$inject = ['$http'];

  function usuarioService($http){

    var caminho = '/apirest/admin/cadastroELogin';

    return {
      cadastrar: function(nome, sobreNome, email, senha, tipoCadastro){
        return $http.post(caminho + '/cadastrar_usuario', {usuario: {nome: nome, sobreNome: sobreNome, email: email, senha: senha}, tipoCadastro: tipoCadastro});
      },
      alterar: function(nome, sobreNome, email, senha, isFace, isGoogle, id_usr){
        return $http.post(caminho + '/alterar_usuario', {usuario:{nome: nome, sobreNome: sobreNome, email: email, senha: senha, isFace: isFace, isGoogle: isGoogle, id_usr: id_usr}});
      },
      excluir: function (id_usr){
        return $http.get(caminho + '/excluir', {params: {id_usr: id_usr}});
      },
      getUsuarioId: function (id_usr){
        return $http.get(caminho + '/getUsuario', {params: {id_usr: id_usr}});
      },
      getUsuarioEmail: function (email){
        return $http.get(caminho + '/getUsuarioEmail', {params: {email: email}});
      }
    };

  }

  function telefoneService(){

    return {
      cadastrar: function (){},
      alterar: function (){},
      excluir: function (){},
      getTelefone: function (){}
    };
  }

  function enderecoService(){

    return {
      cadastrar: function (){},
      alterar: function (){},
      excluir: function (){},
      getTelefone: function (){}
    };
  }

  function autenticacaoService($http){
    var caminho = '/apirest/admin/cadastroELogin';

    return {
      gerarToken: function (nome, chave){
        return $http.post(caminho + '/gerarToken', {nome: nome, chave: chave});

      },

      autenticacao: function (email, senha){

         $http.post(caminho + '/autenticar_usuario', {email: email, senha: senha})
         .success(function (response){
           return gerenciarSessao(response.token, response.usuario);

         }).error(function (response){
           return false;
         });

      },

      excluir: function (){},

      getTelefone: function (){}
    };
  }

  function gerenciarSessao(token, usuario){
    if (typeof(Storage) !== "undefined") {
      window.localStorage.setItem('dadosToken', token);
      window.localStorage.setItem('ptMgDadoUsuario', usuario);
      return true;
    }
    console.log('versão inválida');
  }

})();
