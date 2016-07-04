(function() {
	'use strict';

	angular.module('moduloHomeController',[])

	.controller('homeController', homeController);

	homeController.$inject = ['$http','$rootScope','$scope','TesteService','PARAMS'];

	function homeController($http, $rootScope, $scope, TesteService, PARAMS){

		var vm = this;

		vm.includes = PARAMS.index.includes;

		$http({
			url: "/apirest/admin/categoria",
			method: "GET"
		}).then(function(response){
			vm.listaCategoria = [];

			vm.primeiros = response.data.splice(0,4);
			vm.listaCategoria = response.data;

			// de 4 em 4 itens - preenche com mais elementos no final caso não seja múltiplo de 4
			var resto = vm.listaCategoria.length % 4;
			if (resto) {
				var qtdItensPreencherNoFinal = 4 - (resto);
				for (var i=0; i < qtdItensPreencherNoFinal; i++){
					vm.listaCategoria.push({});
				}
			}

			console.log(vm.listaCategoria);

		});
	}

})();
