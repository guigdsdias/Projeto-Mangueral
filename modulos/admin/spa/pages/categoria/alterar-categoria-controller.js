(function() {

	'use strict';

	angular.module('alterarCategoriaController',['ngTable'])

	.controller('alterarCategoriaController', alterarCategoriaController);

	alterarCategoriaController.$inject = ['$http','$rootScope','$scope','$location','$routeParams'];

	function alterarCategoriaController($http, $rootScope, $scope, $location, $routeParams){

		var vm = this;

		vm.voltar = function(){
			$location.path("/categoria");
		};

		$http({
			url: "/apirest/admin/categoria",
			method: "GET",
			params:{id:$routeParams.id} // recupera o id da url (router)
		}).then(function(response){
			vm.nome = response.data[0].nome;
			vm.cor = {cor: response.data[0].cor, texto: null};
			vm.id = response.data[0].id;
			vm.fa_icone = response.data[0].icone;
		});

		vm.salvar = function(){
			$http({
				url: "/apirest/admin/categoria/alterar",
				method: "POST",
				data: {id: $routeParams.id ,nome: vm.nome, cor: vm.cor.cor, fa_icone: vm.fa_icone}
			}).then(function(response){
				vm.resposta = response;
				vm.voltar();
			});
		};

	}

})();
