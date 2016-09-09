(function() {
	'use strict';

	angular.module('moduloIndexController',[])

	.controller('indexController', indexController);

	indexController.$inject = ['$http','$rootScope','$location','$scope','PARAMS','UserService','INCLUDES', 'usuarioService', 'autenticacaoService'];

	function indexController($http, $rootScope, $location, $scope, PARAMS, UserService, INCLUDES, usuarioService, autenticacaoService){
		var vm = this;

		vm.nomeUsuario = "";

		vm.email	=	"";
		vm.senha	= "";

		vm.includes = PARAMS.index.includes;
		vm.includes = INCLUDES.index.files;


		vm.logado = false;

		// ----------------- Inicializa a tela -----------------

		(function (){
			statusLoginFacebook();
		})();

		// ----------------- Login Normal ----------------------
		vm.entrar = function () {

			if(vm.email && vm.senha){
				if(autenticacaoService.autenticacao(vm.nome, vm.senha)){
					console.log(response);
					vm.logado = UserService.isLogged = true;
					var usr = localStorage.get('ptMgDadoUsuario');
					console.log(usr);
					vm.nomeUsuario	 = UserService.userName = usr;

				}
			} else {
				console.log('false');
				return false;
			}

		};

		// ----------------- Login do facebook -----------------
		vm.loginFacebook = function (){
			FB.login(function(response){
				console.log(response);

				var token = response.authResponse.access_token;

				FB.api('/me', 'get', { access_token: token, fields: 'id,name,gender,picture,last_name,email' }, function(response) {
					console.log(response);

					var usuario = response;

				 	$rootScope.$apply(function() {

						//Verifica se Usuario já esta cadastrado
						usuarioService.getUsuarioEmail( response.email )
						.success(function (response){
							console.log(response);

							if(response === 'false'){//Se false usuario não é cadastrado
								console.log('cadastrando');
								usuarioService.cadastrar(usuario.name, usuario.last_name, usuario.email, 'facebook', 1)
								.success(function (response){
									console.log(response);
									gerarToken(usuario.email, 'facebook');

								});

							} else if( !response.usr_cdt_face ){
								console.log('alterando');
								usuarioService.alterar(response.usr_nm, response.usr_sbnm, response.usr_email, reseponse.usr_sn, 1, response.usr_cdt_google, response.id_usr)
			          .success(function (response){
			            console.log('-------------------------');
			            console.log(response);

			          });

							} else {
								console.log('gerando token');
								gerarToken( usuario.email, 'facebook' );
							}

						});

				 });
				});

			},{scope:'public_profile,email'});
		};

		// ----------------- Logout do facebook -----------------
		vm.logoutFacebook = function (){
			FB.logout(function(response) {
				console.log(response);
	    	$rootScope.$apply(function() {
						vm.logado = UserService.isLogged = false;

	    	});
	  	});
		};

		// ----------------- Verifica status do facebook -----------------
		function statusLoginFacebook () {
				FB.Event.subscribe('auth.authResponseChange', function(res) {
					// var token = res.authResponse.access_toke;
					console.log(res);
					if (res.status === 'connected') {
						infoUsuarioFacebook();

					} else {
						UserService.isLogged = false;

					}

	    	});
		}

		// ----------------- recupera informacoes do facebook -----------------
		function infoUsuarioFacebook (token){
			FB.api('/me', 'get', { access_token: token, fields: 'id,name,gender,picture,email' }, function(response) {
			 $rootScope.$apply(function() {
				 	vm.fotoFacebook	 = response.picture.data.url;
					vm.nomeUsuario	 = UserService.userName = response.name;
					vm.logado				 = UserService.isLogged = true;
					$location.path('/home');
			 });
		 	});
		}

		// ----------------- Verifica status do facebook -----------------
		vm.cadastrar = function cadastrar () {
			$location.path('/cadastrese');
		};

		function gerarToken(email, senha){
			autenticacaoService.gerarToken(email, senha)
			.success(function (response){
				console.log(response);
			})
			.error(function (response){
				console.log(response);
			});
		}

}
})();
