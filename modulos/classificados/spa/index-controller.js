(function() {
	'use strict';
	
	angular.module('moduloIndexController',[])

	.controller('indexController', indexController);

	indexController.$inject = ['$http','$rootScope','$scope','PARAMS'];

	function indexController($http, $rootScope, $scope, PARAMS){
		var vm = this;

		vm.teste = "Teste indexController";

		vm.includes = PARAMS.index.includes;

		
	}

})();