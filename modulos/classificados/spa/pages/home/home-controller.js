(function() {
	'use strict';
	
	angular.module('moduloHomeController',[])

	.controller('homeController', homeController);

	homeController.$inject = ['$http','$rootScope','$scope','TesteService'];

	function homeController($http, $rootScope, $scope, TesteService){
		
		var vm = this;

		vm.teste = "Teste homeController";

		vm.uf = TesteService.get();

		console.log(vm.uf);
	}

})();