(function() {

	'use strict';

	angular.module('inserirCategoriaController',['ngTable'])

	.controller('inserirCategoriaController', inserirCategoriaController);

	inserirCategoriaController.$inject = ['$http','$rootScope','$scope','$location'];

	function inserirCategoriaController($http, $rootScope, $scope, $location){

		var vm = this;

		vm.voltar = function(){
			$location.path("/categoria");
		};

		vm.salvar = function(){
			$http({
				url: "/apirest/admin/categoria/inserir",
				method: "POST",
				data: {nome: vm.nome, cor: vm.cor, fa_icone: vm.fa_icone}
			}).then(function(response){
				vm.resposta = response;
				vm.voltar();
			});
		};

	}

})();
