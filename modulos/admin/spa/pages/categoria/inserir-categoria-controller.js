(function() {

	'use strict';

	angular.module('inserirCategoriaController',['ngTable'])

	.controller('inserirCategoriaController', inserirCategoriaController);

	inserirCategoriaController.$inject = ['$http','$rootScope','$scope'];

	function inserirCategoriaController($http, $rootScope, $scope){

		var vm = this;

		$http({
			url: "spa/resources/fontawesome.json",
			method: "GET"
		}).then(function(response){
			vm.listaIcones = (response.data);
		});

	}

})();
