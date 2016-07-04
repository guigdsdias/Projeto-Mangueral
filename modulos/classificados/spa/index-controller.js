(function() {
	'use strict';

	angular.module('moduloIndexController',[])

	.controller('indexController', indexController);

	indexController.$inject = ['$http','$rootScope','$scope','PARAMS','UserService'];

	function indexController($http, $rootScope, $scope, PARAMS, UserService){
		var vm = this;

		vm.teste = "Teste indexController";

		vm.includes = PARAMS.index.includes;

		vm.logado = false;

		(function (){
			console.log('tessss');
			statusLoginFacebook();
		})();

		vm.loginFacebook = function (){
			FB.login(function(response){
					// Handle the response object, like in statusChangeCallback() in our demo
					// code.
			}, {scope: 'public_profile,email'});
		};

		vm.logoutFacebook = function (){
			FB.logout(function(response) {
				console.log(response);
	    	$rootScope.$apply(function() {
						vm.logado = UserService.isLogged = false;
	    	});
	  	});
		};

		function statusLoginFacebook () {
				FB.Event.subscribe('auth.authResponseChange', function(res) {
					console.log(res.status);
					if (res.status === 'connected') {
						$scope.$apply(function (){
								vm.logado = UserService.isLogged = true;
						});

						console.log(res.authResponse );
					} else {
						UserService.isLogged = false;

					}

					console.log(vm.logado);

	    	});
		}

	}

})();
