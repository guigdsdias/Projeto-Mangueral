(function() {
	'use strict';
	
	angular.module('moduloCarouselController',[])

	.controller('carouselController', carouselController);

	carouselController.$inject = ['$http','$rootScope','$scope'];

	function carouselController($http, $rootScope, $scope){
		var vm = this;

		vm.teste = "Teste carouselController";

	}

})();