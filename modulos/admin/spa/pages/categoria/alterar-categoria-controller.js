(function() {

	'use strict';

	angular.module('alterarCategoriaController',['ngTable'])

	.controller('alterarCategoriaController', alterarCategoriaController);

	alterarCategoriaController.$inject = ['$http','$rootScope','$scope','$location','$routeParams'];

	function alterarCategoriaController($http, $rootScope, $scope, $location, $routeParams){

		var vm = this;

		console.log("routeParams",$routeParams);

		vm.voltar = function(){
			$location.path("/categoria");
		};

		vm.salvar = function(){
			$http({
				url: "/apirest/admin/categoria/alterar",
				method: "POST",
				data: {nome: vm.nome, cor: vm.cor, fa_icone: vm.fa_icone}
			}).then(function(response){
				vm.resposta = response;
				vm.voltar();
			});
		};

	}

})();
