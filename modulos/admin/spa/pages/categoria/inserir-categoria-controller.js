(function() {

	'use strict';

	angular.module('inserirCategoriaController',['ngTable'])

	.controller('inserirCategoriaController', inserirCategoriaController);

	inserirCategoriaController.$inject = ['$http','$rootScope','$scope'];

	function inserirCategoriaController($http, $rootScope, $scope){

		var vm = this;

/*		$http({
			url: "http://localhost/apirest/admin/categoria",
			method: "GET"
		}).then(function(response){

		});
*/
	}

})();
