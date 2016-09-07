(function() {
	'use strict';

	angular.module('moduloBuscarController',['ngAnimate', 'ui.bootstrap', 'ngFileUpload', 'ngImgCrop','ngAnimate'])

	.controller('buscarController', buscarController);

	buscarController.$inject = ['$http','$rootScope','$scope','INCLUDES', 'ArrayServices', 'Upload', '$location','$route'];
	function buscarController($http, $rootScope, $scope, INCLUDES, ArrayServices, Upload, $location, $route){

		var vm = this;


	}

})();
