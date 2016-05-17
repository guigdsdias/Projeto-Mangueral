(function() {
	'use strict';
	
	angular.module('moduloFeatureController',[])

	.controller('featureController', featureController);

	featureController.$inject = ['$http','$rootScope','$scope'];

	function featureController($http, $rootScope, $scope){
		var vm = this;
		
	}
})();