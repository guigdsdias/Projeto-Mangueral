(function() {
	'use strict';

	angular.module('moduloIndexController',[])

	.controller('indexController', indexController);

	indexController.$inject = ['$http','$rootScope','$scope','INCLUDES'];

	function indexController($http, $rootScope, $scope, INCLUDES){
		var vm = this;

		vm.teste = "Teste indexController";

		vm.includes = INCLUDES.index.files;


	}

})();
