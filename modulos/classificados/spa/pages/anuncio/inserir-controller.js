(function() {
	'use strict';

	angular.module('moduloInserirController',[])

	.controller('inserirController', inserirController);

	inserirController.$inject = ['$http','$rootScope','$scope','INCLUDES'];

	function inserirController($http, $rootScope, $scope, INCLUDES){

		var vm = this;
		// vm.includes = INCLUDES.index.files;

		vm.categoria = {};
		vm.titulo = "";
		vm.descricao = "";
		vm.preço = 0;
		vm.aceitaTroca = {'codigo':'S','texto':'Sim'};
		vm.trocaPor = [{}]; // aceita troca por qual(is) categoria(s) (multiplo)
		vm.subcategoria = [{}]; // multiplo
		vm.imagens = [];

		$http.get("/apirest/admin/categoria").success(function(response){
			vm.listaCategoria = [];
			response.forEach(function(e,i,a){
				vm.listaCategoria.push({
					codigo: e.id,
					texto: e.nome,
					icone: e.icone
				});
			});

			console.log(response);

		});

	}

})();
