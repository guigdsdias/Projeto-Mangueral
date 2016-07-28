(function() {
	'use strict';

	angular.module('moduloIndexController',[])

	.controller('indexController', indexController);

	indexController.$inject = ['$http','$rootScope','$location','$scope','PARAMS','UserService','INCLUDES'];

	function indexController($http, $rootScope, $location, $scope, PARAMS, UserService, INCLUDES){

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
				$http.post('/apirest/admin/categoria/autenticar_usuario', {email: vm.email, senha: vm.senha})
				.success(function (response){
					console.log(response);
					vm.logado = UserService.isLogged = true;
					vm.nomeUsuario	 = UserService.userName = response.nome;
					if (typeof(Storage) !== "undefined") {
    			console.log('suporta');
					} else {
    				console.log('náo suporta');
					}
				});


			}

		};

		// ----------------- Login do facebook -----------------

		vm.loginFacebook = function (){
			FB.login(function(response){
					// Handle the response object, like in statusChangeCallback() in our demo
					// code.
			}, {scope: 'public_profile'});
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
					if (res.status === 'connected') {
						infoUsuarioFacebook();

					} else {
						UserService.isLogged = false;

					}

	    	});
		}

		// ----------------- recupera informacoes do facebook -----------------

		function infoUsuarioFacebook (){
			FB.api('/me', function(response) {
			 console.log(response);
			 $rootScope.$apply(function() {
					 vm.nomeUsuario	 = UserService.userName = response.name;
					 vm.logado			 = UserService.isLogged = true;
					 $location.path('/home');
			 });
		 	});
		}

		// ----------------- Verifica status do facebook -----------------

		vm. cadastrar = function cadastrar () {
			$location.path('/cadastrese');
		};

}
})();
